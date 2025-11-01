'use client';

import { ICONS } from '@/core/icons';
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
          {ICONS.close}
          <span>{error}</span>
        </div>
      )}
      <ProjectsList projects={projects.current} />
    </div>
  );
};
