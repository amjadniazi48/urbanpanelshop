import React from "react";
import { getStrapiURL } from "@/lib/utils";
import { fetchData } from "@/lib/fetch";

const Services = async () => {
  // Loader function
  async function loader() {
    const path = `/api/pages`;
    const baseUrl = getStrapiURL();
    const url = new URL(path, baseUrl);

    const authToken = process.env.STRAPI_JWT;

    const data = await fetchData(url.href, authToken, {
     cache: "no-store", // ✅ disables cache completely
    });

    return data;
  }

  try {
    // Call loader
    const servicesRes = await loader();

    // Check if we have data
    if (!servicesRes?.data) {
      return <div className="text-center alert alert-danger">No data available</div>;
    }

    // Extract services using the working alternative method
    // Look through ALL pages and ALL blocks to find services
    let allServices = [];
    let serviceBlock = null;

    servicesRes.data.forEach((page) => {
      if (page?.blocks) {
        page.blocks.forEach((block) => {
          if (block?.services && block.services.length > 0) {
            allServices.push(...block.services);
            // Use the first block with services for heading/subheading
            if (!serviceBlock) {
              serviceBlock = block;
            }
          }
        });
      }
    });

    // Filter out any invalid services (missing required fields)
    const validServices = allServices.filter(service => 
      service?.id && service?.title && service?.slug
    );

    if (validServices.length === 0) {
      return <div className="text-center">No services available</div>;
    }

    // Use default content if no block found
    const blockData = serviceBlock || {
      heading: "Our Services",
      subheading: "We are focused on helping brands grow through digital transformation services."
    };

    return (
      <section
        className="container py-2 bg-secondary mb-5"
        style={{ marginTop: "6rem" }}
      >
        <section className="container pt-2 pt-lg-0 pb-5 mb-md-4 mb-lg-5">
          <div className="container pb-4 pt-5">
            <h2 className="h1 text-center text-md-start mb-lg-4 pt-1 pt-md-4">
              {blockData?.heading || "Our Services"}
            </h2>

            <div className="row align-items-center pb-5 mb-lg-2">
              <div className="col-md-8 text-center text-md-start">
                <p className="fs-lg text-muted mb-md-0">
                  {blockData?.subheading ||
                    "We are focused on helping brands grow through digital transformation services."}
                </p>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2">
              {validServices.map((service) => (
                <div key={service.id} className="col py-4 my-2 my-sm-3">
                  <a
                    href={`/services/${service.slug}`}
                    className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3"
                  >
                    <div className="card-body pt-3">
                      <div
                        className="d-inline-block bg-warning rounded-3 position-absolute top-0 translate-middle-y p-3"
                        style={{
                          backgroundColor: "#F7A604",
                          boxShadow: "#ffA604",
                        }}
                      >
                        <img
                          src={
                            service?.serviceIcon?.url ||
                            "/assets/img/services/icons/rocket.svg"
                          }
                          width="40"
                          alt={service.title}
                        />
                      </div>

                      <h2 className="h4 d-inline-flex align-items-center">
                        {service.title}
                        <i className="bx bx-right-arrow-circle text-warning fs-3 ms-2"></i>
                      </h2>
                      <p className="fs-sm text-body mb-0">{service.summary}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    );

  } catch (error) {
    console.error("Error in Services component:", error);
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          <h4>Error Loading Services</h4>
          <p>{error.message}</p>
        </div>
      </div>
    );
  }
};

export default Services;