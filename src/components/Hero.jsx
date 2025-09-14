import React from "react";
import { ImageUp } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="jarallax bg-dark min-vh-100"
      data-jarallax
      data-speed="0.4"
      data-bs-theme="dark"
    >
      {/* Overlay gradient */}
      <span
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "radial-gradient(116.18% 118% at 50% 100%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 41.83%, rgba(241, 244, 253, 0.07) 82.52%)",
        }}
      ></span>

      {/* Background Image (Hero BG must remain) */}
      <div
        className="jarallax-img"
        style={{
          backgroundImage:
            "url(assets/img/landing/software-agency-2/hero-bg.png)",
        }}
      ></div>

      {/* Main Content */}
      <div className="min-vh-100 d-flex flex-column py-5">
        <div className="container position-relative zindex-5 pt-4 pt-md-5 mt-auto mb-auto">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-12 col-lg-5 text-center text-lg-start mb-5 mb-lg-0">
              <h5 className="display-5 mb-md-4 pb-3 py-3">
                Smash Repair and Towing with{" "}
                <span className="text-gradient-primary">
                  UrbanPanel Shop
                </span>
              </h5>
              <p
                className="text-body mx-auto mx-lg-0 mb-md-5 mb-4 fs-5"
                style={{ maxWidth: "500px" }}
              >
                We are experts with providing the widest range of IT services
                and solutions for growing your business.
              </p>

              {/* Logos Grid */}
              <div className="row text-center g-4">
                <div className="col-6 col-md-6">
                  <img
                    src="assets/img/siteicons/mechanic.png"
                    width="55px"
                    alt="Panel Repairs"
                  />
                  <p className="mt-2 text-body">Panel & Smash Repairs</p>
                </div>
                <div className="col-6 col-md-6">
                  <img
                    src="assets/img/siteicons/taxi.png"
                    width="55px"
                    alt="Pickup Delivery"
                  />
                  <p className="mt-2 text-body">Free Pickup & Delivery</p>
                </div>
                <div className="col-6 col-md-6">
                  <img
                    src="assets/img/siteicons/service.png"
                    width="55px"
                    alt="Quality Assurance"
                  />
                  <p className="mt-2 text-body">Quality Assurance</p>
                </div>
                <div className="col-6 col-md-6">
                  <img
                    src="assets/img/siteicons/car-rental.png"
                    width="55px"
                    alt="Backup Cars"
                  />
                  <p className="mt-2 text-body">Backup Cars</p>
                </div>
              </div>
            </div>

            {/* Right Column (Image) */}
            {/* Right Column (Image with overlay) */}
            {/* Right Column (Image with overlay) */}
            <div className="col-12 col-lg-7 d-flex justify-content-lg-end justify-content-center py-5">
              <div className="position-relative d-inline-block rounded-3">
                <img
                  src="assets/img/landing/software-agency-1/panelshop.jpg"
                  alt="Car Showcase"
                  className="img-fluid rounded-3"
                />
                {/* Overlay only on image */}
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-60 rounded-3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
