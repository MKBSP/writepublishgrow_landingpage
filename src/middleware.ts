import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Subdomain routing middleware.
 *
 * - app.writepublishgrow.com → only /login, /signup allowed (auth pages)
 * - writepublishgrow.com → landing page (everything else)
 *
 * In development (localhost), all routes are accessible regardless.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const isApp = host.startsWith('app.');
  const pathname = request.nextUrl.pathname;

  if (isApp) {
    // On the app subdomain, only auth routes are allowed
    const allowed = pathname.startsWith('/login') || pathname.startsWith('/signup');
    if (!allowed) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals, static assets, and API routes
    '/((?!_next/static|_next/image|favicon\\.ico|api/).*)',
  ],
};
