export default function Blog() {
  return (
  
      <section className="container-xxl py-5  bg-secondary" >
        <h2 className="h1 text-center pt-1 pb-4 mb-1 mb-lg-3">Latest News &amp; Tips</h2>
        <div className="position-relative px-xl-5">
          
         {/* Slider prev/next buttons */}
          <button type="button" id="prev-news" className="btn btn-prev btn-icon btn-sm position-absolute top-50 start-0 translate-middle-y d-none d-xl-inline-flex" aria-label="Previous">
            <i className="bx bx-chevron-left"></i>
          </button>
          <button type="button" id="next-news" className="btn btn-next btn-icon btn-sm position-absolute top-50 end-0 translate-middle-y d-none d-xl-inline-flex" aria-label="Next">
            <i className="bx bx-chevron-right"></i>
          </button>

         {/* Slider */}
          <div className="px-xl-2">
            <div className="swiper mx-n2" data-swiper-options='{
              "slidesPerView": 1,
              "loop": true,
              "pagination": {
                "el": ".swiper-pagination",
                "clickable": true
              },
              "navigation": {
                "prevEl": "#prev-news",
                "nextEl": "#next-news"
              },
              "breakpoints": {
                "500": {
                  "slidesPerView": 2
                },
                "1000": {
                  "slidesPerView": 3
                }
              }
            }'>
              <div className="swiper-wrapper">
    
               {/* Item */}
                <div className="swiper-slide h-auto pb-3">
                  <article className="card h-100 border-0 shadow-sm mx-2">
                    <div className="position-relative">
                      <a href="#" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
                      <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                        <i className="bx bx-bookmark"></i>
                      </a>
                      <img src="assets/img/landing/digital-agency/blog/04.jpg" className="card-img-top" alt="Image" />
                    </div>
                    <div className="card-body pb-4">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <a href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Diseases</a>
                        <span className="fs-sm text-muted">12 hours ago</span>
                      </div>
                      <h3 className="h5 mb-0">
                        <a href="#">Updates on COVID-19 vaccination efforts in your area</a>
                      </h3>
                    </div>
                    <div className="card-footer py-4">
                      <a href="#" className="d-flex align-items-center text-decoration-none">
                        <img src="assets/img/avatar/36.jpg" className="rounded" width="48" alt="Avatar" />
                        <div className="ps-3">
                          <h6 className="fs-base fw-semibold mb-0">Ralph Edwards</h6>
                          <span className="fs-sm text-muted">MBBS, MD Gynaecology</span>
                        </div>
                      </a>
                    </div>
                  </article>
                </div>
    
               {/* Item */}
                <div className="swiper-slide h-auto pb-3">
                  <article className="card h-100 border-0 shadow-sm mx-2">
                    <div className="position-relative">
                      <a href="#" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
                      <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                        <i className="bx bx-bookmark"></i>
                      </a>
                      <img src="assets/img/landing/digital-agency/blog/02.jpg" className="card-img-top" alt="Image" />
                    </div>
                    <div className="card-body pb-4">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <a href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Healthy Tips</a>
                        <span className="fs-sm text-muted">1 day ago</span>
                      </div>
                      <h3 className="h5 mb-0">
                        <a href="#">New drug to halt dementia after multiple head injuries</a>
                      </h3>
                    </div>
                    <div className="card-footer py-4">
                      <a href="#" className="d-flex align-items-center text-decoration-none">
                        <img src="assets/img/avatar/37.jpg" className="rounded" width="48" alt="Avatar" />
                        <div className="ps-3">
                          <h6 className="fs-base fw-semibold mb-0">Jenny Wilson</h6>
                          <span className="fs-sm text-muted">Ph.D. Physiology</span>
                        </div>
                      </a>
                    </div>
                  </article>
                </div>
    
               {/* Item */}
                <div className="swiper-slide h-auto pb-3">
                  <article className="card h-100 border-0 shadow-sm mx-2">
                    <div className="position-relative">
                      <a href="#" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
                      <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                        <i className="bx bx-bookmark"></i>
                      </a>
                      <img src="assets/img/landing/digital-agency/blog/03.jpg" className="card-img-top" alt="Image" />
                    </div>
                    <div className="card-body pb-4">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <a href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Psychology</a>
                        <span className="fs-sm text-muted">Nov 24, 2023</span>
                      </div>
                      <h3 className="h5 mb-0">
                        <a href="#">Empowering women to make their health a priority</a>
                      </h3>
                    </div>
                    <div className="card-footer py-4">
                      <a href="#" className="d-flex align-items-center text-decoration-none">
                        <img src="assets/img/avatar/38.jpg" className="rounded" width="48" alt="Avatar" />
                        <div className="ps-3">
                          <h6 className="fs-base fw-semibold mb-0">Albert Flores</h6>
                          <span className="fs-sm text-muted">M.Sc. Clinical Neuroscience</span>
                        </div>
                      </a>
                    </div>
                  </article>
                </div>
    
               {/* Item */}
                <div className="swiper-slide h-auto pb-3">
                  <article className="card h-100 border-0 shadow-sm mx-2">
                    <div className="position-relative">
                      <a href="#" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
                      <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                        <i className="bx bx-bookmark"></i>
                      </a>
                      <img src="assets/img/landing/medical/news/04.jpg" className="card-img-top" alt="Image" />
                    </div>
                    <div className="card-body pb-4">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <a href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Health</a>
                        <span className="fs-sm text-muted">Oct 13, 2023</span>
                      </div>
                      <h3 className="h5 mb-0">
                        <a href="#">Vitamin D: benefits, deficiency, sources, and dosage</a>
                      </h3>
                    </div>
                    <div className="card-footer py-4">
                      <a href="#" className="d-flex align-items-center text-decoration-none">
                        <img src="assets/img/avatar/37.jpg" className="rounded" width="48" alt="Avatar" />
                        <div className="ps-3">
                          <h6 className="fs-base fw-semibold mb-0">Jenny Wilson</h6>
                          <span className="fs-sm text-muted">Ph.D. Physiology</span>
                        </div>
                      </a>
                    </div>
                  </article>
                </div>
              </div>
    
             {/* Pagination (bullets) */}
              <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
            </div>
          </div>
        </div>
      </section>
  )
}
