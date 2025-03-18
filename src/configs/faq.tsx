'use client';
import { siteConfig } from '@/src/configs/config';
import Link from 'next/link';
import { JSX } from 'react';

// Define a type for FAQ item
export interface FAQItem {
  title: string;
  content: JSX.Element;
}

// Define the faqData array with the FAQItem type
export const faqData: FAQItem[] = [
  {
    title: 'Who are you?',
    content: (
      <>
        Hey there! 👋 I'm Karan ,a passionate full-stack developer and an upcoming mobile app dev, always eager to learn and grow.  
        If you're interested in building amazing projects together, join me in my classes at Superproof,  
        and let's level up our skills side by side!
        <br className="mb-2" />
        For more about me, check out my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        !
      </>
    )
  },
  {
    title: 'What technologies do you use?',
    content: (
      <>
     I am a full-stack developer with expertise in both frontend and backend technologies. My primary stack includes Next.js, TypeScript, TanStack Query, and Zustand for state management. For mobile development, I use React Native for iOS and Android. On the backend, I work with Node.js, Python MongoDB, and SQL. Additionally, I am exploring Generative AI, Machine Learning, and Data Science to create intelligent, data-driven applications.
        <br className="mb-2" />
        For more details on my tech stack and projects, please check out my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>
        .
      </>
    )
  },
  {
    title: 'About the class?',
    content: (
      <>
As a full-stack development teacher, I focus on hands-on, project-based learning, ensuring that students grasp both front-end and back-end technologies through real-world applications. My classes typically begin with a brief theory session, followed by guided coding exercises and collaborative projects. I emphasize problem-solving and critical thinking, making complex concepts accessible. My approach is interactive and adaptable, catering to college students and adults looking to upskill. Special features include personalized feedback, industry insights, and practical assignments to build a strong portfolio.
        <br className="mb-2" />
        You can contact me through:
        <ul className="list-disc pl-6 text-black dark:text-white text-sm">
          <li>
            Email:{' '}
            <Link
              href={`mailto:${siteConfig.social.email}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.email}
            </Link>
          </li>
          <li>
            {' '}
            SuperProof{' '}
            <Link
              href={`mailto:${siteConfig.social.linkedin}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.superProof}
            </Link>
          </li>
        </ul>
      </>
    )
  },
  {
    title: 'How can I collaborate with you?',
    content: (
      <>
        You can reach out to me via email or linkedIn. I’m open to collaboration
        on projects or ideas. Feel free to contact me through:
        <ul className="list-disc pl-6 text-black dark:text-white text-sm">
          <li>
            Email:{' '}
            <Link
              href={`mailto:${siteConfig.social.email}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.email}
            </Link>
          </li>
          <li>
            {' '}
            Linkedin{' '}
            <Link
              href={`mailto:${siteConfig.social.linkedin}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.social.linkedin}
            </Link>
          </li>
        </ul>
        <br className="mb-2" />
        For more details, you can check my contact information on my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>
        .
      </>
    )
  },
  {
    title: 'What is your approach to new technologies?',
    content: (
      <>
        I'm always excited to learn new technologies! I typically start by
        building small projects to understand the fundamentals before diving
        deeper. I focus on adopting tools that improve my workflow and help me
        build better applications.
        <br className="mb-2" />
        For more about my tech journey, visit my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>
        .
      </>
    )
  },
  {
    title: 'How can I support your work?',
    content: (
      <>
        You can support me by starring my repositories, contributing to
        open-source projects, or simply following my work on GitHub. Sharing
        your feedback or spreading the word also helps!
        <br className="mb-2" />
        Additionally, you can support me directly through:
        <ul className="list-disc pl-6 text-black dark:text-white text-sm">
          <li>
            <Link
              href={siteConfig.social.kofi}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ko-fi
            </Link>{' '}
            – Buy me a coffee and support my work!
          </li>
        </ul>
        <br className="mb-2" />
        Visit my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub page
        </Link>{' '}
        to get started.
      </>
    )
  },
  {
    title:
      "I tried to contact you but haven't received a response, what happened?",
    content: (
      <>
        I apologize if I missed your message or if I was slow to respond.
        Sometimes, messages get overlooked, or I may be caught up with other
        tasks. If I missed your message by mistake, please feel free to reach
        out again.
        <br className="mb-2" />
        To get a faster response, you can also ping me through{' '}
        <Link
          href={siteConfig.social.linkedin}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
         LinkedIn
        </Link>{' '}
        or open an issue on my{' '}
        <Link
          href={`https://github.com/${siteConfig.social.github}/${siteConfig.social.github}/issues`}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repository
        </Link>
        . I try to keep track of linkedin and issues more actively.
      </>
    )
  }
];
