const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const profile = {
  name: 'Basim Ayub',
  role: 'Senior Full-Stack Engineer',
  email: 'basimayub007@gmail.com',
  github: 'https://github.com/BasimAyub',
  linkedin: 'https://www.linkedin.com/in/basim-ayub-6b1b50224/',
  resumeHref: `${basePath}/resume/senior-software-engineer-resume.pdf`,
  avatarSrc: `${basePath}/images/profile.png`,
  summary:
    'I build AI-powered products that feel fast, intuitive, and built to last. Behind the scenes, I design scalable systems, from microservices and ML pipelines to real-time platforms, all the way to production.',
} as const;
