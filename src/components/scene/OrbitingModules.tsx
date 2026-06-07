import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { commandModules } from "../../data/resume";
import { CommandModuleNode } from "./CommandModuleNode";
import type { MotionAwareSceneProps } from "./types";

export function OrbitingModules({ reduceMotion, theme }: MotionAwareSceneProps) {
  const group = useRef<THREE.Group>(null);
  const items = useMemo(
    () =>
      commandModules.map((module, index) => {
        const angle = (index / commandModules.length) * Math.PI * 2;
        return {
          ...module,
          angle,
          x: Math.cos(angle) * 2.65,
          z: Math.sin(angle) * 2.65,
          y: index % 2 === 0 ? 0.45 : -0.08
        };
      }),
    []
  );

  useFrame((_, delta) => {
    if (!group.current || reduceMotion) return;
    group.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={group}>
      {items.map((item) => (
        <CommandModuleNode key={item.label} item={item} reduceMotion={reduceMotion} theme={theme} />
      ))}
    </group>
  );
}
