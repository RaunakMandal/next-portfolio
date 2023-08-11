import Link from 'next/link';

export const About = () => {
  return (
    <div className='tw-flex tw-flex-col tw-items-center tw-h-full tw-gap-3'>
      <h1 className='tw-text-4xl tw-font-bold'>About</h1>
      <p className='tw-text-xl tw-font-semibold'>
        I am thinking of what to write here. Kuch idea hai to mail karo at{' '}
        <Link
          href='mailto:iamriju2000@gmail.com'
          className='hover:tw-text-blue-600 hover:tw-cursor-pointer'
        >
          iamriju2000@gmail.com
        </Link>
      </p>
    </div>
  );
};
