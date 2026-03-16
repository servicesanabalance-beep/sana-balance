import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@sana-balance/ui', '@sana-balance/core'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
