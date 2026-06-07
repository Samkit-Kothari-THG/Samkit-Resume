import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { projects } from "../../data/resume";
import type { ProjectId } from "../../types/portfolio";
import type { ThemeMode } from "../../types/theme";

type ActiveProjectFocusProps = {
  activeProjectId: ProjectId;
  reduceMotion: boolean;
  theme: ThemeMode;
};

export function ActiveProjectFocus({ activeProjectId, reduceMotion, theme }: ActiveProjectFocusProps) {
  const light = useRef<THREE.PointLight>(null);
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0];
  const baseIntensity = theme === "light" ? 1.35 : 2.45;
  const ringOpacity = theme === "light" ? 0.18 : 0.3;

  useFrame((state) => {
    if (!light.current) return;

    light.current.intensity = reduceMotion ? baseIntensity : baseIntensity + Math.sin(state.clock.elapsedTime * 2.6) * 0.42;
  });

  return (
    <group position={[0, -0.88, 3.5]}>
      <pointLight ref={light} color={activeProject.accent} distance={4.8} decay={1.7} />
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.78, 1.02, 96]} />
        <meshBasicMaterial
          color={activeProject.accent}
          transparent
          opacity={ringOpacity}
          side={THREE.DoubleSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}
