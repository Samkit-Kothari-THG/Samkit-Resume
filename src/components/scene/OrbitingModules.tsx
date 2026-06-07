import { Float, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { commandModules } from "../../data/resume";
import { getScenePalette } from "./palette";
import type { MotionAwareSceneProps } from "./types";

export function OrbitingModules({ reduceMotion, theme }: MotionAwareSceneProps) {
  const group = useRef<THREE.Group>(null);
  const palette = getScenePalette(theme);
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
        <Float key={item.label} speed={reduceMotion ? 0 : 1.6} floatIntensity={reduceMotion ? 0 : 0.25}>
          <group position={[item.x, item.y, item.z]} rotation={[0, -item.angle + Math.PI / 2, 0]}>
            <mesh>
              <boxGeometry args={[0.64, 0.38, 0.16]} />
              <meshStandardMaterial color={palette.moduleBase} roughness={0.34} metalness={0.38} emissive={item.color} emissiveIntensity={0.18} />
            </mesh>
            <mesh position={[0, 0, 0.091]}>
              <planeGeometry args={[0.56, 0.28]} />
              <meshStandardMaterial color={item.color} emissive={item.color} emissiveIntensity={0.75} roughness={0.4} />
            </mesh>
            <Text position={[0, 0.02, 0.105]} fontSize={0.07} color="#07100c" anchorX="center" anchorY="middle" maxWidth={0.52}>
              {item.label}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  );
}
