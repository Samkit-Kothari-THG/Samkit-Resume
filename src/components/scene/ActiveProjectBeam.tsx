import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { projects } from "../../data/resume";
import type { ProjectId } from "../../types/portfolio";
import type { ThemeMode } from "../../types/theme";
import { getProjectIndex, getProjectPosition } from "./projectLayout";

type ActiveProjectBeamProps = {
  activeProjectId: ProjectId;
  reduceMotion: boolean;
  theme: ThemeMode;
};

export function ActiveProjectBeam({ activeProjectId, reduceMotion, theme }: ActiveProjectBeamProps) {
  const pulse = useRef<THREE.Mesh>(null);
  const progress = useRef(0);
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0];
  const opacity = theme === "light" ? 0.26 : 0.42;
  const pulseOpacity = theme === "light" ? 0.54 : 0.74;
  const { curve, initialPulsePosition } = useMemo(() => {
    const [x, y, z] = getProjectPosition(getProjectIndex(activeProjectId), true);
    const end = new THREE.Vector3(x, y + 0.16, z);
    const path = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0.54, 0),
      new THREE.Vector3(x * 0.24, 0.28, z * 0.34),
      new THREE.Vector3(x * 0.68, -0.64, z * 0.72),
      end
    ]);

    return {
      curve: path,
      initialPulsePosition: path.getPoint(0.72)
    };
  }, [activeProjectId]);

  useFrame((state, delta) => {
    if (!pulse.current || reduceMotion) return;

    progress.current = (progress.current + delta * 0.38) % 1;
    pulse.current.position.copy(curve.getPoint(progress.current));
    pulse.current.scale.setScalar(THREE.MathUtils.damp(pulse.current.scale.x, 0.92 + Math.sin(state.clock.elapsedTime * 5.2) * 0.12, 8, delta));
  });

  return (
    <group>
      <mesh>
        <tubeGeometry args={[curve, 72, 0.014, 8, false]} />
        <meshBasicMaterial
          color={activeProject.accent}
          transparent
          opacity={opacity}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh ref={pulse} position={initialPulsePosition}>
        <sphereGeometry args={[0.055, 18, 18]} />
        <meshBasicMaterial
          color={activeProject.accent}
          transparent
          opacity={reduceMotion ? 0 : pulseOpacity}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}
