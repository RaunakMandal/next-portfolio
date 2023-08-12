import { ICONS } from '@/core/icons';
import { T_Project } from '@/core/types/project';
import Link from 'next/link';

export const ProjectsCard = ({ project }: { project: T_Project }) => {
  return (
    <div className='tw-flex'>
      <div className='tw-flex tw-flex-col tw-pb-8 tw-pl-6'>
        <span className='tw-flex tw-justify-between tw-items-center tw-w-full tw-mb-1 tw-text-xl tw-font-semibold tw-text-gray-900'>
          <h3 className='tw-flex tw-items-center tw-mb-1 tw-text-xl tw-font-semibold tw-text-gray-900'>
            {project.name}
          </h3>
          <span className='tw-flex tw-justify-between'>
            {project.github && (
              <Link
                href={project.github}
                target='_blank'
                className='tw-flex tw-flex-col tw-items-center tw-justify-between tw-cursor-pointer'
              >
                {ICONS.github}
              </Link>
            )}
            {project.link && (
              <Link
                href={project.link}
                target='_blank'
                className='tw-flex tw-flex-col tw-items-center tw-justify-between tw-cursor-pointer'
              >
                {ICONS.link}
              </Link>
            )}
          </span>
        </span>
        {project.description.map((description, index) => (
          <p
            className='tw-text-base tw-font-normal tw-text-gray-500'
            key={index}
          >
            - {description}
          </p>
        ))}
        <div className='tw-flex tw-gap-2 tw-flex-wrap tw-mt-2'>
          {project.technologies.map((technology, index) => (
            <span className='tw-badge tw-badge-lg tw-text-sm' key={index}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
