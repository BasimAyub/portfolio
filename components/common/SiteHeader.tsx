'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { profile } from '@/content/profile';

const navItems = [
  { href: '#experience', label: 'Experience' },
  { href: '#case-studies', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className='site-header'>
        <div className='shell site-header__inner'>
          <Link
            href='/'
            className='brand'
            aria-label='Go to homepage'
            onClick={close}>
            <span className='brand__mark'>SE</span>
            <span>
              <strong>{profile.name}</strong>
              <small>{profile.role}</small>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className='site-nav' aria-label='Primary'>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a
              href={profile.resumeHref}
              className='button button--ghost'
              target='_blank'
              rel='noreferrer'>
              Résumé
            </a>
          </nav>

          {/* Hamburger — mobile only */}
          <button
            type='button'
            className='menu-button'
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}>
            <span className='sr-only'>Toggle navigation</span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Overlay drawer — outside <header> so it overlays page content */}
      <AnimatePresence>
        {open && (
          <>
            {/* Scrim */}
            <motion.div
              className='site-nav-backdrop'
              aria-hidden='true'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onClick={close}
            />

            {/* Drawer */}
            <motion.div
              className='site-nav-drawer'
              role='dialog'
              aria-modal='true'
              aria-label='Navigation menu'
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}>

              {/* Close button */}
              <div className='site-nav-drawer__header'>
                <button
                  type='button'
                  className='site-nav-drawer__close'
                  onClick={close}
                  aria-label='Close navigation'>
                  ✕
                </button>
              </div>

              <nav
                className='site-nav-drawer__inner'
                aria-label='Primary mobile'>
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={close}>
                    {item.label}
                  </Link>
                ))}
                <a
                  href={profile.resumeHref}
                  className='site-nav-drawer__resume'
                  target='_blank'
                  rel='noreferrer'
                  onClick={close}>
                  Résumé
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
