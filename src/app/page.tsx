"use client";
import Experience from "@/components/ui/Experience";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
      <Canvas style={{height: "100svh"}}
        camera={{ position: [0, 0, 7], fov: 50 }}
      >
        <Experience />
      </Canvas>
  );
}
