"use client";

import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { Section } from "@/components/primitives/Section";

const TechOrbField = dynamic(() => import("@/components/sections/TechOrbField").then((mod) => mod.TechOrbField), {
  ssr: false,
  loading: () => (
    <div className="tech-orbs tech-orbs--loading" aria-hidden="true">
      <div className="tech-orbs__fallback">
        <span>Loading interactive tech stack…</span>
      </div>
    </div>
  )
});

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldMountScene, setShouldMountScene] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || shouldMountScene) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldMountScene(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [shouldMountScene]);

  return (
    <Section id="skills" ref={sectionRef}>
      <AnimatedReveal>
        <div className="section-heading section-heading--narrow">
          <p className="eyebrow">Capabilities</p>
        </div>
      </AnimatedReveal>

      <AnimatedReveal delay={0.08}>
        <AnimatePresence mode="wait">
          {shouldMountScene ? (
            <motion.div
              key="scene"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <TechOrbField />
            </motion.div>
          ) : (
            <motion.div
              key="fallback"
              className="tech-orbs tech-orbs--loading"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="tech-orbs__fallback">
                <span>Interactive tech stack will load as you reach this section.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimatedReveal>
    </Section>
  );
}
