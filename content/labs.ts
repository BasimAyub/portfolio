export type LabDefinition = {
  slug: string;
  title: string;
  summary: string;
  proof: string;
  status: "live" | "scaffolded";
};

export const labs: LabDefinition[] = [
  {
    slug: "ai-chat",
    title: "AI chat demo",
    summary:
      "A streaming-style chat interface with portfolio-safe mocked responses and a calm assistant tone.",
    proof:
      "Shows product thinking around AI UX, response pacing, prompt framing, and graceful fallback behaviour.",
    status: "live"
  },
  {
    slug: "realtime-dashboard",
    title: "Realtime dashboard",
    summary:
      "A live operations view with simulated telemetry designed to feel active without becoming noisy.",
    proof:
      "Shows how I design realtime interfaces that feel alive without becoming noisy or heavy.",
    status: "live"
  },
  {
    slug: "workflow-builder",
    title: "Workflow builder",
    summary:
      "A workflow prototype that exports clean JSON and mirrors the sort of internal tools many teams rely on.",
    proof:
      "Shows interaction design, state handling, and the ability to model structured business workflows.",
    status: "live"
  },
  {
    slug: "ledger",
    title: "Transaction ledger",
    summary:
      "A finance-style ledger explorer with filtering and detail views, scaffolded for a later pass.",
    proof:
      "Would demonstrate dense data handling, search patterns, and trustworthy tabular UX.",
    status: "scaffolded"
  },
  {
    slug: "code-summary",
    title: "Code summariser",
    summary:
      "A paste-in summariser for code and comments, scaffolded for a later pass.",
    proof:
      "Would demonstrate AI-assisted developer tooling and concise technical summarisation.",
    status: "scaffolded"
  }
] as const;
