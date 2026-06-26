import { Projects } from '@/components/Projects';
import { getProjects } from '@/core/data/projects';
import { createPageMetadata } from '@/core/seo/metadata';

export const metadata = createPageMetadata({
  title: 'Projects | Raunak Mandal',
  description:
    'Portfolio projects by Raunak Mandal — side projects and tools built with React, Next.js, TypeScript, and more.',
  path: '/projects',
  keywords: [
    'Raunak Mandal projects',
    'Developer portfolio projects',
    'Next.js projects',
    'React side projects',
  ],
});

const ProjectsPage = () => {
  const projects = getProjects();
  return <Projects projects={projects} />;
};

export default ProjectsPage;
