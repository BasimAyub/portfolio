export type CaseStudy = {
  slug: string;
  title: string;
  strapline: string;
  overview: string;
  problem: string;
  role: string;
  stack: string[];
  impact: string[];
  exampleMetrics: string[];
  githubHref: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "mental-wellness-insight-platform",
    title: "Mental Wellness Insight Platform",
    strapline: "AI + healthtech SaaS",
    overview:
      "An AI-powered wellness analytics platform designed to turn noisy behavioural data into real-time mental health insights.",
    problem:
      "The core challenge was converting messy social and activity data into meaningful signals quickly enough to be useful, while keeping the architecture compliant, modular, and scalable.",
    role:
      "Backend Lead. I owned the microservice architecture, ML-pipeline orchestration, API design, and the backend foundation for real-time insight delivery.",
    stack: ["Python", "FastAPI", "Microservices", "OCR", "NLP", "Event-driven systems", "PostgreSQL", "Docker"],
    impact: [
      "Designed a distributed ingest to analysis pipeline that kept services isolated and easier to evolve.",
      "Built the backend layer behind real-time analytics and user-facing dashboard workflows.",
      "Showed strong ownership across architecture, backend delivery, and AI-adjacent system design."
    ],
    exampleMetrics: [
      "Reduced processing latency by 40%.",
      "Sustained stable throughput across high-volume async ingestion pipelines."
    ],
    githubHref: "https://github.com/BasimAyub"
  },
  {
    slug: "one-auction-view",
    title: "OneAuctionView",
    strapline: "Automotive SaaS marketplace",
    overview:
      "A B2B auction intelligence platform that aggregates and normalises vehicle data from multiple providers into one searchable product experience.",
    problem:
      "Auction data arrived inconsistent, high-volume, and hard to query cleanly. The job was to make it reliable for both end users and internal teams.",
    role:
      "Senior Full-Stack Engineer. I built ingestion pipelines, data normalisation layers, APIs, and performance-focused dashboards with advanced filtering and search.",
    stack: ["React", "TypeScript", "Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL", "Data pipelines"],
    impact: [
      "Improved the reliability and usability of auction data across the platform.",
      "Built faster querying paths and cleaner dashboard interactions for data-heavy workflows.",
      "Balanced backend performance work with frontend product usability."
    ],
    exampleMetrics: [
      "Improved API response times by 35%.",
      "Eliminated data inconsistency errors across three third-party auction sources."
    ],
    githubHref: "https://github.com/BasimAyub"
  },
  {
    slug: "qumulo-nexus",
    title: "Qumulo Nexus",
    strapline: "Enterprise data + cloud systems",
    overview:
      "An enterprise data platform focused on cloud-integrated workflows, performance, and reliable access to large-scale file-system metadata.",
    problem:
      "The challenge was handling large metadata workloads and cloud integration flows without introducing performance bottlenecks or fragile operational behaviour.",
    role:
      "Full-Stack / Backend Engineer. I built APIs and services for data access, monitoring, and integration workflows, with a strong focus on performance and observability.",
    stack: ["TypeScript", "Node.js", "Python", "Cloud integrations", "REST APIs", "Monitoring", "Performance optimisation"],
    impact: [
      "Improved data access and integration workflows for enterprise use cases.",
      "Contributed to better observability and more reliable high-load behaviour.",
      "Strengthened backend performance in a system with real operational complexity."
    ],
    exampleMetrics: [
      "Improved data retrieval throughput under high-load enterprise workloads.",
      "Reduced system bottlenecks across critical integration paths."
    ],
    githubHref: "https://github.com/BasimAyub"
  }
];
