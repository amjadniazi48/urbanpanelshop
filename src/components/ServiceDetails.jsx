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
import FaqAccordion from "@/components/FAQAccordion";
import ServicesDetailsSidebar from "@/components/ServicesDetailsSidebar";
import "./ServiceDetails.css";

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

      {/* Content Section with Sidebar and Main Content */}
      <section className="service-detail-content">
        <div className="container">
          <div className="row g-4">
            {/* Left Sidebar */}
            <div className="col-lg-3">
              <ServicesDetailsSidebar serviceData={serviceData} />
            </div>

            {/* Main Content Area */}
            <div className="col-lg-9">
              {/* Service Description Card */}
              <div className="service-detail-card">
                {/* Icon and Title Header - Horizontal Layout */}
                <div className="service-detail-header">
                  <div className="service-detail-icon-wrapper">
                    {serviceData?.serviceIcon?.url ? (
                      <img 
                        src={serviceData.serviceIcon.url} 
                        alt={serviceData.title}
                        className="service-detail-icon"
                      />
                    ) : (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                      </svg>
                    )}
                  </div>
                  <div className="service-detail-title-text">
                    <h2>{serviceData.title}</h2>
                  </div>
                </div>

                {/* Description Content */}
                <div className="service-detail-description">
                  <ReactMarkdown>{serviceData.description}</ReactMarkdown>
                </div>
              </div>

              {/* Gallery Section - Inside Main Content */}
              {photos.length > 0 && (
                <div className="service-gallery-section">
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
              )}

              {/* FAQs Section - Inside Main Content */}
              {serviceData?.faqs && serviceData.faqs.length > 0 && (
                <div className="service-faqs-section">
                  <FaqAccordion data={serviceData} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default ServicesDetails;