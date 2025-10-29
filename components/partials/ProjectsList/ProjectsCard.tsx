import { ICONS } from '@/core/icons';
import { T_Project } from '@/core/types/project';
import Link from 'next/link';

export const ProjectsCard = ({ project }: { project: T_Project }) => {
  return (
    <div className='flex'>
      <div className='flex flex-col pb-8 pl-6'>
        <span className='flex justify-between items-center w-full mb-1 text-xl font-semibold text-gray-900'>
          <h3 className='flex items-center mb-1 text-xl font-semibold text-gray-900'>
            {project.name}
          </h3>
          <span className='flex justify-between'>
            {project.github && (
              <Link
                href={project.github}
                target='_blank'
                className='flex flex-col items-center justify-between cursor-pointer'
              >
                {ICONS.github}
              </Link>
            )}
            {project.link && (
              <Link
                href={project.link}
                target='_blank'
                className='flex flex-col items-center justify-between cursor-pointer'
              >
                {ICONS.link}
              </Link>
            )}
          </span>
        </span>
        {project.description.map((description, index) => (
          <p className='text-base font-normal text-gray-500' key={index}>
            - {description}
          </p>
        ))}
        <div className='flex gap-2 flex-wrap mt-2'>
          {project.technologies.map((technology, index) => (
            <span className='badge badge-lg text-sm' key={index}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
