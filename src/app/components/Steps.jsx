import React from "react";
import  { Smartphone, Car, Settings } from "lucide-react";
const Steps = () => {
  return (
    <section className="container mt-5 mb-5 pb-lg-5 pb-md-4 pb-3">
      <div className="mb-xl-3">
        <h2 className="h1 mb-md-5 mb-4 pb-xl-3 pb-lg-2 pb-md-0 pb-sm-2  text-gradient-primary text-uppercase text-center">
         Repair Workflow
        </h2>

        {/* Tabs */}
        <div className="row gy-4 gx-md-4 gx-3">
          {/* Nav tabs */}
          <div className="col-lg-4 col-sm-5 order-sm-1 order-2">
            <ul className="nav nav-tabs flex-column" role="tablist">
              <li className="nav-item mb-3">
                <a
                  href="#testimonial-1"
                  className="nav-link flex-md-row flex-sm-column align-items-md-center align-items-sm-start align-items-center p-md-4 p-3 rounded-3 fw-normal active"
                  data-bs-toggle="tab"
                  role="tab"
                >
                  <Smartphone   size={80}  strokeWidth={2} />&nbsp;&nbsp;
                  <div>
                    <span className="d-block mb-0 fs-lg fw-semibold">
                     Contact Us
                    </span>
                      Get in touch with urban panel via phone or upload your smash
                  </div>
                </a>
              </li>
              <li className="nav-item mb-3">
                <a
                  href="#testimonial-2"
                  className="nav-link flex-md-row flex-sm-column align-items-md-center align-items-sm-start align-items-center p-md-4 p-3 rounded-3 fw-normal"
                  data-bs-toggle="tab"
                  role="tab"
                >
                 <Car  size={120}  strokeWidth={2} />&nbsp;&nbsp;
                  <div>
                    <span className="d-block mb-0 fs-lg fw-semibold">
                     Drop Off or Pick Up
                    </span>
                 Get a quote at your nearest workshop or let Urban Panel tow it.


                  </div>
                </a>
              </li>
              <li className="nav-item mb-0">
                <a
                  href="#testimonial-3"
                  className="nav-link flex-md-row flex-sm-column align-items-md-center align-items-sm-start align-items-center p-md-4 p-3 rounded-3 fw-normal"
                  data-bs-toggle="tab"
                  role="tab"
                >
                  <Settings   size={80}  strokeWidth={2} />&nbsp;&nbsp;
                  <div>
                    <span className="d-block mb-0 fs-lg fw-semibold">
                     Repairs begin
                    </span>
                  Leave in a replacement car while we repair yours.

                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Tabs content */}
          <div className="col-sm-7 offset-lg-1 order-sm-2 order-1">
            <div className="tab-content ps-lg-0 ps-md-4">
              <div
                className="tab-pane fade show active"
                id="testimonial-1"
                role="tabpanel"
              >
                <h4 className="mb-3" style={{maxWidth: "22.875rem"}}>
                  “Cool and experienced team to develop your web application.”
                </h4>
                <div className="fs-sm text-nowrap">
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                </div>
                <p className="mt-md-4 mt-3 pt-lg-3 pt-md-2 mb-0 fs-lg">
                  Dolor, a eget elementum, integer nulla volutpat, nunc, sit.
                  Quam iaculis varius mauris magna sem. Egestas sed sed suscipit
                  dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis
                  hendrerit aliquam feugiat neque cras sed. Dictum quam integer
                  volutpat tellus, faucibus platea. Pulvinar turpis proin
                  faucibus at mauris. Sagittis gravida vitae porta enim, nulla
                  arcu fermentum massa volutpat pretium.
                </p>
              </div>
              <div className="tab-pane fade" id="testimonial-2" role="tabpanel">
                <h4 className="mb-3" style={{ maxWidth: "22.875rem" }}>
                  “Efficient and Innovative: Our Experience with Silicon.”
                </h4>
                <div className="fs-sm text-nowrap">
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                </div>
                <p className="mt-md-4 mt-3 pt-lg-3 pt-md-2 mb-0 fs-lg">
                  Vero minima sequi adipisci architecto dolorum, error animi
                  delectus dicta perferendis! A, exercitationem soluta quam
                  reprehenderit rem animi amet eligendi voluptates consequatur
                  ipsam pariatur necessitatibus laboriosam in illo eos molestias
                  ex explicabo eaque assumenda voluptatibus ducimus consectetur
                  perferendis! Architecto molestias, rerum reprehenderit amet
                  sunt natus fuga blanditiis suscipit.
                </p>
              </div>
              <div className="tab-pane fade" id="testimonial-3" role="tabpanel">
                <h4 className="mb-3" style={{ maxWidth: "22.875rem" }}>
                  “Exceptional Service and Quality Results.”
                </h4>
                <div className="fs-sm text-nowrap">
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                  <i className="bx bxs-star text-warning"></i>
                </div>
                <p className="mt-md-4 mt-3 pt-lg-3 pt-md-2 mb-0 fs-lg">
                  In quas adipisci assumenda voluptas eveniet obcaecati est quis
                  sapiente voluptatum iste porro blanditiis debitis ut beatae,
                  fugit quidem fugiat eum molestias? Dolore magni harum officia
                  tempore eos sapiente. Voluptatibus pariatur omnis libero unde
                  quasi optio, tenetur reprehenderit tempore necessitatibus
                  harum mollitia qui. Maxime, quas tempore. Sunt quaerat porro
                  facere blanditiis voluptatibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
