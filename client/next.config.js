/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ["nhagoanphu.com"],
    formats: ["image/avif", "image/webp"],
  },
};
