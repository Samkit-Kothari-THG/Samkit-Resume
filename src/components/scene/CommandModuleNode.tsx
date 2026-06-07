import { Float, Html, Text } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useBodyCursor } from "../../hooks/useBodyCursor";
import type { CommandModule } from "../../types/portfolio";
import { getScenePalette } from "./palette";
import type { MotionAwareSceneProps } from "./types";

export type PositionedCommandModule = CommandModule & {
  angle: number;
  x: number;
  y: number;
  z: number;
};

type CommandModuleNodeProps = MotionAwareSceneProps & {
  item: PositionedCommandModule;
};

export function CommandModuleNode({ item, reduceMotion, theme }: CommandModuleNodeProps) {
  const group = useRef<THREE.Group>(null);
  const faceMaterial = useRef<THREE.MeshStandardMaterial>(null);
  const [isHovered, setIsHovered] = useState(false);
  const palette = getScenePalette(theme);
  useBodyCursor(isHovered);

  useFrame((state, delta) => {
    if (!group.current) return;

    const targetScale = isHovered ? 1.18 : 1;
    group.current.scale.setScalar(THREE.MathUtils.damp(group.current.scale.x, targetScale, 7, delta));

    if (faceMaterial.current) {
      const pulse = reduceMotion ? 0 : Math.sin(state.clock.elapsedTime * 3.4) * 0.08;
      faceMaterial.current.emissiveIntensity = isHovered ? 1.05 + pulse : 0.75;
    }
  });

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setIsHovered(true);
  };

  const handlePointerOut = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setIsHovered(false);
  };

  return (
    <Float speed={reduceMotion ? 0 : 1.6} floatIntensity={reduceMotion ? 0 : 0.25}>
      <group
        ref={group}
        position={[item.x, item.y, item.z]}
        rotation={[0, -item.angle + Math.PI / 2, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        {isHovered ? (
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.42, 0.01, 8, 72]} />
            <meshBasicMaterial color={item.color} transparent opacity={0.72} depthWrite={false} blending={THREE.AdditiveBlending} />
          </mesh>
        ) : null}
        <mesh>
          <boxGeometry args={[0.64, 0.38, 0.16]} />
          <meshStandardMaterial color={palette.moduleBase} roughness={0.34} metalness={0.38} emissive={item.color} emissiveIntensity={0.18} />
        </mesh>
        <mesh position={[0, 0, 0.091]}>
          <planeGeometry args={[0.56, 0.28]} />
          <meshStandardMaterial ref={faceMaterial} color={item.color} emissive={item.color} emissiveIntensity={0.75} roughness={0.4} />
        </mesh>
        <Text position={[0, 0.02, 0.105]} fontSize={0.07} color="#07100c" anchorX="center" anchorY="middle" maxWidth={0.52}>
          {item.label}
        </Text>
        {isHovered ? (
          <Html center distanceFactor={8.4} position={[0, -0.42, 0]} className="pointer-events-none">
            <span className="scene-module-label">
              <strong>{item.label}</strong>
              {item.detail}
            </span>
          </Html>
        ) : null}
      </group>
    </Float>
  );
}
