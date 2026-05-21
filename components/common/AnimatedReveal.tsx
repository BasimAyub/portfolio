"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type AnimatedRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function AnimatedReveal({ children, delay = 0, className }: AnimatedRevealProps) {
  const disabled = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={disabled ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={disabled ? { opacity: 1, y: 0 } : undefined}
      whileInView={disabled ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
