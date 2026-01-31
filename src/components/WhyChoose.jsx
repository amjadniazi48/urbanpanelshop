import React from "react";
import Image from "next/image";
const WhyChoose = ({ data }) => {
  const { title, summary, mainImage, Features } = data;

  // Split solutions into left and right columns
  const leftFeatures = Features?.slice(0, Math.ceil(Features.length / 2)) || [];
  const rightFeatures = Features?.slice(Math.ceil(Features.length / 2)) || [];

  return (
    <section
      id="why-choose-us"
      className="py-5 my-5"
      style={{ background: 'linear-gradient(180deg, #e8f5e9 0%, #f1f8e9 100%)' }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5 pb-3">
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#1a1a1a' }}>
            {title}
          </h2>
          <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '700px' }}>
            {summary}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="row align-items-center g-4 g-lg-5 position-relative">
          {/* Left Solutions */}
          <div className="col-lg-4 order-2 order-lg-1">
            <div className="d-flex flex-column gap-4">
              {leftFeatures.map((solution, index) => (
                <div
                  key={solution.id || `left-${index}`}
                  className="d-flex align-items-start gap-3 p-3 rounded-3 transition-all"
                  style={{
                    background: '#ffffff',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(-10px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
                  }}
                >
                  <div
                    className="flex-shrink-0 rounded-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #66bb6a 0%, #43a047 100%)',
                      boxShadow: '0 4px 12px rgba(102, 187, 106, 0.4)'
                    }}
                  >
                    <Image
                      src={solution.image[0]?.url || "assets/img/default-icon.svg"}
                      alt={solution.image[0]?.alternativeText || solution.title}
                      width={32}
                      height={32}
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h4 className="h6 fw-bold mb-2" style={{ color: '#1a1a1a' }}>
                      {solution.title}
                    </h4>
                    <p className="mb-0 small text-muted">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Image */}
          <div className="col-lg-4 order-1 order-lg-2">
            <div className="position-relative mx-auto" style={{ maxWidth: '350px' }}>
              <div
                className="position-absolute top-50 start-50 translate-middle rounded-circle"
                style={{
                  width: '120%',
                  height: '120%',
                  background: 'linear-gradient(135deg, rgba(102, 187, 106, 0.15) 0%, rgba(67, 160, 71, 0.15) 100%)',
                  filter: 'blur(40px)',
                  zIndex: 0
                }}
              />
              <div className="position-relative" style={{ zIndex: 1 }}>
                <Image
                  src={mainImage?.url || "assets/img/default-image.svg"}
                  alt={mainImage?.alternativeText || "Why Choose Us"}
                  width={mainImage.width}
                  height={mainImage.height}
                  className="img-fluid rounded-4 shadow-lg"
                  style={{
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                    transform: 'scale(1)',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </div>
          </div>

          {/* Right Solutions */}
          <div className="col-lg-4 order-3">
            <div className="d-flex flex-column gap-4">
              {rightFeatures.map((solution, index) => (
                <div
                  key={solution.id || `right-${index}`}
                  className="d-flex align-items-start gap-3 p-3 rounded-3 transition-all"
                  style={{
                    background: '#ffffff',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(10px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
                  }}
                >
                  <div
                    className="flex-shrink-0 rounded-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #ffa726 0%, #fb8c00 100%)',
                      boxShadow: '0 4px 12px rgba(255, 167, 38, 0.4)'
                    }}
                  >
                    <img
                      src={solution.image[0]?.url || "assets/img/default-icon.svg"}
                      alt={solution.image?.alternativeText || solution.title}
                      width="32"
                      height="32"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <h4 className="h6 fw-bold mb-2" style={{ color: '#1a1a1a' }}>
                      {solution.title}
                    </h4>
                    <p className="mb-0 small text-muted">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;