/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'raw.githubusercontent.com', 'media.licdn.com'],
  },
  transpilePackages: ['three'],
}

module.exports = nextConfig
