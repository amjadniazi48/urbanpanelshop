// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
     remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '**', // Allows any pathname under the domain
          },
          {
            protocol: 'https',
            hostname: 'img.youtube.com', // Fixed: moved from domains to remotePatterns
            pathname: '**', // More flexible than just '/vi/**'
          },
          {
            protocol: 'https',
            hostname: 'i.ytimg.com', // YouTube thumbnail domain
            pathname: '/vi/**',
          },
        ],
  },
};

export default nextConfig;
