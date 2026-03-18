import { workflowTemplates } from "@/content/fixtures/workflow";

export type TelemetryItem = {
  service: string;
  latency: number;
  errors: number;
  status: "healthy" | "watch" | "incident";
};

const chatPatterns = [
  {
    matcher: /system|architect|scale|backend/i,
    reply:
      "I usually start by separating the parts that need to move independently: product surface, API boundaries, background work, and the data model underneath. From there I optimise for clarity first, then scale, so the team can still ship quickly once the product gets busy."
  },
  {
    matcher: /ai|llm|openai|copilot|cursor/i,
    reply:
      "I use AI where it genuinely helps: research, rapid prototyping, code scaffolding, summarisation, and repetitive implementation work. The important part is keeping guardrails, clear prompts, and human review so the speed gain does not turn into hidden product debt."
  },
  {
    matcher: /frontend|animation|design|ux|ui/i,
    reply:
      "For frontend work, I care about rhythm as much as visuals. Layout, motion, typography, and performance need to work together. If a page feels impressive but awkward to use, it has missed the point."
  },
  {
    matcher: /team|delivery|agile|remote/i,
    reply:
      "My value in delivery is usually calm execution. I can take a fuzzy brief, shape it into something concrete, communicate trade-offs clearly, and keep momentum without making the team feel like everything is on fire."
  }
];

const telemetrySeed: TelemetryItem[] = [
  { service: "Gateway API", latency: 98, errors: 0.4, status: "healthy" },
  { service: "Auth Service", latency: 132, errors: 0.7, status: "healthy" },
  { service: "Realtime Events", latency: 164, errors: 1.2, status: "watch" },
  { service: "Analytics Worker", latency: 188, errors: 0.9, status: "healthy" }
];

export function getMockChatReply(prompt: string) {
  const matched = chatPatterns.find((entry) => entry.matcher.test(prompt));

  if (matched) {
    return matched.reply;
  }

  return "The short version is that I try to connect product taste with engineering discipline. I want the interface to feel polished, the backend to stay sane, and the delivery process to be the sort of thing a client or team can trust.";
}

export function getTelemetrySeed() {
  return telemetrySeed.map((item) => ({ ...item }));
}

export function evolveTelemetry(items: TelemetryItem[], tick: number) {
  return items.map((item, index) => {
    const latency = Math.max(72, Math.round(item.latency + Math.sin(tick + index) * 18));
    const errors = Math.max(0.1, Number((item.errors + Math.cos(tick + index * 1.5) * 0.4).toFixed(1)));
    const signal = latency + errors * 32;

    let status: TelemetryItem["status"] = "healthy";

    if (signal > 230) {
      status = "incident";
    } else if (signal > 180) {
      status = "watch";
    }

    return {
      ...item,
      latency,
      errors,
      status
    };
  });
}

export function summariseWorkflow(stepLabels: string[]) {
  const lastStep = stepLabels.at(-1) || workflowTemplates.at(-1)?.label || "Archive result";

  return `Export ready: ${stepLabels.length} steps arranged from intake to ${lastStep.toLowerCase()}. The structure is clean enough to hand off to an API, queue, or internal automation service.`;
}
