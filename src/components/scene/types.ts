import type { ProjectId } from "../../types/portfolio";

export type ProjectSelectHandler = (projectId: ProjectId) => void;

export type MotionAwareSceneProps = {
  reduceMotion: boolean;
};

export type CommandCenterSceneProps = MotionAwareSceneProps & {
  activeProjectId: ProjectId;
  onSelectProject: ProjectSelectHandler;
};
