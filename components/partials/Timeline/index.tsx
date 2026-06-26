import { T_Experience } from '@/core/types/experience';
import { BulletList } from '../BulletList';
import dayjs from 'dayjs';
import { Fragment } from 'react';

export const Timeline = ({ experiences }: { experiences: T_Experience[] }) => {
  return (
    <div className='w-full space-y-8'>
      {experiences.map((experience, index) => (
        <Fragment key={index}>
          <article className='surface-card rounded-lg p-6 sm:p-7'>
            <div className='mb-5 pb-5 border-b border-base-300/40'>
              <h3 className='text-xl font-semibold tracking-tight'>
                {experience.company}
              </h3>
              <p className='mt-1 text-sm text-base-content/55'>
                {experience.location}
                <span className='mx-2 text-base-content/30'>·</span>
                {experience.mode}
              </p>
            </div>

            <div className='space-y-6'>
              {experience.positions.map((position, posIndex) => (
                <div key={posIndex}>
                  {posIndex > 0 && (
                    <div className='mb-6 h-px bg-base-300/40' />
                  )}
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-x-4 gap-y-1 mb-3'>
                    <h4 className='font-medium text-base-content/90 leading-snug'>
                      {position.position}
                    </h4>
                    <time className='text-xs text-base-content/45 tabular-nums shrink-0 leading-none'>
                      {dayjs(position.startDate).format('MMM YYYY')}
                      {' – '}
                      {position.endDate === 'Present'
                        ? 'Present'
                        : dayjs(position.endDate).format('MMM YYYY')}
                    </time>
                  </div>
                  <BulletList items={position.description} />
                </div>
              ))}
            </div>

            <div className='flex gap-2 flex-wrap mt-6 pt-5 border-t border-base-300/40'>
              {experience.technologies.map((technology, techIndex) => (
                <span key={techIndex} className='tech-pill px-2.5 py-1 rounded-md'>
                  {technology}
                </span>
              ))}
            </div>
          </article>
        </Fragment>
      ))}
    </div>
  );
};
