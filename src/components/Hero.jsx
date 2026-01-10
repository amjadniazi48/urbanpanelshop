"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const Hero = ({ data }) => {
  if (!data) return null;

  const { heading, summary, Icons, Swiper: swiperBlock } = data;

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

      {/* Background Image */}
      <div
        className="jarallax-img"
        style={{
          backgroundImage:
            "url(assets/img/landing/software-agency-2/hero-bg.png)",
        }}
      ></div>

      {/* Main Content */}
      <div className="min-vh-100 d-flex flex-column py-5">
        <div className="container position-relative zindex-5 pt-5 pb-5 my-auto">
          <div className="row align-items-center g-4 g-lg-5">
            {/* Left Column - Text Content */}
            <div className="col-12 col-lg-6 text-center text-lg-start">
              {heading && (
                <h1 className="display-3 display-lg-2 mb-4 pb-2">
                  {(() => {
                    const splitIndex =
                      heading.indexOf("Premium") + "Premium".length;
                    const firstPart = heading.slice(0, splitIndex).trim();
                    const secondPart = heading.slice(splitIndex).trim();
                    return (
                      <>
                        <span className="text-warning">{firstPart}</span>{" "}
                        {secondPart && (
                          <span className="text-white">{secondPart}</span>
                        )}
                      </>
                    );
                  })()}
                </h1>
              )}

              {summary && (
                <p
                  className="fs-5 text-body mb-4 mb-lg-5 mx-auto mx-lg-0"
                  style={{ maxWidth: "550px" }}
                >
                  {summary}
                </p>
              )}

              {/* Dynamic Heroicons */}
              {Icons && Icons.length > 0 && (
                <div className="row row-cols-2 row-cols-sm-4 g-3 g-md-4 mt-2">
                  {Icons.map((icon) => (
                    <div key={icon.id} className="col">
                      <div className="d-flex flex-column align-items-center">
                        <img
                          src={icon.iconImage?.url}
                          width="48"
                          height="48"
                          alt={icon.iconImage?.alternativeText || icon.title}
                          className="mb-2"
                        />
                        <p className="text-body small mb-0 text-center">
                          {icon.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Swiper Slider */}
            <div className="col-12 col-lg-6">
              <div className="position-relative">
                <Swiper
                  spaceBetween={0}
                  centeredSlides={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="hero-swiper rounded-3 shadow-lg"
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    margin: "0 auto",
                  }}
                >
                  {swiperBlock?.images?.map((image) => (
                    <SwiperSlide key={image.id}>
                      <div className="position-relative" style={{ paddingBottom: "105%" }}>
                        <Image
                          src={image.url}
                          fill
                          alt={image.alternativeText || image.name}
                          className="rounded-3"
                          style={{ objectFit: "cover" }}
                          unoptimized={true}
                          priority
                        />
                        <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hero-swiper {
          --swiper-theme-color: #f7a604;
          --swiper-navigation-size: 30px;
        }

        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          color: #0b0f19;
          transition: all 0.3s ease;
        }

        .hero-swiper .swiper-button-next:hover,
        .hero-swiper .swiper-button-prev:hover {
          background: #f7a604;
          color: white;
          transform: scale(1.1);
        }

        .hero-swiper .swiper-button-next::after,
        .hero-swiper .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          background: #f7a604;
          width: 24px;
          border-radius: 5px;
        }

        /* Responsive adjustments */
        @media (max-width: 991px) {
          .hero-swiper {
            max-width: 500px;
          }
        }

        @media (max-width: 767px) {
          .hero-swiper {
            max-width: 400px;
          }

          .hero-swiper .swiper-button-next,
          .hero-swiper .swiper-button-prev {
            width: 36px;
            height: 36px;
          }

          .hero-swiper .swiper-button-next::after,
          .hero-swiper .swiper-button-prev::after {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;