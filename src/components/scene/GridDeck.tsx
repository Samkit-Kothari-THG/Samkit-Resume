import { useMemo } from "react";
import * as THREE from "three";

type GridLine = [[number, number, number], [number, number, number]];

function buildGridLines(): GridLine[] {
  const result: GridLine[] = [];

  for (let i = -6; i <= 6; i += 1) {
    result.push([
      [-6, -1.62, i],
      [6, -1.62, i]
    ]);
    result.push([
      [i, -1.62, -6],
      [i, -1.62, 6]
    ]);
  }

  return result;
}

export function GridDeck() {
  const lines = useMemo(buildGridLines, []);

  return (
    <group>
      {lines.map(([start, end], index) => {
        const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <line key={`${start.join("-")}-${end.join("-")}-${index}`} geometry={geometry}>
            <lineBasicMaterial color={index % 2 ? "#223820" : "#254341"} transparent opacity={0.42} />
          </line>
        );
      })}
    </group>
  );
}
