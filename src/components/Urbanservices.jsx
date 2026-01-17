"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Urbanservices = ({ data }) => {
  if (!data) return null;

  const { heading, subheading, services } = data;

  return (
    <section 
      className="py-5 my-5"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
        position: "relative",
      }}
    >
      <div className="container position-relative">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2
            className="mb-3"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: "700",
              color: "#1a1a1a",
            }}
          >
            {heading}
          </h2>

          {/* Subtitle */}
          {subheading && (
            <p
              className="mx-auto"
              style={{
                maxWidth: "700px",
                fontSize: "1.125rem",
                color: "#555",
                lineHeight: "1.7",
              }}
            >
              {subheading}
            </p>
          )}
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          grabCursor={true}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          loop={true}
          loopAdditionalSlides={3}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-5"
          style={{ padding: "0 10px" }}
        >
          {services?.map((item, index) => {
            const mainImage = item.frontImage;

            return (
              <SwiperSlide key={item.id}>
                <a
                  href={item.linkUrl || `/services/${item.slug}`}
                  className="d-block"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="position-relative rounded-3 overflow-hidden"
                    style={{
                      height: "420px",
                      transition: "all 0.3s ease",
                      backgroundColor: "white",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      border: "1px solid #e9ecef",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow = "0 12px 35px rgba(0,0,0,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                    }}
                  >
                    {/* Number Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "20px",
                        left: "20px",
                        width: "45px",
                        height: "45px",
                        backgroundColor: "#ffa500",
                        color: "white",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        zIndex: 3,
                        boxShadow: "0 4px 12px rgba(255, 165, 0, 0.4)",
                      }}
                    >
                      {index + 1}
                    </div>

                    {/* Background Image */}
                    {mainImage?.url && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "60%",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={mainImage.url}
                          alt={mainImage.alternativeText || item.title}
                          fill
                          style={{ 
                            objectFit: "cover",
                            transition: "transform 0.3s ease",
                          }}
                          unoptimized={true}
                          onMouseEnter={(e) => {
                            e.target.style.transform = "scale(1.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = "scale(1)";
                          }}
                        />
                        {/* Subtle gradient overlay */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "40%",
                            background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
                          }}
                        />
                      </div>
                    )}

                    {/* Content Area */}
                    <div
                      className="position-absolute bottom-0 w-100 p-4"
                      style={{
                        backgroundColor: "white",
                        height: "40%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      {/* Title */}
                      <h3
                        className="mb-2"
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "700",
                          color: "#1a1a1a",
                          lineHeight: "1.3",
                        }}
                      >
                        {item.title}
                      </h3>

                      {/* Summary */}
                      <p
                        className="mb-3"
                        style={{
                          fontSize: "0.95rem",
                          color: "#666",
                          lineHeight: "1.5",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {item.summary}
                      </p>

                      {/* Learn More Link */}
                      <div
                        className="d-flex align-items-center"
                        style={{
                          color: "#ffa500",
                          fontWeight: "600",
                          fontSize: "0.95rem",
                        }}
                      >
                        Learn More
                        <i
                          className="bx bx-right-arrow-alt ms-2"
                          style={{
                            fontSize: "1.5rem",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </div>
                    </div>

                    {/* Small accent line at bottom */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "4px",
                        backgroundColor: "#ffa500",
                      }}
                    />
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Pagination */}
        <div className="custom-pagination text-center mt-4"></div>
      </div>

      <style jsx global>{`
        .custom-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }
        
        .custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ccc;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .custom-pagination .swiper-pagination-bullet-active {
          background: #ffa500;
          width: 30px;
          height: 10px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
};

export default Urbanservices;