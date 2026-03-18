"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { Section } from "@/components/primitives/Section";
import { experienceTimeline } from "@/content/experience";

const years = experienceTimeline.map((item) => item.year) as string[];

export function ExperienceSection() {
  const [activeYear, setActiveYear] = useState<string>(years[0]);

  const activeItem =
    experienceTimeline.find((item) => item.year === activeYear) ??
    experienceTimeline[0];

  return (
    <Section id="experience" className="experience-section">
      <AnimatedReveal>
        <div className="section-heading section-heading--narrow">
          <p className="eyebrow">Experience</p>
          <h2>Where I've worked.</h2>
        </div>
      </AnimatedReveal>

      {/* Desktop: all items stacked — hidden on mobile via CSS */}
      <div className="experience-timeline experience-timeline--desktop">
        {experienceTimeline.map((item, index) => (
          <AnimatedReveal key={`${item.company}-${item.year}`} delay={index * 0.08}>
            <article className="experience-item">
              <div className="experience-item__year">{item.year}</div>
              <div className="experience-item__body">
                <p className="eyebrow">{item.company}</p>
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
                <ul className="feature-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          </AnimatedReveal>
        ))}
      </div>

      {/* Mobile: year tabs + single animated item — hidden on desktop via CSS */}
      <div className="experience-mobile">
        <div className="experience-tabs" role="tablist" aria-label="Select year">
          {years.map((year) => (
            <button
              key={year}
              role="tab"
              aria-selected={year === activeYear}
              className={`experience-tab${year === activeYear ? " experience-tab--active" : ""}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={activeItem.year}
            className="experience-item"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="experience-item__year">{activeItem.year}</div>
            <div className="experience-item__body">
              <p className="eyebrow">{activeItem.company}</p>
              <h3>{activeItem.role}</h3>
              <p>{activeItem.summary}</p>
              <ul className="feature-list">
                {activeItem.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </Section>
  );
}
