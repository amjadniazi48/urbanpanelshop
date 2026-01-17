"use client";

import { useEffect, useRef } from "react";

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Prevent multiple loads
    if (document.getElementById("trustindex-script")) return;

    const script = document.createElement("script");
    script.id = "trustindex-script";
    script.src =
      "https://cdn.trustindex.io/loader.js?90c8a2c62ea5175b2406e57f9f8";
    script.async = true;
    script.defer = true;

    // Append script AFTER container exists
    containerRef.current.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="py-20 bg-light position-relative">
      <div className="container">
        <h2 className="text-center mb-5" style={{fontSize:"clamp(2rem, 4vw, 2.75rem);font-weight:700;color:#1a1a1a"}}>What Our Customers Say</h2>

        {/* THIS is where Trustindex WILL render */}
        <div ref={containerRef}>
          <div className="trustindex-widget"></div>
        </div>
      </div>
    </section>
  );
}
