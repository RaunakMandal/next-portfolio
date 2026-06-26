'use client';

import { T_Project } from '@/core/types/project';
import Link from 'next/link';
import { ICONS } from '@/core/icons';
import { BulletList } from '../BulletList';
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
    <div className='w-full space-y-8'>
      {projects.map((project, index) => (
        <article key={index} className='surface-card rounded-lg p-6 sm:p-7'>
          <div className='flex items-start justify-between gap-4 mb-4 pb-4 border-b border-base-300/40'>
            <h3 className='text-xl font-semibold tracking-tight'>
              {project.name}
            </h3>
            <div className='flex items-center gap-1 shrink-0'>
              {project.github && (
                <Link
                  href={project.github}
                  target='_blank'
                  className='btn btn-ghost btn-sm btn-square text-base-content/50 hover:text-primary'
                  aria-label={`${project.name} on GitHub`}
                >
                  {ICONS.github}
                </Link>
              )}
              {project.link && (
                <button
                  className='btn btn-ghost btn-sm btn-square text-base-content/50 hover:text-primary cursor-pointer'
                  onClick={() => setProjectUrl(project.link as string)}
                  aria-label={`Preview ${project.name}`}
                >
                  {ICONS.link}
                </button>
              )}
            </div>
          </div>

          <BulletList items={project.description} />

          <div className='flex gap-2 flex-wrap mt-6 pt-5 border-t border-base-300/40'>
            {project.technologies.map((technology, techIndex) => (
              <span key={techIndex} className='tech-pill px-2.5 py-1 rounded-md'>
                {technology}
              </span>
            ))}
          </div>
        </article>
      ))}

      {projectUrl && (
        <div className='surface-card rounded-lg overflow-hidden'>
          <div className='flex items-center gap-3 px-4 py-3 border-b border-base-300/40 bg-base-200/40'>
            <p className='flex-1 text-xs text-base-content/50 truncate'>
              {projectUrl}
            </p>
            <button
              className='btn btn-ghost btn-sm btn-square cursor-pointer text-base-content/50 hover:text-error'
              onClick={() => setProjectUrl(null)}
              aria-label='Close preview'
            >
              {ICONS.close}
            </button>
          </div>
          <div className='relative w-full aspect-video bg-base-300/20'>
            <iframe
              src={projectUrl}
              title='Project Preview'
              className='absolute inset-0 w-full h-full'
            />
          </div>
        </div>
      )}
    </div>
  );
};
