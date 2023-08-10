import { T_Experience } from '@/core/types/experience';

export const Timeline = ({ experiences }: { experiences: T_Experience[] }) => {
  return (
    <ol className='tw-relative tw-border-l tw-border-gray-200 last:tw-border-l-0'>
      {experiences.map((experience, index) => (
        <li
          className='tw-mb-10 tw-ml-6 tw-flex tw-flex-col tw-gap-1'
          key={index}
        >
          <span className='tw-absolute tw-flex tw-items-center tw-justify-center tw-w-6 tw-h-6 tw-bg-blue-100 tw-rounded-full -tw-left-3 tw-ring-8 tw-ring-white'>
            <svg
              className='tw-w-2.5 tw-h-2.5 tw-text-blue-800'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
            </svg>
          </span>
          <h3 className='tw-flex tw-items-center tw-mb-1 tw-text-xl tw-font-semibold tw-text-gray-900'>
            {experience.company}
            {/* <span className='tw-bg-blue-100 tw-text-blue-800 tw-text-sm tw-font-medium tw-mr-2 tw-px-2.5 tw-py-0.5 tw-rounded tw-ml-3'>
              Current
            </span> */}
          </h3>
          <h4 className='tw-flex tw-items-center tw-mb-1 tw-text-md tw-font-semibold tw-text-gray-900'>
            {experience.position}
          </h4>
          <time className='tw-block tw-mb-2 tw-text-sm tw-font-normal tw-leading-none tw-text-gray-400'>
            {experience.startDate} - {experience.endDate}
          </time>
          {experience.description.map((description, index) => (
            <p
              className='tw-text-base tw-font-normal tw-text-gray-500'
              key={index}
            >
              - {description}
            </p>
          ))}
          <div className='tw-flex tw-gap-2 tw-flex-wrap tw-mt-2'>
            {experience.technologies.map((technology, index) => (
              <span className='tw-badge tw-badge-lg' key={index}>
                {technology}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
};
