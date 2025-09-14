import React from "react";
import { CarFront, ImageUp } from "lucide-react";
import Link from "next/link";
const Smashupload = () => {
  return (
    <section
      className="container py-2 mt-5 mb-2 shadow-lg"
      style={{
        backgroundImage: "url(assets/img/landing/saas-3/cta-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
            borderRadius: "1rem",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          
          {/* LEFT COLUMN - Text and Button */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <img
                    src="assets/img/siteicons/impact.png"
                    width="100px"
                    alt="car smashed"
                    className=""
                  />
            
            <h2 className="h1 text-white mb-4">
              Start your journey to a <br />
              <span className="text-warning">flawless finish,</span> <br />
              upload your <span className="text-warning">smash</span> now
            </h2>
            
            <p className="fs-lg text-muted mb-4">
              Simply send your smash details, and we’ll do all the heavy lifting.
            </p>
            
            <Link
              href="/smash"
              target="_blank"
              rel="noopener"
              className="btn btn-lg d-inline-flex align-items-center justify-content-center rounded btn-outline-warning"
              // style={{
              //   backgroundColor: "#ffb014",
              //   color: "#000",
              //   padding: "12px 20px",
              //   fontWeight: "600"
              // }}
            >
              <ImageUp size={28} strokeWidth={2.2} />
              <span className="ms-2">UPLOAD YOUR SMASH</span>
            </Link>
          </div>
          
          {/* RIGHT COLUMN - Image */}
          <div className="col-md-6 text-center rounded-3 shadow-lg">
            <img
              src="assets/img/services/repair.jpg"
              alt="Smash Repair"
              className="img-fluid rounded-3 shadow-sm"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Smashupload;
