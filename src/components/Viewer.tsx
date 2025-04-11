import React, { useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const RotatingGroup = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { camera, controls } = useThree();

  const { scene, animations } = useGLTF(process.env.PUBLIC_URL + "/assets/earth.glb");
  const { actions } = useAnimations(animations, groupRef);

  React.useEffect(() => {
    if (actions) {
      const firstAction = actions[Object.keys(actions)[0]];
      if (firstAction) {
        firstAction.timeScale = 0.01;
        firstAction.play();
      }
    }

    if (groupRef.current) {
      const box = new THREE.Box3().setFromObject(groupRef.current);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);

      if (camera instanceof THREE.PerspectiveCamera) {
        camera.position.set(center.x, center.y, center.z + maxDim * 0.9);
        camera.lookAt(center);
      }
    }
  }, [actions, camera, controls]);

  return <primitive ref={groupRef} object={scene} />;
};

const Viewer = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      style={{
        position: "fixed", // Make it fixed to the viewport
        top: 0, // Align to the top of the viewport
        right: 0, // Align to the right of the viewport
        left: "auto", // Ensure it's not aligned to the left
        width: "50vw", // Half of the viewport width
        height: "100vh", // Full viewport height
        zIndex: -1, // Ensure it appears above header and footer
        overflow: "hidden", // Prevent scrollbars
      }}
    >
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={1} />
        <RotatingGroup />
        <EffectComposer>
          <Bloom intensity={5} luminanceThreshold={0.1} luminanceSmoothing={0.2} />
        </EffectComposer>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default Viewer;
