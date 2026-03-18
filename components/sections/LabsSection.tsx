"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import AiChatDemo from "@/components/labs/AiChatDemo";
import RealtimeDashboardDemo from "@/components/labs/RealtimeDashboardDemo";
import { ScaffoldedDemoCard } from "@/components/labs/ScaffoldedDemoCard";
import WorkflowBuilderDemo from "@/components/labs/WorkflowBuilderDemo";
import { Section } from "@/components/primitives/Section";
import { labs } from "@/content/labs";
import { cx } from "@/lib/utils";

const demoComponents = {
  "ai-chat": AiChatDemo,
  "realtime-dashboard": RealtimeDashboardDemo,
  "workflow-builder": WorkflowBuilderDemo
} as const;

const liveLabs = labs.filter((lab) => lab.status === "live");
const scaffoldedLabs = labs.filter((lab) => lab.status === "scaffolded");

export function LabsSection({ showAll = false }: { showAll?: boolean }) {
  const [activeSlug, setActiveSlug] = useState<typeof liveLabs[number]["slug"]>("ai-chat");
  const activeLab = liveLabs.find((lab) => lab.slug === activeSlug) || liveLabs[0];
  const ActiveComponent = demoComponents[activeLab.slug as keyof typeof demoComponents];

  return (
    <Section id="labs">
      <AnimatedReveal>
        <div className="section-heading">
          <p className="eyebrow">Labs</p>
          <h2>Interaction-heavy concept demos that show I can make complex product behaviour feel clear.</h2>
          <p>
            This section is intentionally hands-on. Everything runs on the client so the site stays GitHub Pages
            friendly, but the interactions still reflect the sort of product thinking I bring to real builds.
          </p>
        </div>
      </AnimatedReveal>

      <div className="labs-layout">
        <AnimatedReveal>
          <div className="labs-nav">
            {liveLabs.map((lab) => (
              <button
                key={lab.slug}
                type="button"
                className={cx("labs-nav__item", activeSlug === lab.slug && "labs-nav__item--active")}
                onClick={() => setActiveSlug(lab.slug)}
              >
                <strong>{lab.title}</strong>
                <span>{lab.summary}</span>
              </button>
            ))}
          </div>
        </AnimatedReveal>

        <AnimatedReveal>
          <div className="labs-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLab.slug}
                initial={{ opacity: 0, y: 22, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <ActiveComponent />
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedReveal>
      </div>

      {showAll ? (
        <div className="labs-scaffold-grid">
          {scaffoldedLabs.map((lab) => (
            <AnimatedReveal key={lab.slug}>
              <ScaffoldedDemoCard lab={lab} />
            </AnimatedReveal>
          ))}
        </div>
      ) : null}
    </Section>
  );
}
