"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // ✅ Load Bootstrap IMMEDIATELY and make it global
    const loadBootstrap = async () => {
      try {
        const bootstrap = await import("bootstrap/dist/js/bootstrap.bundle.min.js");
        if (typeof window !== "undefined") {
          window.bootstrap = bootstrap;
          
          // After Bootstrap loads, initialize offcanvas menu if it exists
          const offcanvasEl = document.querySelector('#navbarNav');
          if (offcanvasEl && window.bootstrap.Offcanvas) {
            new window.bootstrap.Offcanvas(offcanvasEl);
          }
        }
      } catch (error) {
        console.error('Failed to load Bootstrap:', error);
      }
    };

    loadBootstrap();
  }, []);

  return null;
}
