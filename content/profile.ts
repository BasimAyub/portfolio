const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const profile = {
  name: "Basim Ayub",
  role: "Senior Full-Stack Engineer",
  email: "basimayub007@gmail.com",
  github: "https://github.com/BasimAyub",
  linkedin: "https://www.linkedin.com/in/basim-ayub-6b1b50224/",
  resumeHref: `${basePath}/resume/senior-software-engineer-resume.pdf`,
  avatarSrc: `${basePath}/images/profile-placeholder.svg`,
  summary:
    "I help startups and product teams build polished software across frontend, backend, cloud, and AI, with an emphasis on ownership, speed, and maintainable systems."
} as const;
