"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Urbanservices = () => {
  return (
    <section className="bg-dark p-5" data-bs-theme="dark">
      {/* Heading */}
      <div className="d-flex align-items-center justify-content-center mb-4">
        <h2 className="h1 text-warning text-center m-0">
          Expert Panel & Paint Services you can trust
        </h2>
      </div>

      {/* Subtitle */}
      <p
        className="mb-4 mx-auto pb-3 fs-lg text-center text-white"
        style={{ maxWidth: "636px" }}
      >
        We create websites and mobile apps, marketing materials, branding,
        web design, UX/UI design and illustrations.
      </p>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          560: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
        }}
        className="pt-1"
      >
        {/* Item */}
        <SwiperSlide>
          <a
            href="#"
            className="card-portfolio position-relative d-block rounded-3 overflow-hidden"
          >
            <span
              className="position-absolute top-0 start-0 w-100 h-100 zindex-1"
              style={{
                background:
                  "linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%)",
              }}
            ></span>
            <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
              <div className="px-md-3">
                <h3 className="h4 text-white mb-0">E-commerce</h3>
                <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                  <span className="text-white fs-xs text-truncate opacity-70 pe-3">
                    Order processing, price suggestions, user research
                  </span>
                  <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                </div>
              </div>
            </div>
            <div className="card-img">
              <img
                src="assets/img/landing/saas-5/categories/ecommerce.jpg"
                alt="Ecommerce"
              />
            </div>
          </a>
        </SwiperSlide>

        {/* Item */}
        <SwiperSlide>
          <a
            href="#"
            className="card-portfolio position-relative d-block rounded-3 overflow-hidden"
          >
            <span
              className="position-absolute top-0 start-0 w-100 h-100 zindex-1"
              style={{
                background:
                  "linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%)",
              }}
            ></span>
            <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
              <div className="px-md-3">
                <h3 className="h4 text-white mb-0">Transportation</h3>
                <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                  <span className="text-white fs-xs text-truncate opacity-70 pe-3">
                    Itinerary planning, freight pricing calculations, etc.
                  </span>
                  <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                </div>
              </div>
            </div>
            <div className="card-img">
              <img
                src="assets/img/landing/saas-5/categories/transportation.jpg"
                alt="Transportation"
              />
            </div>
          </a>
        </SwiperSlide>

        {/* Item */}
        <SwiperSlide>
          <a
            href="#"
            className="card-portfolio position-relative d-block rounded-3 overflow-hidden"
          >
            <span
              className="position-absolute top-0 start-0 w-100 h-100 zindex-1"
              style={{
                background:
                  "linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%)",
              }}
            ></span>
            <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
              <div className="px-md-3">
                <h3 className="h4 text-white mb-0">Marketing</h3>
                <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                  <span className="text-white fs-xs text-truncate opacity-70 pe-3">
                    Market research, data visualization, user testing
                  </span>
                  <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                </div>
              </div>
            </div>
            <div className="card-img">
              <img
                src="assets/img/landing/saas-5/categories/marketing.jpg"
                alt="Marketing"
              />
            </div>
          </a>
        </SwiperSlide>

        {/* Item */}
        <SwiperSlide>
          <a
            href="#"
            className="card-portfolio position-relative d-block rounded-3 overflow-hidden"
          >
            <span
              className="position-absolute top-0 start-0 w-100 h-100 zindex-1"
              style={{
                background:
                  "linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%)",
              }}
            ></span>
            <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
              <div className="px-3">
                <h3 className="h4 text-white mb-0">Robotics</h3>
                <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                  <span className="text-white fs-xs text-truncate opacity-70 pe-3">
                    Enhancing robot learning, improve robotic precision
                  </span>
                  <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                </div>
              </div>
            </div>
            <div className="card-img">
              <img
                src="assets/img/landing/saas-5/categories/robotics.jpg"
                alt="Robotics"
              />
            </div>
          </a>
        </SwiperSlide>

        {/* Item */}
        <SwiperSlide>
          <a
            href="#"
            className="card-portfolio position-relative d-block rounded-3 overflow-hidden"
          >
            <span
              className="position-absolute top-0 start-0 w-100 h-100 zindex-1"
              style={{
                background:
                  "linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%)",
              }}
            ></span>
            <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
              <div className="px-3">
                <h3 className="h4 text-white mb-0">Programming</h3>
                <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                  <span className="text-white fs-xs text-truncate opacity-70 pe-3">
                    Code generation, code debugging and optimization
                  </span>
                  <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                </div>
              </div>
            </div>
            <div className="card-img">
              <img
                src="assets/img/landing/saas-5/categories/programming.jpg"
                alt="Programming"
              />
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Urbanservices;
