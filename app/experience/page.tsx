import { Experience } from '@/components/Experience';
import { getExperiences } from '@/core/data/experience';
import { createPageMetadata } from '@/core/seo/metadata';

export const metadata = createPageMetadata({
  title: 'Experience | Raunak Mandal',
  description:
    'Professional experience of Raunak Mandal — Senior Software Engineer & Team Lead at Teal India, with prior roles at Fyle Technologies and more.',
  path: '/experience',
  keywords: [
    'Raunak Mandal experience',
    'Software Engineer work history',
    'Teal India',
    'Next.js developer',
  ],
});

const ExperiencePage = () => {
  const experiences = getExperiences();
  return <Experience experiences={experiences} />;
};

export default ExperiencePage;
