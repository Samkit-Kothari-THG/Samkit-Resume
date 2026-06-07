import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { projects } from "../../data/resume";
import { GridDeck } from "./GridDeck";
import { OrbitingModules } from "./OrbitingModules";
import { ProjectPod } from "./ProjectPod";
import { StorefrontEngine } from "./StorefrontEngine";
import { getScenePalette } from "./palette";
import type { CommandCenterSceneProps } from "./types";

export function SceneContent({ activeProjectId, onSelectProject, reduceMotion, theme }: CommandCenterSceneProps) {
  const palette = getScenePalette(theme);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2.2, 6.8]} fov={48} />
      <ambientLight intensity={palette.ambientIntensity} />
      <directionalLight position={[2.6, 4, 3]} intensity={palette.directionalIntensity} color={palette.directional} />
      <pointLight position={[-3, 1.3, 2]} intensity={palette.cyanLightIntensity} color="#58d7cf" />
      <pointLight position={[3, 0.4, -2.5]} intensity={palette.pinkLightIntensity} color="#ff6bb5" />
      <fog attach="fog" args={[palette.fog, 6, 13]} />
      <GridDeck theme={theme} />
      <StorefrontEngine reduceMotion={reduceMotion} theme={theme} />
      <OrbitingModules reduceMotion={reduceMotion} theme={theme} />
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
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3.2}
        maxPolarAngle={Math.PI / 2.05}
        autoRotate={!reduceMotion}
        autoRotateSpeed={0.36}
      />
    </>
  );
}
