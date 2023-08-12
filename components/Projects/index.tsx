import { ProjectsList } from '../partials/ProjectsList';
import { useProjects } from './useProjects.hook';

export const Projects = () => {
  const { projects } = useProjects();
  return (
    <div className='tw-flex tw-flex-col tw-items-center tw-h-full tw-gap-3'>
      <h1 className='tw-text-2xl tw-font-bold'>Projects</h1>
      <ProjectsList projects={projects} />
    </div>
  );
};
