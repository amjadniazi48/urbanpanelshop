"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hide = () => setLoading(false);
    const timer = setTimeout(hide, 800);
    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", hide);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="page-loading active">
      <div className="page-loading-inner">
        <div className="page-spinner"></div>
        <span>Loading...</span>
      </div>
    </div>
  );
}
