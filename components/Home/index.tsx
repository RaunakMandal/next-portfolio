import Image from 'next/image';
import profilePic from '../../public/images/raunak.jpg';
import tealLogo from '../../public/teal-logo.svg';
import Link from 'next/link';

export const Home = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='avatar'>
        <div className='w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
          <Image src={profilePic} alt='Picture of the author' />{' '}
        </div>
      </div>
      <span className='text-2xl font-bold flex items-center'>
        Hi, I am Raunak Mandal I am a Software Engineer at &nbsp;
        <Link
          href='https://www.linkedin.com/company/tealindia/'
          target='_blank'
        >
          <Image src={tealLogo} alt='Picture of the author' />
        </Link>
      </span>
      {/* <div
        className='tooltip'
        data-tip='Disabled kyunki I am already working somewhere. Lol! :lolsob:'
      > */}
      <Link href='mailto:raunak@raunakmandal.is-a.dev' target='_blank'>
        <button className='btn btn-soft btn-primary'>Hire me</button>
      </Link>
      {/* </div> */}
    </div>
  );
};
