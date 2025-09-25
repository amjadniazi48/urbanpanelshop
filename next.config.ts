// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dlcgduiez/**", // adjust if your Cloudinary folder name differs
      },
    ],
  },
};

export default nextConfig;
