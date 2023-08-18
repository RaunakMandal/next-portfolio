import { T_Project } from '@/core/types/project';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useProjects = () => {
  const [projects, setProjects] = useState<T_Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setError(null);
    setIsLoading(true);
    axios
      .get('/projects/api')
      .then((response) => {
        if (response.status === 200) {
          setProjects(response.data);
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
    projects,
    isLoading,
    error,
  };
};
