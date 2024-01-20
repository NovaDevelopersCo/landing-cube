import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Office(props: any) {
  const ref = useRef<any>(null!);
  const tl = useRef<gsap.core.Timeline | undefined>(undefined);

  const scroll = useScroll();

  useFrame(() => {
    tl.current!.seek(scroll.offset * tl.current!.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    );

    
  }, []);

  const { nodes, materials } = useGLTF("./models/woodcube.glb");
  nodes.Cube.geometry.computeVertexNormals();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = scroll.offset * 4 * Math.PI;
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={ref}
      position={[0, 2, -1]}
      rotation={[0, -Math.PI / 3, 0]}
    >
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.materialBox}
        position={[0, 1, 0]}
        scale={0.762}
      />
    </group>
  );
}

useGLTF.preload("./models/woodcube.glb");
