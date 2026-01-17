"use client";

import Image from "next/image";

const Workflow = ({ data }) => {
  if (!data?.workflow?.length) return null;
  console.log("workflow", data.workflow);

  // Define gradient colors for each step circle
  const circleColors = [
    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", // Purple
    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", // Pink-Red
    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", // Blue
    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", // Green-Cyan
  ];

  return (
    <section 
      className="container py-5 my-5" 
      style={{
        backgroundColor: "#EFFDF9",
        borderRadius: "1rem",
        border: "1px solid #A7F3D0",
        boxShadow: "0 10px 30px hsla(125, 19%, 50%, 0.36)"
      }}
    >
      {/* Section Heading */}
      <div className="text-center mb-5">
        <h2 
          className="mb-3"
          style={{
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
            fontWeight: "700",
            color: "#1a1a1a",
          }}
        >
          Our Workflow
        </h2>
        <p 
          style={{
            fontSize: "1.125rem",
            color: "#555",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Simple steps to get your vehicle back to perfection
        </p>
      </div>

      {/* Steps */}
      <div className="row g-4 justify-content-center">
        {data.workflow.map((item, index) => (
          <div 
            className="col-lg-3 col-md-6 col-sm-6 col-12" 
            key={item.id}
          >
            <div 
              className="text-center h-100 d-flex flex-column align-items-center"
              style={{
                position: "relative",
              }}
            >
              {/* Circle with Icon */}
              <div
                className="position-relative mb-4"
                style={{
                  width: "120px",
                  height: "120px",
                  background: circleColors[index % circleColors.length],
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 12px 35px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
                }}
              >
                {/* Step Number */}
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#ffa500",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "1rem",
                    boxShadow: "0 4px 10px rgba(255,165,0,0.4)",
                  }}
                >
                  {index + 1}
                </div>

                {/* Icon */}
                {item.image[0]?.url && (
                  <Image
                    src={item.image[0].url}
                    alt={item.image.alternativeText || item.title}
                    width={64}
                    height={64}
                    style={{ 
                      maxWidth: "64px", 
                      height: "auto",
                      filter: "brightness(0) invert(1)", // Make icons white
                    }}
                    unoptimized={true}
                  />
                )}
              </div>

              {/* Title */}
              <h5 
                className="mb-3"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#1a1a1a",
                  minHeight: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.title}
              </h5>

              {/* Summary */}
              <p 
                style={{
                  fontSize: "0.95rem",
                  color: "#555",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                {item.description}
              </p>

              {/* Connecting Line (except for last item) */}
              {index < data.workflow.length - 1 && (
                <div
                  className="d-none d-lg-block"
                  style={{
                    position: "absolute",
                    top: "60px",
                    left: "calc(50% + 60px)",
                    width: "calc(100% - 120px)",
                    height: "2px",
                    background: "linear-gradient(90deg, rgba(167,243,208,0.5) 0%, rgba(167,243,208,1) 50%, rgba(167,243,208,0.5) 100%)",
                    zIndex: "-1",
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;