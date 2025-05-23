import * as BABYLON from "@babylonjs/core";
import SceneComponent from "./SceneComponent";
import "@babylonjs/loaders";

const onSceneReady = async (scene: BABYLON.Scene) => {

  scene.getEngine().displayLoadingUI();

  // This creates and positions a free camera (non-mesh)
  const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, -20), scene);

  scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
  scene.animationTimeScale = 0.1;

  // This targets the camera to scene origin
  camera.setTarget(BABYLON.Vector3.Zero());

  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  var gl = new BABYLON.GlowLayer("glow", scene);
  gl.intensity = 2.0;

  await BABYLON.AppendSceneAsync("/startup-website/assets/earth.glb", scene);

  scene.getEngine().hideLoadingUI();
};

export default () => (
    <SceneComponent antialias onSceneReady={onSceneReady} style={{ width: "100%", height: "100%" }} />
);