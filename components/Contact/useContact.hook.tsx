import { useRef } from 'react';

export const useContact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleContactFormSubmit = () => {
    // console.log('handleContactFormSubmit');
    if (nameRef.current && emailRef.current && messageRef.current) {
      //   console.log('nameRef', (nameRef.current as HTMLFormElement).value);
      //   console.log('emailRef', (emailRef.current as HTMLFormElement).value);
      //   console.log('messageRef', (messageRef.current as HTMLFormElement).value);
    }
  };

  return {
    nameRef,
    emailRef,
    messageRef,
    handleContactFormSubmit,
  };
};
