/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["static.coinstats.app"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "static.coinstats.app",
    //     pathname: "/coins/**",
    //   },
    // ],
  },
};

module.exports = nextConfig;
