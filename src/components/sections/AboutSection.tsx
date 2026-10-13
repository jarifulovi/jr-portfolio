"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Section } from "./Section";
import { Badge } from "../ui/Badge";

interface AboutBlock {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  pills: string[];
}

interface AboutSectionProps {
  about?: {
    sectionEyebrow?: string;
    sectionTitle?: string;
    sectionDescription?: string;
    blocks?: AboutBlock[];
  };
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function getBlockIcon(id: string) {
  switch (id) {
    case "who-i-am":
      return (
        <svg className="h-5 w-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case "how-i-approach":
      return (
        <svg className="h-5 w-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "what-i-excel-at":
      return (
        <svg className="h-5 w-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "where-im-headed":
    default:
      return (
        <svg className="h-5 w-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
  }
}

function getBadgeVariant(id: string): "default" | "accent" | "success" | "outline" {
  switch (id) {
    case "who-i-am":
      return "accent";
    case "how-i-approach":
      return "success";
    case "what-i-excel-at":
      return "accent";
    case "where-im-headed":
    default:
      return "default";
  }
}

export const AboutSection: React.FC<AboutSectionProps> = ({ about }) => {
  if (!about || !about.blocks || about.blocks.length === 0) return null;

  return (
    <Section
      id="about"
      eyebrow={about.sectionEyebrow || "About Me"}
      title={about.sectionTitle || "Engineering with Discipline, Building End-to-End"}
      description={about.sectionDescription || "A deeper look at my academic background, technical philosophy, core strengths, and future trajectory."}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {about.blocks.map((block) => (
          <motion.div
            key={block.id}
            variants={itemVariants}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-black/50 p-7 sm:p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-cyan-500/10 hover:shadow-2xl"
          >
            {/* Card Header */}
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/40 shadow-inner group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-colors">
                  {getBlockIcon(block.id)}
                </div>
                <Badge label={block.category} variant={getBadgeVariant(block.id)} />
              </div>

              {/* Subtitle & Title */}
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                {block.subtitle}
              </p>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                {block.title}
              </h3>

              {/* Description */}
              <p className="mt-3.5 text-sm leading-relaxed text-zinc-300">
                {block.description}
              </p>
            </div>

            {/* Bottom Pills */}
            <div className="mt-7 flex flex-wrap gap-2 pt-4 border-t border-white/5">
              {block.pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
