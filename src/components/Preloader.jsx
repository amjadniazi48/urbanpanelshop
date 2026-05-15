"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setVisible(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Do not render on the server — avoids a stuck overlay if client JS fails on mobile
  if (!mounted || !visible) return null;

  return (
    <div className="page-loading active" aria-hidden="true">
      <div className="page-loading-inner">
        <div className="page-spinner" />
        <span>Loading...</span>
      </div>
    </div>
  );
}
