/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.coinstats.app",
        pathname: "/coins/**",
      },
    ],
  },
};

module.exports = nextConfig;
