"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Section } from "./Section";

interface AboutSectionProps {
  about?: {
    title: string;
    paragraphs: string[];
    highlights: { label: string; description: string }[];
  };
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export const AboutSection: React.FC<AboutSectionProps> = ({ about }) => {
  if (!about) return null;

  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={about.title}
      description="A background on my engineering mindset, education, and approach to software development."
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-start"
      >
        {/* Story Paragraphs */}
        <motion.div
          variants={itemVariants}
          className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-black/40 p-7 sm:p-8 backdrop-blur-sm"
        >
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed text-zinc-300">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Highlights / Guiding Pillars */}
        <motion.div variants={itemVariants} className="space-y-4">
          {about.highlights.map((item, idx) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.07]"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-xs font-bold text-cyan-400">
                  {idx + 1}
                </span>
                <h3 className="text-sm font-bold text-white">{item.label}</h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};
