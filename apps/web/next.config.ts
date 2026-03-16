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
        destination: `https://sana-balance-admin.vercel.app/admin-panel326`,
      },
      {
        source: '/admin-panel326/:path*',
        destination: `https://sana-balance-admin.vercel.app/admin-panel326/:path*`,
      },
    ]
  },
}

export default nextConfig
