"use client";

import React from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { Calendar, Tag, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// This would be your page component: app/repairs/[slug]/page.js
const RepairDetailPage = ({ params: paramsPromise }) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchRepairData = async () => {
      try {
        const params = await paramsPromise;
        const { slug } = params;

        // Use your API route pattern
        const response = await fetch(`/api/repairs/${slug}`);
        
        if (!response.ok) {
          throw new Error(`Failed with ${response.status}`);
        }

        const result = await response.json();
        
       // console.log("result", result);
        // Get the first item from the data array
        const repairData = result?.data?.[0] || null;
        setData(repairData);
      } catch (error) {
        console.error("Error fetching repair data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepairData();
  //  console.log("repair data", data);
  }, [paramsPromise]);

  if (loading) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div>
          <div className="spinner-border" style={{ color: "#ffa500", width: "3rem", height: "3rem" }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3" style={{ color: "#4a5568", fontSize: "1.1rem" }}>Loading repair details...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <h2 style={{ color: "#1a1a2e", fontSize: "2rem", fontWeight: 700 }}>Repair not found</h2>
        <p style={{ color: "#4a5568", marginTop: "1rem" }}>The repair you're looking for doesn't exist or has been removed.</p>
        <Link 
          href="/recent-repairs" 
          className="btn mt-4"
          style={{
            backgroundColor: "#ffa500",
            color: "#1a1a2e",
            padding: "0.75rem 2rem",
            fontSize: "1rem",
            fontWeight: 700,
            borderRadius: "10px",
            textDecoration: "none",
            border: "none"
          }}
        >
          Back to Recent Repairs
        </Link>
      </div>
    );
  }

  const {
    title,
    description,
    BeforeImage,
    AfterImage,
    slug,
    createdAt,
    publishedAt,
  } = data;

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Header Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%)",
          padding: "3rem 0",
        }}
      >
        <div className="container">
          <Link
            href="/recent-repairs"
            className="d-inline-flex align-items-center text-decoration-none mb-3"
            style={{
              color: "#ffa500",
              fontSize: "0.95rem",
              fontWeight: 600,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <ArrowLeft size={18} style={{ marginRight: "0.5rem" }} />
            Back to Recent Repairs
          </Link>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>

          <div className="d-flex flex-wrap gap-3">
            {slug && (
              <div
                className="d-flex align-items-center"
                style={{
                  backgroundColor: "rgba(255, 165, 0, 0.15)",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 165, 0, 0.3)",
                }}
              >
                <Tag size={16} style={{ color: "#ffa500", marginRight: "0.5rem" }} />
                <span style={{ color: "#ffa500", fontWeight: 600, fontSize: "0.9rem" }}>
                  {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
              </div>
            )}
            {publishedAt && (
              <div
                className="d-flex align-items-center"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <Calendar size={16} style={{ color: "#fff", marginRight: "0.5rem" }} />
                <span style={{ color: "#fff", fontWeight: 500, fontSize: "0.9rem" }}>
                  {new Date(publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-5">
        <div className="row g-5">
          {/* Compare Slider Section */}
          <div className="col-lg-8">
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "2rem",
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: "#1a1a2e",
                  marginBottom: "1.5rem",
                }}
              >
                Before & After Comparison
              </h2>

              {/* Comparison Slider with Window Design */}
              <div
                style={{
                  backgroundColor: "#D7D4CE",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
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
                      {title}
                    </div>
                  </div>

                  {/* Comparison Slider */}
                  <ReactCompareSlider
                    style={{
                      width: "100%",
                      height: "500px",
                    }}
                    handle={
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
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
                          e.currentTarget.style.transform = "scale(1.15)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
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
                          width="22"
                          height="22"
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
                            padding: "0.6rem 1.5rem",
                            fontSize: "0.95rem",
                            fontWeight: "700",
                            borderRadius: "0 10px 10px 0",
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
                            padding: "0.6rem 1.5rem",
                            fontSize: "0.95rem",
                            fontWeight: "700",
                            borderRadius: "10px 0 0 10px",
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

              <div
                className="mt-4"
                style={{
                  backgroundColor: "#f7fafc",
                  padding: "1rem 1.5rem",
                  borderRadius: "10px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#4a5568",
                    marginBottom: 0,
                    fontStyle: "italic",
                  }}
                >
                  💡 Tip: Drag the slider left and right to see the transformation
                </p>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="col-lg-4">
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: "2rem",
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                position: "sticky",
                top: "2rem",
              }}
            >
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "#1a1a2e",
                  marginBottom: "1.5rem",
                }}
              >
                Repair Details
              </h2>

              <div
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  color: "#4a5568",
                  marginBottom: "2rem",
                }}
              >
                {description}
              </div>

              {/* Key Highlights */}
              <div
                style={{
                  backgroundColor: "#f7fafc",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  marginBottom: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#1a1a2e",
                    marginBottom: "1rem",
                  }}
                >
                  What We Did
                </h3>
                <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
                  <li
                    className="d-flex align-items-start mb-2"
                    style={{ listStyle: "none" }}
                  >
                    <CheckCircle2
                      size={20}
                      style={{ color: "#27c93f", marginRight: "0.75rem", marginTop: "2px", flexShrink: 0 }}
                    />
                    <span style={{ color: "#4a5568", fontSize: "0.95rem" }}>
                      Professional assessment and damage evaluation
                    </span>
                  </li>
                  <li
                    className="d-flex align-items-start mb-2"
                    style={{ listStyle: "none" }}
                  >
                    <CheckCircle2
                      size={20}
                      style={{ color: "#27c93f", marginRight: "0.75rem", marginTop: "2px", flexShrink: 0 }}
                    />
                    <span style={{ color: "#4a5568", fontSize: "0.95rem" }}>
                      Expert repair using industry-leading techniques
                    </span>
                  </li>
                  <li
                    className="d-flex align-items-start mb-2"
                    style={{ listStyle: "none" }}
                  >
                    <CheckCircle2
                      size={20}
                      style={{ color: "#27c93f", marginRight: "0.75rem", marginTop: "2px", flexShrink: 0 }}
                    />
                    <span style={{ color: "#4a5568", fontSize: "0.95rem" }}>
                      Premium paint matching and finishing
                    </span>
                  </li>
                  <li
                    className="d-flex align-items-start"
                    style={{ listStyle: "none" }}
                  >
                    <CheckCircle2
                      size={20}
                      style={{ color: "#27c93f", marginRight: "0.75rem", marginTop: "2px", flexShrink: 0 }}
                    />
                    <span style={{ color: "#4a5568", fontSize: "0.95rem" }}>
                      Quality inspection and final detailing
                    </span>
                  </li>
                </ul>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact-us"
                className="btn w-100"
                style={{
                  backgroundColor: "#ffa500",
                  color: "#1a1a2e",
                  padding: "1rem",
                  fontSize: "1.05rem",
                  fontWeight: "700",
                  borderRadius: "12px",
                  textDecoration: "none",
                  display: "block",
                  textAlign: "center",
                  border: "none",
                  boxShadow: "0 8px 32px rgba(255, 165, 0, 0.35)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ff9500";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(255, 165, 0, 0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffa500";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(255, 165, 0, 0.35)";
                }}
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RepairDetailPage;