import { T_Project } from '@/core/types/project';
import Link from 'next/link';
import { ICONS } from '@/core/icons';
import { useEffect, useState } from 'react';

export const ProjectsList = ({ projects }: { projects: T_Project[] }) => {
  const [projectUrl, setProjectUrl] = useState<string | null>(null);

  useEffect(() => {
    if (projectUrl) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [projectUrl]);

  return (
    <div className='relative md:w-[80%]'>
      {projects.map((project, index) => (
        <div className='flex' key={index}>
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
                  // <Link
                  //   href={project.link}
                  //   target='_blank'
                  //   className='flex flex-col items-center justify-between cursor-pointer'
                  // >
                  <button
                    className='cursor-pointer'
                    onClick={() => setProjectUrl(project.link as string)}
                  >
                    {ICONS.link}
                  </button>
                  // </Link>
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
      ))}
      {projectUrl && (
        <div className='mockup-browser border border-base-300 w-full'>
          <div className='mockup-browser-toolbar'>
            <div className='input'>{projectUrl}</div>
            <button
              className='cursor-pointer'
              onClick={() => setProjectUrl(null)}
            >
              {ICONS.close}
            </button>
          </div>
          <div className='grid place-content-center h-80'>
            <iframe
              src={projectUrl}
              title='Project Preview'
              className='h-[320px] w-[550px] p-0.5 rounded-md'
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};
