import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Cache configuration for different asset types
const CACHE_CONTROL_HEADERS = {
  // Images - cache for 30 days
  images: 'public, max-age=2592000, stale-while-revalidate=60',
  // JavaScript - cache for 7 days
  js: 'public, max-age=604800, stale-while-revalidate=60',
  // Fonts - cache for 1 year
  fonts: 'public, max-age=31536000, immutable',
  // Default - cache for 1 day
  default: 'public, max-age=86400, stale-while-revalidate=60',
};

// Paths that should skip middleware processing
const SKIP_PATHS = [
  '/api',
  '/_next',
];

// Check if a path should be skipped
const shouldSkip = (path: string) => {
  return SKIP_PATHS.some(skipPath => path.startsWith(skipPath));
};

// Get appropriate Cache-Control header based on file extension
const getCacheHeader = (url: string): string => {
  const ext = url.split('.').pop()?.toLowerCase();

  if (ext && ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'].includes(ext)) {
    return CACHE_CONTROL_HEADERS.images;
  }

  if (ext && ['js', 'mjs'].includes(ext)) {
    return CACHE_CONTROL_HEADERS.js;
  }

  if (ext && ['woff', 'woff2', 'ttf', 'otf'].includes(ext)) {
    return CACHE_CONTROL_HEADERS.fonts;
  }

  return CACHE_CONTROL_HEADERS.default;
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API routes and Next.js internal routes
  if (shouldSkip(pathname)) {
    return NextResponse.next();
  }

  // Determine if this is a static asset
  if (
    pathname.match(/\.(jpg|jpeg|png|gif|svg|webp|js|css|woff|woff2|ttf|otf)$/i)
  ) {
    const response = NextResponse.next();
    const cacheHeader = getCacheHeader(pathname);
    
    // Set cache-control header
    response.headers.set('Cache-Control', cacheHeader);
    
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|_static|favicon.ico).*)',
  ],
}; 