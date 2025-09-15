"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Heroicons from "./ui/Heroicons";

const Hero = () => {
  // Sample slider images - replace with your actual images
  const sliderImages = [
    "assets/img/landing/software-agency-1/car-repair-1.jpeg",
    "assets/img/landing/software-agency-1/car-repair-2.jpeg",
    "assets/img/landing/software-agency-1/car-repair-3.jpeg",
    "assets/img/landing/software-agency-1/car-repair-4.jpg",
  ];

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
            <div className="col-12 col-lg-7 text-center text-lg-start mb-5 mb-lg-0">
              <h6 className="display-6 mb-md-4 pb-3 py-3">
                <span className="text-gradient-primary">Urban Panel Shop - Primium</span>
                &nbsp;  Smash Repair Services
              </h6>
              <p
                className="text-body mx-auto mx-lg-0 mb-md-5 mb-4 fs-5"
                style={{ maxWidth: "550px", textAlign: "justify" }}
              >
                At Urban Panel Shop, we restore cars to perfection, not just
                repair them. From minor dents to full rebuilds, our experts
                blend technology with craftsmanship. Every job delivers quality,
                confidence, and pride in a like-new drive.
              </p>
              <Heroicons />
            </div>

            {/* Right Column (Swiper Slider) */}
            <div className="col-12 col-lg-5 d-flex justify-content-lg-end justify-content-center py-5">
              <div
                className="position-relative d-inline-block rounded-3 w-100"
                style={{ maxWidth: "490px" }}
              >
                <Swiper
                  spaceBetween={0}
                  centeredSlides={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper rounded-3"
                >
                  {sliderImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="position-relative">
                        <img
                          src={image}
                          alt={`Car Showcase ${index + 1}`}
                          className="img-fluid rounded-3"
                          style={{
                            width: "100%",
                            height: "570px",
                            objectFit: "cover",
                          }}
                        />
                        {/* Overlay only on image */}
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40 rounded-3"></span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
