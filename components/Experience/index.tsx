import { Timeline } from '../partials/Timeline';
import { PageHeader } from '../partials/PageHeader';
import { T_Experience } from '@/core/types/experience';

type ExperienceProps = {
  experiences: T_Experience[];
};

export const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <div className='w-full'>
      <PageHeader
        title='Experience'
        subtitle='Where I have worked and the impact I have made along the way.'
      />
      <Timeline experiences={experiences} />
    </div>
  );
};
