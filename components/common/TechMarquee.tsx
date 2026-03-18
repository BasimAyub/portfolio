"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillGroups } from "@/content/skills";

const items = skillGroups.flatMap((group) => group.skills).slice(0, 20);
const loopedItems = [...items, ...items];

export function TechMarquee() {
  const disabled = useReducedMotion();

  return (
    <section className="tech-marquee" aria-label="Selected technologies">
      <div className="shell">
        <div className="tech-marquee__frame">
          <motion.div
            className="tech-marquee__track"
            animate={disabled ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {loopedItems.map((item, index) => (
              <span key={`${item}-${index}`} className="tech-marquee__item">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
