import React from 'react'



const Casestudies = () => {
  return (
        <section className=" p-5 bg-body-tertiary" >
        <div className="container">
          <h2 className="h1 text-center text-md-start mb-lg-4">Case Studies</h2>
          <div className="row align-items-center pb-5">
            <div className="col-md-8 col-lg-7 col-xl-6 text-center text-md-start">
              <p className="fs-lg  mb-md-0">We bring real solutions to each client’s problems through a deep understanding of their market, solution, and vision.</p>
            </div>
            <div className="col-md-4 col-lg-5 col-xl-6 d-flex justify-content-center justify-content-md-end">
              <a href="#" className="btn btn-outline-primary btn-lg">See all case studies</a>
            </div>
          </div>
        </div>

        <div className="position-relative py-lg-4 py-xl-5">

          {/* Swiper tabs */}
          <div className="swiper-tabs position-absolute top-0 start-0 w-100 h-100">
            <div id="image-1" className="jarallax position-absolute top-0 start-0 w-100 h-100 swiper-tab active" data-jarallax data-speed="0.4">
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
              <div className="jarallax-img" style= {{backgroundImage: "url(assets/img/landing/software-agency-1/case-study05.jpg)"}}></div>
            </div>
            <div id="image-2" className="jarallax position-absolute top-0 start-0 w-100 h-100 swiper-tab" data-jarallax data-speed="0.4">
              <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
              <div className="jarallax-img" style={{backgroundImage: "url(assets/img/landing/software-agency-1/case-study06.jpg)"}}></div>
            </div>
          </div>

          {/* Swiper slider */}
          <div className="container position-relative zindex-5 py-5">
            <div className="row py-2 py-md-3">
              <div className="col-xl-5 col-lg-7 col-md-9">

                {/* Slider controls (Prev / next) */}
                <div className="d-flex justify-content-center justify-content-md-start pb-3 mb-3" >
                  <button type="button" id="case-study-prev" className="btn btn-prev btn-icon btn-sm  me-2" aria-label="Previous" style={{backgroundColor: "#097c79", borderColor: "#097c79"}}>
                    <i className="bx bx-chevron-left" style={{color: "#fff"}}></i>
                  </button>
                  <button type="button" id="case-study-next" className="btn btn-next btn-icon btn-sm  ms-2" aria-label="Next" style={{backgroundColor: "#097c79", borderColor: "#097c79"}}>
                    <i className="bx bx-chevron-right" style={{color: "#fff"}}></i>
                  </button>
                </div>

                {/* Card */}
                <div className="card p-3"  style={{backgroundColor: "#097c79", borderColor: "#097c79"}}>
                  <div className="card-body">
                    <div className="swiper" data-swiper-options='{
                      "spaceBetween": 30,
                      "loop": true,
                      "tabs": true,
                      "pagination": {
                        "el": "#case-study-pagination",
                        "clickable": true
                      },
                      "navigation": {
                        "prevEl": "#case-study-prev",
                        "nextEl": "#case-study-next"
                      }
                    }'>
                      <div className="swiper-wrapper" >

                        {/* Item */}
                        <div className="swiper-slide" data-swiper-tab="#image-1">
                          <img src="assets/img/landing/software-agency-1/case-study-logo01.png" className="d-block mb-3" width="72" alt="Logo" />
                          <h3 className="mb-2 text-white">Complete Dent Repair & Body Restoration</h3>
                          <p className="fs-sm text-white border-bottom pb-3 mb-3">Payment Service Provider Company</p>
                          <p className="pb-2 pb-lg-3 mb-3 text-white">Aenean dolor elit tempus tellus imperdiet. Elementum, ac convallis morbi sit est feugiat ultrices. Cras tortor maecenas pulvinar nec ac justo. Massa sem eget semper...</p>
                          <a href="#" className="btn btn-secondary">View case study</a>
                        </div>

                        {/* Item */}
                        <div className="swiper-slide" data-swiper-tab="#image-2">
                          <img src="assets/img/landing/software-agency-1/case-study-logo02.png" className="d-block mb-3" width="72" alt="Logo" />
                          <h3 className="mb-2">Smart tech case study</h3>
                          <p className="fs-sm text-white border-bottom pb-3 mb-3">Scratch Removal & Surface Refinishing</p>
                          <p className="pb-2 pb-lg-3 mb-3 text-white">Adipiscing quis a at ligula. Gravida gravida diam rhoncus cursus in. Turpis sagittis tempor gravida phasellus sapien. Faucibus donec consectetur sed id sit nisl.</p>
                          <a href="#" className="btn btn-primary">View case study</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pagination (bullets) */}
                <div className="pt-4 mt-3" data-bs-theme="dark">
                  <div id="case-study-pagination" className="swiper-pagination position-relative bottom-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}

export default Casestudies