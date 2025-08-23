import React from "react";
import {
MailPlus
} from "lucide-react";
const Header = () => {
  return (
    <header className="header navbar navbar-expand-lg bg-light position-absolute navbar-sticky">
      <div className="container px-3">
        <a href="index.html" className="navbar-brand pe-3">
          <img src="assets/img/logourbanclub.jpeg" width="150" alt="urbanclub" />
         
        </a>
        <div id="navbarNav" className="offcanvas offcanvas-end">
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link  active"
                  data-bs-toggle="dropdown"
                  aria-current="page"
                >
                  Home
                </a>
             
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  data-bs-toggle="dropdown"
                >
                  About Us
                </a>
            
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                 Our Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="account-details.html" className="dropdown-item">
                      Account Details
                    </a>
                  </li>
                  <li>
                    <a href="account-security.html" className="dropdown-item">
                      Security
                    </a>
                  </li>
                  <li>
                    <a
                      href="account-notifications.html"
                      className="dropdown-item"
                    >
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a href="account-messages.html" className="dropdown-item">
                      Messages
                    </a>
                  </li>
                  <li>
                    <a
                      href="account-saved-items.html"
                      className="dropdown-item"
                    >
                      Saved Items
                    </a>
                  </li>
                  <li>
                    <a
                      href="account-collections.html"
                      className="dropdown-item"
                    >
                      My Collections
                    </a>
                  </li>
                  <li>
                    <a href="account-payment.html" className="dropdown-item">
                      Payment Details
                    </a>
                  </li>
                  <li>
                    <a href="account-signin.html" className="dropdown-item">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a href="account-signup.html" className="dropdown-item">
                      Sign Up
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="components/typography.html" className="nav-link">
                 Gallery
                </a>
              </li>
              <li className="nav-item">
                <a href="docs/getting-started.html" className="nav-link">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="offcanvas-header border-top">
            <a
              href="#"
              className="btn btn-primary w-100"
              target="_blank"
              rel="noopener"
            >
              <i className="bx bx-cart fs-4 lh-1 me-1"></i>
              &nbsp;Buy now
            </a>
          </div>
        </div>

        <a
          href="#"
          className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex"
          target="_blank"
          rel="noopener"
        >
       <MailPlus />
          &nbsp;&nbsp;Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;
