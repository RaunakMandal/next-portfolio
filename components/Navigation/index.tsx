'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
  const path = usePathname();
  const currentPath = path.split('/')[1];
  return (
    <div className='tabs tabs-box py-4 justify-center'>
      <Link
        className={`tab tab-sm tabs-md tab-lifted ${
          currentPath === '' ? 'tab-active' : ''
        }`}
        href='/'
      >
        Home
      </Link>
      <Link
        className={`tab tab-sm md:tab-lg tab-lifted ${
          currentPath === 'about' ? 'tab-active' : ''
        }`}
        href='/about'
      >
        About
      </Link>
      <Link
        className={`tab tab-sm md:tab-lg tab-lifted ${
          currentPath === 'experience' ? 'tab-active' : ''
        }`}
        href='/experience'
      >
        Experience
      </Link>
      <Link
        className={`tab tab-sm md:tab-lg tab-lifted ${
          currentPath === 'projects' ? 'tab-active' : ''
        }`}
        href='/projects'
      >
        Projects
      </Link>
      <Link
        className={`tab tab-sm md:tab-lg tab-lifted ${
          currentPath === 'contact' ? 'tab-active' : ''
        }`}
        href='/contact'
      >
        Contact
      </Link>
    </div>
  );
};
