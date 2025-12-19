"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const cardHover = {
  whileHover: { y: -4, scale: 1.02 },
  whileTap: { scale: 0.98 },
};

const buttonHover = {
  whileHover: { y: -1, scale: 1.02 },
  whileTap: { scale: 0.97 },
};

export default function Home() {
  return (
    <motion.section
      className="space-y-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {/* Top hero grid */}
      <div className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-center">
        {/* Left column */}
        <div className="space-y-6 fade-in-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to opportunities & collaborations
          </p>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
              Pundalik Masurkar
            </span>
            .
            <br />
            Software Developer crafting full‑stack web applications.
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            I&apos;m a Software Developer with experience building scalable,
            production‑ready applications using Java, Spring Boot, React, REST
            APIs, and MySQL. I focus on clean architecture, performance, and
            delivering reliable user experiences.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.div {...buttonHover}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
              >
                Let&apos;s work together
              </Link>
            </motion.div>

            <motion.div {...buttonHover}>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-white/10"
              >
                More about me
              </Link>
            </motion.div>
          </div>

          <div className="grid max-w-lg grid-cols-3 gap-3 text-xs text-slate-300 sm:text-sm">
            <motion.div
              className="rounded-xl border border-white/5 bg-slate-900/60 px-3 py-3 card-elevated"
              {...cardHover}
            >
              <p className="text-[11px] uppercase tracking-wide text-slate-400">
                Experience
              </p>
              <p className="text-base font-semibold text-white">2+ years</p>
            </motion.div>

            <motion.div
              className="rounded-xl border border-white/5 bg-slate-900/60 px-3 py-3 card-elevated"
              {...cardHover}
            >
              <p className="text-[11px] uppercase tracking-wide text-slate-400">
                Focus
              </p>
              <p className="text-base font-semibold text-white">Web & UI</p>
            </motion.div>

            <motion.div
              className="rounded-xl border border-white/5 bg-slate-900/60 px-3 py-3 card-elevated"
              {...cardHover}
            >
              <p className="text-[11px] uppercase tracking-wide text-slate-400">
                Location
              </p>
              <p className="text-base font-semibold text-white">Kolhapur, India</p>
            </motion.div>
          </div>
        </div>

        {/* Right column */}
        <motion.div
          className="relative hidden md:block fade-in-delayed"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/40 via-sky-400/20 to-emerald-300/40 blur-3xl" />

          <div className="relative flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-indigo-900/40 backdrop-blur">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Tech Snapshot
              </p>
              <p className="mt-2 text-sm text-slate-200">
                Java · Spring Boot · React · REST APIs · MySQL · Tailwind CSS
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs text-slate-200">
              <div className="rounded-xl border border-white/10 bg-slate-900/80 p-3">
                <p className="font-medium text-slate-100">Frontend</p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Clean, responsive UIs with attention to detail.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-900/80 p-3">
                <p className="font-medium text-slate-100">Performance</p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Optimized, accessible experiences that feel instant.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-900/80 p-3">
                <p className="font-medium text-slate-100">Collaboration</p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Strong communication with designers and teams.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-900/80 p-3">
                <p className="font-medium text-slate-100">Craft</p>
                <p className="mt-1 text-[11px] text-slate-400">
                  Pixel‑perfect layouts and thoughtful micro‑interactions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech stack band */}
      <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-xs text-slate-200 sm:text-sm">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-300">
            Tech stack
          </span>
          <span className="h-px w-6 bg-slate-600" />
          <span className="rounded-full bg-slate-900/80 px-3 py-1">
            Java &amp; Spring Boot
          </span>
          <span className="rounded-full bg-slate-900/80 px-3 py-1">React</span>
          <span className="rounded-full bg-slate-900/80 px-3 py-1">
            REST APIs &amp; JWT
          </span>
          <span className="rounded-full bg-slate-900/80 px-3 py-1">
            MySQL &amp; SQL
          </span>
          <span className="rounded-full bg-slate-900/80 px-3 py-1">
            Tailwind CSS
          </span>
        </div>
      </div>
    </motion.section>
  );
}
