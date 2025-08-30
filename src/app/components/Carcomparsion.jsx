"use client"
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"
import { SearchCheck } from "lucide-react"

export default function CarComparison() {
  return (
    <section
      className="container py-5 mt-5 mb-5 shadow-lg"
      style={{
        backgroundImage: "url(assets/img/landing/saas-3/cta-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "5rem",
        borderRadius: "1rem",
      }}
    >
      <div className="container">
        <div className="row align-items-center min-vh-50">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="pe-lg-4">
              <h3 className="display-5 text-center text-lg-start mb-3 text-warning text-uppercase fw-bold">
                Recent Repairs
              </h3>
              <p className="lead text-white text-center text-lg-start mb-4">
                Take a look at our latest panel beating and smash repair projects in Melbourne
              </p>
              <div className="text-center text-lg-start">
                <a
                  href="#"
                  className="btn btn-lg px-4 py-3"
                  style={{
                    backgroundColor: "#f7a604",
                    color: "#000000",
                    border: "none",
                    borderRadius: "0.5rem",
                    fontWeight: "600",
                  }}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SearchCheck className="me-2" size={20} />
                  EXPLORE ALL COMPARISONS
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="ps-lg-4">
              <ReactCompareSlider
                style={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "0.75rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
                handle={
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#3b82f6",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "grab",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                      border: "3px solid white",
                    }}
                  >
                    <div
                      style={{
                        width: "0",
                        height: "0",
                        borderTop: "6px solid transparent",
                        borderBottom: "6px solid transparent",
                        borderRight: "8px solid white",
                        marginRight: "2px",
                      }}
                    />
                    <div
                      style={{
                        width: "0",
                        height: "0",
                        borderTop: "6px solid transparent",
                        borderBottom: "6px solid transparent",
                        borderLeft: "8px solid white",
                        marginLeft: "2px",
                      }}
                    />
                  </div>
                }
                itemOne={
                  <ReactCompareSliderImage
                    src="/assets/img/portfolio/grid/2.webp"
                    srcSet="/assets/img/portfolio/grid/2.webp"
                    alt="Before repair image"
                    style={{ objectFit: "cover" }}
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src="/assets/img/portfolio/grid/1.webp"
                    srcSet="/assets/img/portfolio/grid/1.webp"
                    alt="After repair image"
                    style={{ objectFit: "cover" }}
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
