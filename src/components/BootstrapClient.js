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

    // ✅ Fix for mobile touch events on Vercel
    if (typeof window !== "undefined" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // Detect Safari specifically
      const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
      
      // Ensure all interactive elements can receive touch events
      const enableTouchEvents = () => {
        const interactiveSelectors = [
          'button',
          'a',
          'input',
          'textarea',
          'select',
          '[role="button"]',
          '[onclick]',
          '.btn',
          '.navbar-toggler',
          '.offcanvas',
          '.dropdown-item',
          '[draggable="true"]',
          '.compare-slider',
          '.accordion-button'
        ];

        interactiveSelectors.forEach(selector => {
          try {
            document.querySelectorAll(selector).forEach(el => {
              el.style.touchAction = 'auto';
              el.style.pointerEvents = 'auto';
              if (isSafari) {
                el.style.webkitUserSelect = 'text';
                el.style.webkitTouchCallout = 'auto';
              }
            });
          } catch (e) {
            // Selector might not be valid, continue
          }
        });
      };

      // Run on DOM ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', enableTouchEvents);
      } else {
        enableTouchEvents();
      }

      // Also run after a short delay to catch dynamically added elements
      setTimeout(enableTouchEvents, 100);
      setTimeout(enableTouchEvents, 500);

      // ✅ Safari Fix: Prevent unwanted scrolling/dragging while allowing intentional scrolling
      if (isSafari) {
        let touchStartX = 0;
        let touchStartY = 0;
        let isSliding = false;
        
        document.addEventListener('touchstart', (e) => {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          isSliding = false;
          
          // Check if touching an interactive element
          const target = e.target;
          const isInteractive = target.closest('button, a, input, textarea, select, [role="button"], .btn, .navbar-toggler, .accordion-button, [draggable="true"]');
          
          if (isInteractive) {
            isSliding = false;
          }
        }, { passive: true });

        document.addEventListener('touchmove', (e) => {
          const target = e.target;
          
          // Always allow moves on interactive/scrollable elements
          const isInteractive = target.closest('button, a, input, textarea, select, [role="button"], .btn, .navbar-toggler, .accordion-button, .compare-slider, .react-compare-slider, [draggable="true"]');
          const isScrollable = target.closest('.offcanvas-body, .dropdown-menu, main, [style*="overflow-y"]');
          
          if (isInteractive || isScrollable) {
            return; // Allow normal behavior
          }

          const currentX = e.touches[0].clientX;
          const currentY = e.touches[0].clientY;
          const diffX = Math.abs(currentX - touchStartX);
          const diffY = Math.abs(currentY - touchStartY);

          // If significant horizontal movement detected, prevent default
          if (diffX > 10 && diffX > diffY * 1.2) {
            isSliding = true;
            e.preventDefault();
          }
        }, { passive: false });

        document.addEventListener('touchend', () => {
          isSliding = false;
        }, { passive: true });
      }
    }
  }, []);

  return null;
}
