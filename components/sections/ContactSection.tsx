import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { Button } from "@/components/primitives/Button";
import { Card } from "@/components/primitives/Card";
import { Section } from "@/components/primitives/Section";
import { profile } from "@/content/profile";

export function ContactSection() {
  return (
    <Section id="contact" className="contact-section">
      <AnimatedReveal>
        <Card tone="elevated" className="contact-panel">
          <div className="contact-panel__copy">
            <p className="eyebrow">Let’s build something sharp</p>
            <h2>If you need a senior full-stack engineer who can think clearly, move quickly, and own the product end to end, we should talk.</h2>
            <p>I am strongest in founder-facing, fast-moving product teams where clarity, ownership, and delivery speed matter.</p>
          </div>

          <div className="contact-panel__meta">
            <div className="availability-block">
              <strong>Best fit</strong>
              <p>Startups, CTOs, and recruiters looking for a senior engineer who can bridge product and implementation.</p>
            </div>
            <div className="availability-block">
              <strong>What I bring</strong>
              <p>Ownership mindset, strong system design, production delivery, and practical AI leverage in day-to-day engineering.</p>
            </div>
            <div className="button-column">
              <Button href={`mailto:${profile.email}`}>Email me</Button>
              <Button href={profile.linkedin} variant="secondary" target="_blank" rel="noreferrer">
                LinkedIn
              </Button>
              <Button href={profile.github} variant="ghost" target="_blank" rel="noreferrer">
                GitHub
              </Button>
            </div>
          </div>
        </Card>
      </AnimatedReveal>
    </Section>
  );
}
