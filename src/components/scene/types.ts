import type { ProjectId } from "../../types/portfolio";
import type { ThemeMode } from "../../types/theme";

export type ProjectSelectHandler = (projectId: ProjectId) => void;

export type MotionAwareSceneProps = {
  reduceMotion: boolean;
  theme: ThemeMode;
};

export type CommandCenterSceneProps = MotionAwareSceneProps & {
  activeProjectId: ProjectId;
  onSelectProject: ProjectSelectHandler;
};
