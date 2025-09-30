"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
      // ✅ Ensure Bootstrap is available globally
      if (typeof window !== "undefined") {
        window.bootstrap = bootstrap;
      }
    });
  }, []);

  return null;
}
