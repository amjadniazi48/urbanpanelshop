"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import ReactMarkdown from "react-markdown";
import FaqAccordion from "@/components/FAQAccordion"; // Your client component

const ServicesDetails = ({ serviceData }) => {
  const [open, setOpen] = useState(false);

  // If no service data is provided, show error state
  if (!serviceData) {
    return (
      <div className="container text-center" style={{ marginTop: "100px" }}>
        <h3>No service found</h3>
      </div>
    );
  }

  // Prepare photos for the gallery
  const photos = serviceData?.images?.map((img) => ({
    src: img?.url,
    width: img?.width || 600,
    height: img?.height || 400,
    alt: img?.alternativeText || "Service Image",
  })) || [];

  return (
    <>
      {/* Hero Section */}
      <section className="service-detail-hero bg-gradient-primary">
        <div className="service-detail-hero-overlay"></div>
        <div className="container">
          <div className="service-detail-breadcrumb">
            <a href="/">Home</a>
            <span className="breadcrumb-separator">/</span>
            <a href="/services">Services</a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{serviceData.title}</span>
          </div>
          <h1 className="service-detail-title">{serviceData.title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="service-detail-content">
        <div className="container">
          <div className="service-detail-card">
            <div className="service-detail-icon-wrapper">
              {serviceData?.serviceIcon?.url ? (
                <img 
                  src={serviceData.serviceIcon.url} 
                  alt={serviceData.title}
                  className="service-detail-icon"
                />
              ) : (
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              )}
            </div>

            <div className="service-detail-description">
              <ReactMarkdown>{serviceData.description}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {photos.length > 0 && (
        <section className="service-detail-gallery">
          <div className="container">
            <h2 className="gallery-title">Our Work Gallery</h2>
            <p className="gallery-subtitle">
              Browse through our completed projects and see the quality of our work
            </p>
            
            <div className="gallery-wrapper">
              <RowsPhotoAlbum
                photos={photos}
                onClick={() => setOpen(true)}
              />
            </div>

            <Lightbox
              slides={photos.map((photo) => ({
                src: photo.src,
                title: photo.alt,
              }))}
              open={open}
              close={() => setOpen(false)}
              plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {serviceData?.faqs && serviceData.faqs.length > 0 && (
        <FaqAccordion data={serviceData} />
      )}

      {/* CTA Section */}
      <section className="service-detail-cta bg-gradient-primary">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Contact us today to discuss your project and get a free quote
            </p>
            <div className="cta-buttons">
              <a href="/smash" className="btn-primary-cta">
                Contact Us
              </a>
              <a href="/smash" className="btn-secondary-cta">
                Upload Your Smash
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Hero Section */
        .service-detail-hero {
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          padding: 50px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .service-detail-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
        }

        .service-detail-breadcrumb {
          position: relative;
          z-index: 2;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
        }

        .service-detail-breadcrumb a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .service-detail-breadcrumb a:hover {
          color: #F7A604;
        }

        .breadcrumb-separator {
          color: rgba(255, 255, 255, 0.5);
        }

        .breadcrumb-current {
          color: white;
          font-weight: 600;
        }

        .service-detail-title {
          position: relative;
          z-index: 2;
          color: white;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          line-height: 1.2;
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Content Section */
        .service-detail-content {
          padding: 80px 0;
          background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
        }

        .service-detail-card {
          background: white;
          border-radius: 20px;
          padding: 3rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
          animation: slideInUp 0.6s ease-out;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-detail-icon-wrapper {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #F7A604 0%, #ff9500 100%);
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          box-shadow: 0 15px 35px rgba(247, 166, 4, 0.3);
        }

        .service-detail-icon {
          width: 60px;
          height: 60px;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        .service-detail-icon-wrapper svg {
          color: white;
        }

        .service-detail-description {
          font-size: 1.1rem;
          line-height: 1.9;
          color: #444;
        }

        .service-detail-description :global(h2) {
          color: #1a1a1a;
          font-size: 1.8rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .service-detail-description :global(h3) {
          color: #2a2a2a;
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.8rem;
        }

        .service-detail-description :global(p) {
          margin-bottom: 1.2rem;
        }

        .service-detail-description :global(ul),
        .service-detail-description :global(ol) {
          margin: 1.5rem 0;
          padding-left: 2rem;
        }

        .service-detail-description :global(li) {
          margin-bottom: 0.8rem;
        }

        .service-detail-description :global(strong) {
          color: #F7A604;
          font-weight: 600;
        }

        /* Gallery Section */
        .service-detail-gallery {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .gallery-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .gallery-subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .gallery-wrapper {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .gallery-wrapper :global(img) {
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-wrapper :global(img:hover) {
          transform: scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          cursor: pointer;
        }

        /* CTA Section */
        .service-detail-cta {
          padding: 80px 0;
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
        }

        .cta-card {
          text-align: center;
          color: white;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          opacity: 0.95;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary-cta {
          background: #F7A604;
          color: black;
          padding: 15px 40px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .btn-primary-cta:hover {
          background: #ff9500;
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(247, 166, 4, 0.4);
        }

        .btn-secondary-cta {
          background: transparent;
          color: white;
          padding: 15px 40px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          border: 2px solid white;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .btn-secondary-cta:hover {
          background: white;
          color: #1e3c72;
          transform: translateY(-3px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .service-detail-hero {
            padding: 100px 0 60px;
          }

          .service-detail-card {
            padding: 2rem;
          }

          .service-detail-icon-wrapper {
            width: 80px;
            height: 80px;
          }

          .service-detail-icon {
            width: 50px;
            height: 50px;
          }

          .gallery-wrapper {
            padding: 1rem;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .btn-primary-cta,
          .btn-secondary-cta {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default ServicesDetails;