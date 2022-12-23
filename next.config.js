/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'crust.winsomethemes.com',
      'encrypted-tbn0.gstatic.com',
      'lh3.googleusercontent.com',
      'd8it4huxumps7.cloudfront.net',
      'media.licdn.com',
      'upload.wikimedia.org',
    ],
  },
};

module.exports = nextConfig;
