import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { Card } from "@/components/primitives/Card";
import { Section } from "@/components/primitives/Section";
import { differentiators } from "@/content/experience";

export function ProofSection() {
  return (
    <Section className="proof-strip">
      <AnimatedReveal>
        <div className="section-heading section-heading--narrow">
          <p className="eyebrow">Why hire Basim</p>
          <h2>Three things that make me particularly useful on senior product teams.</h2>
        </div>
      </AnimatedReveal>
      <div className="proof-grid">
        {differentiators.map((card, index) => (
          <AnimatedReveal key={card.title} delay={index * 0.08}>
            <Card>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </Card>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
