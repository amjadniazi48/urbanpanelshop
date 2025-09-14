"use client"
import { ArrowRight } from "lucide-react"

const About = () => {
  return (
    <section className="container my-5 py-lg-5 py-md-4 py-3">
      <div className="row gy-4 py-xl-3">
        <div className="col-md-6">
          <img src="assets/img/landing/software-agency-1/panelshop.jpg" alt="Image" className="rounded-3 shadow-lg" />
        </div>
        <div className="col-lg-5 col-md-6 offset-lg-1 d-flex">
          <div className="align-self-center ps-lg-0 ps-md-4">
            <h2 className="display-3 mb-lg-4 mb-3 text-gradient-primary">About Urban Panel Shop</h2>
            <p className="mb-4 pb-lg-3 fs-lg">
              Erat pharetra sed at fringilla etiam nullam platea fringilla. Gravida sodales sit mauris amet massa justo.
              Egestas ipsum amet tortor hendrerit amet phasellus adipiscing. Eget porta posuere pellentesque sed commodo
              gravida dignissim dignissim iaculis. Elementum nibh duis at in.
            </p>

            <a
              href="#"
              className="btn btn-lg btn-outline-primary d-inline-flex align-items-center"
              style={{
                borderColor: "#f7a604",
                color: "#f7a604",
                backgroundColor: "transparent",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#f7a604"
                e.target.style.color = "#000000"
                const arrow = e.target.querySelector(".arrow-icon")
                if (arrow) {
                  arrow.style.transform = "translateX(4px)"
                  arrow.style.color = "#000000"
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent"
                e.target.style.color = "#f7a604"
                const arrow = e.target.querySelector(".arrow-icon")
                if (arrow) {
                  arrow.style.transform = "translateX(0px)"
                  arrow.style.color = "#f7a604"
                }
              }}
            >
              More about us &nbsp;
              <ArrowRight
                size={20}
                strokeWidth={2}
                className="ms-2 arrow-icon"
                style={{
                  transition: "all 0.3s ease",
                  transform: "translateX(0px)",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
