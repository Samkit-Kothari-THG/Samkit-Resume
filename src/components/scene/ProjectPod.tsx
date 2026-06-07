import { Html } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { projects } from "../../data/resume";
import type { ProjectId } from "../../types/portfolio";
import type { ThemeMode } from "../../types/theme";
import { getScenePalette } from "./palette";
import type { ProjectSelectHandler } from "./types";

type ProjectPodProps = {
  projectId: ProjectId;
  index: number;
  activeProjectId: ProjectId;
  onSelectProject: ProjectSelectHandler;
  reduceMotion: boolean;
  theme: ThemeMode;
};

export function ProjectPod({ projectId, index, activeProjectId, onSelectProject, reduceMotion, theme }: ProjectPodProps) {
  const project = projects.find((item) => item.id === projectId)!;
  const group = useRef<THREE.Group>(null);
  const palette = getScenePalette(theme);
  const angle = (index / projects.length) * Math.PI * 2 + Math.PI / 4;
  const isActive = activeProjectId === projectId;
  const radius = isActive ? 3.45 : 3.15;
  const position: [number, number, number] = [Math.cos(angle) * radius, -1.18, Math.sin(angle) * radius];

  useFrame((_, delta) => {
    if (!group.current || reduceMotion) return;
    group.current.rotation.y += delta * (isActive ? 0.34 : 0.16);
  });

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onSelectProject(projectId);
  };

  return (
    <group ref={group} position={position} onClick={handleClick}>
      <mesh>
        <dodecahedronGeometry args={[isActive ? 0.42 : 0.32, 0]} />
        <meshStandardMaterial
          color={isActive ? project.accent : palette.inactivePod}
          emissive={project.accent}
          emissiveIntensity={isActive ? 1.1 : 0.35}
          roughness={0.24}
          metalness={0.42}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[isActive ? 0.62 : 0.48, 0.018, 10, 96]} />
        <meshStandardMaterial color={project.accent} emissive={project.accent} emissiveIntensity={0.7} />
      </mesh>
      <Html center distanceFactor={9} position={[0, -0.72, 0]} className="pointer-events-none">
        <span className={isActive ? "scene-label scene-label-active" : "scene-label"}>{project.title}</span>
      </Html>
    </group>
  );
}
