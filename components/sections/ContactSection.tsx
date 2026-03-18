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
            <p className="eyebrow">Get in touch</p>
            <h2>Let's work together.</h2>
            <p>
              Open to senior engineering roles, consulting, and interesting product conversations.
              My inbox is always open.
            </p>
          </div>

          <div className="contact-panel__meta">
            <div className="button-column">
              <Button href={`mailto:${profile.email}`}>Say hello</Button>
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
