/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ⚠️ Warning: This should be temporary! 
    // It's better to fix type errors than ignore them
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 