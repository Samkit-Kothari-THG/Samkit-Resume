import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type CameraBootRigProps = {
  reduceMotion: boolean;
};

export function CameraBootRig({ reduceMotion }: CameraBootRigProps) {
  const { camera } = useThree();
  const elapsed = useRef(0);
  const completed = useRef(false);
  const introPosition = useMemo(() => new THREE.Vector3(0, 2.78, 7.65), []);
  const settledPosition = useMemo(() => new THREE.Vector3(0, 2.2, 6.8), []);
  const target = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  useEffect(() => {
    if (reduceMotion) {
      camera.position.copy(settledPosition);
      camera.lookAt(target);
      completed.current = true;
      return;
    }

    camera.position.copy(introPosition);
    camera.lookAt(target);
    elapsed.current = 0;
    completed.current = false;
  }, [camera, introPosition, reduceMotion, settledPosition, target]);

  useFrame((_, delta) => {
    if (reduceMotion || completed.current) return;

    elapsed.current += delta;
    const progress = Math.min(elapsed.current / 1.55, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    camera.position.lerpVectors(introPosition, settledPosition, eased);
    camera.lookAt(target);

    if (progress >= 1) {
      completed.current = true;
    }
  });

  return null;
}
