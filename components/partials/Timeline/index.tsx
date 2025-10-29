import { ICONS } from '@/core/icons';
import { T_Experience } from '@/core/types/experience';
import dayjs from 'dayjs';
import { Fragment } from 'react';

export const Timeline = ({ experiences }: { experiences: T_Experience[] }) => {
  return (
    <div className='relative md:w-[80%]'>
      {experiences.map((experience, index) => (
        <Fragment key={index}>
          <div className='flex'>
            <div className='flex flex-col items-center justify-between'>
              <span className='flex items-center justify-center p-2 bg-blue-100 rounded-full ring-8 ring-white'>
                {ICONS.work}
              </span>
              {index !== experiences.length - 1 && (
                <div className='w-0.5 bg-slate-300 h-full my-2'></div>
              )}
            </div>
            <div className='flex flex-col pb-8 pl-6'>
              <h3 className='flex items-center mb-1 text-xl font-semibold text-gray-900'>
                {experience.company}
                {/* <span className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3'>
              Current
            </span> */}
              </h3>
              {experience.positions.map((position, index) => (
                <div className='mb-4' key={index}>
                  <h4 className='flex items-center mb-1 text-md font-semibold text-gray-900'>
                    {position.position}
                  </h4>
                  <time className='block mb-2 text-sm font-normal leading-none text-gray-400'>
                    {dayjs(position.startDate).format('MMMM YYYY')}
                    &nbsp;to&nbsp;
                    {position.endDate === 'Present'
                      ? 'Present'
                      : dayjs(position.endDate).format('MMMM YYYY')}
                  </time>
                  {position.description.map((description, index) => (
                    <p
                      className='text-base font-normal text-gray-500'
                      key={index}
                    >
                      - {description}
                    </p>
                  ))}
                </div>
              ))}
              <div className='flex gap-2 flex-wrap mt-2'>
                {experience.technologies.map((technology, index) => (
                  <span className='badge badge-lg text-sm' key={index}>
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};
