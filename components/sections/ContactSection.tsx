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
            <h2>Let&apos;s work together.</h2>
            <p>
              Open to senior engineering roles, consulting, and interesting product conversations.
              My inbox is always open.
            </p>
          </div>

          <div className="contact-panel__meta">
            <Button href={`mailto:${profile.email}`}>
              Say hello →
            </Button>
            <p className="contact-panel__email">{profile.email}</p>
            <div className="contact-panel__social">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
          </div>
        </Card>
      </AnimatedReveal>
    </Section>
  );
}
