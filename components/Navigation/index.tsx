'use client';

import { ICONS } from '@/core/icons';
import Link from 'next/link';

export const Navigation = () => {
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            {ICONS.hamBurger}
          </div>
          <ul
            tabIndex={-1}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            <li>
              <Link href='/experience'>
                <span className='flex items-center gap-1'>
                  {ICONS.work}
                  Experience
                </span>
              </Link>
            </li>
            <li>
              <Link href='/projects'>
                <span className='flex items-center gap-1'>
                  {ICONS.code}
                  Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <span className='flex items-center gap-1'>
                  {ICONS.mail}
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <span className='ml-2'>
          <Link href='/'>
            <p className='text-xl font-bold text-nowrap'>Raunak Mandal</p>
          </Link>
        </span>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu bg-base-200 lg:menu-horizontal rounded-box'>
          <li>
            <Link href='/experience'>
              <span className='flex items-center gap-1'>
                {ICONS.work}
                Experience
              </span>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <span className='flex items-center gap-1'>
                {ICONS.code}
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <span className='flex items-center gap-1'>
                {ICONS.mail}
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end gap-2'>
        <Link href='https://www.linkedin.com/in/raunak-mandal' target='_blank'>
          {ICONS.linkedin}
        </Link>
        <Link href='https://github.com/RaunakMandal' target='_blank'>
          {ICONS.github}
        </Link>
      </div>
    </div>
  );
};
