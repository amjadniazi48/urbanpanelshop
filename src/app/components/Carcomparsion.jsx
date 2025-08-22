"use client";
import { AlignCenter, ChevronsLeftRight,Contact } from "lucide-react";

export default function Carcomparsion() {
  return (
    <div className=" bg-secondary p-5">
      <h2 className="h1 text-center pt-1 pb-4 mb-1 mb-lg-3">Recent Repairs</h2>
      <p style={{ textAlign: "center" }}>
        Take a look at our latest panel beating and smash repair projects in
        Melbourne
      </p>
      <img-comparison-slider style={{ width: "60%", marginLeft: "25%" }}>
        <figure slot="first" className="position-relative">
          <img src="/assets/img/portfolio/grid/2.webp" alt="Image before" />
          <figcaption className="badge position-absolute top-50 start-0 translate-middle-y bg-white rounded text-nav fs-sm fw-semibold lh-1 px-3 py-2 ms-3 ms-sm-4">
            Before
          </figcaption>
        </figure>

        <figure slot="second" className="position-relative">
          <img src="/assets/img/portfolio/grid/1.webp" alt="Image after" />
          <figcaption className="badge position-absolute top-50 end-0 translate-middle-y bg-white rounded text-nav fs-sm fw-semibold lh-1 px-3 py-2 me-3 me-sm-4">
            After
          </figcaption>
        </figure>
        <div slot="handle">
          <svg
            className="text-primary shadow-primary rounded-circle"
            width="36"
            height="36"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 36 36"
          >
            <g>
              <circle fill="currentColor" cx="18" cy="18" r="18" />
            </g>
            <path
              fill="#fff"
              d="M22.2,17.2h-8.3v-3.3L9.7,18l4.2,4.2v-3.3h8.3v3.3l4.2-4.2l-4.2-4.2V17.2z"
            />
          </svg>
          
        </div>
      </img-comparison-slider>
      <div className="position-relative py-lg-4">
         <a
                style={{marginLeft:"40%"}}
                href="#"
                className="btn btn-primary"  
                target="_blank"
                rel="noopener"
              >
                <Contact />
                &nbsp;&nbsp;Explore All Comparsions
              </a>
              </div>
    </div>
   
  );
}
