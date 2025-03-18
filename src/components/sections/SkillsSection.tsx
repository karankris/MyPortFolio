'use client';

import Image from 'next/image';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';
import React from 'react';

const MySkills = () => {
  return (
    <AnimationContainer customClassName="w-full mt-16">
      <div className="flex flex-col gap-5">
        <SectionHeader
          title="Skills and Technology"
          content="I’ve been programming for over years, gaining experience with a variety of programming languages, frameworks, and tools. I’ve worked on both Frontend and Backend technologies, allowing me to understand and contribute to the entire development process."
        />

        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex justify-center items-center">
            <Image
              src="https://skillicons.dev/icons?i=androidstudio,apple,bash,bootstrap,docker,express,figma,git,github,githubactions,gitlab,html,java,js,jquery,linkedin,linux,mongodb,mysql,nextjs,nodejs,powershell,py,pytorch,react,redux,stackoverflow,svg,tailwind,tensorflow,ts,vercel,vite,vscode,wordpress&perline=10"
              alt="My Skills"
              className="relative w-full h-full max-w-3xl"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </AnimationContainer>
  );
};

export default MySkills;
