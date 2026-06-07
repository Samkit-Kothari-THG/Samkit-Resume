import { useEffect } from "react";

let activeCursorRequests = 0;
let previousCursor = "";

export function useBodyCursor(isActive: boolean, cursor = "pointer") {
  useEffect(() => {
    if (!isActive || typeof document === "undefined") return undefined;

    if (activeCursorRequests === 0) {
      previousCursor = document.body.style.cursor;
    }

    activeCursorRequests += 1;
    document.body.style.cursor = cursor;

    return () => {
      activeCursorRequests = Math.max(0, activeCursorRequests - 1);

      if (activeCursorRequests === 0) {
        document.body.style.cursor = previousCursor;
      }
    };
  }, [cursor, isActive]);
}
