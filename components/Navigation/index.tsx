'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
  const path = usePathname();
  const currentPath = path.split('/')[1];
  return (
    <div className='tw-tabs tw-py-4 tw-justify-center'>
      <Link
        className={`tw-tab tw-tab-sm md:tw-tab-lg tw-tab-lifted ${
          currentPath === '' ? 'tw-tab-active' : ''
        }`}
        href='/'
      >
        Home
      </Link>
      <Link
        className={`tw-tab tw-tab-sm md:tw-tab-lg tw-tab-lifted ${
          currentPath === 'about' ? 'tw-tab-active' : ''
        }`}
        href='/about'
      >
        About
      </Link>
      <Link
        className={`tw-tab tw-tab-sm md:tw-tab-lg tw-tab-lifted ${
          currentPath === 'experience' ? 'tw-tab-active' : ''
        }`}
        href='/experience'
      >
        Experience
      </Link>
      <Link
        className={`tw-tab tw-tab-sm md:tw-tab-lg tw-tab-lifted ${
          currentPath === 'contact' ? 'tw-tab-active' : ''
        }`}
        href='/contact'
      >
        Contact
      </Link>
    </div>
  );
};
