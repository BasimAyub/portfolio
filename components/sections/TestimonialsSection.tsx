"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { Card } from "@/components/primitives/Card";
import { Section } from "@/components/primitives/Section";
import { testimonials } from "@/content/testimonials";

function TestimonialCard({
  item,
}: {
  item: (typeof testimonials)[number];
}) {
  return (
    <Card tone="elevated" className="testimonial-card">
      <div className="testimonial-card__top">
        <p className="quote-mark">"</p>
        <span className="badge">{item.source}</span>
      </div>
      <p>{item.quote}</p>
      <footer>
        <strong>{item.author}</strong>
        <span>{item.role}</span>
        <span>
          {item.context} · {item.date}
        </span>
      </footer>
    </Card>
  );
}

export function TestimonialsSection() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const activeItem = testimonials[mobileIndex] ?? testimonials[0];

  return (
    <Section id="testimonials">
      <AnimatedReveal>
        <div className="section-heading section-heading--narrow">
          <p className="eyebrow">Recommendations</p>
          <h2>What people say.</h2>
        </div>
      </AnimatedReveal>

      {/* Desktop: two-column grid */}
      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <AnimatedReveal key={item.quote} delay={index * 0.08}>
            <TestimonialCard item={item} />
          </AnimatedReveal>
        ))}
      </div>

      {/* Mobile: tab picker + single card */}
      <div className="testimonial-mobile">
        <div className="section-tabs" role="tablist" aria-label="Select recommendation">
          {testimonials.map((item, index) => (
            <button
              key={item.author}
              role="tab"
              aria-selected={index === mobileIndex}
              className={`section-tab${index === mobileIndex ? " section-tab--active" : ""}`}
              onClick={() => setMobileIndex(index)}
            >
              {item.author.split(" ")[0]}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.author}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          >
            <TestimonialCard item={activeItem} />
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
