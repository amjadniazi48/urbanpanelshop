"use client";
import { useState, useEffect } from "react";
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
        const offcanvas =
          window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
        offcanvas.hide();
      }
    }
  };

  return (
    <>
      {/* Top Contact Bar - Black Background */}
      <div
        className="bg-black text-white py-2"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1050,
          width: "100%",
        }}
      >
        <div className="container px-3">
          <div className="row align-items-center">
            {/* Social Media Icons - Left */}
            <div className="col-6">
              <div className="d-flex align-items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white social-icon"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white social-icon"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Info - Right */}
            <div className="col-6">
              <div className="d-flex justify-content-end align-items-center gap-2 gap-md-3">
                {/* Phone Number */}
                <div className="d-flex align-items-center gap-1 gap-md-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#ffc107"
                    className="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <a
                    href="tel:+1234567890"
                    className="text-white text-decoration-none small"
                  >
                    (123) 456-7890
                  </a>
                </div>

                {/* Opening Hours - Hidden on mobile */}
                <div className="d-none d-md-flex align-items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="#ffc107"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>
                  <span className="text-white small">Mon-Fri 8AM-6PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`header navbar navbar-expand-lg ${
          scrolled ? "bg-secondary" : "bg-light"
        } navbar-sticky w-100`}
        style={{
          top: scrolled ? 40 : 40,
          left: 0,
          right: 0,
          zIndex: 1030,
          position: "sticky",
          margin: 0,
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
                          href={section.headingUrl || "#"}
                          className={`nav-link dropdown-toggle ${
                            pathname === section.headingUrl ? "active" : ""
                          }`}
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {section.heading}
                        </a>
                        <ul className="dropdown-menu">
                          {/* Add parent link as first dropdown item if headingUrl exists */}
                          {section.headingUrl && section.headingUrl !== "#" && (
                            <li>
                              <Link
                                href={section.headingUrl}
                                className="dropdown-item text-wrap text-break fw-bold"
                                onClick={closeOffcanvas}
                              >
                                View All {section.heading}
                              </Link>
                            </li>
                          )}
                          {section.headingUrl && section.headingUrl !== "#" && (
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                          )}
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

      <style jsx>{`
        .social-icon:hover {
          color: #ffc107 !important;
        }
      `}</style>
    </>
  );
}
