"use client";

import Link from "next/link";
import { useState } from "react";

import { profile } from "@/content/profile";
import { cx } from "@/lib/utils";

const navItems = [
  { href: "#process", label: "Process" },
  { href: "#case-studies", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Trust" },
  { href: "#contact", label: "Contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" className="brand" aria-label="Go to homepage">
          <span className="brand__mark">SE</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </Link>

        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span></span>
          <span></span>
        </button>

        <nav className={cx("site-nav", open && "site-nav--open")} id="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href={profile.resumeHref} className="button button--ghost" download>
            Résumé
          </Link>
        </nav>
      </div>
    </header>
  );
}
