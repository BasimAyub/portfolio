'use client';

import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

import { Button } from '@/components/primitives/Button';
import { profile } from '@/content/profile';

export function Hero() {
  const disabled = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.35,
  });
  const contentY = useTransform(smoothProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.9], [1, 0.3]);
  const visualY = useTransform(smoothProgress, [0, 1], [0, 80]);

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className='hero' ref={heroRef}>
      <div className='shell hero__grid'>

        {/* ── Left: text content ── */}
        <motion.div
          className='hero__content'
          style={disabled ? undefined : { y: contentY, opacity: contentOpacity }}
          variants={disabled ? undefined : contentVariants}
          initial={disabled ? false : 'hidden'}
          animate={disabled ? undefined : 'visible'}
        >
          <motion.p
            className='eyebrow'
            variants={disabled ? undefined : itemVariants}
          >
            Senior Full-Stack Engineer · AI &amp; Distributed Systems
          </motion.p>

          <motion.h1 variants={disabled ? undefined : itemVariants}>
            I design and build digital products that feel premium,
            <span>move fast, and stay solid behind the scenes.</span>
          </motion.h1>

          <motion.p
            className='hero__summary'
            variants={disabled ? undefined : itemVariants}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            className='hero__actions'
            variants={disabled ? undefined : itemVariants}
          >
            <Button href='#case-studies'>See the work</Button>
            <Button href='#experience' variant='secondary'>
              Experience
            </Button>
            <Button
              href={profile.resumeHref}
              variant='ghost'
              target='_blank'
              rel='noreferrer'
            >
              Résumé
            </Button>
          </motion.div>
        </motion.div>

        {/* ── Right: portrait ── */}
        <motion.div
          className='hero__visual'
          style={disabled ? undefined : { y: visualY }}
          initial={disabled ? false : { opacity: 0, y: 28 }}
          animate={disabled ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className='hero__portrait card'
            animate={disabled ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={disabled ? undefined : { y: -6, scale: 1.012 }}
          >
            <Image
              src={profile.avatarSrc}
              alt={`${profile.name} portrait`}
              width={720}
              height={900}
              priority
            />
            <div className='hero__portrait-badge'>
              <p>Currently focused on</p>
              <strong>Fast product delivery with AI-assisted workflows</strong>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
