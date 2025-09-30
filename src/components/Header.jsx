"use client";
import React from "react";
import { ImageUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ headerdata, menu }) {
  const pathname = usePathname();
  const logo = headerdata?.logo?.[0];
  const sections = menu?.sections || [];

  // Function to close the offcanvas menu
  const closeOffcanvas = () => {
    if (typeof window !== "undefined" && window.bootstrap) {
      const offcanvasEl = document.getElementById("navbarNav");
      if (offcanvasEl) {
        // ✅ force instance creation if not present
        const offcanvas = window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
        offcanvas.hide();
      }
    }
  };

  return (
    <header
      className="header navbar navbar-expand-lg navbar-light sticky-top shadow-sm"
      style={{ backgroundColor: "#F7F7F7" }}
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
                      <div className="d-flex align-items-center">
                        <Link
                          href={section.headingUrl || "#"}
                          className={`nav-link ${
                            pathname === section.headingUrl ? "active" : ""
                          }`}
                          onClick={closeOffcanvas}
                        >
                          {section.heading}
                        </Link>
                        <a
                          href="#"
                          className="nav-link dropdown-toggle"
                          role="button"
                          data-bs-toggle="dropdown"
                          onClick={(e) => e.preventDefault()}
                        ></a>
                      </div>
                      <ul className="dropdown-menu">
                        {section.dropdown.map((item) => (
                          <li key={item.id}>
                            <Link
                              href={item.titleUrl || "#"}
                              className="dropdown-item text-wrap text-break"
                              style={{
                                whiteSpace: "normal",
                                maxWidth: "250px",
                              }}
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
              style={{ backgroundColor: "#F7A604", color: "black" }}
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
  );
}
