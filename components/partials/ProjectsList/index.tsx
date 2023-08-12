import { T_Project } from '@/core/types/project';
import { ProjectsCard } from './ProjectsCard';

export const ProjectsList = ({ projects }: { projects: T_Project[] }) => {
  return (
    <div className='tw-relative md:tw-w-[80%]'>
      {projects.map((project, index) => (
        <ProjectsCard key={index} project={project} />
      ))}
    </div>
  );
};
