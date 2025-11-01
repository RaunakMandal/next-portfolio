'use client';

import { ICONS } from '@/core/icons';
import { Timeline } from '../partials/Timeline';
import { useExperience } from './useExperience.hook';

export const Experience = () => {
  const { experiences, isLoading, error } = useExperience();

  return (
    <div className='flex flex-col items-center h-full gap-3'>
      <h1 className='text-2xl font-bold'>Experience</h1>
      {isLoading && <span className='loading loading-ring loading-lg'></span>}
      {error && (
        <div className='alert alert-error alert-soft'>
          {ICONS.close}
          <span>{error}</span>
        </div>
      )}
      <Timeline experiences={experiences} />
    </div>
  );
};
