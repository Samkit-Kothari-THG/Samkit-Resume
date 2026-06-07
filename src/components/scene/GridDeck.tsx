import { useMemo } from "react";
import * as THREE from "three";

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

export function GridDeck() {
  const geometry = useMemo(buildGridGeometry, []);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#254341" transparent opacity={0.42} />
    </lineSegments>
  );
}
