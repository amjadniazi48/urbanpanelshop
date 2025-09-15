import React from "react";

const Heroicons = () => {
  return (
    <div className="row text-center g-2">
      <div className="col-6 col-md-3">
        <img
          src="assets/img/siteicons/panel-repair.png"
          width="40px"
          alt="Panel Repairs"
        />
        <p className="mt-2 text-body small ">Panel Repairs & Replacement</p>
      </div>
      <div className="col-6 col-md-3">
        <img
          src="assets/img/siteicons/spray-gun.png"
          width="40px"
          alt="Pickup Delivery"
        />
        <p className="mt-2 text-body small">Precision Spray Painting & Colour Matching</p>
      </div>
      <div className="col-6 col-md-3">
        <img
          src="assets/img/siteicons/dent-repair.png"
          width="40px"
          alt="Quality Assurance"
        />
        <p className="mt-2 text-body small">Paintless Dent Removal (PDR)</p>
      </div>
      <div className="col-6 col-md-3">
        <img
          src="assets/img/siteicons/chassis.png"
          width="40px"
          alt="Backup Cars"
        />
        <p className="mt-2 text-body small">Chassis & Structural Restorations</p>
      </div>
      {/* Repeat for other 4  */}
       <div className="col-6 col-md-3">
        <img
          src="assets/img/siteicons/bumper.png"
          width="40px"
          alt="Chassis"
        />
        <p className="mt-2 text-body small">Bumper & Plastic Repairs</p>
      </div>
      <div className="col-6 col-md-3">
        <img
          src="assets/img/siteicons/rusting.png"
          width="40px"
          alt="Backup Cars"
        />
        <p className="mt-2 text-body small">Rust & Corrosion Treatments</p>
      </div>  
      <div className="col-6 col-md-3">
        <img
          src="assets/img/siteicons/insurance.png"
          width="40px"
          alt="Backup Cars"
        />
        <p className="mt-2 text-body small">Insurance Claim Assistance</p>
      </div>  
      <div className="col-6 col-md-3">
        <img
          src="assets/img/siteicons/detailing.png"
          width="40px"
          alt="Backup Cars"
        />
        <p className="mt-2 text-body small">Detailing & Finishing Touches</p>
      </div>
    </div>
  );
};

export default Heroicons;
