import { Metadata } from 'next';
import {
  AUTHOR,
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from './config';

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = '',
  keywords = SITE_KEYWORDS,
  noIndex = false,
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title ?? SITE_TITLE;
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    title: pageTitle,
    description,
    keywords,
    authors: [{ name: AUTHOR.name, url: AUTHOR.url }],
    creator: AUTHOR.name,
    publisher: AUTHOR.name,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: pageTitle,
      description,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — Senior Software Engineer`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [OG_IMAGE],
      creator: `@${SITE_NAME.replace(/\s/g, '')}`,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}
