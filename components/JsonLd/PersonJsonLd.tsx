import { AUTHOR, SITE_DESCRIPTION, SITE_URL } from '@/core/seo/config';

export const PersonJsonLd = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: AUTHOR.name,
    url: SITE_URL,
    email: AUTHOR.email,
    jobTitle: 'Senior Software Engineer',
    description: SITE_DESCRIPTION,
    sameAs: [AUTHOR.linkedin, AUTHOR.github],
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'MongoDB',
      'Software Engineering',
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
