'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineCode, MdOutlineMail, MdWorkOutline } from 'react-icons/md';

export const Navigation = () => {
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            <li>
              <span>
                <MdWorkOutline />
                <Link href='/experience'>Experience</Link>
              </span>
            </li>
            <li>
              <span>
                <MdOutlineCode />
                <Link href='/projects'>Projects</Link>
              </span>
            </li>
            <li>
              <span>
                <MdOutlineMail />
                <Link href='/contact'>Contact</Link>
              </span>
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
            <span>
              <MdWorkOutline />
              <Link href='/experience'>Experience</Link>
            </span>
          </li>
          <li>
            <span>
              <MdOutlineCode />
              <Link href='/projects'>Projects</Link>
            </span>
          </li>
          <li>
            <span>
              <MdOutlineMail />
              <Link href='/contact'>Contact</Link>
            </span>
          </li>
        </ul>
      </div>
      <div className='navbar-end gap-2'>
        <Link href='https://www.linkedin.com/in/raunak-mandal' target='_blank'>
          <FaLinkedin size={24} />
        </Link>
        <Link href='https://github.com/RaunakMandal' target='_blank'>
          <FaGithub size={24} />
        </Link>
      </div>
    </div>
  );
};
