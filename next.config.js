/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  images: {
    domains: [
      "images.unsplash.com",
      "loremflickr.com",
      "lzzlsndqxlmpjoonmjfd.supabase.co",
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
