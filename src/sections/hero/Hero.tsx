"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HERO_DATA } from "./hero-data";
import Image from "next/image";
import { useState } from "react";
import { Variants } from 'framer-motion';

/*
 * Animation decisions:
 * - Stagger (delayChildren + staggerChildren): One-time entrance so content appears in reading order without layout thrash.
 * - item (y: 16 → 0): Fade + slight upward motion; ease-out curve for a quick, natural stop.
 * - imageFloat (y: [0, -8, 0], 4s, repeat): CSS-friendly transform-only animation; no layout reflows, GPU-friendly.
 * - Single animate on container: No per-element useInView/scroll triggers to avoid extra JS and re-renders.
 */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const imageFloat: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function Hero() {
  const [imageErr, setImageErr] = useState<boolean>(false);
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100 px-4 py-20 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col-reverse gap-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Text content */}
        <motion.div
          className="flex flex-1 flex-col gap-6 text-center lg:max-w-xl lg:text-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            id="hero-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            variants={item}
          >
            {HERO_DATA.name}
          </motion.h1>
          <motion.p
            className="text-lg font-medium text-zinc-600 dark:text-zinc-400 sm:text-xl"
            variants={item}
          >
            {HERO_DATA.title}
          </motion.p>
          <motion.p
            className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg"
            variants={item}
          >
            {HERO_DATA.tagline}
          </motion.p>
          <motion.p
            className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-500 sm:text-base"
            variants={item}
          >
            {HERO_DATA.description}
          </motion.p>
          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            variants={item}
          >
            <Link
              href={HERO_DATA.primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background shadow-md transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              {HERO_DATA.primaryCta.label}
            </Link>
            <Link
              href={HERO_DATA.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground dark:border-zinc-600 dark:hover:bg-zinc-800"
            >
              {HERO_DATA.secondaryCta.label}
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex shrink-0 justify-center lg:flex-1"
          variants={imageFloat}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="group relative w-56 shrink-0 overflow-hidden rounded-2xl shadow-xl sm:w-72 lg:w-80"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {!imageErr ? (
              <Image
                src="/images/vismay_portrait.jpeg"
                alt="Portrait of Vismay"
                width={320}
                height={320}
                onError={() => setImageErr(true)}
              />
            ) : (
              <div
                className="aspect-square w-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800"
                role="img"
                aria-label="Portrait of Vismay Valsaraj, Frontend Engineer"
              >
                <span className="flex h-full w-full items-center justify-center text-4xl font-semibold text-zinc-500 dark:text-zinc-400 sm:text-5xl">
                  VV
                </span>
              </div>
            )}

            <div
              className="absolute inset-0 -translate-x-[120%] skew-x-[-20deg] group-hover:translate-x-[120%] transition-transform duration-[1000ms] ease-in-out pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 20%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 80%, transparent 100%)",
              }}
            />

            {/* <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/20 dark:border-white/10 ring-1 ring-inset ring-black/5" /> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
