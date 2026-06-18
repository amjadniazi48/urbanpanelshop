"use client";

import React, { useState, useEffect } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const rawPhotos = Array.from({ length: 15 }, (_, i) => ({
  src: `/gallery/${i + 1}.jpg`,
  alt: `AL-FAJR University Campus ${i + 1}`,
}));

const GallerySection = () => {
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const loadImages = async () => {
      const photoData = await Promise.all(
        rawPhotos.map(
          (img) =>
            new Promise((resolve) => {
              const image = new window.Image();
              image.src = img.src;
              image.onload = () =>
                resolve({
                  src: img.src,
                  width: image.width,
                  height: image.height,
                  alt: img.alt,
                });
              image.onerror = () =>
                resolve({
                  src: img.src,
                  width: 800,
                  height: 600,
                  alt: img.alt,
                });
            })
        )
      );
      setPhotos(photoData);
    };

    loadImages();
  }, []);

  return (
    <section className="py-20 px-4 bg-[#f8faf6]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-emerald-200">
            Campus Life
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e1f] leading-tight">
            Life at{" "}
            <span className="text-emerald-700">AL-FAJR</span>{" "}
            University
          </h2>
          <p className="mt-4 text-[#4a6352] text-base max-w-xl mx-auto leading-relaxed">
            From classrooms to conferences, innovation hubs to cultural events —
            a glimpse into our vibrant campus community.
          </p>
        </div>

        {/* Gallery */}
        {photos.length > 0 ? (
          <MasonryPhotoAlbum
            photos={photos}
            columns={(containerWidth) => {
              if (containerWidth < 600) return 2;
              if (containerWidth < 900) return 3;
              return 4;
            }}
            spacing={10}
            onClick={({ index: i }) => setIndex(i)}
            render={{
              photo: (props, { photo }) => (
                <div
                  {...props}
                  className="overflow-hidden rounded-xl cursor-pointer group"
                  style={{ ...props.style }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      borderRadius: "12px",
                      transition: "transform 0.5s ease",
                    }}
                    className="group-hover:scale-105"
                  />
                </div>
              ),
            }}
          />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl bg-emerald-100/50 animate-pulse"
                style={{ aspectRatio: "4/3" }}
              />
            ))}
          </div>
        )}

        {/* Lightbox */}
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={photos.map((p) => ({ src: p.src, title: p.alt }))}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          on={{ view: ({ index: i }) => setIndex(i) }}
          styles={{
            container: { backgroundColor: "rgba(13, 31, 20, 0.97)" },
          }}
        />

      </div>
    </section>
  );
};

export default GallerySection;