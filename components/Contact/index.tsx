'use client';

import { ICONS } from '@/core/icons';
import { useContact } from './useContact.hook';

const TOOLTIP_MSG = `This form is fully functional. So do not test it out with spammy messages. Thanks!`;

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
    <div className='tw-flex tw-flex-col tw-items-center tw-h-full tw-gap-3'>
      <h1 className='tw-text-2xl tw-font-bold'>Contact</h1>
      <span className='tw-flex tw-items-center tw-gap-0.5'>
        <p className='tw-text-xl tw-font-semibold'>
          Any questions? Let me know in the form below!
        </p>
        <div
          className='tw-tooltip hover:tw-cursor-pointer'
          data-tip={TOOLTIP_MSG}
        >
          {ICONS.info}
        </div>
      </span>
      <div
        className='tw-form-control tw-w-full tw-max-w-xs'
        onChange={handleFormDataChange}
      >
        <label className='tw-label'>
          <span className='tw-label-text'>What is your name?</span>
        </label>
        <input
          type='text'
          placeholder='Type your name here'
          className='tw-input tw-input-bordered tw-w-full tw-max-w-xs'
          ref={nameRef}
        />

        <label className='tw-label'>
          <span className='tw-label-text'>What is your email address?</span>
        </label>
        <input
          type='email'
          placeholder='Type your email here'
          className='tw-input tw-input-bordered tw-w-full tw-max-w-xs'
          ref={emailRef}
        />

        <label className='tw-label'>
          <span className='tw-label-text'>Please write a message!</span>
        </label>
        <textarea
          placeholder='Type your message here'
          className='tw-textarea tw-textarea-bordered tw-textarea-lg tw-w-full tw-max-w-xs'
          ref={messageRef}
        ></textarea>
        {success && (
          <div className='tw-alert tw-alert-success tw-mt-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='tw-stroke-current tw-shrink-0 tw-h-6 tw-w-6'
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
          <div className='tw-alert tw-alert-warning tw-mt-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='tw-stroke-current tw-shrink-0 tw-h-6 tw-w-6'
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
          className='tw-btn tw-mt-4'
          onClick={handleContactFormSubmit}
          disabled={isLoading}
        >
          {isLoading && <span className='tw-loading tw-loading-spinner'></span>}
          Submit
        </button>
      </div>
    </div>
  );
};
