"use client";
import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
const Aboutus = ({ data }) => {
  if (!data?.Hero) return null;

  const hero = data.Hero;
  const bgImage = hero?.backgroundImage?.url;
  const images = hero?.images || [];

  return (
    <section className="position-relative pt-5">
      {/* Background */}
      {bgImage && (
        <div
          className="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0 bg-dark"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="d-lg-none" style={{ height: "960px" }}></div>
          <div className="d-none d-lg-block" style={{ height: "768px" }}></div>
        </div>
      )}

      <div className="container position-relative zindex-5 pt-5">
        <div className="row">
          <div className="col-lg-6">
            {/* Breadcrumb */}
             <Breadcrumb />

            {/* Text */}
            <h1 className="pb-2 pb-md-3 text-white">{hero?.title}</h1>
            <p
              className="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3 text-white"
              style={{ maxWidth: "526px" }}
            >
              {hero?.summary}
            </p>

            {/* Example stats */}
            <div className="row row-cols-3 pt-4 pt-md-5 mt-2 mt-xl-4">
              <div className="col">
                <h3 className="h2 mb-2 text-white">2,480</h3>
                <p className="mb-0 text-white">
                  <strong>Remote</strong> Sales Experts
                </p>
              </div>
              <div className="col">
                <h3 className="h2 mb-2 text-white">760</h3>
                <p className="mb-0 text-white">
                  <strong>New Clients</strong> per Month
                </p>
              </div>
              <div className="col text-white">
                <h3 className="h2 mb-2 text-white">1,200</h3>
                <p className="mb-0">
                  <strong>Requests</strong> per Week
                </p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="col-lg-6 mt-xl-3 pt-5 pt-lg-4">
            <div className="row row-cols-2 gx-3 gx-lg-4">
              {images.map((img, i) => (
                <div key={img.id || i} className="col pt-lg-5 mt-lg-1">
                  <img
                    src={img.url}
                    className="d-block rounded-3 mb-3 mb-lg-4"
                    alt={img.alternativeText || "About image"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
