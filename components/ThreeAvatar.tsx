"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function AvatarModel() {
  const { scene } = useGLTF("https://models.readyplayer.me/684318167eb5771b7d0a8760.glb");
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <primitive
      object={scene}
      ref={ref}
      scale={2.2}               // 👈 slightly smaller
      position={[0, -1.2, 0]}   // 👈 raised up
    />
  );
}

export default function ThreeAvatar() {
  return (
    <div className="w-full h-[450px] md:h-[600px] lg:h-[700px] xl:h-[700px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 35 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          <AvatarModel />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
