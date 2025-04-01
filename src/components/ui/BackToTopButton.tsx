'use client';
import { useEffect, useState } from 'react';
import { Button } from '@heroui/react'
import {  ChevronUp } from "lucide-react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button after scrolling down 200px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Return null instead of false to ensure valid JSX
  if (!showButton) return null;

  return (
    <div>
    <Button
      onPress={scrollToTop}
      className="fixed bottom-5 w-10 h-10 !bg-white right-8 p-2.5 shadow-black dark:shadow-white shadow-[rgba(0,0,0,0.07)_0px_1px_2px,rgba(0,0,0,0.07)_0px_2px_4px,rgba(0,0,0,0.07)_0px_4px_8px,rgba(0,0,0,0.07)_0px_8px_16px,rgba(0,0,0,0.07)_0px_16px_32px,rgba(0,0,0,0.07)_0px_32px_64px] dark:shadow-[rgba(0,0,0,0.1)_0px_10px_50px]
  text-black rounded-full focus:outline-none transition-all ease-in-out  dark:text-black  bg-transparent "
    >
           <ChevronUp className="w-6 h-6" />
    </Button>
    </div>
  );
};

export default BackToTopButton;
