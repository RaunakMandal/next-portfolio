import { T_Experience } from '@/core/types/experience';
import { Timeline } from '../partials/Timeline';

export const Experience = () => {
  const experiences: T_Experience[] = [
    {
      position: 'Software Engineer',
      company: 'Teal India',
      location: 'Bangalore, India',
      mode: 'Full Time',
      startDate: '2021-06-01',
      endDate: 'Present',
      description: [
        'Working on a product that helps in the management of the entire lifecycle of a project.',
        'Working on a product that helps in the management of the entire lifecycle of a project.',
        'Working on a product that helps in the management of the entire lifecycle of a project.',
        'Working on a product that helps in the management of the entire lifecycle of a project.',
        'Working on a product that helps in the management of the entire lifecycle of a project.',
      ],
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Docker',
        'Kubernetes',
        'AWS',
        'Git',
      ],
    },
    {
      position: 'Software Engineer',
      company: 'Fyle India',
      location: 'Bangalore, India',
      mode: 'Full Time',
      startDate: '2021-06-01',
      endDate: 'Present',
      description: [
        'Working on a product that helps in the management of the entire lifecycle of a project.',
      ],
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Docker',
        'Kubernetes',
        'AWS',
        'Git',
      ],
    },
  ];
  return <Timeline experiences={experiences} />;
};
