"use client";

import React from "react";
import Link from "next/link";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

const RecentRepairs = ({ data }) => {
  console.log("recent repairs data", data);
  return (
    <section className="container py-5 my-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1
          style={{
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            color: "#1a1a2e",
          }}
        >
          Recent Repair Comparisons
        </h1>
        <p
          className="mt-3 mx-auto"
          style={{
            maxWidth: "720px",
            color: "#4a5568",
            fontSize: "1.05rem",
            lineHeight: "1.7",
          }}
        >
          Real before & after vehicle repairs showcasing our craftsmanship,
          attention to detail, and professional restoration process.
        </p>
      </div>

      {/* Grid */}
      <div className="row g-4">
        {data?.map((item) => (
          <div key={item.documentId} className="col-lg-4 col-md-6">
            <article
              className="h-100 rounded-4 overflow-hidden"
              style={{
                background: "#ffffff",
                boxShadow: "0 18px 45px rgba(0,0,0,0.08)",
                transition: "all 0.35s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Compare Slider */}
              <div className="position-relative">
                <ReactCompareSlider
                  style={{
                    width: "100%",
                    height: "240px",
                  }}
                  handle={
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#ffa500",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "grab",
                        boxShadow: "0 6px 20px rgba(255, 165, 0, 0.5)",
                        border: "2px solid white",
                        transition: "transform 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  }
                  itemOne={
                    <div className="position-relative h-100 w-100">
                      <ReactCompareSliderImage
                        src={item.BeforeImage?.url}
                        alt={item.BeforeImage?.alternativeText || "Before repair"}
                        style={{ objectFit: "cover" }}
                      />
                      <span
                        className="position-absolute"
                        style={{
                          top: "14px",
                          left: "0",
                          backgroundColor: "#ffa500",
                          color: "#1a1a2e",
                          padding: "6px 14px",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          borderRadius: "0 8px 8px 0",
                          boxShadow: "0 4px 12px rgba(255,165,0,0.4)",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        Before
                      </span>
                    </div>
                  }
                  itemTwo={
                    <div className="position-relative h-100 w-100">
                      <ReactCompareSliderImage
                        src={item.AfterImage?.url}
                        alt={item.AfterImage?.alternativeText || "After repair"}
                        style={{ objectFit: "cover" }}
                      />
                      <span
                        className="position-absolute"
                        style={{
                          top: "14px",
                          right: "0",
                          backgroundColor: "#ffa500",
                          color: "#1a1a2e",
                          padding: "6px 14px",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          borderRadius: "8px 0 0 8px",
                          boxShadow: "0 4px 12px rgba(255,165,0,0.4)",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        After
                      </span>
                    </div>
                  }
                />
              </div>

              {/* Content */}
              <div className="p-4 d-flex flex-column">
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "#1a1a2e",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-3"
                  style={{
                    fontSize: "0.95rem",
                    color: "#4a5568",
                    lineHeight: "1.6",
                    flexGrow: 1,
                  }}
                >
                  {item.description.length > 120
                    ? item.description.slice(0, 120) + "..."
                    : item.description}
                </p>

                {/* CTA */}
                <Link
                  href={`/recent-repairs/${item.slug}`}
                  className="btn w-100 mt-3"
                  style={{
                    backgroundColor: "#ffa500",
                    color: "#1a1a2e",
                    fontWeight: 700,
                    borderRadius: "10px",
                    padding: "0.75rem",
                    boxShadow: "0 8px 26px rgba(255,165,0,0.35)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ff9500";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffa500";
                  }}
                >
                  View Comparison
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentRepairs;