import { useMemo } from "react";
import * as THREE from "three";
import type { ThemeMode } from "../../types/theme";
import { getScenePalette } from "./palette";

function buildGridGeometry() {
  const vertices: number[] = [];

  for (let i = -6; i <= 6; i += 1) {
    vertices.push(-6, -1.62, i, 6, -1.62, i);
    vertices.push(i, -1.62, -6, i, -1.62, 6);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

  return geometry;
}

type GridDeckProps = {
  theme: ThemeMode;
};

export function GridDeck({ theme }: GridDeckProps) {
  const geometry = useMemo(buildGridGeometry, []);
  const palette = getScenePalette(theme);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color={palette.grid} transparent opacity={0.42} />
    </lineSegments>
  );
}
