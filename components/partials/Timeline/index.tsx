import { ICONS } from '@/core/icons';
import { T_Experience } from '@/core/types/experience';
import dayjs from 'dayjs';
import { Fragment } from 'react';

export const Timeline = ({ experiences }: { experiences: T_Experience[] }) => {
  return (
    <div className='tw-relative md:tw-w-[60%]'>
      {experiences.map((experience, index) => (
        <Fragment key={index}>
          <div className='tw-flex'>
            <div className='tw-flex tw-flex-col tw-items-center tw-justify-between'>
              <span className='tw-flex tw-items-center tw-justify-center tw-p-2 tw-bg-blue-100 tw-rounded-full tw-ring-8 tw-ring-white'>
                {ICONS.work}
              </span>
              {index !== experiences.length - 1 && (
                <div className='tw-w-0.5 tw-bg-slate-300 tw-h-full tw-my-2'></div>
              )}
            </div>
            <div className='tw-flex tw-flex-col tw-pb-8 tw-pl-6'>
              <h3 className='tw-flex tw-items-center tw-mb-1 tw-text-xl tw-font-semibold tw-text-gray-900'>
                {experience.company}
                {/* <span className='tw-bg-blue-100 tw-text-blue-800 tw-text-sm tw-font-medium tw-mr-2 tw-px-2.5 tw-py-0.5 tw-rounded tw-ml-3'>
              Current
            </span> */}
              </h3>
              {experience.positions.map((position, index) => (
                <div className='tw-mb-4' key={index}>
                  <h4 className='tw-flex tw-items-center tw-mb-1 tw-text-md tw-font-semibold tw-text-gray-900'>
                    {position.position}
                  </h4>
                  <time className='tw-block tw-mb-2 tw-text-sm tw-font-normal tw-leading-none tw-text-gray-400'>
                    {dayjs(position.startDate).format('MMMM YYYY')}
                    &nbsp;to&nbsp;
                    {position.endDate === 'Present'
                      ? 'Present'
                      : dayjs(position.endDate).format('MMMM YYYY')}
                  </time>
                  {position.description.map((description, index) => (
                    <p
                      className='tw-text-base tw-font-normal tw-text-gray-500'
                      key={index}
                    >
                      - {description}
                    </p>
                  ))}
                </div>
              ))}
              <div className='tw-flex tw-gap-2 tw-flex-wrap'>
                {experience.technologies.map((technology, index) => (
                  <span className='tw-badge tw-badge-lg tw-text-sm' key={index}>
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
