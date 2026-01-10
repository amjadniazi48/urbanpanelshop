"use client"
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"
import { SearchCheck } from "lucide-react"

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
      className="container py-5 mt-5 mb-5 shadow-lg"
      style={{
        backgroundImage: "url(/assets/img/landing/saas-3/cta-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "1rem",
      }}
    >
      <div className="container">
        <div className="row align-items-center min-vh-50">
          {/* Text Section */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="pe-lg-4">
              {/* Icon and Heading on same line */}
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-3">
                <img
                  src="/assets/img/siteicons/car-comp.png"
                  width="70px"
                  alt="car repair"
                  className="me-3"
                />
                <h6 className="display-6 mb-0 text-warning fw-bold">
                  {heading}
                </h6>
              </div>

              <p className="lead text-white text-center text-lg-start mb-4">
                {subheading}
              </p>
              <div className="text-center text-lg-start">
                <a
                  href={ctaUrl}
                  className="btn btn-lg px-4 py-3 btn-outline-warning"
                  style={{
                    borderRadius: "0.5rem",
                    fontWeight: "600",
                    marginTop: "2rem",
                  }}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <SearchCheck className="me-2" size={20} />
                  {ctaText}
                </a>
              </div>
            </div>
          </div>

          {/* Comparison Slider */}
          <div className="col-lg-6 col-md-12">
            <div className="ps-lg-4 position-relative">
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
                      backgroundColor: "#f7a604",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "grab",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                      border: "3px solid white",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
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
                      src={AfterImage.url}
                      alt={AfterImage.alternativeText || "Before repair image"}
                      style={{ objectFit: "cover" }}
                    />
                    <span className="badge position-absolute top-50 start-0 translate-middle-y rounded text-dark fs-sm fw-semibold lh-1 px-3 py-2 ms-3 ms-sm-4" style={{backgroundColor:"#F7A604"}}>
                      Before
                    </span>
                  </div>
                }
                itemTwo={
                  <div className="position-relative h-100 w-100">
                    <ReactCompareSliderImage
                      src={BeforeImage.url}
                      alt={BeforeImage.alternativeText || "After repair image"}
                      style={{ objectFit: "cover" }}
                    />
                    <span className="badge position-absolute top-50 end-0 translate-middle-y rounded text-dark fs-sm fw-semibold lh-1 px-3 py-2 me-3 me-sm-4" style={{backgroundColor:"#F7A604"}}>
                      After
                    </span>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}