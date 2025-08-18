import React from "react";
import { MoveRight,Paintbrush,ShieldPlus,PaintRoller,BookCheck,Settings } from "lucide-react";
const Services = () => {
  return (

     <div className="row p-5 mt-5"  style={{backgroundColor: "#e4f0dd"}}>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        
          <h1 className="mb-5">Explore Our Services</h1>
        </div>
        <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-lg-4">
            <ul className="nav nav-tabs flex-column" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#"
                  data-bs-toggle="tab"
                  role="tab"
                  data-bs-target="#tab-pane-1"
                >
                <Paintbrush />&nbsp;
                Ceramic Coating
                </a>
              </li>
              <li className="nav-item"  >
                <a className="nav-link text-white" href="#" data-bs-toggle="tab" role="tab" data-bs-target="#tab-pane-2" style={{backgroundColor: "#099994"}}>
                 <ShieldPlus />&nbsp;
                 Paint Protection
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#" data-bs-toggle="tab" role="tab" data-bs-target="#tab-pane-3" style={{backgroundColor: "#099994"}}>
                <PaintRoller />&nbsp;
                Paint Protection and Customizations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#" data-bs-toggle="tab" role="tab" data-bs-target="#tab-pane-4" style={{backgroundColor: "#099994"}}>
                    
                 <BookCheck />&nbsp;
                Paint Correction
                </a>
              </li>
               <li className="nav-item">
                <a className="nav-link text-white" href="#" data-bs-toggle="tab" role="tab" data-bs-target="#tab-pane-4" style={{backgroundColor: "#099994"}}>
                    
                 <Settings />&nbsp;
                 Bumper Repair and Replacement
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-8">
            <div className="tab-content w-100">
              <div className="tab-pane fade show active" id="tab-pane-1">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: "350px" }}>
                    <div className="position-relative h-100">
                      <img
                        className="position-absolute img-fluid w-100 h-100"
                        src="/assets/img/services/service-6.jpg"
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-3">
                      15-1 Years Of Experience In Auto Servicing
                    </h3>
                    <p className="mb-4">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                      lorem et sit, sed stet lorem sit clita duo justo magna
                      dolore erat amet
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Quality
                      Servicing
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Expert
                      Workers
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Modern
                      Equipment
                    </p>
                     <a href="#" className="btn  py-3 px-5 mt-3" style={{backgroundColor: "#099994"}}>
                      Read More &nbsp;<MoveRight />
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-2">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: "350px" }}>
                    <div className="position-relative h-100">
                      <img
                        className="position-absolute img-fluid w-100 h-100"
                        src="/assets/img/services/service-7.jpg"
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-3">
                      15-2 Years Of Experience In Auto Servicing
                    </h3>
                    <p className="mb-4">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                      lorem et sit, sed stet lorem sit clita duo justo magna
                      dolore erat amet
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Quality
                      Servicing
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Expert
                      Workers
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Modern
                      Equipment
                    </p>
                      <a href="#" className="btn  py-3 px-5 mt-3" style={{backgroundColor: "#099994"}}>
                       Read More &nbsp;<MoveRight />
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-3">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: "350px" }}>
                    <div className="position-relative h-100">
                      <img
                        className="position-absolute img-fluid w-100 h-100"
                        src="/assets/img/services/service-8.jpg"
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-3">
                      15-3 Years Of Experience In Auto Servicing
                    </h3>
                    <p className="mb-4">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                      lorem et sit, sed stet lorem sit clita duo justo magna
                      dolore erat amet
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Quality
                      Servicing
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Expert
                      Workers
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Modern
                      Equipment
                    </p>
                     <a href="#" className="btn  py-3 px-5 mt-3" style={{backgroundColor: "#099994"}}>
                      Read More &nbsp;<MoveRight />
                    </a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-4">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: "350px" }}>
                    <div className="position-relative h-100">
                      <img
                        className="position-absolute img-fluid w-100 h-100"
                        src="/assets/img/services/service-9.jpg"
                        style={{ objectFit: "cover" }}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-3">
                      15-4 Years Of Experience In Auto Servicing
                    </h3>
                    <p className="mb-4">
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                      sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                      lorem et sit, sed stet lorem sit clita duo justo magna
                      dolore erat amet
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Quality
                      Servicing
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Expert
                      Workers
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-3"></i>Modern
                      Equipment
                    </p>
                    <a href="#" className="btn  py-3 px-5 mt-3" style={{backgroundColor: "#099994"}}>
                      Read More &nbsp;<MoveRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  
  );
};

export default Services;
