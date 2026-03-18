import Link from "next/link";

import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p>
          {profile.name} · {profile.role}
        </p>
        <div className="site-footer__links">
          <Link href={profile.resumeHref}>Résumé</Link>
          <Link href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
