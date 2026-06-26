import { ICONS } from '@/core/icons';
import Link from 'next/link';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-base-300/40 mt-auto'>
      <div className='max-w-3xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4'>
        <p className='text-sm text-base-content/50'>
          &copy; {year} Raunak Mandal. Built with Next.js.
        </p>
        <div className='flex items-center gap-4'>
          <Link
            href='https://www.linkedin.com/in/raunak-mandal'
            target='_blank'
            className='text-base-content/50 hover:text-primary transition-colors'
            aria-label='LinkedIn'
          >
            {ICONS.linkedin}
          </Link>
          <Link
            href='https://github.com/RaunakMandal'
            target='_blank'
            className='text-base-content/50 hover:text-primary transition-colors'
            aria-label='GitHub'
          >
            {ICONS.github}
          </Link>
          <Link
            href='mailto:raunak@raunakmandal.com'
            className='text-base-content/50 hover:text-primary transition-colors'
            aria-label='Email'
          >
            {ICONS.email}
          </Link>
        </div>
      </div>
    </footer>
  );
};
