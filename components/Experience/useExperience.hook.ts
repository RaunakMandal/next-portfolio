import { T_Experience } from '@/core/types/experience';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useExperience = () => {
  const [experiences, setExperiences] = useState<T_Experience[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    axios
      .get('/experience/api')
      .then((response) => {
        if (response.status === 200) {
          setExperiences(response.data);
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    experiences,
    isLoading,
    error,
  };
};
