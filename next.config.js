/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.shields.io',
      },
    ],
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
