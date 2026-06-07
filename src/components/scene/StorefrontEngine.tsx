import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import type { MotionAwareSceneProps } from "./types";
import { Ring } from "./Ring";

export function StorefrontEngine({ reduceMotion }: MotionAwareSceneProps) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current || reduceMotion) return;
    group.current.rotation.y += delta * 0.24;
    group.current.rotation.x = Math.sin(Date.now() * 0.0006) * 0.06;
  });

  return (
    <group ref={group}>
      <mesh>
        <cylinderGeometry args={[0.92, 0.92, 0.35, 8]} />
        <meshStandardMaterial color="#171d15" metalness={0.68} roughness={0.26} />
      </mesh>
      <mesh position={[0, 0.28, 0]}>
        <cylinderGeometry args={[0.7, 0.86, 0.22, 8]} />
        <meshStandardMaterial color="#253021" metalness={0.5} roughness={0.24} emissive="#284025" emissiveIntensity={0.28} />
      </mesh>
      <mesh position={[0, 0.48, 0]}>
        <boxGeometry args={[0.96, 0.18, 0.8]} />
        <meshStandardMaterial color="#10130f" metalness={0.54} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.62, 0]}>
        <octahedronGeometry args={[0.44, 0]} />
        <meshStandardMaterial color="#f2b84b" emissive="#f2b84b" emissiveIntensity={1.8} roughness={0.18} />
      </mesh>
      <Ring radius={1.25} color="#58d7cf" rotation={[Math.PI / 2, 0.18, 0]} />
      <Ring radius={1.65} color="#8be28c" rotation={[Math.PI / 2.25, 0, Math.PI / 8]} />
      <Ring radius={2.05} color="#ff6bb5" rotation={[Math.PI / 1.75, 0.4, Math.PI / 4]} />
      <Text position={[0, -0.48, 0]} fontSize={0.12} color="#e9f7e8" anchorX="center" anchorY="middle" maxWidth={2.2}>
        Storefront Engine
      </Text>
    </group>
  );
}
