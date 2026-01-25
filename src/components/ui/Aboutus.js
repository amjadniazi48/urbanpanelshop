"use client";
import { useState, useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumb";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from "next/image";
import "./aboutus.css"

const Aboutus = ({ data }) => {
  // ✅ All hooks MUST be declared before any early returns
  const [photos, setPhotos] = useState([]);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // ✅ Extract hero data after hooks but before early return
  const hero = data?.Hero;
  const bgImage = hero?.backgroundImage?.url;

  // Load Cloudinary images with real dimensions
  useEffect(() => {
    if (hero?.images?.length) {
      const loadImages = async () => {
        const photoData = await Promise.all(
          hero.images.map(
            (img) =>
              new Promise((resolve) => {
                const image = new window.Image();
                image.src = img.url;
                image.onload = () =>
                  resolve({
                    src: img.url,
                    width: image.width,
                    height: image.height,
                    alt: img?.alternativeText || img?.name || "Gallery Image",
                  });
              })
          )
        );
        setPhotos(photoData);
      };
      loadImages();
    }
  }, [hero?.images]);

  // ✅ Early return AFTER all hooks are declared
  if (!hero) return null;

  return (
    <>
      {/* Hero Section */}
      <section
        className="position-relative pt-5 mt-2 hero-section pb-5"
       style={{ 
        background: "linear-gradient(180deg, #ffffff 0%, #fafbfc 50%, #f4f7fa 100%)",
        position: "relative",
     
      }}
      >

        <div className="container position-relative zindex-5 pt-3">
          <div className="row">
            <div className="col-lg-6">
              <div className="custom-breadcrumb mb-4">
                <a href="/" className="breadcrumb-link">Home</a>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">About Us</span>
              </div>
              <h1 className="pb-2 pb-md-3  hero-title">{hero?.title}</h1>
              <p className="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3 hero-description">
                {hero?.summary}
              </p>
            </div>

            {/* Gallery */}
            <div className="col-lg-6 mt-xl-3 pt-5 pt-lg-4 gallery-container">
              {photos.length > 0 && (
                <div className="mt-2 photo-gallery">
                  <RowsPhotoAlbum
                    photos={photos}
                    onClick={({ index }) => {
                      setIndex(index);
                      setGalleryOpen(true);
                    }}
                  />

                  {/* Lightbox for images only */}
                  <Lightbox
                    open={galleryOpen}
                    index={index}
                    close={() => setGalleryOpen(false)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    slides={photos.map((p) => ({
                      src: p.src,
                      title: p.alt,
                    }))}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Mobile Responsive */}
      <section className="container pb-5 mt-2 mt-md-0 mb-md-2 mb-lg-4 video-section">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="position-relative rounded-3 overflow-hidden video-wrapper">
              {/* Play Button - Properly Centered */}
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5">
                <button
                  className="btn btn-video btn-icon btn-xl stretched-link"
                  aria-label="Play video"
                  onClick={() => setVideoOpen(true)}
                >
                  <i className="bx bx-play"></i>
                </button>
              </div>
              
              {/* Dark Overlay */}
              <div className="position-absolute top-0 start-0 w-100 h-100 video-overlay"></div>
              
              {/* Video Thumbnail */}
              <div className="w-100" style={{ aspectRatio: "16/9" }}>
                <Image
                  src="https://res.cloudinary.com/dlcgduiez/image/upload/v1763048912/urbanpanel_kkfe9l.jpg"
                  alt="Video thumbnail"
                  fill
                  className="object-cover rounded-3"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Video Modal - Mobile Responsive */}
      {videoOpen && (
        <div 
          className="modal fade show video-modal" 
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.95)' }}
          onClick={() => setVideoOpen(false)}
        >
          <div 
            className="modal-dialog modal-dialog-centered"
            style={{ 
              maxWidth: "min(400px, 90vw)",
              margin: "1rem auto"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-transparent border-0">
              <div className="modal-header border-0 pb-2">
                <button
                  type="button"
                  className="btn-close btn-close-white ms-auto"
                  onClick={() => setVideoOpen(false)}
                ></button>
              </div>
              <div className="modal-body p-0">
                <div 
                  className="d-flex justify-content-center align-items-center"
                  style={{ minHeight: "60vh" }}
                >
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/61579001102477/videos/1428859824844883&show_text=false&autoplay=false&mute=0"
                    style={{ 
                      border: "none",
                      width: "min(350px, 90vw)",
                      height: "min(600px, 80vh)",
                      maxWidth: "100%",
                      borderRadius: "10px"
                    }}
                    scrolling="no"
                    frameBorder="0"
                    allow="encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    title="Facebook Video"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
 {/* CTA Section */}
      <section className="service-detail-cta bg-gradient-primary p-5">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Contact us today to get a quick quote for smash repairs
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

export default Aboutus;