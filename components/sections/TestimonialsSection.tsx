import { AnimatedReveal } from "@/components/common/AnimatedReveal";
import { Card } from "@/components/primitives/Card";
import { Section } from "@/components/primitives/Section";
import { testimonials } from "@/content/testimonials";

export function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <AnimatedReveal>
        <div className="section-heading section-heading--narrow">
          <p className="eyebrow">Trust and fit</p>
          <h2>People hire confidence as much as output.</h2>
        </div>
      </AnimatedReveal>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <AnimatedReveal key={item.quote} delay={index * 0.08}>
            <Card tone="elevated" className="testimonial-card">
              <div className="testimonial-card__top">
                <p className="quote-mark">“</p>
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
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
