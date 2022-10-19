/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  images: {
    deviceSizes: [320, 768 , 1280 ,1920],
    imageSizes: [84, 168],
  },
}
module.exports = nextConfig

