"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { profile } from "@/content/profile";

const navItems = [
  { href: "#experience", label: "Experience" },
  { href: "#case-studies", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      {/* Top bar — always visible */}
      <div className="shell site-header__inner">
        <Link href="/" className="brand" aria-label="Go to homepage" onClick={close}>
          <span className="brand__mark">SE</span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a href={profile.resumeHref} className="button button--ghost" target="_blank" rel="noreferrer">
            Résumé
          </a>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="site-nav-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile nav drawer — slides out from under the top bar */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="site-nav-drawer"
            className="site-nav-drawer"
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            exit={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="shell site-nav-drawer__inner" aria-label="Primary mobile">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={close}>
                  {item.label}
                </Link>
              ))}
              <a
                href={profile.resumeHref}
                className="button button--ghost"
                target="_blank"
                rel="noreferrer"
                onClick={close}
              >
                Résumé
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
