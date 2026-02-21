"use client";

import { useEffect } from "react";

export default function Reviews() {
  useEffect(() => {
    // Clear old widget if exists
    const container = document.getElementById(
      "featurable-a6cebbfe-bfa9-4c51-aba6-f94b8b668e3d"
    );
    if (container) {
      container.innerHTML = "";
    }

    // Remove existing script if already loaded
    const oldScript = document.getElementById("featurable-script");
    if (oldScript) {
      oldScript.remove();
    }

    // Inject script again
    const script = document.createElement("script");
    script.src =
      "https://featurable.com/assets/v2/carousel_default.min.js";
    script.async = true;
    script.id = "featurable-script";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="featurable-7091b6e7-682f-415d-b3d3-9f94f32bc531"
      data-featurable-async
    ></div>
  );
}
