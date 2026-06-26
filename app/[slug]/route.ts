import { getRedirect, getRedirectSlugs } from '@/core/redirects';
import { NextResponse } from 'next/server';

type RouteContext = {
  params: { slug: string };
};

export function GET(_request: Request, { params }: RouteContext) {
  const redirect = getRedirect(params.slug);

  if (!redirect) {
    return NextResponse.json({ error: 'Redirect not found' }, { status: 404 });
  }

  return NextResponse.redirect(redirect.destination, {
    status: redirect.permanent !== false ? 301 : 302,
  });
}

export function generateStaticParams() {
  return getRedirectSlugs().map((slug) => ({ slug }));
}
