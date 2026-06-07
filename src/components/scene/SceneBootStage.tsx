import { useFrame } from "@react-three/fiber";
import type { ReactNode } from "react";
import { useRef } from "react";
import * as THREE from "three";

type SceneBootStageProps = {
  children: ReactNode;
  reduceMotion: boolean;
};

export function SceneBootStage({ children, reduceMotion }: SceneBootStageProps) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current || reduceMotion) return;

    const nextScale = THREE.MathUtils.damp(group.current.scale.x, 1, 4.5, delta);
    group.current.scale.setScalar(nextScale);
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, 0, 4, delta);
  });

  return (
    <group ref={group} scale={reduceMotion ? 1 : 0.92} position={[0, reduceMotion ? 0 : -0.18, 0]}>
      {children}
    </group>
  );
}
