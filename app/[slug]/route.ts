import { getRedirect, getRedirectSlugs } from '@/core/redirects';
import { NextResponse } from 'next/server';

type RouteContext = {
  params: { slug: string };
};

const isProduction = process.env.NODE_ENV === 'production';

export function GET(_request: Request, { params }: RouteContext) {
  const redirect = getRedirect(params.slug);

  if (!redirect) {
    return NextResponse.redirect(
      isProduction ? 'https://raunakmandal.com' : 'http://localhost:3000',
      { status: 302 }
    );
  }

  return NextResponse.redirect(redirect.destination, {
    status: redirect.permanent !== false ? 301 : 302,
  });
}

export function generateStaticParams() {
  return getRedirectSlugs().map((slug) => ({ slug }));
}
