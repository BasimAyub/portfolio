import { describe, expect, it } from "vitest";

import { tokens } from "@/lib/tokens";

describe("design tokens", () => {
  it("exposes semantic colour tokens", () => {
    expect(tokens.colour.bg.canvas).toBeTruthy();
    expect(tokens.colour.text.primary).toBeTruthy();
    expect(tokens.colour.accent.primary).toBeTruthy();
  });

  it("keeps motion durations as numbers for cross-platform reuse", () => {
    expect(tokens.motion.duration.fast).toBeGreaterThan(0);
    expect(tokens.motion.duration.hero).toBeGreaterThan(tokens.motion.duration.fast);
  });
});
