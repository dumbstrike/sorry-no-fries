"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.08, duration: 0.9, ease },
  }),
};

function AmbientGlow({
  className,
  delay = 0,
  duration = 8,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      aria-hidden
      animate={
        reduceMotion
          ? undefined
          : {
              opacity: [0.14, 0.26, 0.16],
              scale: [1, 1.08, 1],
              y: [0, -18, 0],
            }
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="hero-cinematic relative isolate min-h-[100dvh] overflow-hidden bg-matte"
      aria-label="Introduction"
    >
      <div className="hero-depth-floor" aria-hidden />

      <motion.div
        className="hero-vignette pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease }}
      />

      <AmbientGlow
        className="pointer-events-none absolute -right-[20%] top-[8%] h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-burple/15 blur-[140px]"
        delay={0}
        duration={9}
      />
      <AmbientGlow
        className="pointer-events-none absolute -left-[15%] bottom-[12%] h-[min(55vw,380px)] w-[min(55vw,380px)] rounded-full bg-burple-deep/12 blur-[120px]"
        delay={1.2}
        duration={11}
      />
      <AmbientGlow
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-burple-glow/8 blur-[100px]"
        delay={0.6}
        duration={7}
      />

      <div className="site-wrap depth-content relative z-[2] flex min-h-[100dvh] flex-col pb-32 pt-28 sm:pb-40 sm:pt-32 md:pt-36">
        <motion.p
          className="type-eyebrow mb-12 sm:mb-16 md:mb-20"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="visible"
        >
          Burplefolk · SS26
        </motion.p>

        <div className="grid flex-1 items-center gap-16 sm:gap-20 lg:grid-cols-[1fr_minmax(300px,40%)] lg:gap-[var(--grid-gap-lg)] xl:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            className="relative z-10 flex flex-col justify-center"
            initial="hidden"
            animate="visible"
          >
            <h1 className="select-none">
              <motion.span
                className="block text-[clamp(4.25rem,18vw,11.5rem)] font-normal leading-[0.78] tracking-[-0.02em] text-cream"
                variants={fadeUp}
                custom={1}
              >
                SORRY.
              </motion.span>
              <motion.span
                className="hero-burple-glow block text-[clamp(4.25rem,18vw,11.5rem)] font-normal leading-[0.78] tracking-[-0.02em] text-burple"
                variants={fadeUp}
                custom={2}
              >
                NO.
              </motion.span>
              <motion.span
                className="block text-[clamp(4.25rem,18vw,11.5rem)] font-normal leading-[0.78] tracking-[-0.02em] text-cream/95"
                variants={fadeUp}
                custom={3}
              >
                FRIES.
              </motion.span>
            </h1>

            <motion.p
              className="type-lead mt-12 max-w-[24rem] text-pretty sm:mt-16 md:mt-20"
              variants={fadeUp}
              custom={4}
            >
              A dark-table house policy. Premium plates. Zero fried potatoes — ever.
            </motion.p>

            <motion.div
              className="mt-14 flex flex-col gap-4 sm:mt-16 sm:flex-row sm:items-center sm:gap-5 md:mt-20"
              variants={fadeUp}
              custom={5}
            >
              <a href="#visit" className="btn btn--lg btn--primary btn--wide">
                Reserve
              </a>
              <a href="#menu" className="btn btn--lg btn--ghost btn--wide">
                Collection
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-[min(100%,420px)] lg:mx-0 lg:max-w-none lg:justify-self-end"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.35, duration: 1.1, ease }}
          >
            <motion.div
              className="hero-burger-glow pointer-events-none absolute inset-0 -z-10 scale-90"
              aria-hidden
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.2, 0.38, 0.24],
                      scale: [0.88, 0.95, 0.9],
                    }
              }
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="elevate-subject relative aspect-[4/5] w-full sm:aspect-square lg:aspect-[4/5]"
              animate={reduceMotion ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="hero-burger-mask relative h-full w-full shadow-[var(--shadow-subject)]">
                <Image
                  src="/hero/burger.png"
                  alt="Signature burger — studio render, no fries served"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 42vw"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-matte via-matte/20 to-transparent"
                  aria-hidden
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-matte/80 via-transparent to-transparent lg:from-matte/60"
                  aria-hidden
                />
              </div>

              <motion.div
                className="absolute -bottom-1 left-0 right-0 flex items-end justify-between px-1 sm:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.7, ease }}
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-cream/35">
                  Signature · 01
                </p>
                <p className="font-mono text-[9px] uppercase tracking-[0.4em] text-burple/80">
                  Fries declined
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 flex items-center justify-between border-t border-cream/[0.06] pt-8 sm:mt-20 sm:pt-10 md:mt-24 md:pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8, ease }}
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-cream/25">
            Scroll
          </span>
          <span className="hidden font-mono text-[9px] uppercase tracking-[0.45em] text-cream/25 sm:inline">
            Industrial District
          </span>
          <span className="font-mono text-[9px] tabular-nums uppercase tracking-[0.45em] text-cream/25">
            06 — 11 PM
          </span>
        </motion.div>
      </div>
    </section>
  );
}
