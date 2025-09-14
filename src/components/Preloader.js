"use client";
import { useEffect } from "react";

export default function Preloader() {
  useEffect(() => {
    const preloader = document.querySelector(".page-loading");
    if (!preloader) return;

    function removePreloader() {
      preloader.classList.remove("active");
      setTimeout(() => preloader.remove(), 500);
    }

    if (document.readyState === "complete") {
      removePreloader();
    } else {
      window.addEventListener("load", removePreloader);
      setTimeout(removePreloader, 2000);
    }
  }, []);

  return (
    <div className="page-loading active" id="page-loading">
      <div className="page-loading-inner">
        <div className="page-spinner"></div>
        <span>Loading...</span>
      </div>
    </div>
  );
}
