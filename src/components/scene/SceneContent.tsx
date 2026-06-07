import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { projects } from "../../data/resume";
import { GridDeck } from "./GridDeck";
import { OrbitingModules } from "./OrbitingModules";
import { ProjectPod } from "./ProjectPod";
import { StorefrontEngine } from "./StorefrontEngine";
import type { CommandCenterSceneProps } from "./types";

export function SceneContent({ activeProjectId, onSelectProject, reduceMotion }: CommandCenterSceneProps) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2.2, 6.8]} fov={48} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[2.6, 4, 3]} intensity={1.35} color="#fff4da" />
      <pointLight position={[-3, 1.3, 2]} intensity={3.2} color="#58d7cf" />
      <pointLight position={[3, 0.4, -2.5]} intensity={2.4} color="#ff6bb5" />
      <fog attach="fog" args={["#070807", 6, 13]} />
      <GridDeck />
      <StorefrontEngine reduceMotion={reduceMotion} />
      <OrbitingModules reduceMotion={reduceMotion} />
      {projects.map((project, index) => (
        <ProjectPod
          key={project.id}
          projectId={project.id}
          index={index}
          activeProjectId={activeProjectId}
          onSelectProject={onSelectProject}
          reduceMotion={reduceMotion}
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
