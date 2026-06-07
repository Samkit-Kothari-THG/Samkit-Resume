import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { projects } from "../../data/resume";
import type { ProjectId } from "../../types/portfolio";
import type { ThemeMode } from "../../types/theme";
import { ProjectPod } from "./ProjectPod";
import type { ProjectSelectHandler } from "./types";

type ProjectPodRingProps = {
  activeProjectId: ProjectId;
  onSelectProject: ProjectSelectHandler;
  reduceMotion: boolean;
  theme: ThemeMode;
};

function getTargetRotation(activeProjectId: ProjectId) {
  const activeIndex = Math.max(
    0,
    projects.findIndex((project) => project.id === activeProjectId)
  );
  const activeAngle = (activeIndex / projects.length) * Math.PI * 2 + Math.PI / 4;

  return Math.PI / 2 - activeAngle;
}

export function ProjectPodRing({ activeProjectId, onSelectProject, reduceMotion, theme }: ProjectPodRingProps) {
  const group = useRef<THREE.Group>(null);
  const targetRotation = useMemo(() => getTargetRotation(activeProjectId), [activeProjectId]);

  useFrame((_, delta) => {
    if (!group.current) return;

    if (reduceMotion) {
      group.current.rotation.y = targetRotation;
      return;
    }

    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotation, 4.2, delta);
  });

  return (
    <group ref={group}>
      {projects.map((project, index) => (
        <ProjectPod
          key={project.id}
          projectId={project.id}
          index={index}
          activeProjectId={activeProjectId}
          onSelectProject={onSelectProject}
          reduceMotion={reduceMotion}
          theme={theme}
        />
      ))}
    </group>
  );
}
