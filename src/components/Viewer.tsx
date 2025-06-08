import * as BABYLON from "@babylonjs/core";
import SceneComponent from "./SceneComponent";
import "@babylonjs/loaders";
import React from "react";

class Viewer extends React.Component<{ file: string, scaling?: number, target?: Array<number> }> {
  private file: string;
  private scaling: number;
  private target: Array<number>;

  constructor(props: { file: string, scaling: number, target: Array<number> }) {
    super(props);
    this.file = props.file; // Save the file string in a member variable
    this.scaling = props.scaling || 1; // Default scaling to 1 if not provided
    this.target = props.target || [0, 0, 0]; // Default target to origin if not provided
  }

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

    const canvas = scene.getEngine().getRenderingCanvas();

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

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

    }).catch((error) => {
      console.error("Error loading model:", error);
    });
  };

  render() {
    return (
      <SceneComponent
        antialias
        onSceneReady={this.onSceneReady}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}

export default Viewer;