import React from "react";
import {
  MoveRight,
  Paintbrush,
  ShieldPlus,
  PaintRoller,
  BookCheck,
  Settings,
} from "lucide-react";
const Services = () => {
  return (
    <section className="row pb-lg-5 pb-md-4 pb-3 mt-5 p-5" >
      <div className="mb-xl-3">
        <h2 className="h1 mb-md-5 mb-4 pb-xl-3 pb-lg-2 pb-md-0 pb-sm-2 text-center">
          Explore Our Services
        </h2>

        {/*Tabs*/}
        <div className="row gy-4 gx-md-4 gx-3">
          {/*Nav tabs*/}
          <div className="col-lg-4 col-sm-5 order-sm-1 order-2">
            <ul className="nav nav-tabs flex-column" role="tablist">
              <li className="nav-item mb-3">
                <a
                  href="#testimonial-1"
                  className="nav-link services flex-md-row flex-sm-column align-items-md-center align-items-sm-start align-items-center p-md-4 p-3 rounded-3 fw-normal active"
                  data-bs-toggle="tab"
                  role="tab"
                >
                  <span className="fw-semibold">
                    <Paintbrush size={32} />
                    &nbsp; Ceramic Coating
                  </span>
                </a>
              </li>
              <li className="nav-item mb-3">
                <a
                  href="#testimonial-2"
                  className="nav-link services flex-md-row flex-sm-column align-items-md-center align-items-sm-start align-items-center p-md-4 p-3 rounded-3 fw-normal"
                  data-bs-toggle="tab"
                  role="tab"
                >
                  <span className="fw-semibold">
                    <ShieldPlus size={32} />
                    &nbsp; Paint Protection
                  </span>
                </a>
              </li>
              <li className="nav-item mb-0">
                <a
                  href="#testimonial-3"
                  className="nav-link  services flex-md-row flex-sm-column align-items-md-center align-items-sm-start align-items-center p-md-4 p-3 rounded-3 fw-normal"
                  data-bs-toggle="tab"
                  role="tab"
                >
                  <span className="fw-semibold">
                    <PaintRoller size={32} />
                    &nbsp; Paint Protection & Customizations
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/*Tabs content*/}
          <div className="col-sm-7 offset-lg-1 order-sm-2 order-1">
            <div className="tab-content ps-lg-0 ps-md-4">
              <div
                className="tab-pane fade show active"
                id="testimonial-1"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-md-6" style={{ minHeight: "350px" }}>
                    <div className="position-relative h-100">
                      <img
                        className="position-absolute img-fluid w-100 h-100"
                        src="/assets/img/services/service-6.jpg"
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-3">
                      15-1 Years Of Experience In Auto Servicing
                    </h3>
                    <p className="mb-4">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                      lorem et sit, sed stet lorem sit clita duo justo magna
                      dolore erat amet
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Quality
                      Servicing
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Expert
                      Workers
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Modern
                      Equipment
                    </p>
                    <a
                      href="#"
                      className="btn  py-3 px-5 mt-3"
                      style={{ backgroundColor: "#099994" }}
                    >
                      Read More &nbsp;
                      <MoveRight />
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="testimonial-2" role="tabpanel">
                 <div className="row">
                  <div className="col-md-6" style={{ minHeight: "350px" }}>
                    <div className="position-relative h-100">
                      <img
                        className="position-absolute img-fluid w-100 h-100"
                        src="/assets/img/services/service-7.jpg"
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-3">
                      15-1 Years Of Experience In Auto Servicing
                    </h3>
                    <p className="mb-4">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                      lorem et sit, sed stet lorem sit clita duo justo magna
                      dolore erat amet
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Quality
                      Servicing
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Expert
                      Workers
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Modern
                      Equipment
                    </p>
                    <a
                      href="#"
                      className="btn  py-3 px-5 mt-3"
                      style={{ backgroundColor: "#099994" }}
                    >
                      Read More &nbsp;
                      <MoveRight />
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="testimonial-3" role="tabpanel">
                 <div className="row">
                  <div className="col-md-6" style={{ minHeight: "350px" }}>
                    <div className="position-relative h-100">
                      <img
                        className="position-absolute img-fluid w-100 h-100"
                        src="/assets/img/services/service-8.jpg"
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-3">
                      15-1 Years Of Experience In Auto Servicing
                    </h3>
                    <p className="mb-4">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                      lorem et sit, sed stet lorem sit clita duo justo magna
                      dolore erat amet
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Quality
                      Servicing
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Expert
                      Workers
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Modern
                      Equipment
                    </p>
                    <a
                      href="#"
                      className="btn  py-3 px-5 mt-3"
                      style={{ backgroundColor: "#099994" }}
                    >
                      Read More &nbsp;
                      <MoveRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
