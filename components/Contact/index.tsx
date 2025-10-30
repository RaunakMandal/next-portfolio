'use client';

import { useContact } from './useContact.hook';

export const Contact = () => {
  const {
    nameRef,
    emailRef,
    messageRef,
    handleContactFormSubmit,
    handleFormDataChange,
    isLoading,
    success,
    error,
  } = useContact();

  return (
    <div className='flex flex-col items-center h-full gap-3'>
      <h1 className='text-2xl font-bold'>Contact</h1>
      <div
        className='form-control w-full max-w-xs flex flex-col'
        onChange={handleFormDataChange}
      >
        <fieldset className='fieldset'>
          <legend className='fieldset-legend'>What is your name?</legend>
          <input
            type='text'
            placeholder='Type your name here'
            className='input input-md'
            ref={nameRef}
          />
        </fieldset>

        <fieldset className='fieldset'>
          <legend className='fieldset-legend'>
            What is your email address?
          </legend>
          <input
            type='email'
            placeholder='Type your email here'
            className='input input-md'
            ref={emailRef}
          />
        </fieldset>

        <fieldset className='fieldset'>
          <legend className='fieldset-legend'>
            What message would you like to send?
          </legend>
          <textarea
            placeholder='Type your message here'
            className='textarea textarea-md h-24'
            ref={messageRef}
          ></textarea>
        </fieldset>
        {success && (
          <div className='alert alert-success mt-4 alert-soft'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='stroke-current shrink-0 h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span>{success}</span>
          </div>
        )}
        {error && (
          <div className='alert alert-warning mt-4 alert-soft'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='stroke-current shrink-0 h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
              />
            </svg>
            <span>{error}</span>
          </div>
        )}
        <button
          className='btn btn-soft btn-primary mt-4'
          onClick={handleContactFormSubmit}
          disabled={isLoading}
        >
          {isLoading && <span className='loading loading-spinner'></span>}
          Submit
        </button>
      </div>
    </div>
  );
};
