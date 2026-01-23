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

      {/* Enhanced CSS matching your theme */}
      <style jsx>{`
      
        /* Custom Breadcrumb matching your theme */
        .custom-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          animation: fadeInUp 0.6s ease-out;
        }
        
        .breadcrumb-link {
          color: var(--text-white);
          text-decoration: none;
          transition: all 0.3s ease;
          opacity: 1;
          font-weight: 500;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
        }
        
        .breadcrumb-link:hover {
          color: var(--primary-orange);
          opacity: 1;
        }
        
        .breadcrumb-separator {
          color: var(--text-white);
          opacity: 0.9;
          font-weight: 500;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
        }
        
        .breadcrumb-current {
          color: var(--primary-orange);
          font-weight: 600;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
        }
        
        .hero-content {
          animation: fadeInUp 0.8s ease-out;
        }
        
      
     
        /* Gallery Enhancements */
        .gallery-container {
          animation: fadeInRight 0.8s ease-out 0.3s backwards;
        }
        
        .photo-gallery :global(img) {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
          border: 2px solid rgba(255, 165, 0, 0.1);
        }
        
        .photo-gallery :global(img:hover) {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 15px 50px rgba(255, 165, 0, 0.3);
          border-color: rgba(255, 165, 0, 0.4);
          filter: brightness(1.1);
        }
        
        /* Video Section */
        .video-section {
          animation: fadeIn 1s ease-out;
          background: var(--light-bg);
          padding: 60px 0;
          margin-top: 0;
        }
        
        .video-wrapper {
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 3px solid var(--primary-orange);
          background: linear-gradient(135deg, rgba(255, 165, 0, 0.05) 0%, rgba(255, 165, 0, 0.02) 100%);
          border-radius: 16px;
        }
        
        .video-wrapper:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 80px rgba(255, 165, 0, 0.25);
          border-color: var(--primary-orange);
        }
        
        .video-overlay {
          opacity: 0.5;
          transition: opacity 0.4s ease;
          background: linear-gradient(135deg, rgba(26, 31, 58, 0.7) 0%, rgba(26, 31, 58, 0.4) 100%);
        }
        
        .video-wrapper:hover .video-overlay {
          opacity: 0.3;
        }
        
        /* Play Button matching theme */
        .btn-video {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          background: var(--primary-orange) !important;
          color: var(--text-white) !important;
          border: 4px solid rgba(255, 255, 255, 0.95);
          box-shadow: 0 10px 40px rgba(255, 165, 0, 0.5);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }
        
        .btn-video:hover {
          transform: scale(1.2);
          box-shadow: 0 15px 60px rgba(255, 165, 0, 0.7);
          border-color: rgba(255, 255, 255, 1);
          background: #ff8c00 !important;
        }
        
        .btn-video i {
          transition: transform 0.3s ease;
          margin-left: 4px;
        }
        
        .btn-video:hover i {
          transform: scale(1.15);
        }
        
        /* Modal Enhancements */
        .video-modal {
          backdrop-filter: blur(10px);
          animation: fadeIn 0.3s ease;
        }
        
        .video-modal .modal-content {
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .video-modal iframe {
          box-shadow: 0 20px 60px rgba(255, 165, 0, 0.3);
          transition: transform 0.3s ease;
          border: 2px solid var(--primary-orange);
        }
        
        .btn-close-white {
          opacity: 0.9;
          transition: all 0.3s ease;
          filter: drop-shadow(0 2px 8px rgba(255, 165, 0, 0.5));
          background-color: var(--primary-orange);
          border-radius: 50%;
          padding: 12px;
        }
        
        .btn-close-white:hover {
          opacity: 1;
          transform: rotate(90deg) scale(1.15);
          background-color: #ff8c00;
        }
        
        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Responsive Design */
        @media (max-width: 991px) {
          .hero-section {
            margin-bottom: 2.5rem !important;
          }
          .video-section {
            margin-top: 0;
          }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            margin-bottom: 2rem !important;
          }
          .btn-video {
            width: 70px !important;
            height: 70px !important;
            font-size: 22px !important;
          }
          
          .hero-title {
            font-size: 2.2rem;
          }
          
          .video-wrapper {
            box-shadow: 0 15px 40px rgba(255, 165, 0, 0.2);
          }
          
          .video-section {
            padding: 40px 0;
            margin-top: 0;
          }
        }
        
        @media (max-width: 480px) {
          .hero-section {
            margin-bottom: 1.5rem !important;
          }
          .btn-video {
            width: 60px !important;
            height: 60px !important;
            font-size: 18px !important;
          }
          
          .hero-title {
            font-size: 1.85rem;
          }
          
          .custom-breadcrumb {
            font-size: 13px;
          }
          
          .video-section {
            margin-top: 0;
            padding: 30px 0;
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default Aboutus;