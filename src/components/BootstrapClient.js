"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Load Bootstrap and initialize all interactive elements
    const initializeAll = async () => {
      try {
        // Load Bootstrap dynamically
        const bootstrap = await import("bootstrap/dist/js/bootstrap.bundle.min.js");
        window.bootstrap = bootstrap.default || bootstrap;
        console.log('[v0] Bootstrap loaded on Vercel');
      } catch (error) {
        console.error('[v0] Bootstrap load failed:', error);
      }

      // CUSTOM HAMBURGER MENU HANDLER - Works on all devices
      const setupHamburgerMenu = () => {
        const navToggler = document.querySelector('.navbar-toggler');
        const offcanvasNav = document.getElementById('navbarNav');

        if (navToggler && offcanvasNav) {
          navToggler.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle the show class directly
            const isOpen = offcanvasNav.classList.contains('show');
            
            if (isOpen) {
              offcanvasNav.classList.remove('show');
              offcanvasNav.setAttribute('aria-hidden', 'true');
              // Remove backdrop
              const backdrop = document.querySelector('.offcanvas-backdrop');
              if (backdrop) backdrop.remove();
            } else {
              offcanvasNav.classList.add('show');
              offcanvasNav.setAttribute('aria-hidden', 'false');
              // Add backdrop
              const backdrop = document.createElement('div');
              backdrop.className = 'offcanvas-backdrop fade show';
              document.body.appendChild(backdrop);
              backdrop.addEventListener('click', () => {
                navToggler.click(); // Close when clicking backdrop
              });
            }
          }, { passive: false });
        }
      };

      // CUSTOM FAQ ACCORDION HANDLER
      const setupAccordions = () => {
        const accordionButtons = document.querySelectorAll('.accordion-button');
        
        accordionButtons.forEach((button) => {
          button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const accordionItem = button.closest('.accordion-item');
            const collapse = accordionItem?.querySelector('.accordion-collapse');
            const isCollapsed = collapse?.classList.contains('show');

            if (isCollapsed) {
              collapse.classList.remove('show');
              button.setAttribute('aria-expanded', 'false');
            } else {
              // Close all other items in the same accordion
              const accordion = button.closest('.accordion');
              if (accordion) {
                accordion.querySelectorAll('.accordion-collapse.show').forEach((el) => {
                  el.classList.remove('show');
                  el.previousElementSibling?.setAttribute('aria-expanded', 'false');
                });
              }
              
              // Open this item
              if (collapse) {
                collapse.classList.add('show');
                button.setAttribute('aria-expanded', 'true');
              }
            }
          }, { passive: false });

          // Also add touch support
          button.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            button.click();
          }, { passive: false });
        });
      };

      // COMPARISON SLIDER SUPPORT
      const setupComparisonSlider = () => {
        const sliders = document.querySelectorAll('.react-compare-slider');
        sliders.forEach((slider) => {
          slider.style.touchAction = 'manipulation';
          slider.style.pointerEvents = 'auto';
          
          // Enable dragging
          let isDragging = false;
          slider.addEventListener('pointerdown', () => {
            isDragging = true;
          });
          slider.addEventListener('pointerup', () => {
            isDragging = false;
          });
          slider.addEventListener('pointercancel', () => {
            isDragging = false;
          });
        });
      };

      // FIX INTERACTIVE ELEMENTS STYLES
      const fixInteractiveElements = () => {
        // Hamburger button
        const togglers = document.querySelectorAll('.navbar-toggler');
        togglers.forEach((btn) => {
          btn.style.pointerEvents = 'auto';
          btn.style.touchAction = 'manipulation';
          btn.style.cursor = 'pointer';
          btn.style.WebkitTapHighlightColor = 'transparent';
        });

        // Accordion buttons
        const accBtns = document.querySelectorAll('.accordion-button');
        accBtns.forEach((btn) => {
          btn.style.pointerEvents = 'auto';
          btn.style.touchAction = 'auto';
          btn.style.cursor = 'pointer';
          btn.style.WebkitTapHighlightColor = 'transparent';
        });

        // All buttons
        const buttons = document.querySelectorAll('button');
        buttons.forEach((btn) => {
          btn.style.WebkitTapHighlightColor = 'transparent';
        });
      };

      // Initialize all handlers
      const initAll = () => {
        fixInteractiveElements();
        setupHamburgerMenu();
        setupAccordions();
        setupComparisonSlider();
      };

      // Run immediately
      initAll();

      // Run again after delays (for dynamically loaded content)
      setTimeout(initAll, 300);
      setTimeout(initAll, 1000);

      // Watch for changes and reinitialize
      const observer = new MutationObserver(() => {
        initAll();
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'data-bs-toggle', 'aria-expanded']
      });
    };

    // Run when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeAll);
    } else {
      initializeAll();
    }
  }, []);

  return null;
}
