export const skillGroups = [
  {
    slug: "frontend",
    title: "Frontend systems",
    blurb:
      "Responsive interfaces, design systems, and stateful product experiences built for clarity and conversion.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "Redux",
      "Zustand"
    ]
  },
  {
    slug: "backend",
    title: "Backend & APIs",
    blurb:
      "Microservices, API design, auth, and async workflows built to stay clean as products scale.",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "Python",
      "FastAPI",
      "Django",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "WebSockets",
      "Event-driven architectures",
      "Secure Authentication (JWT/OAuth)"
    ]
  },
  {
    slug: "data-cloud",
    title: "Data, cloud & infra",
    blurb:
      "Production-grade pipelines, cloud infrastructure, and operational systems built for reliability at scale.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "BigQuery",
      "Redis",
      "AWS",
      "Google Cloud Platform (GCP)",
      "Pub/Sub",
      "Docker",
      "CI/CD pipelines",
      "Data ingestion pipelines",
      "Performance optimisation"
    ]
  },
  {
    slug: "ai-systems",
    title: "AI & agent systems",
    blurb:
      "Production-ready AI integrations — not demos. RAG pipelines, multi-agent orchestration, and LLM evaluation built to work reliably under real load.",
    skills: [
      "OpenAI API (GPT-4o, embeddings)",
      "RAG pipelines",
      "Multi-agent orchestration",
      "LLM integration & structured output",
      "ML scoring pipelines (Python)",
      "Prompt engineering",
      "AI-assisted development (Cursor, Copilot)",
      "NLP / OCR pipelines",
      "Evaluation & testing for LLM outputs"
    ]
  }
] as const;
