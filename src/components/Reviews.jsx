"use client";

import { useEffect } from "react";

export default function Reviews() {
  useEffect(() => {
    const container = document.getElementById(
      "featurable-a6cebbfe-bfa9-4c51-aba6-f94b8b668e3d"
    );
    if (container) {
      container.innerHTML = "";
    }

    const oldScript = document.getElementById("featurable-script");
    if (oldScript) {
      oldScript.remove();
    }

    const script = document.createElement("script");
    script.src = "https://featurable.com/assets/v2/carousel_default.min.js";
    script.async = true;
    script.id = "featurable-script";
    document.body.appendChild(script);
  }, []);

  return (
    /*
     * overflow: "clip" — unlike overflow: "hidden" this does NOT create a new
     * scroll/stacking context, so your sticky header and other fixed/positioned
     * elements on the page are completely unaffected. It simply clips anything
     * the Featurable widget renders outside this element's bounds.
     */
    <div style={{ width: "100%", overflow: "clip" }}>
      <div
        id="featurable-7091b6e7-682f-415d-b3d3-9f94f32bc531"
        data-featurable-async
      />
    </div>
  );
}