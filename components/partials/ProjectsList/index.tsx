import { T_Project } from '@/core/types/project';
import { ProjectsCard } from './ProjectsCard';

export const ProjectsList = ({ projects }: { projects: T_Project[] }) => {
  return (
    <div className='relative md:w-[80%]'>
      {projects.map((project, index) => (
        <ProjectsCard key={index} project={project} />
      ))}
    </div>
  );
};
