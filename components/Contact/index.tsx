'use client';

import { ICONS } from '@/core/icons';
import { PageHeader } from '../partials/PageHeader';
import { useContact } from './useContact.hook';
import { useEffect } from 'react';
import Link from 'next/link';

export const Contact = () => {
  const {
    nameRef,
    emailRef,
    messageRef,
    handleContactFormSubmit,
    handleFormDataChange,
    isLoading,
    success,
    setSuccess,
    error,
    setError,
  } = useContact();

  useEffect(() => {
    setTimeout(() => {
      if (success || error) {
        setSuccess('');
        setError('');
      }
    }, 3000);
  }, [success, error, setSuccess, setError]);

  return (
    <div className='w-full'>
      <PageHeader
        title='Contact'
        subtitle='Have an opportunity or just want to say hello? I would love to hear from you.'
      />

      <div className='surface-card p-6 sm:p-7'>
        <div className='flex flex-col gap-5' onChange={handleFormDataChange}>
          <fieldset className='fieldset p-0'>
            <legend className='fieldset-legend text-sm font-medium text-base-content/70'>
              Name
            </legend>
            <input
              type='text'
              placeholder='Your name'
              className='input input-bordered w-full bg-base-100 border-base-300 focus:border-primary'
              ref={nameRef}
            />
          </fieldset>

          <fieldset className='fieldset p-0'>
            <legend className='fieldset-legend text-sm font-medium text-base-content/70'>
              Email
            </legend>
            <input
              type='email'
              placeholder='you@company.com'
              className='input input-bordered w-full bg-base-100 border-base-300 focus:border-primary'
              ref={emailRef}
            />
          </fieldset>

          <fieldset className='fieldset p-0'>
            <legend className='fieldset-legend text-sm font-medium text-base-content/70'>
              Message
            </legend>
            <textarea
              placeholder='Tell me about the role or project...'
              className='textarea textarea-bordered w-full h-32 bg-base-100 border-base-300 focus:border-primary resize-none'
              ref={messageRef}
            />
          </fieldset>

          {success && (
            <div className='alert alert-success alert-soft'>
              {ICONS.check}
              <span>{success}</span>
            </div>
          )}
          {error && (
            <div className='alert alert-warning alert-soft'>
              {ICONS.close}
              <span>{error}</span>
            </div>
          )}

          <button
            className='btn btn-primary w-full rounded-lg mt-1'
            onClick={handleContactFormSubmit}
            disabled={isLoading}
          >
            {isLoading && (
              <span className='loading loading-spinner loading-sm' />
            )}
            Send Message
          </button>
        </div>

        <div className='mt-7 pt-6 border-t border-base-300/40 text-center'>
          <p className='text-sm text-base-content/45 mb-2'>Or reach out directly</p>
          <Link
            href='mailto:raunak@raunakmandal.com'
            className='inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium'
          >
            {ICONS.email}
            raunak@raunakmandal.com
          </Link>
        </div>
      </div>
    </div>
  );
};
