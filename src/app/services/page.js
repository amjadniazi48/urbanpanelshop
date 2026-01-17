import React from "react";
import { getStrapiURL } from "@/lib/utils";
import { fetchData } from "@/lib/fetch";
import "./services.css"; // Create this CSS file separately

const Services = async () => {
  // Loader function
  async function loader() {
    const path = `/api/pages`;
    const baseUrl = getStrapiURL();
    const url = new URL(path, baseUrl);
    const authToken = process.env.STRAPI_JWT;
    const data = await fetchData(url.href, authToken, {
      cache: "no-store",
    });
    return data;
  }

  try {
    const servicesRes = await loader();

    if (!servicesRes?.data) {
      return (
        <div className="text-center alert alert-danger">No data available</div>
      );
    }

    let allServices = [];
    let serviceBlock = null;

    servicesRes.data.forEach((page) => {
      if (page?.blocks) {
        page.blocks.forEach((block) => {
          if (block?.services && block.services.length > 0) {
            allServices.push(...block.services);
            if (!serviceBlock) {
              serviceBlock = block;
            }
          }
        });
      }
    });

    const validServices = allServices.filter(
      (service) => service?.id && service?.title && service?.slug
    );

    if (validServices.length === 0) {
      return <div className="text-center">No services available</div>;
    }

    const blockData = serviceBlock || {
      heading: "Our Services",
      subheading:
        "We are focused on helping brands grow through digital transformation services.",
    };

    return (
      <>
        {/* Hero Section */}
        <section className="elegant-services-hero bg-gradient-primary">
          <div className="elegant-hero-overlay"></div>
          <div className="container">
            <div className="elegant-hero-content">
              <h1 className="elegant-hero-title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="white"
                  class="bi bi-car-front"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17s2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276" />
                  <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.8.8 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155s4.037-.084 5.592-.155A1.48 1.48 0 0 0 15 9.611v-.413q0-.148-.03-.294l-.335-1.68a.8.8 0 0 0-.43-.563 1.8 1.8 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3z" />
                </svg>{" "}
                &nbsp;{blockData?.heading || "Our Services"}
              </h1>
              <p className="elegant-hero-description">
                {blockData?.subheading ||
                  "We are focused on helping brands grow through digital transformation services. We bring real solutions to each client's problems through a deep understanding of their market, solution, and vision."}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="elegant-services-container">
          <div className="container">
            <div className="row g-4">
              {validServices.map((service, index) => (
                <div
                  key={service.id}
                  className="col-lg-6 col-md-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    href={`/services/${service.slug}`}
                    className="text-decoration-none"
                  >
                    <div className="elegant-service-card">
                      <div className="elegant-service-icon-wrapper">
                        <img
                          src={
                            service?.serviceIcon?.url ||
                            "/assets/img/services/icons/rocket.svg"
                          }
                          alt={service.title}
                          className="elegant-service-icon-img"
                        />
                      </div>

                      <h3 className="elegant-service-title">{service.title}</h3>
                      <p className="elegant-service-description">
                        {service.summary}
                      </p>

                      <div className="elegant-service-link">
                        Learn More
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>

                      <div className="elegant-service-card-bg"></div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
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
