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

            {/* Feature Content - Aligned with Icon */}
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description" style={{textAlign:"justify"}}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
       
      `}</style>
    </section>
  );
};

export default ServiceFeatures;