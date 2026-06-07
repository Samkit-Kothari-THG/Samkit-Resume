import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { SceneContent } from "./SceneContent";
import type { CommandCenterSceneProps } from "./types";

export default function CommandCenterScene(props: CommandCenterSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="command-canvas"
    >
      <Suspense fallback={null}>
        <SceneContent {...props} />
      </Suspense>
    </Canvas>
  );
}
