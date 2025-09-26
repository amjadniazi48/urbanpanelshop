import { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
   // For Next.js 15.3.0+
    remotePatterns: [
      new URL('https://res.cloudinary.com/**')
    ],
    // IMPORTANT: Cloudinary-specific settings
    formats: ['image/avif', 'image/webp'], // Enable modern formats
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Sometimes needed for Vercel deployment
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: false, // Keep false unless you need SVGs
  },

  // VERCEL-SPECIFIC: Sometimes needed for image optimization

};

export default nextConfig;