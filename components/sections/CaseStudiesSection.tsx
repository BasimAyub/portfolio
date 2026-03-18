"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { Button } from "@/components/primitives/Button";
import { Card } from "@/components/primitives/Card";
import { Section } from "@/components/primitives/Section";
import { caseStudies } from "@/content/case-studies";

/** Short label for the mobile tab pill */
const tabLabel = (title: string) => title.split(" ").slice(0, 2).join(" ");

function CaseStudyCard({
  study,
  expandedSlug,
  setExpandedSlug,
}: {
  study: (typeof caseStudies)[number];
  expandedSlug: string | null;
  setExpandedSlug: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const isExpanded = expandedSlug === study.slug;
  const visibleStack = isExpanded ? study.stack : study.stack.slice(0, 4);

  return (
    <Card tone="elevated" className="case-study-card">
      <div className="case-study-card__header">
        <div>
          <p className="eyebrow">{study.strapline}</p>
          <h3>{study.title}</h3>
        </div>
      </div>

      <p>{study.overview}</p>

      <div className="case-study-card__stack">
        {visibleStack.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
        {!isExpanded && study.stack.length > visibleStack.length ? (
          <span className="chip">{`+${study.stack.length - visibleStack.length} more`}</span>
        ) : null}
      </div>

      <div className="case-study-card__teaser">
        <strong>Quick read</strong>
        <p>{study.impact[0]}</p>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded ? (
          <motion.div
            key={`${study.slug}-details`}
            className="case-study-card__details"
            initial={{ opacity: 0, height: 0, y: 8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
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

            <div className="example-metrics">
              <strong>What this proves</strong>
              <ul className="feature-list">
                {study.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="case-study-card__metrics">
              {study.exampleMetrics.slice(0, 2).map((metric) => (
                <span key={metric} className="case-study-card__metric">
                  {metric.replace(/^Example metric:\s*/i, "")}
                </span>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="button-row case-study-card__actions">
        <Button
          type="button"
          variant="secondary"
          aria-expanded={isExpanded}
          onClick={() =>
            setExpandedSlug((current) =>
              current === study.slug ? null : study.slug
            )
          }
        >
          {isExpanded ? "Hide details" : "View details"}
        </Button>
        <Button href="#contact" variant="ghost">
          Discuss this build
        </Button>
        <Button href={study.githubHref} variant="ghost" target="_blank" rel="noreferrer">
          GitHub
        </Button>
      </div>
    </Card>
  );
}

export function CaseStudiesSection() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(
    caseStudies[0]?.slug ?? null
  );
  const [mobileSlug, setMobileSlug] = useState<string>(
    caseStudies[0]?.slug ?? ""
  );

  const mobileStudy =
    caseStudies.find((s) => s.slug === mobileSlug) ?? caseStudies[0];

  return (
    <Section id="case-studies">
      <AnimatedReveal>
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Things I&apos;ve built.</h2>
        </div>
      </AnimatedReveal>

      {/* Desktop: all cards in a grid */}
      <div className="case-study-grid">
        {caseStudies.map((study, index) => (
          <AnimatedReveal key={study.slug} delay={index * 0.08}>
            <CaseStudyCard
              study={study}

              expandedSlug={expandedSlug}
              setExpandedSlug={setExpandedSlug}
            />
          </AnimatedReveal>
        ))}
      </div>

      {/* Mobile: tab picker + single card */}
      <div className="case-study-mobile">
        <div className="section-tabs" role="tablist" aria-label="Select project">
          {caseStudies.map((study) => (
            <button
              key={study.slug}
              role="tab"
              aria-selected={study.slug === mobileSlug}
              className={`section-tab${study.slug === mobileSlug ? " section-tab--active" : ""}`}
              onClick={() => setMobileSlug(study.slug)}
            >
              {tabLabel(study.title)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mobileStudy.slug}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          >
            <CaseStudyCard
              study={mobileStudy}

              expandedSlug={expandedSlug}
              setExpandedSlug={setExpandedSlug}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
