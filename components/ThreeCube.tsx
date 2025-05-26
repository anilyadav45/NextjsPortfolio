"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Cube() {
  const cubeRef = useRef<THREE.Mesh>(null);

  // Rotate cube on every frame
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#3B82F6" metalness={0.5} roughness={0.3} />
    </mesh>
  );
}

export default function ThreeCube() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} />
        <Cube />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
