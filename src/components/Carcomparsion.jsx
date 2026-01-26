"use client"
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"
import { SearchCheck } from "lucide-react"
import Link from "next/link"
export default function CarComparison({ data }) {
  const { 
    heading,
    subheading,
    ctaText,
    ctaUrl,
    repair 
  } = data;

  const {
    title,
    description,
    BeforeImage,
    AfterImage,
    repair_category
  } = repair;

  return (
    <section
      className="container py-5 my-5 rounded-5"
      style={{
        background:"#F0EFEB",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Elements */}
      <div
        style={{
          background:"#F0EFEB",
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "400px",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          background:"#F0EFEB",
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center g-2 py-2">
          {/* Text Section */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="pe-lg-4">
              {/* Icon and Heading */}
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-4">
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: "rgba(255, 165, 0, 0.15)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "1rem",
                    border: "2px solid rgba(255, 165, 0, 0.3)",
                  }}
                >
                  <img
                    src="/assets/img/siteicons/car-comp.png"
                    width="42px"
                    alt="car repair"
                  />
                </div>
                <h2
                  className="mb-0"
                  style={{
                    fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
                    fontWeight: "800",
                    color: "#1a1a2e",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {heading}
                </h2>
              </div>

              <p
                className="text-center text-lg-start mb-4"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.125rem)",
                  lineHeight: "1.75",
                  color: "#4a5568",
                  marginBottom: "2.5rem",
                }}
              >
                {subheading}
              </p>

              <div className="text-center text-lg-start">
                <Link
                  href={ctaUrl}
                  className="btn btn-lg"
                  style={{
                    backgroundColor: "#ffa500",
                    color: "#1a1a2e",
                    padding: "1rem 2rem",
                    fontSize: "1.063rem",
                    fontWeight: "700",
                    borderRadius: "12px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    border: "none",
                    boxShadow: "0 8px 32px rgba(255, 165, 0, 0.35)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    letterSpacing: "0.5px",
                  }}
                  target="_self"
                  rel="noreferrer noopener"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ff9500";
                    e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(255, 165, 0, 0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffa500";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(255, 165, 0, 0.35)";
                  }}
                >
                  <SearchCheck style={{ marginRight: "0.5rem" }} size={20} />
                  {ctaText}
                </Link>
              </div>
            </div>
          </div>

          {/* Comparison Slider with Window Design */}
          <div className="col-lg-6 col-md-12">
            <div className="ps-lg-4 position-relative">
              {/* Outer Grey Border Container */}
              <div
                style={{
                  backgroundColor: "#D7D4CE",
                  borderRadius: "15px",
                  padding: "30px",
                 // boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                }}
              >
                {/* Window Container */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Window Header */}
                  <div
                    style={{
                      backgroundColor: "#f7fafc",
                      borderBottom: "1px solid #e2e8f0",
                      padding: "12px 16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {/* macOS-style dots */}
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: "#ff5f56",
                      }}
                    />
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: "#ffbd2e",
                      }}
                    />
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: "#27c93f",
                      }}
                    />
                    <div
                      style={{
                        flex: 1,
                        textAlign: "center",
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "#4a5568",
                        marginLeft: "-36px",
                      }}
                    >
                      {title || "Car Repair Comparison"}
                    </div>
                  </div>

                  {/* Window Content - Comparison Slider */}
                  <ReactCompareSlider
                    style={{
                      width: "100%",
                      height: "450px",
                    }}
                    handle={
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          backgroundColor: "#ffa500",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "grab",
                          boxShadow: "0 8px 24px rgba(255, 165, 0, 0.5)",
                          border: "3px solid white",
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
                          width="20"
                          height="20"
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
                          width="20"
                          height="20"
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
                          src={BeforeImage?.url}
                          alt={BeforeImage?.alternativeText || "Before repair image"}
                          style={{ objectFit: "cover" }}
                        />
                        <span 
                          className="position-absolute top-50 start-0 translate-middle-y"
                          style={{
                            backgroundColor: "#ffa500",
                            color: "#1a1a2e",
                            padding: "0.5rem 1.25rem",
                            fontSize: "0.875rem",
                            fontWeight: "700",
                            borderRadius: "0 8px 8px 0",
                            letterSpacing: "0.5px",
                            boxShadow: "0 4px 12px rgba(255, 165, 0, 0.4)",
                            textTransform: "uppercase",
                          }}
                        >
                          Before
                        </span>
                      </div>
                    }
                    itemTwo={
                      <div className="position-relative h-100 w-100">
                        <ReactCompareSliderImage
                          src={AfterImage?.url}
                          alt={AfterImage?.alternativeText || "After repair image"}
                          style={{ objectFit: "cover" }}
                        />
                        <span 
                          className="position-absolute top-50 end-0 translate-middle-y"
                          style={{
                            backgroundColor: "#ffa500",
                            color: "#1a1a2e",
                            padding: "0.5rem 1.25rem",
                            fontSize: "0.875rem",
                            fontWeight: "700",
                            borderRadius: "8px 0 0 8px",
                            letterSpacing: "0.5px",
                            boxShadow: "0 4px 12px rgba(255, 165, 0, 0.4)",
                            textTransform: "uppercase",
                          }}
                        >
                          After
                        </span>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}