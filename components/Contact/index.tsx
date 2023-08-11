'use client';

import { ICONS } from '@/core/icons';
import { useContact } from './useContact.hook';

// const TOOLTIP_MSG = `This form is fully functional. So do not test it out with spammy messages. Thanks!`;
const TOOLTIP_MSG = `The form is not functional yet.`;

export const Contact = () => {
  const { nameRef, emailRef, messageRef, handleContactFormSubmit } =
    useContact();

  return (
    <div className='tw-flex tw-flex-col tw-items-center tw-h-full tw-gap-3'>
      <h1 className='tw-text-4xl tw-font-bold'>Contact</h1>
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
      <div className='tw-form-control tw-w-full tw-max-w-xs'>
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
        <div
          className='tw-tooltip hover:tw-cursor-not-allowed'
          data-tip={`Bola na nai chalega.`}
        >
          <button
            className='tw-btn tw-mt-4'
            onClick={handleContactFormSubmit}
            disabled
          >
            {/* <span className='tw-loading tw-loading-spinner'></span> */}
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
