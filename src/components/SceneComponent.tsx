import { useEffect, useRef } from "react";
import { Engine, Scene, ILoadingScreen } from "@babylonjs/core";
import logo from "../assets/friiz_logo.svg";

interface SceneComponentProps {
  antialias?: boolean;
  engineOptions?: object;
  adaptToDeviceRatio?: boolean;
  sceneOptions?: object;
  onRender?: (scene: Scene) => void;
  onSceneReady: (scene: Scene) => void;
  [key: string]: any;
}

class CustomLoadingScreen implements ILoadingScreen {
  constructor(public loadingUIText: string, public loadingUIBackgroundColor: string) {}

  public displayLoadingUI() {
    const loadingScreenDiv = document.getElementById("customLoadingScreenDiv");
    if (loadingScreenDiv) {
      loadingScreenDiv.style.display = "flex"; // Show the loading screen
    }
  }

  public hideLoadingUI() {
    const loadingScreenDiv = document.getElementById("customLoadingScreenDiv");
    if (loadingScreenDiv) {
      loadingScreenDiv.style.display = "none"; // Hide the loading screen
    }
  }
}

const SceneComponent: React.FC<SceneComponentProps> = ({ antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady, ...rest }) => {
  const reactCanvas = useRef(null);

  // set up basic engine and scene
  useEffect(() => {
    const { current: canvas } = reactCanvas;

    if (!canvas) return;

    const engine = new Engine(canvas, antialias, engineOptions, adaptToDeviceRatio);
    engine.loadingScreen = new CustomLoadingScreen("I'm loading!!", "#BB464Bcc");

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

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <canvas ref={reactCanvas} {...rest} />
      <div
        id="customLoadingScreenDiv"
        style={{
          display: "none", // Use flexbox for centering
          opacity: 0.6,
          flexDirection: "column", // Stack logo and text vertically
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "transparent", // Background color for the loading screen
          alignItems: "flex-end", // Align the content to the right
          justifyContent: "center", // Vertically center the content
          zIndex: 1000, // Ensure it appears above other elements
        }}
      >
        <img
          src={logo}
          alt="Loading..."
          style={{
            width: "50px", // Adjust the size of the logo
            height: "auto",
            padding: "5vw",
            animation: "spin 1.2s ease-in-out infinite", // Add spinning animation
          }}
        />
      </div>
    </div>
  );
};

export default SceneComponent;
