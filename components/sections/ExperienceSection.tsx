import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { Section } from "@/components/primitives/Section";
import { experienceTimeline } from "@/content/experience";

export function ExperienceSection() {
  return (
    <Section className="experience-section">
      <AnimatedReveal>
        <div className="section-heading section-heading--narrow">
          <p className="eyebrow">Experience</p>
          <h2>Recent work that reflects the level of complexity I am comfortable owning.</h2>
        </div>
      </AnimatedReveal>

      <div className="experience-timeline">
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
    </Section>
  );
}
