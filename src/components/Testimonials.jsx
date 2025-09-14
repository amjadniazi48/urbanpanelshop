"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#f1f1f1" }}>
      <div className="container py-2 py-md-4 py-lg-5">
        <h2 className="h1 text-center pb-3 pb-lg-0 mb-4 mb-lg-5">
          What Our Attendees Say
        </h2>

        <div
          className="position-relative px-sm-5 mx-auto"
          style={{ maxWidth: "976px" }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={12}
            loop={true}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".btn-next",
              prevEl: ".btn-prev",
            }}
            className="pt-1 mx-md-2"
          >
            {/* Item */}
            <SwiperSlide>
              <figure className="card h-100 position-relative border-0 shadow-sm pt-4 p-0 p-xxl-4 my-0 mt-4" >
                <span
                  className="btn btn-icon btn-lg pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-xxl-5"
                  style={{ backgroundColor: "#f7a604", color: "white" }}
                >
                  <i className="bx bxs-quote-left"></i>
                </span>
                <blockquote className="card-body mt-2 mb-2">
                  <p className="fs-lg mb-0">
                    Dolor, a eget elementum, integer nulla volutpat, nunc, sit.
                    Quam iaculis varius mauris magna sem. Egestas sed sed
                    suscipit dolor faucibus dui imperdiet at eget.
                  </p>
                </blockquote>
                <figcaption className="card-footer d-flex align-items-center border-0 pt-0 mt-n2 mt-lg-0">
                  <img
                    src="assets/img/avatar/14.jpg"
                    width="60"
                    className="rounded-circle"
                    alt="Annette Black"
                  />
                  <div className="ps-3">
                    <h6 className="fw-semibold lh-base mb-0">Contact Us</h6>
                    <span className="fs-sm text-muted">
                      QA Engineer in Company Name
                    </span>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>

            {/* Item */}
            <SwiperSlide>
              <figure
                className="card h-100 position-relative border-0 shadow-sm pt-4 p-0 p-xxl-4 my-0 mt-4"
                style={{ overflow: "visible" }} // 👈 important
              >
                <span
                  className="btn btn-icon btn-lg pe-none position-absolute top-0 start-0 translate-middle-y ms-4"
                  style={{
                    backgroundColor: "#f7a604",
                    color: "white",
                    zIndex: 2,
                  }}
                >
                  <i className="bx bxs-quote-left"></i>
                </span>

                <blockquote className="card-body mt-2 mb-2">
                  <p className="fs-lg mb-0">
                    Dolor, a eget elementum, integer nulla volutpat, nunc, sit.
                    Quam iaculis varius mauris magna sem.
                  </p>
                </blockquote>
                <figcaption className="card-footer d-flex align-items-center border-0 pt-0 mt-n2 mt-lg-0">
                  <img
                    src="assets/img/avatar/11.jpg"
                    width="60"
                    className="rounded-circle"
                    alt="Jerome Bell"
                  />
                  <div className="ps-3">
                    <h6 className="fw-semibold lh-base mb-0">Jerome Bell</h6>
                    <span className="fs-sm text-muted">
                      Co-founder of Lorem Company
                    </span>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>

            {/* Item */}
            <SwiperSlide>
              <figure className="card h-100 position-relative border-0 shadow-sm pt-4 p-0 p-xxl-4 my-0 mt-4">
                <span
                  className="btn btn-icon btn-lg pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-xxl-5"
                  style={{ backgroundColor: "#f7a604", color: "white" }}
                >
                  <i className="bx bxs-quote-left"></i>
                </span>
                <blockquote className="card-body mt-2 mb-2">
                  <p className="fs-lg mb-0">
                    Nec iaculis fermentum interdum habitasse feugiat massa id
                    pellentesque. Ut porta gravida lobortis facilisis dui augue.
                  </p>
                </blockquote>
                <figcaption className="card-footer d-flex align-items-center border-0 pt-0 mt-n2 mt-lg-0">
                  <img
                    src="assets/img/avatar/13.jpg"
                    width="60"
                    className="rounded-circle"
                    alt="Robert Fox"
                  />
                  <div className="ps-3">
                    <h6 className="fw-semibold lh-base mb-0">Robert Fox</h6>
                    <span className="fs-sm text-muted">
                      CEO of Ipsum Company
                    </span>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          </Swiper>

          {/* Prev button */}
          <button
            type="button"
            className="btn btn-prev btn-icon btn-sm position-absolute top-50 translate-middle-y start-0 d-none d-sm-inline-flex mt-n4"
            aria-label="Previous"
          >
            <i className="bx bx-chevron-left"></i>
          </button>

          {/* Next button */}
          <button
            type="button"
            className="btn btn-next btn-icon btn-sm position-absolute top-50 translate-middle-y end-0 d-none d-sm-inline-flex mt-n4"
            aria-label="Next"
          >
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
