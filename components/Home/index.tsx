import Image from 'next/image';
import profilePic from '../../public/images/raunak.jpg';
import Link from 'next/link';
import { MdOutlineFileDownload, MdOutlineWavingHand } from 'react-icons/md';

export const Home = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='avatar'>
        <div className='w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
          <Image src={profilePic} loading='lazy' alt='Picture of the author' />
        </div>
      </div>
      <p className='text-4xl font-bold text-center'>Hi, I am Raunak Mandal</p>
      <p className='text-xl text-center'>Senior Software Engineer</p>
      <div className='flex gap-4 mt-4'>
        <Link href='mailto:raunak@raunakmandal.is-a.dev'>
          <button className='btn btn-soft btn-primary'>
            <span className='flex items-center gap-2'>
              <MdOutlineWavingHand size={24} />
              Hire me
            </span>
          </button>
        </Link>
        <Link href='/resume/Raunak_Resume_New.pdf' download={true}>
          <button className='btn btn-outline'>
            <span className='flex items-center gap-2'>
              <MdOutlineFileDownload size={24} />
              Download Résumé
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};
