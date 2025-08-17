import React from "react";

const Testimonials = () => {
  return (
<section className="container-xxl py-5  bg-body-secondary" >
<div className="row">
  <div className="col-md-4 d-none d-md-block">

    {/* Swiper tabs (Author images) */}
    <div className="swiper-tabs">

      {/* Author 1 image */}
      <div id="author-1" className="card bg-transparent border-0 swiper-tab active">
        <div className="card-body p-0 rounded-3 bg-size-cover bg-repeat-0 bg-position-top-center" style={{backgroundImage: "url(assets/img/testimonials/03.jpg)"}}></div>
        <div className="card-footer d-flex w-100 border-0 pb-0">
          <img src="assets/img/brands/01.svg" width="160" className="d-none d-xl-block" alt="Company logo" />
          <div className="border-start-xl ps-xl-4 ms-xl-2">
            <h5 className="fw-semibold lh-base mb-0">Ralph Edwards</h5>
            <span className="fs-sm text-muted">Head of Marketing <span className="d-xl-none d-inline">at Lorem Ltd.</span></span>
          </div>
        </div>
      </div>

      {/* Author 2 image */}
      <div id="author-2" className="card bg-transparent border-0 swiper-tab">
        <div className="card-body p-0 rounded-3 bg-size-cover bg-repeat-0 bg-position-top-center" style={{backgroundImage: "url(assets/img/testimonials/02.jpg)"}}></div>
        <div className="card-footer d-flex w-100 border-0 pb-0">
          <img src="assets/img/brands/02.svg" width="160" className="d-none d-xl-block" alt="Company logo" />
          <div className="border-start-xl ps-xl-4 ms-xl-2">
            <h5 className="fw-semibold lh-base mb-0">Annette Black</h5>
            <span className="fs-sm text-muted">Strategic Advisor <span className="d-xl-none d-inline">at Company LLC</span></span>
          </div>
        </div>
      </div>

      {/* Author 3 image */}
      <div id="author-3" className="card bg-transparent border-0 swiper-tab">
        <div className="card-body p-0 rounded-3 bg-size-cover bg-repeat-0 bg-position-top-center" style={{backgroundImage: "url(assets/img/testimonials/01.jpg)"}}></div>
        <div className="card-footer d-flex w-100 border-0 pb-0">
          <img src="assets/img/brands/04.svg" width="160" className="d-none d-xl-block" alt="Company logo" />
          <div className="border-start-xl ps-xl-4 ms-xl-2">
            <h5 className="fw-semibold lh-base mb-0">Darrell Steward</h5>
            <span className="fs-sm text-muted">Project Manager <span className="d-xl-none d-inline">at Ipsum Ltd.</span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-8">
    <div className="card border-0 shadow-sm p-4 p-xxl-5 ms-xxl-5">

      {/* Slider prev/next buttons + Quotation mark */}
      <div className="d-flex justify-content-between pb-4 mb-2">
        <span className="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
          <i className="bx bxs-quote-left"></i>
        </span>
        <div className="d-flex">
          <button type="button" id="prev2" className="btn btn-prev btn-icon btn-sm me-2" aria-label="Previous">
            <i className="bx bx-chevron-left"></i>
          </button>
          <button type="button" id="next2" className="btn btn-next btn-icon btn-sm ms-2" aria-label="Next">
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>   
      
      {/* Slider */}
      <div className="swiper mx-0 mb-md-n2 mb-xxl-n3" data-swiper-options='{
        "spaceBetween": 24,
        "loop": true,
        "tabs": true,
        "pagination": {
          "el": ".swiper-pagination",
          "clickable": true
        },
        "navigation": {
          "prevEl": "#prev2",
          "nextEl": "#next2"
        }
      }'>
        <div className="swiper-wrapper">

          {/* Item */}
          <div className="swiper-slide h-auto" data-swiper-tab="#author-1">
            <figure className="card h-100 position-relative border-0 bg-transparent">
              <blockquote className="card-body p-0 mb-0">
                <p className="fs-lg mb-0">Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa. Tortor ullamcorper lacus. Pellentesque lectus adipiscing aenean volutpat tortor habitant.</p>
              </blockquote>
              <figcaption className="card-footer border-0 d-sm-flex d-md-none w-100 pb-2">
                <div className="d-flex align-items-center border-end-sm pe-sm-4 me-sm-2">
                  <img src="assets/img/avatar/05.jpg" width="48" className="rounded-circle" alt="Ralph Edwards" />
                  <div className="ps-3">
                    <h5 className="fw-semibold lh-base mb-0">Ralph Edwards</h5>
                    <span className="fs-sm text-muted">Head of Marketing</span>
                  </div>
                </div>
                <img src="assets/img/brands/01.svg" width="160" className="d-block mt-2 ms-5 mt-sm-0 ms-sm-0" alt="Company logo" />
              </figcaption>
            </figure>
          </div>

          {/* Item */}
          <div className="swiper-slide h-auto" data-swiper-tab="#author-2">
            <figure className="card h-100 position-relative border-0 bg-transparent">
              <blockquote className="card-body p-0 mb-0">
                <p className="fs-lg mb-0">Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet. Nascetur lobortis diam, duis orci.</p>
              </blockquote>
              <figcaption className="card-footer border-0 d-sm-flex d-md-none w-100 pb-2">
                <div className="d-flex align-items-center border-end-sm pe-sm-4 me-sm-2">
                  <img src="assets/img/avatar/06.jpg" width="48" className="rounded-circle" alt="Annette Black" />
                  <div className="ps-3">
                    <h5 className="fw-semibold lh-base mb-0">Annette Black</h5>
                    <span className="fs-sm text-muted">Strategic Advisor</span>
                  </div>
                </div>
                <img src="assets/img/brands/02.svg" width="160" className="d-block mt-2 ms-5 mt-sm-0 ms-sm-0" alt="Company logo" />
              </figcaption>
            </figure>
          </div>

          {/* Item */}
          <div className="swiper-slide h-auto" data-swiper-tab="#author-3">
            <figure className="card h-100 position-relative border-0 bg-transparent">
              <blockquote className="card-body p-0 mb-0">
                <p className="fs-lg mb-0">Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare id mattis auctor aliquam volutpat aliquet. Odio lectus viverra eu blandit nunc malesuada vitae eleifend pulvinar. In ac fermentum sit in orci.</p>
              </blockquote>
              <figcaption className="card-footer border-0 d-sm-flex d-md-none w-100 pb-2">
                <div className="d-flex align-items-center border-end-sm pe-sm-4 me-sm-2">
                  <img src="assets/img/avatar/01.jpg" width="48" className="rounded-circle" alt="Darrell Steward" />
                  <div className="ps-3">
                    <h5 className="fw-semibold lh-base mb-0">Darrell Steward</h5>
                    <span className="fs-sm text-muted">Project Manager</span>
                  </div>
                </div>
                <img src="assets/img/brands/04.svg" width="160" className="d-block mt-2 ms-5 mt-sm-0 ms-sm-0" alt="Company logo" />
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Pagination (bullets) */}
        <div className="swiper-pagination position-relative pt-3 mt-4 d-none d-md-flex"></div>
      </div>        
    </div>
  </div>
</div>
</section>
  );
};

export default Testimonials;
