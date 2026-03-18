import { AmbientBackground } from "@/components/common/AmbientBackground";
import { TechMarquee } from "@/components/common/TechMarquee";
import { Footer } from "@/components/sections/Footer";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SiteHeader } from "@/components/common/SiteHeader";
import { Hero } from "@/components/hero/Hero";

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <AmbientBackground />
        <Hero />
        <TechMarquee />
        <ProofSection />
        <ProcessSection />
        <ExperienceSection />
        <CaseStudiesSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
