import Link from "next/link";

import { profile } from "@/content/profile";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="site-footer card">
      <div className="shell">
        {/* Brand + links row */}
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <span className="brand__mark">SE</span>
            <div className="site-footer__brand-text">
              <strong>{profile.name}</strong>
              <small>{profile.role}</small>
            </div>
          </div>

          <div className="site-footer__links">
            <Link href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </Link>
            <Link href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </Link>
            <a href={profile.resumeHref} target="_blank" rel="noreferrer">
              Résumé ↓
            </a>
          </div>
        </div>

        <div className="site-footer__divider" />

        {/* Status + copyright */}
        <div className="site-footer__bottom">
          <span className="site-footer__status">
            <span className="site-footer__dot" aria-hidden="true" />
            Open to new opportunities
          </span>
          <span className="site-footer__copy">© {year} {profile.name}</span>
        </div>
      </div>
    </footer>
  );
}
