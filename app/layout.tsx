import { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Raunak Mandal',
  description: "Raunak Mandal's personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='tw-h-full' data-theme='light'>
      <body className='tw-flex tw-h-full tw-justify-center'>
        <div className='tw-flex tw-flex-col tw-justify-between tw-w-full'>
          <Navigation />
          <div className='tw-flex tw-flex-1 tw-justify-center tw-p-8 lg:tw-px-36'>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
