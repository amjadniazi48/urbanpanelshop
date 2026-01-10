"use client";

import Image from "next/image";

const Workflow = ({ data }) => {
  if (!data?.Accordion?.length) return null;

  return (
    <section className="container py-5 my-5">
      <div className="steps steps-horizontal-md">
        {data.Accordion.map((item) => (
          <div className="step" key={item.id}>
            <div className="step-number">
              <div className="step-number-inner">
                {item.image?.url && (
                  <Image
                    src={item.image.url}
                    alt={item.image.alternativeText || item.title}
                    width={64}
                    height={64}
                    className="img-fluid"
                    style={{ maxWidth: "64px", height: "auto" }}
                      unoptimized={true}
                  />
                )}
              </div>
            </div>

            <div className="step-body">
              <h5 className="mb-2 text-white">{item.title}</h5>
              <p className="fs-sm mb-0 text-body">{item.summary}</p>
            </div>
          </div>
        ))}
      </div>

    
    </section>
  );
};

export default Workflow;