import { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Raunak Mandal',
  description: 'Raunak Mandal - Senior Software Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full'>
      <body className='flex h-full justify-center'>
        <div className='flex flex-col justify-between w-full'>
          <Navigation />
          <div className='flex flex-1 justify-center p-8 lg:px-36'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
