/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'i.imgur.com'], // Add your image domains here
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
}

module.exports = nextConfig
