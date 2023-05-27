/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  images: {
    domains: ["images.unsplash.com", "loremflickr.com"],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
