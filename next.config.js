/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: false,
      ssr: false,
    },
  },
};

module.exports = nextConfig;
