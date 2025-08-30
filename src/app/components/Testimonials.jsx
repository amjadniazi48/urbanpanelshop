import React from "react";

const Testimonials = () => {
  return (

  
      <section className=" py-5" style= {{backgroundColor:"#f1f1f1"}}>
        <div className="container py-2 py-md-4 py-lg-5">
          <h2 className="h1 text-center pb-3 pb-lg-0 mb-4 mb-lg-5">What Our Attendees Say</h2>
          <div className="position-relative px-sm-5 mx-auto" style={{maxWidth: "976px"}}>

           {/*Prev button */}
            <button type="button" id="prev" className="btn btn-prev btn-icon btn-sm position-absolute top-50 translate-middle-y start-0 d-none d-sm-inline-flex mt-n4" aria-label="Previous">
              <i className="bx bx-chevron-left"></i>
            </button>

           {/*Next button */}
            <button type="button" id="next" className="btn btn-next btn-icon btn-sm position-absolute top-50 translate-middle-y end-0 d-none d-sm-inline-flex mt-n4" aria-label="Next">
              <i className="bx bx-chevron-right"></i>
            </button>

           {/*Slider */}
            <div className="swiper swiper-nav-onhover pt-1 mx-md-2" data-swiper-options='{
              "spaceBetween": 12,
              "loop": true,
              "pagination": {
                "el": ".swiper-pagination",
                "clickable": true
              },
              "navigation": {
                "prevEl": "#prev",
                "nextEl": "#next"
              }
            }'>
              <div className="swiper-wrapper pt-4 pb-3">

               {/*Item */}
                <div className="swiper-slide h-auto px-2">
                  <figure className="card h-100 position-relative border-0 shadow-sm py-3 p-0 p-xxl-4 my-0">
                   <span className="btn btn-icon  btn-lg  pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-xxl-5" style={{backgroundColor:"#f7a604",color:"white"}}>
                      <i className="bx bxs-quote-left"></i>
                    </span>
                    <blockquote className="card-body mt-2 mb-2">
                      <p className="fs-lg mb-0">Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa lobortis facilisis.</p>
                    </blockquote>
                    <figcaption className="card-footer d-flex align-items-center border-0 pt-0 mt-n2 mt-lg-0">
                      <img src="assets/img/avatar/14.jpg" width="60" className="rounded-circle" alt="Annette Black" />
                      <div className="ps-3">
                        <h6 className="fw-semibold lh-base mb-0">Contact Us</h6>
                        <span className="fs-sm text-muted">QA Engineer in Company Name</span>
                      </div>
                    </figcaption>
                  </figure>
                </div>

               {/*Item */}
                <div className="swiper-slide h-auto px-2">
                  <figure className="card h-100 position-relative border-0 shadow-sm py-3 p-0 p-xxl-4 my-0">
                    <span className="btn btn-icon  btn-lg  pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-xxl-5" style={{backgroundColor:"#f7a604",color:"white"}}>
                      <i className="bx bxs-quote-left"></i>
                    </span>
                    <blockquote className="card-body mt-2 mb-2">
                      <p className="fs-lg mb-0">Id nibh sed purus eu. Viverra eu sed quam pellentesque magna ac sit odio. Mi at interdum hendrerit neque vulputate semper vulputate. Et augue lacinia magna tempor blandit dui porttitor in senectus. Porttitor nulla in ac in quis. Et ultrices lacus, nunc at nulla eu sodales. At aliquam euismod est in praesent ornare etiam id.</p>
                    </blockquote>
                    <figcaption className="card-footer d-flex align-items-center border-0 pt-0 mt-n2 mt-lg-0">
                      <img src="assets/img/avatar/11.jpg" width="60" className="rounded-circle" alt="Jerome Bell" />
                      <div className="ps-3">
                        <h6 className="fw-semibold lh-base mb-0">Jerome Bell</h6>
                        <span className="fs-sm text-muted">Co-founder of Lorem Company</span>
                      </div>
                    </figcaption>
                  </figure>
                </div>

               {/*Item */}
                <div className="swiper-slide h-auto px-2">
                  <figure className="card h-100 position-relative border-0 shadow-sm py-3 p-0 p-xxl-4 my-0">
                     <span className="btn btn-icon  btn-lg  pe-none position-absolute top-0 start-0 translate-middle-y ms-4 ms-xxl-5" style={{backgroundColor:"#f7a604",color:"white"}}>
                      <i className="bx bxs-quote-left"></i>
                    </span>
                    <blockquote className="card-body mt-2 mb-2">
                      <p className="fs-lg mb-0">Nec iaculis fermentum interdum habitasse feugiat massa id pellentesque. Ut porta gravida lobortis facilisis dui augue. Fringilla nunc porttitor eget dictum tempus. Lorem erat eu congue curabitur est. Pulvinar morbi pulvinar venenatis rhoncus egestas euismod massa mauris. Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus.</p>
                    </blockquote>
                    <figcaption className="card-footer d-flex align-items-center border-0 pt-0 mt-n2 mt-lg-0">
                      <img src="assets/img/avatar/13.jpg" width="60" className="rounded-circle" alt="Robert Fox" />
                      <div className="ps-3">
                        <h6 className="fw-semibold lh-base mb-0">Robert Fox</h6>
                        <span className="fs-sm text-muted">CEO of Ipsum Company</span>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>

             {/*Pagination */}
              <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
            </div>
          </div>
        </div>
      </section>


  );
};

export default Testimonials;
