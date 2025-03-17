'use client';

import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import SectionHeader from '@/src/components/ui/SectionHeader';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <SectionHeader
        id="aboutme"
        title="About Me"
        content={`Here is a little bit about me and my journey as a developer.`}
      />

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        Hey there! 👋 I'm{' '}
        <strong className="text-foreground dark:text-white">
          {siteConfig.author}
        </strong>
        , a Full-Stack Developer who builds real-time products and web solutions using the MERN stack. I love turning ideas into functional, high-performance applications
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
       Beyond web development, I’m deeply passionate about AI and its role in shaping modern technology. Exploring how AI enhances automation, decision-making, and user experiences excites me every day!.
      </p>
      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">When I'm not coding, you'll find me teaching programming, Git, and tech concepts, helping others sharpen their skills and grow in their careers. I believe in the power of knowledge sharing and love mentoring aspiring developers. 🧑🏻‍🏫</p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
      📬 I'm always open to collaborating on exciting projects, whether it’s building innovative web applications, AI-driven solutions, or anything tech-related. If you're looking for a dedicated developer, a mentor, or a tech collaborator, let’s connect and create something amazing together! 💡✨
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
