import Image from 'next/image';
import profilePic from '../../public/images/raunak.jpeg';
import tealLogo from '../../public/teal-logo.svg';
import Link from 'next/link';

export const Home = () => {
  return (
    <div className='tw-flex tw-flex-col tw-items-center tw-gap-4'>
      <div className='tw-avatar'>
        <div className='tw-w-64 tw-rounded-full tw-ring tw-ring-primary tw-ring-offset-base-100 tw-ring-offset-2'>
          <Image src={profilePic} alt='Picture of the author' />{' '}
        </div>
      </div>
      <span className='tw-text-2xl tw-font-bold tw-flex tw-items-center'>
        Hi, I am Raunak Mandal I am a Software Engineer at &nbsp;
        <Link
          href='https://www.linkedin.com/company/tealindia/'
          target='_blank'
        >
          <Image src={tealLogo} alt='Picture of the author' />
        </Link>
      </span>
      <div
        className='tw-tooltip'
        data-tip='Disabled kyunki I am already working somewhere. Lol! :lolsob:'
      >
        <button className='tw-btn hover:cursor-not-allowed' disabled>
          Hire me
        </button>
      </div>
    </div>
  );
};
