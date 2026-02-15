"use client";
import React from 'react';

const ServiceFeatures = ({ featuresData }) => {
  if (!featuresData || !featuresData.Features || featuresData.Features.length === 0) {
    return null;
  }

  const { title, summary, Features } = featuresData;

  return (
    <section className="service-features-section">
      <div className="features-header">
        {title && <h2 className="features-main-title">{title}</h2>}
        {summary && <p className="features-summary">{summary}</p>}
      </div>

      <div className="features-grid">
        {Features.map((feature, index) => (
          <div key={feature.id || index} className="feature-card">
            {/* Feature Icon/Image */}
            <div className="feature-icon-wrapper">
              {feature.image?.url ? (
                <img 
                  src={feature.image.url} 
                  alt={feature.image.alternativeText || feature.title}
                  className="feature-icon-img"
                />
              ) : (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              )}
            </div>

            {/* Feature Content */}
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .service-features-section {
          margin-top: 3rem;
          padding: 2.5rem;
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .features-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .features-main-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
          position: relative;
          display: inline-block;
        }

        .features-main-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #F7A604 0%, #ff9500 100%);
          border-radius: 2px;
        }

        .features-summary {
          font-size: 1.1rem;
          color: #666;
          max-width: 700px;
          margin: 1.5rem auto 0;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .feature-card {
          background: #f8f9fa;
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #F7A604 0%, #ff9500 100%);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          border-color: #F7A604;
          box-shadow: 0 8px 24px rgba(247, 166, 4, 0.15);
          transform: translateY(-4px);
        }

        .feature-card:hover::before {
          transform: scaleY(1);
        }

        .feature-icon-wrapper {
          width: 70px;
          height: 70px;
          background: white;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon-wrapper {
          background: linear-gradient(135deg, #F7A604 0%, #ff9500 100%);
          transform: scale(1.05);
        }

        .feature-icon-img {
          width: 40px;
          height: 40px;
          object-fit: contain;
          transition: filter 0.3s ease;
        }

        .feature-card:hover .feature-icon-img {
          filter: brightness(0) invert(1);
        }

        .feature-icon-wrapper svg {
          color: #F7A604;
          transition: color 0.3s ease;
        }

        .feature-card:hover .feature-icon-wrapper svg {
          color: white;
        }

        .feature-content {
          flex: 1;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .feature-description {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.7;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .service-features-section {
            padding: 2rem 1.5rem;
            margin-top: 2rem;
          }

          .features-main-title {
            font-size: 1.75rem;
          }

          .features-summary {
            font-size: 1rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .feature-card {
            padding: 1.5rem;
          }

          .feature-icon-wrapper {
            width: 60px;
            height: 60px;
          }

          .feature-icon-img {
            width: 35px;
            height: 35px;
          }

          .feature-title {
            font-size: 1.1rem;
          }

          .feature-description {
            font-size: 0.9rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1025px) {
          .features-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceFeatures;