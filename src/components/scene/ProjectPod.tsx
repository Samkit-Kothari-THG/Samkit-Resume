import { Html } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { projects } from "../../data/resume";
import type { ProjectId } from "../../types/portfolio";
import type { ThemeMode } from "../../types/theme";
import { getScenePalette } from "./palette";
import { getProjectPosition } from "./projectLayout";
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
  const coreMaterial = useRef<THREE.MeshStandardMaterial>(null);
  const [isHovered, setIsHovered] = useState(false);
  const palette = getScenePalette(theme);
  const isActive = activeProjectId === projectId;
  const position = getProjectPosition(index, isActive);

  useEffect(() => {
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.cursor = "";
      }
    };
  }, []);

  useFrame((state, delta) => {
    if (!group.current || reduceMotion) return;
    group.current.rotation.y += delta * (isActive ? 0.34 : 0.16);

    const targetScale = isActive ? 1.05 : isHovered ? 1.08 : 1;
    group.current.scale.setScalar(THREE.MathUtils.damp(group.current.scale.x, targetScale, 8, delta));

    if (coreMaterial.current) {
      const activePulse = Math.sin(state.clock.elapsedTime * 3.6) * 0.14;
      coreMaterial.current.emissiveIntensity = isActive ? 1.16 + activePulse : isHovered ? 0.62 : 0.35;
    }
  });

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onSelectProject(projectId);
  };

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setIsHovered(true);
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setIsHovered(false);
    document.body.style.cursor = "";
  };

  return (
    <group ref={group} position={position} onClick={handleClick} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
      {isActive || isHovered ? (
        <mesh>
          <sphereGeometry args={[isActive ? 0.72 : 0.58, 28, 28]} />
          <meshBasicMaterial
            color={project.accent}
            transparent
            opacity={theme === "light" ? 0.12 : 0.18}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ) : null}
      <mesh>
        <dodecahedronGeometry args={[isActive ? 0.42 : 0.32, 0]} />
        <meshStandardMaterial
          ref={coreMaterial}
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
