/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'crust.winsomethemes.com',
      'encrypted-tbn0.gstatic.com',
      'lh3.googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;
