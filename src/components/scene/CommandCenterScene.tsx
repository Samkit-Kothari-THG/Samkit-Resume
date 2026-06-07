import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { SceneContent } from "./SceneContent";
import { SceneLoadingFallback } from "./SceneLoadingFallback";
import type { CommandCenterSceneProps } from "./types";

export default function CommandCenterScene(props: CommandCenterSceneProps) {
  const [isSceneReady, setIsSceneReady] = useState(false);

  return (
    <>
      <Canvas
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="command-canvas"
        onCreated={() => setIsSceneReady(true)}
      >
        <Suspense fallback={<SceneLoadingFallback />}>
          <SceneContent {...props} />
        </Suspense>
      </Canvas>
      <div className={isSceneReady ? "scene-loader is-hidden" : "scene-loader"} aria-hidden="true">
        <div className="scene-loader-panel">
          <span aria-hidden="true" />
          <strong>Booting command center</strong>
        </div>
      </div>
    </>
  );
}
