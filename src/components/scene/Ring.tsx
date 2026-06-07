type RingProps = {
  radius: number;
  color: string;
  rotation: [number, number, number];
};

export function Ring({ radius, color, rotation }: RingProps) {
  return (
    <mesh rotation={rotation}>
      <torusGeometry args={[radius, 0.012, 12, 160]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.35} />
    </mesh>
  );
}
