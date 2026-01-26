"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Hero = ({ data }) => {
  console.log("Hero component data:", data);

  if (!data || data.__component !== "blocks.swiper-hero") {
    console.warn("Invalid or missing hero block data");
    return null;
  }

  const bgImage = data.backgroundImage?.[0];
  const slides = data.Swiper || [];

//  console.log("Background Image:", bgImage);
 // console.log("Slides:", slides);

  if (slides.length === 0) {
   // console.warn("No slides found in Swiper data");
    return null;
  }

  return (
    <section
      className="position-relative"
      style={{
        backgroundColor: "#0f172a",
        minHeight: "650px",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Parallax Effect */}
      {bgImage?.url && (
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url(${bgImage.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            zIndex: 0,
          }}
        />
      )}

      {/* Modern Gradient Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.75) 50%, rgba(15, 23, 42, 0.85) 100%)",
          zIndex: 1,
        }}
      />

      {/* Decorative Elements */}
      <div
        className="position-absolute"
        style={{
          top: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255, 165, 0, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 1,
        }}
      />
      <div
        className="position-absolute"
        style={{
          bottom: "10%",
          left: "5%",
          width: "350px",
          height: "350px",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(60px)",
          zIndex: 1,
        }}
      />

      {/* Navigation Buttons - Redesigned */}
      <button
        id="hero-prev"
        className="btn btn-icon position-absolute top-50 start-0 translate-middle-y d-none d-md-flex"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "white",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          marginLeft: "2rem",
          zIndex: 20,
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#ffa500";
          e.currentTarget.style.borderColor = "#ffa500";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
          e.currentTarget.style.boxShadow = "0 12px 32px rgba(255, 165, 0, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.2)";
        }}
      >
        <i className="bx bx-chevron-left" style={{ fontSize: "28px" }}></i>
      </button>

      <button
        id="hero-next"
        className="btn btn-icon position-absolute top-50 end-0 translate-middle-y d-none d-md-flex"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "white",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          marginRight: "2rem",
          zIndex: 20,
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#ffa500";
          e.currentTarget.style.borderColor = "#ffa500";
          e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
          e.currentTarget.style.boxShadow = "0 12px 32px rgba(255, 165, 0, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
          e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.2)";
        }}
      >
        <i className="bx bx-chevron-right" style={{ fontSize: "28px" }}></i>
      </button>

      {/* Swiper Container */}
      <div className="position-relative" style={{ zIndex: 10 }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11 col-12">
              <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                fadeEffect={{
                  crossFade: true,
                }}
                speed={1000}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  el: ".custom-pagination",
                  bulletClass: "swiper-pagination-bullet-custom",
                  bulletActiveClass: "swiper-pagination-bullet-active-custom",
                }}
                navigation={{
                  prevEl: "#hero-prev",
                  nextEl: "#hero-next",
                }}
                loop={slides.length > 1}
                style={{
                  minHeight: "650px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide
                    key={slide.id || index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="text-center"
                      style={{
                        width: "100%",
                        padding: "12rem 1.5rem 3rem",
                      }}
                    >
                      {/* Heading with Enhanced Typography */}
                      {slide.heading && (
                        <h1
                          className="mb-4"
                          style={{
                            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                            fontWeight: "800",
                            color: "white",
                            lineHeight: "1.15",
                            letterSpacing: "-0.02em",
                            textShadow: "0 4px 20px rgba(0,0,0,0.4)",
                            marginBottom: "1.25rem",
                            animation: "fadeInUp 0.8s ease-out",
                          }}
                        >
                          {slide.heading}
                        </h1>
                      )}

                      {/* Subheading with Accent Color */}
                      {slide.subheading && (
                        <h2
                          className="mb-3"
                          style={{
                            fontSize: "clamp(1rem, 2.5vw, 1.375rem)",
                            color: "#ffa500",
                            fontWeight: "600",
                            letterSpacing: "0.03em",
                            textTransform: "uppercase",
                            textShadow: "0 2px 10px rgba(255, 165, 0, 0.3)",
                            marginBottom: "1.5rem",
                            animation: "fadeInUp 0.8s ease-out 0.2s backwards",
                          }}
                        >
                          {slide.subheading}
                        </h2>
                      )}

                      {/* Summary with Better Readability */}
                      {slide.summary && (
                        <p
                          className="mb-4"
                          style={{
                            fontSize: "clamp(0.938rem, 2vw, 1.063rem)",
                            color: "rgba(255,255,255,0.92)",
                            maxWidth: "700px",
                            margin: "0 auto 2rem",
                            lineHeight: "1.7",
                            fontWeight: "400",
                            textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                            animation: "fadeInUp 0.8s ease-out 0.4s backwards",
                          }}
                        >
                          {slide.summary}
                        </p>
                      )}

                      {/* Enhanced CTA Button */}
                      <div style={{ animation: "fadeInUp 0.8s ease-out 0.6s backwards" }}>
                        <Link
                          href="/smash"
                          className="btn btn-lg"
                          style={{
                            backgroundColor: "#ffa500",
                            color: "#1a1a2e",
                            padding: "1.125rem 3rem",
                            fontSize: "1.063rem",
                            fontWeight: "700",
                            borderRadius: "12px",
                            textDecoration: "none",
                            display: "inline-block",
                            border: "none",
                            boxShadow: "0 8px 32px rgba(255, 165, 0, 0.35)",
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            letterSpacing: "0.5px",
                            position: "relative",
                            overflow: "hidden",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#ff9500";
                            e.target.style.transform = "translateY(-4px) scale(1.02)";
                            e.target.style.boxShadow = "0 12px 40px rgba(255, 165, 0, 0.45)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "#ffa500";
                            e.target.style.transform = "translateY(0) scale(1)";
                            e.target.style.boxShadow = "0 8px 32px rgba(255, 165, 0, 0.35)";
                          }}
                        >
                          Upload Your Smash
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Pagination Dots */}
              <div
                className="custom-pagination d-flex justify-content-center gap-2 mt-4"
                style={{ paddingBottom: "2rem" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .swiper-pagination-bullet-custom:hover {
          background-color: rgba(255, 255, 255, 0.6);
          transform: scale(1.2);
        }

        .swiper-pagination-bullet-active-custom {
          background-color: #ffa500;
          width: 32px;
          border-radius: 6px;
          border-color: #ffa500;
        }
      `}</style>
    </section>
  );
};

export default Hero;