"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";

interface ContactSectionProps {
  email?: string;
  availability?: string;
  links?: { label: string; url: string }[];
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  email = "jarifulovi@gmail.com",
  availability = "Available for Full-Time Software Developer Roles",
  links = [],
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      window.location.href = `mailto:${email}`;
    }
  };

  const githubUrl =
    links.find((l) => l.label.toLowerCase() === "github")?.url ||
    "https://github.com/jarifulovi";

  return (
    <Section
      id="contact"
      eyebrow="GET IN TOUCH"
      title="Let's Build Something Reliable Together"
      description="Whether you have an open software engineering role, a distributed workflow project, or simply want to talk backend architecture—my inbox is always open."
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] via-zinc-950/70 to-black/90 p-8 sm:p-12 md:p-16 text-center backdrop-blur-xl shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)]"
      >
        {/* Ambient Backlight Radial Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-2xl">
          {/* Availability Status Indicator */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{availability}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Have a project or engineering position in mind?
          </h3>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-300">
            BSSE Graduate (Coursework Complete, Oct 2026) at University of Dhaka (IIT). I am actively interviewing for full-time backend and software engineering opportunities.
          </p>

          {/* Action Hub */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="group/btn relative inline-flex items-center gap-2.5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-6 py-3.5 text-sm font-semibold text-cyan-300 transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] w-full sm:w-auto justify-center"
            >
              <svg
                className="h-4 w-4 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
              >
                {copied ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                )}
              </svg>
              <span className="font-mono text-xs sm:text-sm">
                {copied ? "Email Copied to Clipboard!" : email}
              </span>
            </button>

            {/* Direct Mailto Anchor */}
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-xs sm:text-sm font-medium text-zinc-300 transition-all duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white w-full sm:w-auto justify-center"
            >
              <span>Open Mail App</span>
              <span>↗</span>
            </a>
          </div>

          {/* Social Channels & Affiliation */}
          <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-cyan-300 flex items-center gap-1.5"
              >
                <span>GitHub</span>
                <span className="text-zinc-600">↗</span>
              </a>
            </div>

            <span className="text-zinc-500">
              University of Dhaka · IIT (BSSE)
            </span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
