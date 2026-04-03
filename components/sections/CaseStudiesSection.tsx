"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { Card } from "@/components/primitives/Card";
import { Section } from "@/components/primitives/Section";
import { caseStudies } from "@/content/case-studies";

const shortLabel = (title: string) => title.split(" ").slice(0, 2).join(" ");

export function CaseStudiesSection() {
  const [activeSlug, setActiveSlug] = useState(caseStudies[0]?.slug ?? "");
  const study = caseStudies.find((s) => s.slug === activeSlug) ?? caseStudies[0];

  return (
    <Section id="case-studies">
      <AnimatedReveal>
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Things I&apos;ve built.</h2>
        </div>
      </AnimatedReveal>

      {/* Tab switcher — 3 equal buttons, always one row */}
      <AnimatedReveal delay={0.06}>
        <div className="cs-nav" role="tablist" aria-label="Select case study">
          {caseStudies.map((s, i) => (
            <button
              key={s.slug}
              role="tab"
              aria-selected={s.slug === activeSlug}
              aria-controls="cs-panel"
              className={`cs-nav__tab${s.slug === activeSlug ? " cs-nav__tab--active" : ""}`}
              onClick={() => setActiveSlug(s.slug)}
            >
              <span className="cs-nav__num">0{i + 1}</span>
              <span className="cs-nav__label">{shortLabel(s.title)}</span>
            </button>
          ))}
        </div>
      </AnimatedReveal>

      {/* Full case study content — animates on switch */}
      <AnimatePresence mode="wait">
        <motion.div
          key={study.slug}
          id="cs-panel"
          role="tabpanel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card tone="elevated" className="case-study-card">
            {/* Header */}
            <div className="case-study-card__header">
              <div>
                <p className="eyebrow">{study.strapline}</p>
                <h3>{study.title}</h3>
              </div>
            </div>

            <p>{study.overview}</p>

            {/* Full tech stack — always visible */}
            <div className="case-study-card__stack">
              {study.stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>

            {/* Problem + Role */}
            <div className="case-study-card__summary">
              <div>
                <strong>Problem</strong>
                <p>{study.problem}</p>
              </div>
              <div>
                <strong>Role</strong>
                <p>{study.role}</p>
              </div>
            </div>

            {/* Impact bullets */}
            <div className="example-metrics">
              <strong>What this proves</strong>
              <ul className="feature-list">
                {study.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Key metrics */}
            <div className="case-study-card__metrics">
              {study.exampleMetrics.slice(0, 2).map((metric) => (
                <span key={metric} className="case-study-card__metric">
                  {metric.replace(/^Example metric:\s*/i, "")}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
