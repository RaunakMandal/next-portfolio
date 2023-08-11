import { Timeline } from '../partials/Timeline';
import { useExperience } from './useExperience.hook';

export const Experience = () => {
  const { experiences } = useExperience();
  return <Timeline experiences={experiences} />;
};
