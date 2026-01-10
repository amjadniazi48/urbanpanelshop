"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Urbanservices = ({ data }) => {
  if (!data) return null;

  const { heading, subheading, services } = data;

  return (
    <section className=" p-5" data-bs-theme="dark" style={{backgroundColor:"#151822"}}>
      {/* ✅ Heading */}
      <div className="d-flex align-items-center justify-content-center mb-4">
        <h6 className="display-6 text-warning text-center m-0">{heading}</h6>
      </div>

      {/* ✅ Subtitle */}
      <p
        className="mb-4 mx-auto pb-3 fs-lg text-center text-muted"
        style={{ maxWidth: "636px" }}
      >
        {subheading}
      </p>

      {/* ✅ Swiper */}
      <Swiper
        modules={[Pagination]}
        pagination={{
          el: ".custom-pagination", // attach to external div
          clickable: true,
        }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          560: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
        }}
      >
        {services?.map((item) => {
          const mainImage = item.frontImage; // ✅ use frontImage for component

          return (
            <SwiperSlide key={item.id}>
              <a
                href={item.linkUrl || `/services/${item.slug}`}
                className="card-portfolio position-relative d-block rounded-3 overflow-hidden"
              >
                {/* Overlay */}
                <span
                  className="position-absolute top-0 start-0 w-100 h-100 zindex-1"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%)",
                  }}
                ></span>

                {/* Text Content */}
                <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
                  <div className="px-md-3">
                    <h3 className="h4 text-white mb-0 d-flex align-items-center">
                  
                      {item.title}
                    </h3>
                    <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                      <span className="text-muted fs-xs text-truncate opacity-70 pe-3">
                        {item.summary}
                      </span>
                      <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                    </div>
                  </div>
                </div>

                {/* ✅ Front Image only */}
                {mainImage?.url && (
                  <div className="card-img">
                    <Image
                      src={mainImage.url}
                      alt={mainImage.alternativeText || item.title}
                      width={600}
                      height={400}
                      className="w-100 h-100 object-cover"
                      unoptimized={true}
                    />
                  </div>
                )}
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
        {/* ✅ External Pagination (below the slider) */}
      <div className="swiper-pagination custom-pagination position-relative bottom-0 pt-2 pt-md-3 mt-4"></div>
    </section>
  );
};

export default Urbanservices;
