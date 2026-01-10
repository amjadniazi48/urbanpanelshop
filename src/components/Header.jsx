"use client";
import {useState, useEffect} from "react";
import { ImageUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ headerdata, menu }) {
  const pathname = usePathname();
  const logo = headerdata?.logo?.[0];
  const sections = menu?.sections || [];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Function to close the offcanvas menu
  const closeOffcanvas = () => {
    if (typeof window !== "undefined" && window.bootstrap) {
      const offcanvasEl = document.getElementById("navbarNav");
      if (offcanvasEl) {
        const offcanvas = window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
        offcanvas.hide();
      }
    }
  };

  return (
    <>
      <header
        className={`header navbar navbar-expand-lg navbar-dark ${scrolled ? "navbar-stuck" : "position-absolute"} w-100`}
        style={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1030,
          position: scrolled ? "fixed" : "absolute"
        }}
      >
        <div className="container px-3">
          {/* Logo */}
          <Link href="/" className="navbar-brand pe-3" onClick={closeOffcanvas}>
            {logo ? (
              <img
                src={logo.url}
                width="130"
                alt={logo.alternativeText || logo.name}
              />
            ) : (
              <span>UrbanPanel Shop</span>
            )}
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas Menu */}
          <div
            id="navbarNav"
            className="offcanvas offcanvas-end flex-grow-1"
            tabIndex={-1}
            aria-labelledby="navbarNavLabel"
          >
            <div className="offcanvas-header border-bottom d-lg-none">
              <h5 className="offcanvas-title" id="navbarNavLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                {sections.map((section) => {
                  if (section.dropdown && section.dropdown.length > 0) {
                    return (
                      <li key={section.id} className="nav-item dropdown">
                        <a
                          href="#"
                          className={`nav-link dropdown-toggle ${
                            pathname === section.headingUrl ? "active" : ""
                          }`}
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={(e) => e.preventDefault()}
                        >
                          {section.heading}
                        </a>
                        <ul className="dropdown-menu">
                          {section.dropdown.map((item) => (
                            <li key={item.id}>
                              <Link
                                href={item.titleUrl || "#"}
                                className="dropdown-item text-wrap text-break"
                                onClick={closeOffcanvas}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }

                  return (
                    <li key={section.id} className="nav-item">
                      <Link
                        href={section.headingUrl || "#"}
                        className={`nav-link ${
                          pathname === section.headingUrl ? "active" : ""
                        }`}
                        onClick={closeOffcanvas}
                      >
                        {section.heading}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Upload Button (Mobile only) */}
              <Link
                href={headerdata?.ctaUrl || "/smash"}
                className="btn w-100 d-lg-none"
                style={{ backgroundColor: "#F7A604", color: "white" }}
                onClick={closeOffcanvas}
              >
                <ImageUp />
                &nbsp;&nbsp;{headerdata?.ctaText || "UPLOAD YOUR SMASH"}
              </Link>
            </div>
          </div>

          {/* Upload Button (Desktop) */}
          <Link
            href={headerdata?.ctaUrl || "/smash"}
            className="btn d-none d-lg-inline-flex ms-lg-3"
            style={{ backgroundColor: "#F7A604", color: "black" }}
          >
            <ImageUp />
            &nbsp;&nbsp;{headerdata?.ctaText || "UPLOAD YOUR SMASH"}
          </Link>
        </div>
      </header>

      <style jsx global>{`
        /* Ensure all nav links are white by default */
        .navbar-dark .navbar-nav .nav-link {
          color: rgba(255, 255, 255, 0.85) !important;
        }

        /* Active link - gold color */
        .navbar-dark .navbar-nav .nav-link.active {
          color: #F7A604 !important;
        }

        /* Hover state - gold color */
        .navbar-dark .navbar-nav .nav-link:hover,
        .navbar-dark .navbar-nav .nav-link:focus {
          color: #F7A604 !important;
        }

        /* Dropdown toggle positioning */
        .nav-item.dropdown .dropdown-toggle::after {
          margin-left: 0.35em;
        }

        /* Dropdown menu items - dark text */
        .dropdown-menu .dropdown-item {
          color: #212529 !important;
          white-space: normal;
          max-width: 250px;
        }

        .dropdown-menu .dropdown-item:hover,
        .dropdown-menu .dropdown-item:focus {
          background-color: #f8f9fa;
          color: #F7A604 !important;
        }

        /* Mobile offcanvas styling */
        @media (max-width: 991px) {
          .offcanvas .navbar-nav .nav-link {
            color: #212529 !important;
          }

          .offcanvas .navbar-nav .nav-link.active {
            color: #F7A604 !important;
          }

          .offcanvas .navbar-nav .nav-link:hover {
            color: #F7A604 !important;
          }
        }
      `}</style>
    </>
  );
}