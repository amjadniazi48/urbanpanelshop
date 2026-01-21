"use client";

import Script from "next/script";

export default function Reviews() {
  return (
    <>
      {/* Widget container */}
      <div
        id="featurable-a6cebbfe-bfa9-4c51-aba6-f94b8b668e3d"
        data-featurable-async
      ></div>

      {/* Featurable script */}
      <Script
        src="https://featurable.com/assets/v2/carousel_default.min.js"
        strategy="afterInteractive"
        charSet="UTF-8"
      />
    </>
  );
}
