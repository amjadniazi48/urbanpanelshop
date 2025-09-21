import React from "react";
import { ImageUp } from "lucide-react";
import Link from "next/link";

const Smashupload = ({ data }) => {
  if (!data || !data.Hero) return null;

  const {
    title,
    subtitle,
    summary,
    ctaText,
    ctaUrl,
    icon,
    image,
    backgroundImage,
  } = data.Hero;

  return (
    <section
      className="container py-2 mt-5 mb-2 shadow-lg"
      style={{
        backgroundImage: `url(${backgroundImage?.url })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "1rem",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* LEFT COLUMN - Text and Button */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <img
              src={icon?.url}
              width="100px"
              alt="car smashed"
            />

         <h2 className="display-7 mb-4">
  {title?.includes("–") ? (
    <>
      <span className="text-white">
        {title.split("–")[0].trim()} –
      </span>
      <br />
      <span className="text-warning">
        {title.split("–")[1].trim()}
      </span>
    </>
  ) : (
    <span className="text-white">{title}</span>
  )}
</h2>



            {summary && (
              <p className="fs-lg text-muted mb-4">{summary}</p>
            )}

            {ctaText && ctaUrl && (
              <Link
                href={ctaUrl}
                target="_blank"
                rel="noopener"
                className="btn btn-lg d-inline-flex align-items-center justify-content-center rounded btn-outline-warning"
              >
                <ImageUp size={28} strokeWidth={2.2} />
                <span className="ms-2">{ctaText}</span>
              </Link>
            )}
          </div>

          {/* RIGHT COLUMN - Image */}
          <div className="col-md-6 text-center rounded-3 shadow-lg">
            {backgroundImage?.url && (
              <img
                src={image?.url}
                alt={image?.alternativeText || "Smash Repair"}
                className="img-fluid rounded-3 shadow-sm"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Smashupload;
