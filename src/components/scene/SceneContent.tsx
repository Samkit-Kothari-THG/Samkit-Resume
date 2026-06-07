import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ActiveProjectFocus } from "./ActiveProjectFocus";
import { CameraBootRig } from "./CameraBootRig";
import { GridDeck } from "./GridDeck";
import { OrbitingModules } from "./OrbitingModules";
import { ProjectPodRing } from "./ProjectPodRing";
import { SceneBootStage } from "./SceneBootStage";
import { StorefrontEngine } from "./StorefrontEngine";
import { getScenePalette } from "./palette";
import type { CommandCenterSceneProps } from "./types";

export function SceneContent({ activeProjectId, onSelectProject, reduceMotion, theme }: CommandCenterSceneProps) {
  const palette = getScenePalette(theme);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2.2, 6.8]} fov={48} />
      <CameraBootRig reduceMotion={reduceMotion} />
      <ambientLight intensity={palette.ambientIntensity} />
      <directionalLight position={[2.6, 4, 3]} intensity={palette.directionalIntensity} color={palette.directional} />
      <pointLight position={[-3, 1.3, 2]} intensity={palette.cyanLightIntensity} color="#58d7cf" />
      <pointLight position={[3, 0.4, -2.5]} intensity={palette.pinkLightIntensity} color="#ff6bb5" />
      <ActiveProjectFocus activeProjectId={activeProjectId} reduceMotion={reduceMotion} theme={theme} />
      <fog attach="fog" args={[palette.fog, 6, 13]} />
      <SceneBootStage reduceMotion={reduceMotion}>
        <GridDeck theme={theme} />
        <StorefrontEngine reduceMotion={reduceMotion} theme={theme} />
        <OrbitingModules reduceMotion={reduceMotion} theme={theme} />
        <ProjectPodRing activeProjectId={activeProjectId} onSelectProject={onSelectProject} reduceMotion={reduceMotion} theme={theme} />
      </SceneBootStage>
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
