'use client';
import React from 'react';
import { siteConfig } from '@/src/configs/config';
import { Button } from '@heroui/react';

const SupportMe = () => {
  return (
    <section
      id="support"
      className="text-center mt-12 p-6 bg-black text-white dark:bg-white dark:text-black rounded-lg"
    >
      <h2 className="text-xl sm:text-2xl font-semibold">
        🚀 Join Me on My Full-Stack & Mobile Dev Journey!
      </h2>
      <p className="my-4 text-sm sm:text-base">
        I'm a passionate full-stack developer and an upcoming mobile app dev, always eager to learn and grow.  
        If you're interested in building amazing projects together, join me in my classes at Superproof,  
        and let's level up our skills side by side!
      </p>
      <div className="mb-6 flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
        <Button
          onPress={() => window.open(siteConfig.social.superProof, '_blank')}
          className="bg-[#1EAEDB] text-white px-4 sm:px-6 text-sm sm:text-base font-medium rounded-lg mb-4 sm:mb-0 sm:inline-block transition-all duration-300 transform hover:bg-[#178CB7] hover:shadow-lg dark:bg-[#0A84FF] dark:hover:bg-[#0056A3]"
        >
          Join My Classes 🚀
        </Button>
        <Button
          onPress={() => window.open(siteConfig.social.kofi, '_blank')}
          className="bg-[#FF813F] text-white px-4 sm:px-6 text-sm sm:text-base font-medium rounded-lg sm:inline-block transition-all duration-300 transform hover:bg-[#FF5C1F] hover:shadow-lg dark:bg-[#FF4F00] dark:hover:bg-[#D94400]"
        >
          Support Me on Ko-Fi ☕
        </Button>
      </div>
      <p className="text-sm sm:text-lg">Let's grow together! 🌱</p>
    </section>
  );
};

export default SupportMe;
