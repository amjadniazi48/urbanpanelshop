import { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
   // For Next.js 15.3.0+
    remotePatterns: [
      new URL('https://res.cloudinary.com/**')
    ],
  },
};

export default nextConfig;