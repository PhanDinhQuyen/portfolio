/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: false,
  },
};

module.exports = nextConfig;
