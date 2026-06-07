import { Html } from "@react-three/drei";

export function SceneLoadingFallback() {
  return (
    <Html center>
      <div className="scene-loader-panel">
        <span aria-hidden="true" />
        <strong>Booting command center</strong>
      </div>
    </Html>
  );
}
