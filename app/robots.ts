import { SITE_URL } from '@/core/seo/config';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/data/', '/contact/api'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
