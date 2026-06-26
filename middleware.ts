import { NextRequest, NextResponse } from 'next/server';

const BLOCKED_PREFIXES = [
  '/data',
  '/.env',
  '/.git',
  '/node_modules',
  '/experience/api',
  '/projects/api',
];

const BLOCKED_EXTENSIONS = ['.json', '.pdf', '.env', '.log', '.sql', '.bak'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (BLOCKED_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return new NextResponse(null, { status: 404 });
  }

  const lowerPath = pathname.toLowerCase();
  if (
    BLOCKED_EXTENSIONS.some(
      (ext) => lowerPath.endsWith(ext) && !lowerPath.startsWith('/_next')
    )
  ) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
