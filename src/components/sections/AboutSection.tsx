"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Section } from "./Section";

interface AboutStep {
  id: string;
  label: string;
  title: string;
  description: string;
}

interface AboutSectionProps {
  about?: {
    sectionEyebrow?: string;
    sectionTitle?: string;
    sectionDescription?: string;
    steps?: AboutStep[];
  };
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function getStepIcon(id: string) {
  switch (id) {
    case "background":
      return (
        <svg className="h-4 w-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case "approach":
      return (
        <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "craft":
      return (
        <svg className="h-4 w-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "future":
    default:
      return (
        <svg className="h-4 w-4 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
  }
}

export const AboutSection: React.FC<AboutSectionProps> = ({ about }) => {
  if (!about || !about.steps || about.steps.length === 0) return null;

  return (
    <Section
      id="about"
      eyebrow={about.sectionEyebrow || "About Me"}
      title={about.sectionTitle || "Engineering with Discipline, Building End-to-End"}
      description={about.sectionDescription || "My journey, engineering principles, practical craft, and future technical trajectory."}
    >
      <div className="relative mt-8 max-w-5xl pl-2 sm:pl-4">
        {/* Continuous Connecting Line */}
        <div className="absolute left-[19px] sm:left-[27px] top-6 bottom-8 w-[2px] bg-gradient-to-b from-cyan-500 via-sky-500/50 to-transparent" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-12 sm:space-y-16"
        >
          {about.steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="group relative flex items-start gap-5 sm:gap-7"
            >
              {/* Luminous Connecting Node */}
              <div className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/30 bg-zinc-950 shadow-[0_0_15px_rgba(6,182,212,0.25)] transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.45)]">
                {getStepIcon(step.id)}
              </div>

              {/* Editorial Text Content */}
              <div className="min-w-0 flex-1 pt-0.5">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                    {step.label}
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-zinc-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-cyan-100 transition-colors">
                  {step.title}
                </h3>

                <p className="mt-3 text-base sm:text-lg leading-relaxed text-zinc-300 font-normal">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
