"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Hero";
import Testimonials from "@/components/Testimonials";
import Carcomparsion from "@/components/Carcomparsion";
import Urbanservices from "@/components/Urbanservices";
import Smashupload from "@/components/Smashupload";
import Workflow from "@/components/Workflow";

export default function HomeClient({ homeData }) {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
      delay: 0,
    });
  }, []);

  // BlockRenderer function with animations
  function BlockRenderer(block, index) {
    // Different animation types for variety
    const animations = [
      "fade-up",
      "fade-down",
      "fade-left",
      "fade-right",
      "zoom-in",
      "fade-right",
    ];
    
    // Assign animation based on index (cycle through animations)
    const animation = animations[index % animations.length];
    const delay = index * 100;

    const animationProps = {
      "data-aos": animation,
      "data-aos-delay": delay,
      "data-aos-duration": "1000",
    };

    switch (block.__component) {
      case "blocks.swiper-hero":
        return (
          <div {...animationProps}>
            <Hero data={block} />
          </div>
        );
      case "blocks.hero-section":
        return (
          <div {...animationProps}>
            <Smashupload data={block} />
          </div>
        );
      case "blocks.workflow":
        return (
          <div {...animationProps}>
            <Workflow data={block} />
          </div>
        );
      case "blocks.services":
        return (
          <div {...animationProps}>
            <Urbanservices data={block} />
          </div>
        );
      case "blocks.reviews":
        return (
          <div {...animationProps}>
            <Testimonials data={block} />
          </div>
        );
      case "blocks.recent-repairs":
        return (
          <div {...animationProps}>
            <Carcomparsion data={block} />
          </div>
        );
      default:
        return null;
    }
  }

  if (!homeData || homeData.length === 0) {
    return <div>No content available</div>;
  }

  return (
    <div>
      {homeData.map((block, index) => (
        <div key={block.id || `block-${index}`}>
          {BlockRenderer(block, index)}
        </div>
      ))}
    </div>
  );
}