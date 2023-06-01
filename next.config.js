/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placekitten.com', 'firebasestorage.googleapis.com']
  },
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig
