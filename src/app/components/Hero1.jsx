import React from "react";
import { MoveRight } from "lucide-react";
const Hero = () => {
  return (
    <section
      className="jarallax bg-dark py-xxl-5"
      data-jarallax
      data-speed="0.4"
      data-bs-theme="dark"
    >
      <span className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark-translucent"></span>
      <div
        className="jarallax-img"
        style={{backgroundImage: "url(assets/img/landing/software-agency-1/carousel-bg-1.jpg)"}}
      ></div>
      <div className="position-relative text-center zindex-5 overflow-hidden pt-4 py-md-5">
        {/*Slider controls (Prev / next)*/}
        <button
          type="button"
          id="hero-prev"
          className="btn btn-prev btn-icon btn-xl bg-transparent shadow-none position-absolute top-50 start-0 translate-middle-y d-none d-md-inline-flex ms-n3 ms-lg-2"
          aria-label="Previous"
        >
          <i className="bx bx-chevron-left fs-1"></i>
        </button>
        <button
          type="button"
          id="hero-next"
          className="btn btn-next btn-icon btn-xl bg-transparent shadow-none position-absolute top-50 end-0 translate-middle-y d-none d-md-inline-flex me-n3 me-lg-2"
          aria-label="Next"
        >
          <i className="bx bx-chevron-right fs-1"></i>
        </button>

        {/*Slider*/}
        <div className="container text-center py-xl-5">
          <div className="row justify-content-center pt-lg-5">
            <div className="col-xl-8 col-lg-9 col-md-10 col-11">
              <div
                className="swiper pt-5 pb-4 py-md-5"
                data-swiper-options='{
                  "effect": "fade",
                  "speed": 500,
                  "autoplay": {
                    "delay": 5500,
                    "disableOnInteraction": false
                  },
                  "pagination": {
                    "el": ".swiper-pagination",
                    "clickable": true
                  },
                  "navigation": {
                    "prevEl": "#hero-prev",
                    "nextEl": "#hero-next"
                  }
                }'
              >
                <div className="swiper-wrapper">
                  {/*Item*/}
                  <div className="swiper-slide">
                    <h2 className="display-2 from-start mb-lg-4">
                      The Best IT Solutions for Your Business
                    </h2>
                    <div className="from-end">
                      <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                        We provide the wide range of high quality IT services
                        and best practices solutions to our customers making
                        their business better.
                      </p>
                    </div>
                    <div className="scale-up delay-1">
                      <a href="#" className="btn  btn-lg" 
                      style={{backgroundColor:"#f7a604",color:"#000000",boxShadow:"0 2px 8px rgba(0,0,0,0.3)"}}>
                        Start your project
                      </a>
                    </div>
                  </div>

                  {/*Item*/}
                  <div className="swiper-slide">
                    <h2 className="display-2 from-start mb-lg-4">
                      Award-Winning Software Development
                    </h2>
                    <div className="from-end">
                      <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                        We build complex web, desktop and mobile applications.
                        With us you get quality software and perfect service
                        every time.
                      </p>
                    </div>
                    <div className="scale-up delay-1">
                      <a href="#" className="btn   btn-lg" 
                      style={{backgroundColor:"#f7a604",color:"#000000",boxShadow:"0 2px 8px rgba(0,0,0,0.3)"}}>
                        View case studies
                      </a>
                    </div>
                  </div>

                  {/*Item*/}
                  <div className="swiper-slide">
                    <h2 className="display-2 from-start mb-lg-4">
                      24/7 Tech &amp; Business Support
                    </h2>
                    <div className="from-end">
                      <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                        We ensure lifetime support of all applications we've
                        built. Our support department is a team of professionals
                        who will assist you 24/7.
                      </p>
                    </div>
                    <div className="scale-up delay-1">
                      <a href="#" className="btn   btn-lg"
                       style={{backgroundColor:"#f7a604",color:"#000000",boxShadow:"0 2px 8px rgba(0,0,0,0.3)"}}>
                        Work with us
                      </a>
                    </div>
                  </div>
                </div>

                {/*Pagination (bullets)*/}
                <div className="swiper-pagination position-relative d-md-none pt-2 mt-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between position-relative zindex-5 pb-5">
        <div className="d-flex mb-4 mb-sm-0">
          <a
            href="#"
            className="btn btn-icon btn-secondary btn-linkedin rounded-circle me-2"
            aria-label="LinkedIn"
            style={{backgroundColor:"#f7a604",color:"#000000"}}
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="#"
            className="btn btn-icon btn-secondary btn-facebook rounded-circle me-2"
            aria-label="Facebook"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="#"
            className="btn btn-icon btn-secondary btn-twitter rounded-circle me-2"
            aria-label="Twitter"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="#"
            className="btn btn-icon btn-secondary btn-youtube rounded-circle me-2"
            aria-label="YouTube"
          >
            <i className="bx bxl-youtube"></i>
          </a>
        </div>
     
      </div>
    </section>
  );
};

export default Hero;
