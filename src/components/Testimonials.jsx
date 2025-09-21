"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = ({ data }) => {
  if (!data?.reviews) return null;

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
            {data.reviews.map((item) => (
              <SwiperSlide key={item.id}>
                <figure className="card h-100 position-relative border-0 shadow-sm pt-4 p-0 p-xxl-4 my-0 mt-4">
                  <span
                    className="btn btn-icon btn-lg pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-xxl-5"
                    style={{ backgroundColor: "#f7a604", color: "white" }}
                  >
                    <i className="bx bxs-quote-left"></i>
                  </span>

                  <blockquote className="card-body mt-2 mb-2">
                    <p className="fs-lg mb-0">{item.review}</p>
                  </blockquote>

                  <figcaption className="card-footer d-flex align-items-center border-0 pt-0 mt-n2 mt-lg-0">
                    {item.image?.url ? (
                      <Image
                        src={item.image.url}
                        width={60}
                        height={60}
                        className="rounded-circle"
                        alt={item.image.alternativeText || item.name}
                        unoptimized={true}
                      />
                    ) : (
                      <div
                        className="rounded-circle  d-flex align-items-center justify-content-center"
                        style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: "#ec417a",
                        }}
                      >
                        <span className="text-white fs-4 fw-semibold ">
                          {item.name ? item.name.charAt(0).toUpperCase() : "U"}
                        </span>
                      </div>
                    )}
                    <div className="ps-3">
                      <h6 className="fw-semibold lh-base mb-0">{item.name}</h6>
                      <span className="fs-sm text-muted">{item.jobtitle}</span>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
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
