import { T_Project } from '@/core/types/project';

export const useProjects = () => {
  const projects: T_Project[] = [
    {
      name: 'Bits-2-Bytes 2K22 Website',
      description: [
        'Designed the whole structure of the Website along with my team members and followed best practices.',
        'Handled little bit of Express backend and most of React frontend for this project',
        'The website was able to handle more than 250 concurrent users when launched and registration started.',
      ],
      preview: 'https://bits2bytes2k22.netlify.app/',
      link: 'https://bits2bytes2k22.netlify.app/',
      technologies: [
        'React',
        'Express',
        'MongoDB',
        'NodeJS',
        'NodeMailer',
      ],
    },
    {
        name: 'Quick WhatsApp',
        description: [
          'Made this App to help the users to Send a WhatsApp Message without saving the phone number.',
          'Used some basic Opensource Libraries to improve the UI.',
          'It now has the ability to send a message to a numberfrom the share menu itself.',
        ],
        github: 'https://github.com/RaunakMandal/Quick-WhatsApp',
        technologies: [
            'Android',
            'Java',
            'XML',
        ],
      },
      {
        name: 'SST Password',
        description: [
          'Full Stack Password Manager app with best practices on Auth, DB, Load time, etc.',
          'Wrote an Android App from scratch, following the MVVM architecture and best practices.',
        ],
        technologies: [
            'Android',
            'Java',
            'RoomDB',
            'MVVM',
            'Express',
            'MongoDB',
            'NodeJS',
        ],
      },
      {
        name: 'Nashbud',
        description: [
          'Implemented majorfeatures from scratch including Image upload, using local database, etc.',
          'Integrated Google’s Place Autocomplete, which reduced the per search cost by a large margin.',
        ],
        technologies: [
            'Android',
            'Java',
            'RoomDB',
            'Express',
            'MongoDB',
            'NodeJS',
        ],
      }
  ];

  return { projects };
};
