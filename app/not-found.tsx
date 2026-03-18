import Link from "next/link";

import { Section } from "@/components/primitives/Section";

export default function NotFound() {
  return (
    <Section className="labs-page-hero">
      <div className="section-heading section-heading--narrow">
        <p className="eyebrow">Not found</p>
        <h1>That page is not here, but the portfolio still is.</h1>
        <p>Use the link below to head back to the main single-page experience.</p>
        <div className="button-row">
          <Link href="/" className="button button--primary">
            Back home
          </Link>
        </div>
      </div>
    </Section>
  );
}
