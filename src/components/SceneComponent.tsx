import { useEffect, useRef } from "react";
import { Engine, Scene } from "@babylonjs/core";

interface SceneComponentProps {
  antialias?: boolean;
  engineOptions?: object;
  adaptToDeviceRatio?: boolean;
  sceneOptions?: object;
  onRender?: (scene: Scene) => void;
  onSceneReady: (scene: Scene) => void;
  [key: string]: any;
}

const SceneComponent: React.FC<SceneComponentProps> = ({ antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady, ...rest }) => {
  const reactCanvas = useRef(null);

  // set up basic engine and scene
  useEffect(() => {
    const { current: canvas } = reactCanvas;

    if (!canvas) return;

    const engine = new Engine(canvas, antialias, engineOptions, adaptToDeviceRatio);

    engine.loadingUIBackgroundColor = "#00000000";
    engine.loadingUIText = "Loading...";

    const scene = new Scene(engine, sceneOptions);
    if (scene.isReady()) {
      onSceneReady(scene);
    } else {
      scene.onReadyObservable.addOnce((scene) => {
        onSceneReady(scene);
      });
    }

    engine.runRenderLoop(() => {
      if (typeof onRender === "function") onRender(scene);
      scene.render();
    });

    const resize = () => {
      scene.getEngine().resize();
    };

    if (window) {
      window.addEventListener("resize", resize);
    }

    return () => {
      scene.getEngine().dispose();

      if (window) {
        window.removeEventListener("resize", resize);
      }
    };
  }, [antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady]);

  return <canvas ref={reactCanvas} {...rest} />;
};

export default SceneComponent;
