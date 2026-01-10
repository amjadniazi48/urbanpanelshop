/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/vi/**',
      },
        {
        protocol: 'https',
        hostname: 'capable-cat-c408f012a1.strapiapp.com',
        pathname: '/**',
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: '10mb', // 👈 increase this limit (1mb is default)
    },
  },
};

export default nextConfig;
