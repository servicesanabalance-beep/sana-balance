import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// WordPress-style paths that should return 410 Gone
// (this site is Next.js, not WordPress - these are likely bot scans or old legacy URLs)
const WP_PATTERNS = [
  /^\/wp-content/,
  /^\/wp-admin/,
  /^\/wp-includes/,
  /^\/wp-login/,
  /^\/wp-json/,
  /^\/xmlrpc\.php/,
  /^\/wordpress/,
]

// Old/non-existent language routes - redirect to homepage
const REDIRECT_PATHS: Record<string, string> = {
  '/en': '/',
  '/fr': '/',
  '/it': '/',
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Block WordPress paths with 410 Gone (tells Google: this never existed, remove from index)
  if (WP_PATTERNS.some((pattern) => pattern.test(pathname))) {
    return new NextResponse('Gone', { status: 410 })
  }

  // 2. Redirect old language routes to homepage (301 permanent)
  if (REDIRECT_PATHS[pathname]) {
    const url = request.nextUrl.clone()
    url.pathname = REDIRECT_PATHS[pathname]
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except internal Next.js and static assets
    '/((?!api|_next/static|_next/image|favicon|logo|sana_|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)',
  ],
}
