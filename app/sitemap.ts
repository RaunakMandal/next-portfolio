import { SITE_URL } from '@/core/seo/config';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified },
    { url: `${SITE_URL}/experience`, lastModified },
    { url: `${SITE_URL}/projects`, lastModified },
    { url: `${SITE_URL}/contact`, lastModified },
  ];
}
