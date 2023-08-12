import { Timeline } from '../partials/Timeline';
import { useExperience } from './useExperience.hook';

export const Experience = () => {
  const { experiences } = useExperience();
  return (
    <div className='tw-flex tw-flex-col tw-items-center tw-h-full tw-gap-3'>
      <h1 className='tw-text-2xl tw-font-bold'>Experience</h1>
      <Timeline experiences={experiences} />
    </div>
  );
};
