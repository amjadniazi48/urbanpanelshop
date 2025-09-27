import React from "react";

const Contact = ({ data }) => {
  if (!data) return null;

  const { address, map } = data;

  return (
    <section className="container py-2 py-lg-4 py-xl-5 mb-3 mt-3 "
      style={{
          textAlign: "justify",
          border: "1px solid #C6F0C2",
          backgroundColor: "#EAFBE7",
        }}
    >
      <div className="row py-5">
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
          <h2 className="h4 mb-4">Contact Us</h2>
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
  );
};

export default Contact;
