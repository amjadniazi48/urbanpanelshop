// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
     remotePatterns: [ new URL("https://res.cloudinary.com/dlcgduiez/**") ],
  }, 
};

export default nextConfig;
