"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { Button } from "@/components/primitives/Button";
import { Card } from "@/components/primitives/Card";
import { Section } from "@/components/primitives/Section";
import { caseStudies } from "@/content/case-studies";

export function CaseStudiesSection() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(caseStudies[0]?.slug ?? null);

  return (
    <Section id="case-studies">
      <AnimatedReveal>
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Three concept builds that show how I combine product thinking with technical depth.</h2>
          <p>The essentials first. Deeper detail only if you want it.</p>
        </div>
      </AnimatedReveal>

      <div className="case-study-grid">
        {caseStudies.map((study, index) => {
          const isExpanded = expandedSlug === study.slug;
          const visibleStack = isExpanded ? study.stack : study.stack.slice(0, 4);

          return (
            <AnimatedReveal key={study.slug} delay={index * 0.08}>
              <Card tone="elevated" className="case-study-card">
                <div className="case-study-card__header">
                  <div>
                    <p className="eyebrow">{study.strapline}</p>
                    <h3>{study.title}</h3>
                  </div>
                  <span className="badge">0{index + 1}</span>
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
                    onClick={() => setExpandedSlug((current) => (current === study.slug ? null : study.slug))}
                  >
                    {isExpanded ? "Hide details" : "View details"}
                  </Button>
                  <Button href="#contact" variant="ghost">
                    Discuss this kind of build
                  </Button>
                  <Button href={study.githubHref} variant="ghost" target="_blank" rel="noreferrer">
                    GitHub
                  </Button>
                </div>
              </Card>
            </AnimatedReveal>
          );
        })}
      </div>
    </Section>
  );
}
