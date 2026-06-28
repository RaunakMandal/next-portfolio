import { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ThemeScript } from '@/components/ThemeSwitcher/ThemeScript';
import { GoogleAnalytics } from '@next/third-parties/google';
import { createPageMetadata } from '@/core/seo/metadata';
import { SITE_URL } from '@/core/seo/config';
import { DEFAULT_THEME } from '@/core/theme/config';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...createPageMetadata(),
  icons: {
    icon: '/site-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      data-theme={DEFAULT_THEME}
      suppressHydrationWarning
      className={`h-full ${dmSans.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <GoogleAnalytics gaId='G-8GG6PKJ7J5' />
      <body className='flex min-h-full flex-col bg-base-100 text-base-content antialiased'>
        <div className='relative flex flex-col min-h-full'>
          <Navigation />
          <main className='flex-1 w-full max-w-3xl mx-auto px-6 sm:px-8 py-12 sm:py-16'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
