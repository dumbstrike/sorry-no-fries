"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const revealSubtle = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-label"?: string;
  /** Slightly softer motion for bands like the marquee */
  subtle?: boolean;
};

export function SectionReveal({
  children,
  className,
  id,
  "aria-label": ariaLabel,
  subtle = false,
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.12, margin: "-10% 0px -6% 0px" }}
      variants={subtle ? revealSubtle : reveal}
      transition={{
        duration: subtle ? 0.65 : 0.8,
        ease,
      }}
    >
      {children}
    </motion.section>
  );
}

type FooterRevealProps = {
  children: ReactNode;
  className?: string;
};

export function FooterReveal({ children, className }: FooterRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.4 }}
      variants={revealSubtle}
      transition={{ duration: 0.7, ease }}
    >
      {children}
    </motion.footer>
  );
}
