// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "res.cloudinary.com",
      pathname: "/**", // ✅ must start with /
    },
    {
      protocol: "https",
      hostname: "img.youtube.com",
      pathname: "/**",
    },
    {
      protocol: "https",
      hostname: "i.ytimg.com",
      pathname: "/vi/**",
    },
  ],
},

};

export default nextConfig;
