"use client";

import React from "react";

const About = ({ data }) => {
  console.log("About component data:", data);

  // Validate data
  if (!data || data.__component !== "blocks.about-us") {
    console.warn("Invalid or missing about-us data");
    return null;
  }

  const { heading, subheading, summary, ctaText, ctaUrl, Icons, image } = data;

  return (
    <section 
      className="py-5" 
      style={{ 
        background: "linear-gradient(180deg, #ffffff 0%, #fafbfc 50%, #f4f7fa 100%)",
        position: "relative",
      }}
    >
      <div className="container py-4">
        <div className="row align-items-center g-5">
          {/* Left Column - Text Content */}
          <div className="col-lg-6 col-md-12 order-2 order-lg-1">
            <div className="pe-lg-4">
              {/* Subheading */}
              {subheading && (
                <div className="mb-3">
                  <span
                    style={{
                      color: "#ffa500",
                      fontWeight: "700",
                      fontSize: "0.813rem",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      display: "inline-block",
                    }}
                  >
                    {subheading}
                  </span>
                </div>
              )}

              {/* Main Heading */}
              {heading && (
                <h2
                  className="mb-4"
                  style={{
                    fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
                    fontWeight: "800",
                    lineHeight: "1.2",
                    color: "#1a1a2e",
                    marginBottom: "1.5rem",
                  }}
                >
                  {heading}
                </h2>
              )}

              {/* Summary */}
              {summary && (
                <p
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.8",
                    color: "#5a5a6e",
                    marginBottom: "2.5rem",
                  }}
                >
                  {summary}
                </p>
              )}

              {/* Service Icons */}
              {Icons && Icons.length > 0 && (
                <div className="mt-4">
                  <h3
                    className="mb-4"
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "700",
                      color: "#1a1a2e",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Our Expertise:
                  </h3>
                  <div className="row g-3 mb-4">
                    {Icons.map((icon, index) => (
                      <div key={icon.id || index} className="col-sm-6 col-12">
                        <div
                          className="d-flex align-items-center p-3"
                          style={{
                            backgroundColor: "#ffffff",
                            borderRadius: "12px",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            border: "1px solid #e8eaed",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                            cursor: "default",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-4px)";
                            e.currentTarget.style.boxShadow =
                              "0 8px 20px rgba(255, 165, 0, 0.12)";
                            e.currentTarget.style.borderColor = "#ffa500";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow =
                              "0 2px 8px rgba(0,0,0,0.04)";
                            e.currentTarget.style.borderColor = "#e8eaed";
                          }}
                        >
                          {/* Icon */}
                          {icon.iconImage?.url && (
                            <div
                              className="flex-shrink-0 me-3"
                              style={{
                                width: "44px",
                                height: "44px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#fff8f0",
                                borderRadius: "10px",
                                padding: "8px",
                              }}
                            >
                              <img
                                src={icon.iconImage.url}
                                alt={icon.iconImage.alternativeText || icon.title}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "contain",
                                }}
                              />
                            </div>
                          )}

                          {/* Title */}
                          <div className="flex-grow-1">
                            <p
                              className="mb-0"
                              style={{
                                fontSize: "0.938rem",
                                fontWeight: "600",
                                color: "#2d2d3a",
                                lineHeight: "1.5",
                              }}
                            >
                              {icon.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button - After Services */}
                  {ctaText && ctaUrl && (
                    <div className="mt-4">
                      <a
                        href={ctaUrl}
                        className="btn btn-lg"
                        style={{
                          backgroundColor: "#ffa500",
                          color: "#1a1a2e",
                          padding: "1rem 2.75rem",
                          fontSize: "1rem",
                          fontWeight: "700",
                          borderRadius: "8px",
                          textDecoration: "none",
                          display: "inline-block",
                          border: "none",
                          boxShadow: "0 4px 16px rgba(255, 165, 0, 0.25)",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          letterSpacing: "0.5px",
                          textTransform: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#ff9500";
                          e.target.style.transform = "translateY(-3px)";
                          e.target.style.boxShadow =
                            "0 8px 24px rgba(255, 165, 0, 0.35)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "#ffa500";
                          e.target.style.transform = "translateY(0)";
                          e.target.style.boxShadow =
                            "0 4px 16px rgba(255, 165, 0, 0.25)";
                        }}
                      >
                        {ctaText}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-6 col-md-12 order-1 order-lg-2">
            {image?.url && (
              <div
                className="position-relative"
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                  border: "1px solid #e8eaed",
                }}
              >
                <img
                  src={image.url}
                  alt={image.alternativeText || heading || "About Us"}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                    aspectRatio: image.width && image.height 
                      ? `${image.width} / ${image.height}` 
                      : "4 / 3",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom shadow gradient for smooth transition */}
      <div 
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.02))",
          pointerEvents: "none",
          shadow: "0px 0px 20px 0px #cdd0d3",
        }}
      />
    </section>
  );
};

export default About;