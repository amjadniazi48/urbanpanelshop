"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // ✅ Load Bootstrap and set up all interactive components
    const initializeBootstrap = async () => {
      try {
        // Import Bootstrap bundle
        const bootstrap = await import("bootstrap/dist/js/bootstrap.bundle.min.js");
        if (typeof window !== "undefined") {
          window.bootstrap = bootstrap.default || bootstrap;
          
          // Initialize all dropdowns
          const dropdownElements = document.querySelectorAll('[data-bs-toggle="dropdown"]');
          dropdownElements.forEach((element) => {
            if (window.bootstrap && window.bootstrap.Dropdown) {
              new window.bootstrap.Dropdown(element);
            }
          });

          // Fix for Vercel production: ensure all buttons are clickable on mobile
          const initInteractiveElements = () => {
            // Hamburger menu button
            const navTogglers = document.querySelectorAll('.navbar-toggler');
            navTogglers.forEach((toggler) => {
              toggler.style.pointerEvents = 'auto';
              toggler.style.touchAction = 'auto';
              toggler.style.cursor = 'pointer';
            });

            // Accordion buttons (FAQ)
            const accordionButtons = document.querySelectorAll('.accordion-button');
            accordionButtons.forEach((btn) => {
              btn.style.pointerEvents = 'auto';
              btn.style.touchAction = 'auto';
            });

            // Comparison slider
            const sliders = document.querySelectorAll('.react-compare-slider');
            sliders.forEach((slider) => {
              slider.style.touchAction = 'manipulation';
              slider.style.pointerEvents = 'auto';
            });
          };

          // Run immediately and after DOM updates
          initInteractiveElements();
          setTimeout(initInteractiveElements, 300);
          setTimeout(initInteractiveElements, 1000);

          // Watch for new content - but exclude offcanvas element changes
          let mutationTimeout;
          const observer = new MutationObserver((mutations) => {
            // Check if mutations are only to offcanvas elements (skip those)
            const isOnlyOffcanvasMutation = mutations.every((mutation) => {
              if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                const target = mutation.target;
                // Skip if the mutation is on .offcanvas or .offcanvas-backdrop elements
                if (target.classList && (target.classList.contains('offcanvas') || target.classList.contains('offcanvas-backdrop'))) {
                  return true;
                }
              }
              return false;
            });

            // Only reinitialize if there are meaningful changes
            if (!isOnlyOffcanvasMutation) {
              clearTimeout(mutationTimeout);
              mutationTimeout = setTimeout(initInteractiveElements, 100);
            }
          });

          observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['data-bs-toggle', 'class']
          });
        }
      } catch (error) {
        console.error('[v0] Failed to load Bootstrap:', error);
      }
    };

    // Start initialization
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeBootstrap);
    } else {
      initializeBootstrap();
    }

    // Cleanup observer on unmount
    return () => {
      // Observers are cleaned up automatically
    };
  }, []);

  return null;
}
