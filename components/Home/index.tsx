import Image from 'next/image';
import profilePic from '../../public/images/raunak.jpg';
import Link from 'next/link';
import { ICONS } from '@/core/icons';

const TECH_STACK = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'MongoDB',
  'Express',
];

export const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      {/* Hero */}
      <section className='flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full'>
        <div className='relative animate-fade-up shrink-0'>
          <div className='absolute -inset-4 rounded-full bg-primary/10 animate-pulse-glow blur-xl' />
          <div className='relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden profile-glow'>
            <Image
              src={profilePic}
              alt='Raunak Mandal'
              fill
              className='object-cover'
              priority
            />
          </div>
          <div className='absolute -bottom-2 -right-2 bg-base-200 border border-base-300/50 rounded-full px-3 py-1.5 text-xs font-mono text-primary flex items-center gap-1.5 shadow-lg'>
            <span className='w-2 h-2 rounded-full bg-success animate-pulse' />
            Open to work
          </div>
        </div>

        <div className='flex-1 text-center lg:text-left'>
          <p className='font-mono text-sm text-primary mb-3 animate-fade-up delay-100'>
            Hello, world 👋
          </p>
          <h1 className='font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-up delay-200'>
            I&apos;m{' '}
            <span className='text-gradient'>Raunak Mandal</span>
          </h1>
          <p className='mt-4 text-lg sm:text-xl text-base-content/70 animate-fade-up delay-300'>
            AI Software Engineer
          </p>
          <p className='mt-3 text-base text-base-content/50 max-w-xl animate-fade-up delay-300'>
            I build scalable web products that move the needle — from legacy
            migrations that cut load times by more than 80% to leading engineering teams
            that ship fast.
          </p>

          <div className='flex flex-wrap gap-3 mt-8 justify-center lg:justify-start animate-fade-up delay-400'>
            <Link
              href='mailto:raunak@raunakmandal.com'
              className='btn btn-primary rounded-lg gap-2'
            >
              {ICONS.wave}
              Get in Touch
            </Link>
            <Link
              href='/experience'
              className='btn btn-outline rounded-lg gap-2'
            >
              {ICONS.work}
              View Experience
            </Link>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className='w-full mt-14 animate-fade-up delay-500'>
        <p className='text-center text-sm text-base-content/40 font-mono mb-4'>
          TECH STACK
        </p>
        <div className='flex flex-wrap gap-2 justify-center'>
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className='tech-pill px-3 py-1.5 rounded-full transition-colors'
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className='grid sm:grid-cols-3 gap-4 w-full mt-16'>
        {[
          {
            href: '/experience',
            icon: ICONS.work,
            title: 'Experience',
            desc: 'Career journey & impact',
          },
          {
            href: '/projects',
            icon: ICONS.code,
            title: 'Projects',
            desc: 'Things I have built',
          },
          {
            href: '/contact',
            icon: ICONS.mail,
            title: 'Contact',
            desc: 'Let us connect',
          },
        ].map(({ href, icon, title, desc }) => (
          <Link key={href} href={href}>
            <div className='glass-card card-hover rounded-xl p-5 h-full animate-fade-up'>
              <span className='text-primary text-xl'>{icon}</span>
              <h3 className='font-display font-semibold mt-3'>{title}</h3>
              <p className='text-sm text-base-content/50 mt-1'>{desc}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};
