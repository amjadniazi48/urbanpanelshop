import React from "react";
import Decorativesvg from "./Decorativesvg";
import { Gavel, Car, KeySquare, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="container mt-2 mb-md-3 mb-lg-4 mb-xl-5">
      <div className="row align-items-center align-items-lg-stretch mb-2 mb-sm-3">
        {/* Parallax gfx */}
        <div className="col-xl-7 col-md-6 d-flex justify-content-center justify-content-md-end overflow-hidden order-md-2 mt-n5 mt-sm-n4 mt-md-0">
          <div className="position-relative mt-5" style={{ maxWidth: "660px" }}>
            <div
              className="bg-gradient-primary position-absolute start-0 bottom-0 w-100 rounded-3 opacity-15"
              style={{ height: "95%" }}
            ></div>
            <div className="parallax zindex-2">
              <div
                className="parallax-layer zindex-2 mb-n3 rounded-3 shadow-lg"
                data-depth="0.1"
              >
                <figure className="position-absolute top-0 start-0 translate-middle mt-2">
                  <Decorativesvg className="fill-current text-blue-500" />
                </figure>
                <img
                  src="assets/img/landing/software-agency-1/panelshop.jpg"
                  alt="Device"
                  className="rounded-3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="col-xl-5 col-md-6 d-flex flex-column order-md-1">
          <div
            className="text-center text-md-start mt-5 mt-sm-5 mb-5"
            style={{
              backgroundImage: "url(assets/img/landing/pattern.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <h3 className="display-4 mb-4 text-gradient-primary">
              Smash Repair and Towing with Urban Panel
            </h3>
            <p className="fs-lg mb-0">
              Odio venenatis a, non egestas ut ultrices ultrices quis orci ipsum
              eu tellus tempor sed amet mauris pellentesque ut vitae.
            </p>
          </div>

          {/* Features Row 1 */}
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start mt-4">
            <div className="d-flex align-items-center w-100 pe-xxl-2 mb-3 mb-sm-0">
               <img src="assets/img/siteicons/mechanic.png" width="75px" alt="" />
              <div className="ps-2 ms-1">Panel & Smash Repairs</div>
            </div>
            <div className="vr d-none d-sm-block text-border my-2 mx-4"></div>
            <div className="d-flex align-items-center w-100 ps-xxl-2">
                <img src="assets/img/siteicons/service.png" width="68px" alt="" />
              <div className="ps-2 ms-1">Quality Assurance</div>
            </div>
          </div>

          {/* Features Row 2 */}
          <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start mt-4">
            <div className="d-flex align-items-center w-100 pe-xxl-2 mb-3 mb-sm-0">
              <img src="assets/img/siteicons/car.png" width="85px" alt="" />
              <div className="ps-2 ms-1">Free Pickup & Delivery</div>
            </div>
            <div className="vr d-none d-sm-block text-border my-2 mx-4"></div>
            <div className="d-flex align-items-center w-100 ps-xxl-2">
              <img src="assets/img/siteicons/backup-car.png" width="85px" alt="" />
              <div className="ps-2 ms-1">Backup Cars</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
