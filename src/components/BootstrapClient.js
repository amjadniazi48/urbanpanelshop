"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // ✅ Load Bootstrap
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
      if (typeof window !== "undefined") {
        window.bootstrap = bootstrap;
      }
    });

    // ✅ Re-apply touch fixes after React hydration (catch any dynamically added elements)
    const applyTouchFixes = () => {
      if (typeof window === "undefined") return;

      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (!isMobile) return;

      // Ensure all interactive elements have proper touch handling
      const selectors = [
        'button', 'a', 'input', 'textarea', 'select', '[role="button"]', 
        '.btn', '.navbar-toggler', '.offcanvas', '.dropdown-item', 
        '.compare-slider', '[draggable="true"]', '.accordion-button',
        '.react-compare-slider', '[onclick]'
      ];

      selectors.forEach(selector => {
        try {
          document.querySelectorAll(selector).forEach(el => {
            el.style.touchAction = 'auto';
            el.style.pointerEvents = 'auto';
            el.style.webkitTapHighlightColor = 'transparent';
          });
        } catch (e) {
          // Ignore invalid selectors
        }
      });
    };

    // Apply fixes immediately and after common framework timings
    applyTouchFixes();
    setTimeout(applyTouchFixes, 50);
    setTimeout(applyTouchFixes, 200);
    setTimeout(applyTouchFixes, 1000);

    // Also apply when DOM changes
    const observer = new MutationObserver(() => {
      applyTouchFixes();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
