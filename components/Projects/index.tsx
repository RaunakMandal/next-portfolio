import { ProjectsList } from '../partials/ProjectsList';
import { PageHeader } from '../partials/PageHeader';
import { T_Project } from '@/core/types/project';

type ProjectsProps = {
  projects: T_Project[];
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className='w-full'>
      <PageHeader
        title='Projects'
        subtitle='Side projects and tools I have built to solve real problems.'
      />
      <ProjectsList projects={projects} />
    </div>
  );
};
