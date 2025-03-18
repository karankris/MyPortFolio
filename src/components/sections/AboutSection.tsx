'use client';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import SectionContainer from '../utils/SectionContainer';
import Link from 'next/link';
import ContactMe from '@/src/components/content/ContactMe';
import SupportMe from '@/src/components/content/SupportMe';
import FAQSection from '@/src/components/sections/FAQSection';
import SkillsSection from '@/src/components/sections/SkillsSection';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About Me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-600 dark:text-gray-400">
            Hey there! 👋 I'm <strong>{siteConfig.author}</strong>, a Full-Stack Developer who builds real-time products and web solutions using the MERN stack. I love turning ideas into functional, high-performance applications
            ✌️.
          </p>

          <ul className="text-base text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2 mt-4">
            <li>
              📚 Beyond web development, I’m deeply passionate about AI and its role in shaping modern technology. Exploring how AI enhances automation, decision-making, and user experiences excites me every day!
            </li>
            <li>
              🤝 👨🏼‍🏫 When I'm not coding, you'll find me teaching programming, Git, and tech concepts, helping others sharpen their skills and grow in their careers. I believe in the power of knowledge sharing and love mentoring aspiring developers.
            </li>
            <li>
              🔧 I have experience working with various programming languages
              and technologies, ensuring that I can adapt and contribute
              effectively to your project's tech stack.
            </li>
            <li>
              📬 I'm always open to collaborating on exciting projects, whether it’s building innovative web applications, AI-driven solutions, or anything tech-related. If you're looking for a dedicated developer, a mentor, or a tech collaborator, let’s connect and create something amazing together! 💡✨
            </li>
          </ul>

          <p className="text-base text-gray-600 dark:text-gray-400 mt-4">
            Feel free to explore my projects and get in touch for
            collaborations!
          </p>
        </AnimationContainer>
        <AnimationContainer customClassName="w-full ">
          <CurrentTimeLineExp />
        </AnimationContainer>
        <AnimationContainer customClassName="w-full">
          <SkillsSection />
        </AnimationContainer>
        {/* Contact Section */}
        <AnimationContainer customClassName="w-full mt-16">
          <ContactMe />
        </AnimationContainer>
        {/* Support Me Section */}
        <AnimationContainer customClassName="w-full mt-16">
          <SupportMe />
        </AnimationContainer>

        {/* FAQ Section */}
        <AnimationContainer customClassName="w-full mt-16">
          <FAQSection />
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
