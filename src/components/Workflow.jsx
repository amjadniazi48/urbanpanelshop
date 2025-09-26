"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "./verticalStack.css";

const Workflow = ({ data }) => {
  console.log("this is the data for workflow", data);
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const handleScroll = (e) => {
      const scrollTop = containerRef.current.scrollTop;
      const slideHeight = window.innerHeight;
      const newIndex = Math.round(scrollTop / slideHeight);

      if (
        newIndex !== activeIndex &&
        newIndex >= 0 &&
        newIndex < data.Accordion.length
      ) {
        swiper.slideTo(newIndex);
        setActiveIndex(newIndex);
      }
    };

    const handleWheel = (e) => {
      const swiper = swiperRef.current?.swiper;
      if (!swiper) return;

      if (
        (e.deltaY > 0 && swiper.isEnd) ||
        (e.deltaY < 0 && swiper.isBeginning)
      ) {
        return;
      }

      e.preventDefault();
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [activeIndex, data?.Accordion?.length]);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const handleSlideChange = () => {
      setActiveIndex(swiper.activeIndex);
      if (containerRef.current) {
        containerRef.current.scrollTop =
          swiper.activeIndex * window.innerHeight;
      }
    };

    swiper.on("slideChange", handleSlideChange);
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, []);

  if (!data?.Accordion) return null;

  return (
    <>
      <div className="mt-5">
        <h2 className="text-center">
          Our Workflow - A simple{" "}
          <span
            className="badge rounded-circle"
            style={{ backgroundColor: "#E2571F" }}
          >
            4
          </span>{" "}
          - Step Process
        </h2>
      </div>
      <section className="vertical-stack-container" ref={containerRef}>
        <div className="custom-pagination">
          {data.Accordion.map((_, idx) => (
            <button
              key={idx}
              className={`pagination-badge ${
                idx === activeIndex ? "active" : ""
              }`}
              onClick={() => {
                swiperRef.current?.swiper.slideTo(idx);
                setActiveIndex(idx);
              }}
              style={{
                backgroundColor:
                  idx === activeIndex ? "#E2571F" : "rgba(226, 87, 31, 0.3)",
              }}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <Swiper
          ref={swiperRef}
          direction="vertical"
          slidesPerView={1}
          speed={1000}
          spaceBetween={0}
          mousewheel={{
            enabled: true,
            releaseOnEdges: true,
            sensitivity: 1,
          }}
          pagination={false}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, "-2%", -1],
            },
            next: {
              translate: [0, "100%", 0],
            },
          }}
          modules={[Mousewheel, Pagination, EffectCreative]}
          className="stack-swiper myswiper"
        >
          {data.Accordion.map((item, index) => (
            <SwiperSlide key={item.id}>
              {/* Added slide-content-wrapper here */}
              <div className="slide-content-wrapper">
                <div className="slide-content">
                  <div className="text-section">
                    <h3 className="text-white">{item.title}</h3>
                    <p>{item.summary}</p>
                    {item.ctaText && (
                      <a
                        href={item.ctaUrl || "#"}
                        className="btn btn-warning mt-3 inline-block"
                      >
                        {item.ctaText}
                      </a>
                    )}
                  </div>

                  {item.image?.url && (
                    <div className="image-section">
                      <Image
                        src={item.image.url}
                        width={600}
                        height={400}
                        alt={item.image.alternativeText || item.title}
                        className="rounded-3"
                        unoptimized={true}
                      />
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Workflow;
