"use client";
import { useEffect } from "react";

export default function OverflowDebugger() {
  useEffect(() => {
    const elements = document.querySelectorAll("*");
    const offenders = [];

    elements.forEach((el) => {
      if (el.offsetWidth > document.documentElement.offsetWidth) {
        offenders.push({
          tag: el.tagName,
          id: el.id || "(no id)",
          class: el.className || "(no class)",
          width: el.offsetWidth,
          pageWidth: document.documentElement.offsetWidth,
          excess: el.offsetWidth - document.documentElement.offsetWidth,
        });
      }
    });

    if (offenders.length === 0) {
      console.log("✅ No overflowing elements found.");
    } else {
      console.warn("🚨 Overflowing elements:");
      offenders.forEach((o) => {
        console.warn(
          `  <${o.tag}> id="${o.id}" class="${o.class}" | width: ${o.width}px | page: ${o.pageWidth}px | excess: +${o.excess}px`
        );
      });
    }
  }, []);

  return null;
}