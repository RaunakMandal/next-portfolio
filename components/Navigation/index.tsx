'use client';

import { ICONS } from '@/core/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

const NAV_LINKS = [
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export const Navigation = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className='sticky top-0 z-50 border-b border-base-300/40 bg-base-100/90 backdrop-blur-sm'>
      <nav className='max-w-3xl mx-auto px-6 sm:px-8 h-14 flex items-center justify-between'>
        <Link
          href='/'
          className='text-base font-semibold tracking-tight hover:text-primary transition-colors'
        >
          Raunak Mandal
        </Link>

        <ul className='hidden md:flex items-center gap-1'>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  isActive(href)
                    ? 'text-primary font-medium bg-primary/10'
                    : 'text-base-content/60 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-2'>
          <ThemeSwitcher />
          <Link
            href='mailto:raunak@raunakmandal.com'
            className='hidden sm:inline-flex btn btn-primary btn-sm rounded-lg px-4'
          >
            Hire Me
          </Link>

          <div className='dropdown dropdown-end md:hidden'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-sm btn-square'
              aria-label='Open menu'
            >
              {ICONS.hamBurger}
            </div>
            <ul
              tabIndex={0}
              className='dropdown-content menu bg-base-100 rounded-lg z-50 mt-2 w-44 p-2 shadow-lg border border-base-300/50'
            >
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={isActive(href) ? 'text-primary font-medium' : ''}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className='mt-1 pt-1 border-t border-base-300/50'>
                <div className='flex items-center justify-between px-3 py-2'>
                  <span className='text-sm text-base-content/60'>Theme</span>
                  <ThemeSwitcher />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
