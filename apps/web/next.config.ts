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
  async rewrites() {
    return [
      {
        source: '/admin-panel326',
        destination: `${process.env.ADMIN_URL || 'http://localhost:3001'}/admin-panel326`,
      },
      {
        source: '/admin-panel326/:path*',
        destination: `${process.env.ADMIN_URL || 'http://localhost:3001'}/admin-panel326/:path*`,
      },
    ]
  },
}

export default nextConfig
