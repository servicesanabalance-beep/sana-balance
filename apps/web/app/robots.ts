import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/wp-content/',
          '/wp-admin/',
          '/wp-includes/',
          '/wp-login*',
          '/wp-json/',
          '/xmlrpc.php',
          '/wordpress/',
          '/en',
          '/fr',
          '/it',
        ],
      },
    ],
    sitemap: 'https://sanabalance.ch/sitemap.xml',
    host: 'https://sanabalance.ch',
  }
}
