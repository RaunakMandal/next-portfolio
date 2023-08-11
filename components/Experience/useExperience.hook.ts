import { T_Experience } from '@/core/types/experience';

export const useExperience = () => {
  const experiences: T_Experience[] = [
    {
      positions: [
        {
          position: 'Software Engineer',
          startDate: '2023-08-01',
          endDate: 'Present',
          description: [
            'Working on the Product Engineering team, building and maintaining the core product.',
          ],
        },
        {
          position: 'Software Engineer Intern',
          startDate: '2023-06-19',
          endDate: '2023-07-31',
          description: [
            'Built microservices for the core product.',
            'Worked on the frontend of the core product.',
            'Will add more yeh to aise hi hai.'
          ],
        },
      ],
      company: 'Teal India',
      location: 'Bangalore, India',
      mode: 'Onsite',
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'MongoDB'
      ],
    },
    {
      positions: [
        {
          position: 'Engineering Intern',
          startDate: '2022-10-25',
          endDate: '2023-02-21',
          description: [
            'Revamped the View Report page interface, involving major user-facing changes that are used by more than 200 users.',
            'Understood older AngularJS codes and components and fixed 10+ existing bugs in the app.',
            'Wrote more than 500+ lines of clean, readable code during the period of the internship.',
          ],
        },
      ],
      company: 'Fyle Technologies',
      location: 'Bangalore, India',
      mode: 'Remote',
      technologies: ['AngularJS', 'SCSS', 'HTML5'],
    },
    {
      positions: [
        {
          position: 'Engineering Intern',
          startDate: '2022-10-25',
          endDate: '2023-02-21',
          description: [
            'Revamped the View Report page interface, involving major user-facing changes that are used by more than 200 users.',
            'Understood older AngularJS codes and components and fixed 10+ existing bugs in the app.',
            'Wrote more than 500+ lines of clean, readable code during the period of the internship.',
          ],
        },
      ],
      company: 'Innovacio Technologies',
      location: 'Kolkata, India',
      mode: 'Remote',
      technologies: ['Android', 'Java', 'Android SDK', 'REST APIs', 'Retrofit'],
    },
  ];

  return {
    experiences,
  };
};
