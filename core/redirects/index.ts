import fs from 'fs';
import path from 'path';

export type RedirectEntry = {
  destination: string;
  permanent?: boolean;
};

const ALLOWED_PROTOCOLS = new Set(['https:', 'http:', 'mailto:']);

function isAllowedDestination(destination: string): boolean {
  if (destination.startsWith('mailto:')) {
    return destination.length > 'mailto:'.length;
  }

  try {
    const url = new URL(destination);
    return ALLOWED_PROTOCOLS.has(url.protocol);
  } catch {
    return false;
  }
}

export function getRedirects(): Record<string, RedirectEntry> {
  const filePath = path.join(process.cwd(), 'data/redirects.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw) as Record<string, RedirectEntry>;
}

export function getRedirect(slug: string): RedirectEntry | null {
  const entry = getRedirects()[slug.toLowerCase()];
  if (!entry || !isAllowedDestination(entry.destination)) {
    return null;
  }
  return entry;
}

export function getRedirectSlugs(): string[] {
  return Object.keys(getRedirects());
}
