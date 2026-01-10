"use client";
import Link from "next/link";
import { LucidePhone } from "lucide-react";
export default function Footer( {footerData}) {
 // console.log("this is the footer", footerData);
  //const logo = headerdata?.logo?.[0];
  const links = footerData?.Menulinks || [];
  const socials = footerData?.Sociallinks || [];

  return (
    <footer className="footer bg-dark pt-5 pb-4 pb-lg-5 mt-2 mt-md-0">
      <div className="container pt-lg-4">
        <div className="row pb-5">
          <div className="col-lg-4 col-md-6">
            <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
            
                <span className="text-muted">About UrbanPanel Shop</span>
             
            </div>
            <p className="fs-sm pb-lg-3 mb-4 text-muted">{footerData?.description}</p>
               <Link href="tel:+61 03 8351 9771" style={{textDecoration:"none"}}><LucidePhone />&nbsp; +61 03 8351 9771</Link>
          </div>

          <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <div id="footer-links" className="row">
              <div className="col-lg-6">
                <h6 className="mb-2">
                  <a
                    href="#useful-links"
                    className="d-block text-dark dropdown-toggle d-lg-none py-2"
                    data-bs-toggle="collapse"
                  >
                    Useful Links
                  </a>
                </h6>
                <div id="useful-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul className="nav flex-column mb-lg-3">
                    {links.map((link) => (
                      <li key={link.id} className="nav-item">
                        <Link href={`/pages${link.titleUrl || "#"}`} className="nav-link d-inline-block px-0 pt-1 pb-2 text-muted">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <h6 className="mb-2">
                  <a
                    href="#social-links"
                    className="d-block text-dark dropdown-toggle d-lg-none py-2"
                    data-bs-toggle="collapse"
                  >
                    Socials
                  </a>
                </h6>
                <div id="social-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul className="nav flex-column mb-2 mb-lg-0">
                    {socials.map((social) => (
                      <li key={social.id} className="nav-item">
                        <Link href={social.url || "#"} className="nav-link d-inline-block px-0 pt-1 pb-2 text-muted">
                          {social.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="nav d-block fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0 text-muted">
          &copy; {footerData?.copyright}
        </p>
      </div>
    </footer>
  );
}
