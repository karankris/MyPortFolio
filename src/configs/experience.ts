'use client';
import { siteConfig } from '@/src/configs/config';

export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'Associate consultant @TonysHive | Frontend Developer | Present',
    description:
      "As a Front-End Developer at Tonyshive Pvt Limited, I build responsive, scalable web applications with a focus on seamless user experiences. I enjoy solving complex problems, **optimizing performance**, and **crafting clean**, **efficient code** . Passionate about innovation, I thrive on delivering impactful and high-performing solutions.!",
    startDate: 'Present',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.social.linkedin
  },
  {
    title: 'Programming tutor @superProof | Jan. 2024 - Present',
    description:
      'My mission is to empower students with **hands-on skills** and **real-world insights** that drive success in technology.',
    startDate: 'Nov 2023',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.social.superProof
  },
  {
    title: 'Nanlogical Consultancy Services Pvt Ltd | Junior Web Developer  | Internship | Dec. 2023 - Mar. 2024',
    description:
      `As a web developer, I've built interactive, responsive websites using HTML, CSS, and JavaScript.
I focus on creating seamless user experiences with dynamic interfaces that work flawlessly across all devices.`,
    startDate: 'Dec 2023',
    endDate: 'Mar 2024',
    isActive: false,
    companyUrl: siteConfig.social.exp
  },
  {
    title: 'Freelancer | Dec. 2023 - May. 2024',
    description:
      'As a freelancer, I translated client requirements into interactive web solutions with a human touch. I built engaging, responsive websites that deliver a seamless and intuitive user experience',
    startDate: 'Dec 2023',
    endDate: 'May 2023',
    companyUrl: siteConfig.social.freelance,
  },
];
