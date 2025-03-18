export const siteConfig: {
  baseUrl: string;
  domain: string;
  author: string;
  author_surname: string;
  titlePrefix: string;
  profile_image: string;
  github_org_name: string;
  country: string;
  social: {
    kofi: string;
    sponsor: string;
    superProof:string;
    email: string;
    twitter: string;
    github: string;
    linkedin: string;
    exp:string;
    blog: string;
    dev: string;
    hashnode: string;
    discord: string;
    freelance:string;
  };
  chatbot: {
    rateLimit: number;
  };
  contact: {
    debug: boolean;
    rateLimit: number;
  };
  metadata: {
    description: string;
    keywords: string;
    type: string;
  };


} = {
  baseUrl: 'https://karanravichandar.vercel.app/',
  domain: 'karanravichandar.vercel.app',
  author: 'Karan R',
  author_surname: 'Ravichandar',
  titlePrefix: 'Karan',
  github_org_name: 'TonysHive',
  country: 'India',
  profile_image:
    'https://avatars.githubusercontent.com/u/169872029?s=400&u=37e2ca6afb836b4cef9a6b16f0e262407c31d15b&v=4',
  social: {
    freelance:'https://karankris.github.io/Vikaan_Shelters/',
    exp:'https://www.linkedin.com/in/karanravichandar/details/experience/',
    kofi: 'https://ko-fi.com/karan3009',
    sponsor: 'https://ko-fi.com/karan3009',
    email: 'rkaran0930@gmail.com',
    superProof:'https://www.superprof.co.in/master-full-stack-programming-learn-web-development-javascript-react-next-node-and-more-with-experienced-instructor.html',
    twitter: '@karanin_kural',
    github: 'karankris',
    linkedin: 'https://www.linkedin.com/in/karanravichandar/',
    blog: 'https://hashnode.com/@karanr-dev',
    dev: 'https://dev.to/karan_r_72c0435683b6e6a26',
    hashnode: 'https://hashnode.com/@karanr-dev',
    discord: 'https://discord.gg/mzasKp4g',
  },
  metadata: {
    description: `I'm a Full-Stack Developer who specializes in building real-time products and web solutions using the MERN stack. I love transforming ideas into functional, high-performance applications that solve real-world problems.`,
    keywords:  
    'Karan, Full-Stack Developer, Karan portfolio, Karan GitHub, Web Development, Real-Time Products, MERN Stack, AI Enthusiast, Machine Learning, Artificial Intelligence, Programming Languages, Open Source Developer, App Development, Software Engineering, Tech Mentor, API Development Mobile Development' , 
    type: 'website'
  },
  chatbot: {
    rateLimit: 10
  },
  contact: {
    debug: true,
    rateLimit: 10
  },

};
