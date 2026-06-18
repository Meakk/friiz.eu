import * as BABYLON from "@babylonjs/core";
import SceneComponent from "./SceneComponent";
import "@babylonjs/loaders";
import React from "react";
import { MdOutlineTouchApp } from "react-icons/md";

class Viewer extends React.Component<{ file: string, scaling?: number, target?: Array<number> }, { showHint: boolean; modelLoaded: boolean; userInteracted: boolean }> {
  private file: string;
  private scaling: number;
  private target: Array<number>;

  constructor(props: { file: string, scaling: number, target: Array<number> }) {
    super(props);
    this.file = props.file;
    this.scaling = props.scaling || 1;
    this.target = props.target || [0, 0, 0];
    this.state = { showHint: true, modelLoaded: false, userInteracted: false };
  }

  componentDidMount() {
    // Hint will show when model loads
  }

  componentWillUnmount() {
    // Cleanup if needed
  }

  hideHint = () => {
    // User has interacted - permanently hide hint
    this.setState({ showHint: false, userInteracted: true });
  };

  onSceneReady = async (scene: BABYLON.Scene) => {
    scene.getEngine().displayLoadingUI();

    scene.useRightHandedSystem = true

    scene.onBeforeRenderObservable.add(() => {
      // This will be called before each render
      const relativeOffset = 0.7;
      const absoluteOffset = relativeOffset * camera.radius * Math.tan(camera.fov / 2);
      camera.targetScreenOffset = new BABYLON.Vector2(absoluteOffset, 0);
    });

    const radius = 10;

    // This creates and positions a free camera (non-mesh)
    const camera = new BABYLON.ArcRotateCamera("Camera", 0, Math.PI / 2, radius, BABYLON.Vector3.FromArray(this.target), scene);

    //camera.viewport = new BABYLON.Viewport(0.2, 0, 1.2, 1);
    camera.lowerRadiusLimit = radius;
    camera.upperRadiusLimit = radius;

    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
    scene.animationTimeScale = 0.3;

    // This targets the camera to scene origin
    //camera.setTarget(new BABYLON.Vector3(0.000171477,-0.000747137,0.0191574));

    // This attaches the camera to the canvas
    camera.attachControl(true);

    // Babylon sets touch-action:none on the canvas, preventing scroll.
    // Override to pan-y by default so the page can scroll when not on the model.
    const canvas = scene.getEngine().getRenderingCanvas();
    if (canvas) canvas.style.touchAction = "pan-y";

    // Listen for interactions on the model
    scene.onPrePointerObservable.add((pointerInfo) => {

      if (pointerInfo.type === BABYLON.PointerEventTypes.POINTERDOWN) {
        const canvas = scene.getEngine().getRenderingCanvas();
        if (!canvas) return;
        
        const pickRay = scene.createPickingRay(
          pointerInfo.event.clientX - canvas.getBoundingClientRect().left,
          pointerInfo.event.clientY - canvas.getBoundingClientRect().top,
          BABYLON.Matrix.Identity(),
          camera
        );
        
        if (pickRay) {
          const hit = scene.pickWithRay(pickRay);
          
          if (hit && hit.hit) {
            // On model: disable scroll so rotation is smooth
            canvas.style.touchAction = "none";
            this.hideHint();
          } else {
            // Not on model: skip Babylon interaction, keep pan-y for scrolling
            pointerInfo.skipOnPointerObservable = true;
          }
        }
      } else if (pointerInfo.type === BABYLON.PointerEventTypes.POINTERUP) {
        // Restore pan-y after interaction ends
        const canvas = scene.getEngine().getRenderingCanvas();
        if (canvas) canvas.style.touchAction = "pan-y";
      }
    });

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    var gl = new BABYLON.GlowLayer("glow", scene);
    gl.intensity = 1.5;

    // Use the file member variable to load the model
    BABYLON.ImportMeshAsync("/assets/" + this.file, scene).then((result) => {
      result.meshes.forEach((mesh) => {
        mesh.scaling = new BABYLON.Vector3(this.scaling, this.scaling, this.scaling);
      });

      scene.getEngine().hideLoadingUI();

      // Model loaded - show hint permanently until user interacts
      this.setState({ modelLoaded: true });

    }).catch((error) => {
      console.error("Error loading model:", error);
    });
  };

  render() {
    return (
      <div 
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <SceneComponent
          antialias
          onSceneReady={this.onSceneReady}
          style={{ width: "100%", height: "100%" }}
        />
        
        {/* Interaction Hint Overlay */}
        {this.state.showHint && this.state.modelLoaded && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "63%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              opacity: 0.5,
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                animation: "dragLeftRight 1.5s ease-in-out infinite",
                color: "rgba(250,253,255,0.8)",
              }}
            >
              <MdOutlineTouchApp size={32} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Viewer;