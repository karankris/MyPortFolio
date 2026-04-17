import '@/src/styles/globals.css';
import clsx from 'clsx';
import local from 'next/font/local';
import Header from '@/src/components/ui/Header';
import Footer from '@/src/components/ui/Footer';
import Head from './head';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import ClientProviders from '@/src/components/utils/ClientProviders';
import React from 'react';

const graphik = local({
  src: [
    {
      path: '../../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'bold'
    }
  ],
  variable: '--font-graphik',
  display: 'swap' // Ensures text is visible while the font loads
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={clsx(
        'text-foreground bg-background dark:text-foreground dark:bg-background transition ease-in-out',
        graphik.variable
      )}
    >
      <Head />

      <body className="transition ease-in-out min-h-screen">
        <ClientProviders>
          {/* Main layout structure */}
          <Header />

          <main className="flex flex-col justify-center items-center mx-auto">
            {children}
            <SpeedInsights />
            <Analytics />
          </main>

          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
};

export default RootLayout;
