import { projects } from "../../data/resume";
import type { ProjectId } from "../../types/portfolio";

export const PROJECT_BASE_ANGLE = Math.PI / 4;
export const PROJECT_Y = -1.18;

export function getProjectIndex(projectId: ProjectId) {
  return Math.max(
    0,
    projects.findIndex((project) => project.id === projectId)
  );
}

export function getProjectAngle(index: number) {
  return (index / projects.length) * Math.PI * 2 + PROJECT_BASE_ANGLE;
}

export function getProjectRadius(isActive: boolean) {
  return isActive ? 3.45 : 3.15;
}

export function getProjectPosition(index: number, isActive: boolean): [number, number, number] {
  const angle = getProjectAngle(index);
  const radius = getProjectRadius(isActive);

  return [Math.cos(angle) * radius, PROJECT_Y, Math.sin(angle) * radius];
}

export function getTargetRotation(activeProjectId: ProjectId) {
  const activeAngle = getProjectAngle(getProjectIndex(activeProjectId));

  return Math.PI / 2 - activeAngle;
}
