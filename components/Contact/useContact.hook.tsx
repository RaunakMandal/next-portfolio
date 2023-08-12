import { T_Api_Res_ContactForm } from '@/app/contact/api/route';
import axios from 'axios';
import { useRef, useState } from 'react';

export const useContact = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleContactFormSubmit = () => {
    setIsLoading(true);
    setSuccess('');
    setError('');

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;

    if (name && email && message) {
      axios
        .post<T_Api_Res_ContactForm>('/contact/api', {
          name,
          email,
          message,
        })
        .then((res) => {
          if (res.status === 200) {
            setSuccess(res.data.message);
            nameRef.current!.value = '';
            emailRef.current!.value = '';
            messageRef.current!.value = '';
          }
        })
        .catch((err) => {
          setError(err.response.data.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setError('Please fill all the fields');
      setIsLoading(false);
    }
  };

  const handleFormDataChange = () => {
    setSuccess('');
    setError('');
  };

  return {
    nameRef,
    emailRef,
    messageRef,
    handleContactFormSubmit,
    handleFormDataChange,
    isLoading,
    success,
    error,
  };
};
