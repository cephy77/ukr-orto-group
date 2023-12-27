/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'medacta-cms-attachments-production.s3.eu-west-3.amazonaws.com',
        port: '',
      }
    ]
  },
}

module.exports = nextConfig
