"use client";

import { FormEvent, useMemo, useState } from "react";

import { getMockChatReply } from "@/lib/lab-mocks";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const initialMessages: ChatMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "Ask about system design, AI workflows, frontend craft, or delivery strategy. This is a deterministic mock conversation so it stays fast and deploys cleanly as a static portfolio."
  }
];

function typeReply(reply: string, onUpdate: (next: string) => void) {
  let index = 0;

  return window.setInterval(() => {
    index += 3;
    onUpdate(reply.slice(0, index));
  }, 18);
}

export default function AiChatDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const transcript = useMemo(() => messages.slice(-6), [messages]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = input.trim();

    if (!value || isLoading) {
      return;
    }

    setIsLoading(true);

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: value
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");

    try {
      const payload = {
        reply: getMockChatReply(value)
      };
      const assistantId = crypto.randomUUID();

      setMessages((current) => [...current, { id: assistantId, role: "assistant", content: "" }]);

      const timer = typeReply(payload.reply, (nextValue) => {
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantId ? { ...message, content: nextValue } : message
          )
        );
      });

      window.setTimeout(() => {
        window.clearInterval(timer);
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantId ? { ...message, content: payload.reply } : message
          )
        );
      }, Math.ceil(payload.reply.length / 3) * 18 + 18);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "The demo hit an unexpected snag. Refresh the page and I’ll be right back."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="lab-demo">
      <div className="lab-demo__header">
        <div>
          <p className="eyebrow">AI chat demo</p>
          <h3>Streaming-style replies with mock-safe behaviour</h3>
        </div>
        <span className="badge">Live</span>
      </div>

      <p className="lab-demo__blurb">
        What this proves: I can shape an AI interaction to feel responsive, helpful, and on-brand, even when the
        surface is running in a lightweight portfolio-safe mode.
      </p>

      <div className="chat-window" aria-live="polite">
        {transcript.map((message) => (
          <div key={message.id} className={`chat-bubble chat-bubble--${message.role}`}>
            <strong>{message.role === "assistant" ? "Assistant" : "You"}</strong>
            <p>{message.content}</p>
          </div>
        ))}
      </div>

      <form className="chat-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="ai-chat-input">
          Ask a question
        </label>
        <input
          id="ai-chat-input"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask how I would approach architecture, AI, or delivery"
        />
        <button type="submit" className="button button--primary" disabled={isLoading}>
          {isLoading ? "Thinking…" : "Send"}
        </button>
      </form>
    </div>
  );
}
