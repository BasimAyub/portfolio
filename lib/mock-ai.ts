type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export function buildMockChatReply(messages: ChatMessage[]) {
  const latestUserMessage = [...messages].reverse().find((message) => message.role === "user")?.content ?? "";
  const lower = latestUserMessage.toLowerCase();

  if (lower.includes("architecture")) {
    return "For this sort of product, I would keep the first version deliberately simple: one clear frontend surface, a well-bounded API layer, and just enough async processing to support the features that actually need it. That gives you room to scale without over-engineering the first release.";
  }

  if (lower.includes("ai") || lower.includes("llm")) {
    return "I treat AI like a feature with operational constraints, not a magic trick. The safest first step is usually a narrow workflow, sensible fallback behaviour, and a mock mode so the product still behaves well when no live key is configured.";
  }

  if (lower.includes("performance") || lower.includes("fast")) {
    return "My default performance posture is simple: keep the first route lean, lazy-load heavier experiences, avoid expensive client-side work until the user asks for it, and design the interface so it still feels premium even when the code path is disciplined.";
  }

  return "The short answer is that I favour clear systems over noise. I like products that explain themselves quickly, backends that stay maintainable when features pile up, and interfaces that feel polished without becoming slow or brittle.";
}
