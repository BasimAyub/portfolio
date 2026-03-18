"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { Section } from "@/components/primitives/Section";

const processSteps = [
  {
    title: "Clarify the problem",
    body:
      "Find the business goal, constraints, and user friction before writing code."
  },
  {
    title: "Shape the system",
    body:
      "Set the product flow, service boundaries, data model, and trade-offs early."
  },
  {
    title: "Build with discipline",
    body:
      "Keep the implementation clean, performant, and polished without making it fragile."
  },
  {
    title: "Refine and scale",
    body:
      "Polish the details, close the edge cases, and leave the product ready to grow."
  }
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.3"]
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.35
  });

  return (
    <Section id="process" className="process-section" ref={sectionRef}>
      <AnimatedReveal>
        <div className="section-heading section-heading--narrow">
          <p className="eyebrow">Process</p>
          <h2>From first brief to shipped product, the process should stay clear.</h2>
          <p>This is the rhythm I usually bring to projects.</p>
        </div>
      </AnimatedReveal>

      <div className="process-flow">
        <div className="process-line" aria-hidden="true">
          <motion.div className="process-line__fill" style={{ scaleY: progress }} />
        </div>

        <div className="process-steps">
          {processSteps.map((step, index) => (
            <AnimatedReveal key={step.title} delay={index * 0.08}>
              <article className="process-step">
                <div className="process-step__pin">
                  <span>{`0${index + 1}`}</span>
                </div>
                <div className="process-step__card">
                  <p className="eyebrow">Step {index + 1}</p>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
