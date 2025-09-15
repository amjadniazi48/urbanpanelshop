"use client";
import React from "react";
import { ImageUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Header = () => {
    const pathname = usePathname();
    console.log(pathname)
  return (
 
    <header
      className="header navbar navbar-expand-lg navbar-light position-absolute navbar-sticky shadow-sm"
      style={{ backgroundColor: "#F7F7F7" }}
    >
      <div className="container px-3">
        {/* Logo */}
        <Link href="/"  className="navbar-brand pe-3">
          
            <Image
              src="/assets/img/logourbanclub.png"
              width={150}
              height={40}
              alt="urbanclub"
            />
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
          suppressHydrationWarning
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
              <li className="nav-item">
                <Link href="/"  className={`nav-link ${pathname === "/" ? "active" : ""}`} >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about"  className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
                  About Us
                </Link>
              </li>
               <li className="nav-item">
                <Link href="/services"  className={`nav-link ${pathname === "/services" ? "active" : ""}`}>
                  Our Services
                </Link>
              </li>
              {/* 
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/account/details" className="dropdown-item">
                      Account Details
                    </Link>
                  </li>
                  <li>
                    <Link href="/account/security" className="dropdown-item">
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link href="/account/notifications" className="dropdown-item">
                      Notifications
                    </Link>
                  </li>
                  <li>
                    <Link href="/account/messages" className="dropdown-item">
                      Messages
                    </Link>
                  </li>
                  <li>
                    <Link href="/account/saved" className="dropdown-item">
                      Saved Items
                    </Link>
                  </li>
                  <li>
                    <Link href="/account/collections" className="dropdown-item">
                      My Collections
                    </Link>
                  </li>
                  <li>
                    <Link href="/account/payment" className="dropdown-item">
                      Payment Details
                    </Link>
                  </li>
                  <li>
                    <Link href="/account/signin" className="dropdown-item">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link href="/account/signup" className="dropdown-item">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </li>
               */}
              <li className="nav-item">
                <Link href="/gallery"   className={`nav-link ${pathname === "/gallery" ? "active" : ""}`}>
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Upload Button inside offcanvas (mobile only) */}
            <Link
              href="/smash"
              className="btn w-100 d-lg-none"
              style={{ backgroundColor: "#F7A604", color: "black" }}
            >
              <ImageUp />
              &nbsp;&nbsp;UPLOAD YOUR SMASH
            </Link>
          </div>
        </div>

        {/* Upload Button (Desktop) */}
        <Link
          href="/smash"
          className="btn d-none d-lg-inline-flex ms-lg-3"
          style={{ backgroundColor: "#F7A604", color: "black" }}
        >
          <ImageUp />
          &nbsp;&nbsp;UPLOAD YOUR SMASH
        </Link>
      </div>
    </header>
    
  );
};

export default Header;
