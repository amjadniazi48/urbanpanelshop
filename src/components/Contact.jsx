import React from "react";

const Contact = ({ data }) => {
  if (!data) return null;

  const { address, map } = data;

  return (
    <>
      {/* Hero Section */}
      <section className="elegant-services-hero bg-gradient-primary">
        <div className="elegant-hero-overlay"></div>
        <div className="container">
          <div className="elegant-hero-content p-3">
            <h1
              className="elegant-hero-title text-white"
              style={{ textAlign: "center" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="white"
                class="bi bi-phone-vibrate"
                viewBox="0 0 16 16"
              >
                <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2M1.599 4.058a.5.5 0 0 1 .208.676A7 7 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A8 8 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208m12.802 0a.5.5 0 0 1 .676.208A8 8 0 0 1 16 8a8 8 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A7 7 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676M3.057 5.534a.5.5 0 0 1 .284.648A5 5 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A6 6 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284m9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8s-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8s-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648" />
              </svg>
              &nbsp;Contact Us
            </h1>
          </div>
        </div>
      </section>
      <section className="elegant-services-container">
        <div className="row mt-5 mb-5 ">
          {/* Map */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="d-flex flex-column h-100 shadow-sm rounded-3 overflow-hidden">
              {/* Inject map iframe safely */}
              <div
                className="d-block h-100"
                style={{ minHeight: "300px" }}
                dangerouslySetInnerHTML={{ __html: map }}
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-5 offset-lg-1">
            <h2 className="h4 mb-4">Urban Panel Shop</h2>
            <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
              {/* Address */}
              <li className="d-flex pb-1 mb-2">
                <i
                  className="bx bx-map text-primary fs-xl me-2"
                  style={{ marginTop: ".125rem" }}
                ></i>
                <span style={{ whiteSpace: "pre-line" }}>{address}</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="d-flex pt-1 pt-md-3 pt-xl-4">
              <a
                href="#"
                className="btn btn-icon btn-secondary btn-facebook me-3"
                aria-label="Facebook"
              >
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href="#"
                className="btn btn-icon btn-secondary btn-instagram me-3"
                aria-label="Instagram"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a
                href="#"
                className="btn btn-icon btn-secondary btn-twitter me-3"
                aria-label="Twitter"
              >
                <i className="bx bxl-twitter"></i>
              </a>
              <a
                href="#"
                className="btn btn-icon btn-secondary btn-youtube"
                aria-label="YouTube"
              >
                <i className="bx bxl-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="service-detail-cta bg-gradient-primary p-5">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
            Contact us today to get a quick quote for smash repairs
            </p>
            <div className="cta-buttons">
              <a href="/smash" className="btn-primary-cta">
                Contact Us
              </a>
              <a href="/smash" className="btn-secondary-cta">
                Upload Your Smash
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
