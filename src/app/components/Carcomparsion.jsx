"use client"
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider"
import { SearchCheck } from "lucide-react"

export default function CarComparison() {
  return (
    <div className=" bg-secondary p-5">
      <h2 className="h1 text-center pt-1 pb-4 mb-1 mb-lg-3">Recent Repairs</h2>
      <p style={{ textAlign: "center" }}>
        Take a look at our latest panel beating and smash repair projects in Melbourne
      </p>
      <ReactCompareSlider
        style={{ width: "60%", height: "auto", margin: "0 auto" }}
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
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
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
            alt="Image one"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="/assets/img/portfolio/grid/1.webp"
            srcSet="/assets/img/portfolio/grid/1.webp"
            alt="Image two"
          />
        }
      />

      <div className="position-relative py-lg-4 text-center">
        <a
          style={{ textAlign: "center" }}
          href="#"
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SearchCheck />
          &nbsp;&nbsp;Explore All Comparsions
        </a>
      </div>
    </div>
  )
}
