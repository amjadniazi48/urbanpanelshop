import React from "react";
import Image from "next/image";

const Workflow = ({ data }) => {
  if (!data?.Accordion) return null;

  return (
    <section className="container pt-1 pt-lg-3 mt-5 mb-lg-5">
      <div
        className="position-relative bg-secondary rounded-3 overflow-hidden px-3 px-sm-4 px-md-0 py-5"
        style={{ backgroundColor: "#F1F1F1" }}
      >
        {/* Background Patterns */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block"
          data-rellax-percentage="0.5"
          data-rellax-speed="1.75"
        >
          {["pattern-1.svg", "pattern-2.svg", "pattern-3.svg"].map(
            (pattern, i) => (
              <img
                key={i}
                src={`assets/img/landing/online-courses/${pattern}`}
                className={`position-absolute ${
                  i === 0
                    ? "top-0 start-100 translate-middle ms-n4"
                    : i === 1
                    ? "top-50 start-0 mt-n5 ms-n5"
                    : "top-100 start-100 translate-middle ms-n5 mt-n5"
                }`}
                alt={`Pattern ${i + 1}`}
              />
            )
          )}
        </div>

        <div className="row justify-content-center position-relative zindex-2 py-lg-4">
          <div className="col-xl-10 col-lg-11 py-2">
            <h2 className="h1 text-dark text-center mt-n2 mt-lg-0 mb-4 mb-lg-5">
              Repair Workflow
            </h2>

            <div className="accordion" id="workflowAccordion">
              {data.Accordion.map((item, index) => {
                const collapseId = `workflow-item-${item.id}`;
                const hasImage = !!item.image?.url;

                return (
                  <div
                    className="accordion-item border-0 rounded-3 shadow-sm mb-3"
                    key={item.id}
                  >
                    {/* Header */}
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button shadow-none rounded-3 ${
                          index !== 0 ? "collapsed" : ""
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${collapseId}`}
                        aria-expanded={index === 0}
                        aria-controls={collapseId}
                      >
                        <span
                          className="badge bg-warning text-dark me-2 rounded-circle"
                          style={{ fontSize: "1.2rem" }}
                        >
                          {index + 1}
                        </span>
                        {item.title}
                      </button>
                    </h3>

                    {/* Body */}
                    <div
                      id={collapseId}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      data-bs-parent="#workflowAccordion"
                    >
                      <div className="accordion-body fs-sm pt-0">
                        {hasImage ? (
                          <div className="row align-items-stretch gx-4">
                            {/* Left: Image */}
                            <div className="col-md-4 d-flex mb-3 mb-md-0">
                              <div
                                className="position-relative"
                               
                              >
                                <Image
                                  src={item.image.url}
                                 width ={191}
                                  height={132}
                                  alt={item.image.alternativeText || item.title}
                                  className="rounded-4 shadow-lg"
                                  style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                  }}
                                />
                              </div>
                            </div>

                            {/* Right: Text */}
                            <div className="col-md-8 d-flex flex-column">
                              <p
                                className="fs-lg text-muted"
                                style={{ textAlign: "justify" }}
                              >
                                {item.summary}
                              </p>
                              {item.ctaText && (
                                <a
                                  href={item.ctaUrl || "#"}
                                  className="btn btn-warning mt-3 align-self-start"
                                >
                                  {item.ctaText}
                                </a>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="text-center">
                            <p className="fs-lg text-muted">{item.summary}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
