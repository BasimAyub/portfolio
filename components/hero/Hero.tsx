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
  const contentY = useTransform(smoothProgress, [0, 1], [0, 72]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.95], [1, 0.38]);
  const visualY = useTransform(smoothProgress, [0, 1], [0, 110]);
  const visualRotate = useTransform(smoothProgress, [0, 1], [0, -4]);

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 34 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.78, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className='hero' ref={heroRef}>
      <div className='shell hero__grid'>
        <motion.div
          className='hero__content'
          style={
            disabled ? undefined : { y: contentY, opacity: contentOpacity }
          }
          variants={disabled ? undefined : contentVariants}
          initial={disabled ? false : 'hidden'}
          animate={disabled ? undefined : 'visible'}>
          <motion.p
            className='eyebrow'
            variants={disabled ? undefined : itemVariants}>
            Senior Full-Stack Engineer · AI &amp; Distributed Systems
          </motion.p>
          <motion.h1 variants={disabled ? undefined : itemVariants}>
            I design and build digital products that feel premium,
            <span>move fast, and stay solid behind the scenes.</span>
          </motion.h1>

          <motion.p
            className='hero__summary'
            variants={disabled ? undefined : itemVariants}>
            {profile.summary}
          </motion.p>
          <motion.div
            className='hero__actions'
            variants={disabled ? undefined : itemVariants}>
            <Button href='#case-studies'>See the work</Button>
            <Button href='#experience' variant='secondary'>
              Experience
            </Button>
            <Button href={profile.resumeHref} variant='ghost' download>
              Résumé
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className='hero__visual'
          style={disabled ? undefined : { y: visualY, rotateZ: visualRotate }}
          initial={
            disabled ? false : { opacity: 0, scale: 0.92, rotateX: -10, y: 28 }
          }
          animate={
            disabled
              ? undefined
              : {
                  opacity: 1,
                  scale: 1,
                  rotateX: 0,
                  y: 0,
                }
          }
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
          <motion.div
            className='hero__halo'
            animate={
              disabled
                ? undefined
                : { scale: [1, 1.06, 0.98, 1], opacity: [0.34, 0.5, 0.3, 0.34] }
            }
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className='hero__frame hero__frame--rear'></div>
          <div className='hero__frame hero__frame--mid'></div>
          <div className='hero-orbit hero-orbit--outer'></div>
          <div className='hero-orbit hero-orbit--middle'></div>
          <div className='hero-orbit hero-orbit--inner'></div>
          <div className='hero-orbit hero-orbit--glow'></div>

          <motion.div
            className='hero__portrait card card--elevated'
            animate={
              disabled
                ? undefined
                : {
                    y: [0, -10, 0],
                    rotate: [0, -0.8, 0.8, 0],
                  }
            }
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={
              disabled ? undefined : { y: -10, scale: 1.015, rotateZ: -1 }
            }>
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

          <motion.div
            className='hero__signal hero__signal--left'
            animate={disabled ? undefined : { y: [0, -10, 0], x: [0, -6, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}>
            <span>Delivery mode</span>
            <strong>Design, build, iterate, ship</strong>
          </motion.div>
          <motion.div
            className='hero__signal hero__signal--right'
            animate={disabled ? undefined : { y: [0, 10, 0], x: [0, 6, 0] }}
            transition={{
              duration: 5.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}>
            <span>Core stack</span>
            <strong>Next.js, Node, Python, cloud, AI</strong>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
