'use client';

import { HeroUIProvider } from '@heroui/react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from './themeContext';
import ProgressBar from '@/src/components/ui/progress';
import BackToTopButton from '@/src/components/ui/BackToTopButton';
import FlareCursor from '@/src/components/ui/FlareCursor';
import { ToastContainer } from 'react-toastify';
import dynamic from 'next/dynamic';
import React from 'react';

const Chatbot = dynamic(() => import('@/src/components/ui/ChatBot'), {
  ssr: false
});

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <ToastContainer theme="colored" stacked />
      <ThemeProvider>
        <SessionProvider>
          <ProgressBar />
          <FlareCursor />
          {children}
          <Chatbot />
          <BackToTopButton />
        </SessionProvider>
      </ThemeProvider>
    </HeroUIProvider>
  );
};

export default ClientProviders;
