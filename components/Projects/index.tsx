'use client';

import { ProjectsList } from '../partials/ProjectsList';
import { useProjects } from './useProjects.hook';

export const Projects = () => {
  const { projects, isLoading, error } = useProjects();
  return (
    <div className='flex flex-col items-center h-full gap-3'>
      <h1 className='text-2xl font-bold'>Projects</h1>
      {isLoading && <span className='loading loading-ring loading-lg'></span>}
      {error && (
        <div className='alert alert-error alert-soft'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current shrink-0 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
      <ProjectsList projects={projects.current} />
    </div>
  );
};
