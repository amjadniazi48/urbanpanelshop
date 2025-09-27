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
      <div className="min-vh-100 d-flex flex-column py-2">
        <div className="container-fluid position-relative zindex-5 pt-1 pt-2 mt-auto mb-auto">
          <div className="row align-items-center">
            {/* Left Column */}
            <div className="col-12 col-lg-7 text-center text-lg-start mb-5 mb-lg-0">
              {heading && (
                <h6 className="display-6 mb-md-4 pb-3 py-3">
                  {(() => {
                    const splitIndex =
                      heading.indexOf("Premium") + "Premium".length; // include Premium
                    const firstPart = heading.slice(0, splitIndex).trim(); // up to Premium
                    const secondPart = heading.slice(splitIndex).trim(); // rest of heading
                    return (
                      <>
                        <span className="text-warning">{firstPart}</span>{" "}
                        {secondPart && (
                          <span className="text-white">{secondPart}</span>
                        )}
                      </>
                    );
                  })()}
                </h6>
              )}

              {summary && (
                <p
                  className="text-body mx-auto mx-lg-0 mb-md-5 mb-4 fs-5"
                  style={{ maxWidth: "550px", textAlign: "justify" }}
                >
                  {summary}
                </p>
              )}

              {/* ✅ Dynamic Heroicons */}
              {Icons && Icons.length > 0 && (
                <div className="row text-center g-3">
                  {Icons.map((icon) => (
                    <div key={icon.id} className="col-6 col-md-3">
                      <img
                        src={icon.iconImage?.url}
                        width="40"
                        alt={icon.iconImage?.alternativeText || icon.title}
                      />
                      <p className="mt-2 text-body small">{icon.title}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column (Swiper Slider) */}
            <div className="col-12 col-lg-5 d-flex justify-content-lg-end justify-content-center py-5">
              <div className="position-relative d-inline-block rounded-3 w-100">
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
                  {swiperBlock?.images?.map((image) => (
                    <SwiperSlide key={image.id}>
                      <div className="position-relative">
                        <Image
                          src={image.url}
                          width={600}
                          height={630}
                          alt={image.alternativeText || image.name}
                          objectFit="cover"
                          className="img-fluid rounded-3"
                          unoptimized={true}
                        />
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
