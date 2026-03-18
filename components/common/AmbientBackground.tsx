"use client";

import { motion, useReducedMotion } from "framer-motion";

const particles = [
  { top: "10%", left: "14%", delay: 0 },
  { top: "18%", left: "82%", delay: 1.1 },
  { top: "32%", left: "8%", delay: 0.6 },
  { top: "44%", left: "76%", delay: 1.8 },
  { top: "58%", left: "18%", delay: 0.3 },
  { top: "70%", left: "88%", delay: 1.2 },
  { top: "82%", left: "40%", delay: 0.9 }
];

export function AmbientBackground() {
  const disabled = useReducedMotion();

  return (
    <div className="ambient-scene" aria-hidden="true">
      <motion.div
        className="ambient-scene__mesh ambient-scene__mesh--a"
        animate={
          disabled
            ? undefined
            : {
                x: [0, 36, -18, 0],
                y: [0, -28, 18, 0],
                scale: [1, 1.08, 0.96, 1]
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-scene__mesh ambient-scene__mesh--b"
        animate={
          disabled
            ? undefined
            : {
                x: [0, -30, 24, 0],
                y: [0, 22, -26, 0],
                scale: [1, 0.94, 1.06, 1]
              }
        }
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      />
      <motion.div
        className="ambient-scene__ring ambient-scene__ring--a"
        animate={disabled ? undefined : { rotate: 360, scale: [1, 1.03, 1] }}
        transition={{
          rotate: { duration: 22, repeat: Infinity, ease: "linear" },
          scale: { duration: 9, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div
        className="ambient-scene__ring ambient-scene__ring--b"
        animate={disabled ? undefined : { rotate: -360, scale: [0.96, 1.02, 0.96] }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div
        className="ambient-scene__grid"
        animate={disabled ? undefined : { backgroundPosition: ["0px 0px", "0px 48px"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="ambient-scene__beam"
        animate={disabled ? undefined : { y: ["-10%", "110%"] }}
        transition={{ duration: 11, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
      />

      {particles.map((particle, index) => (
        <motion.span
          key={`${particle.top}-${particle.left}`}
          className="ambient-scene__particle"
          style={{ top: particle.top, left: particle.left }}
          animate={
            disabled
              ? undefined
              : {
                  y: [0, -16, 0],
                  opacity: [0.2, 0.95, 0.2],
                  scale: [1, 1.3, 1]
                }
          }
          transition={{
            duration: 3.6 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}
    </div>
  );
}
