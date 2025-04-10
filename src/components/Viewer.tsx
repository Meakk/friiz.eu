import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const RotatingGroup = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Rotate slowly around the Y-axis
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central sphere */}
      <mesh>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#00aaff" />
      </mesh>
      {/* Snowflake arms */}
      {[...Array(6)].map((_, i) => (
        <mesh
          key={i}
          rotation={[0, 0, (i * Math.PI) / 3]}
          position={[0, 0, 0]}
        >
          <cylinderGeometry args={[0.05, 0.05, 1, 32]} />
          <meshStandardMaterial color="#00aaff" />
        </mesh>
      ))}
    </group>
  );
};

const Viewer = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <Canvas style={{ height: "200px", width: "100%" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <RotatingGroup />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default Viewer;
