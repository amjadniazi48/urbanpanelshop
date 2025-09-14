export default function Footer() {
  return (
    <footer className="footer bg-dark  pb-4 pb-lg-5 ">
      <div className="container pt-lg-4">
        <div className="row pb-5">
          <div className="col-lg-4 col-md-6">
            <div className="navbar-brand text-white   mb-3 mb-lg-4 pt-5">
              About URS Club
            </div>
            <p className="fs-sm pb-lg-3 mb-4 text-white">
              Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam
              proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor
              ullamcorper sodales ultrices eros.
            </p>
          
          </div>
          <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <div id="footer-links" className="row">
              <div className="col-lg-4">
                <h6 className="mb-2">
                  <a
                    href="#useful-links"
                    className="d-block text-white dropdown-toggle d-lg-none py-2"
                    data-bs-toggle="collapse"
                  >
                    Useful Links
                  </a>
                </h6>
                <div id="useful-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul className="nav flex-column pb-lg-1 mb-lg-3 ">
                    <li className="nav-item ">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2 text-white">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2 text-white">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2 text-white">
                        Our Works
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2 text-white">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2 text-white">
                        Blog
                      </a>
                    </li>
                  </ul>
                  <ul className="nav flex-column mb-2 mb-lg-0 ">
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2 text-white">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2 text-white">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3">
                <h6 className="mb-2">
                  <a
                    href="#social-links"
                    className="d-block text-white dropdown-toggle d-lg-none py-2"
                    data-bs-toggle="collapse"
                  >
                    Socials
                  </a>
                </h6>
                <div id="social-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul className="nav flex-column mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2 text-white">
                        Facebook
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2 text-white">
                        LinkedIn
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2 text-white">
                        Twitter
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link d-inline-block px-0 pt-1 pb-2 text-white">
                        Behance
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
      
            </div>
          </div>
        </div>
        <p className="nav d-block fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0 text-white">
          &copy; All rights reserved. Made by{" "}
          <a
            className="nav-link d-inline-block p-0 text-white"
            href="https://createx.studio/"
            target="_blank"
            rel="noreferrer noopener"
          >
            UrbanPanel Shop
          </a>
        </p>
      </div>
    </footer>
  )
}
