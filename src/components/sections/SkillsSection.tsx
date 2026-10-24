"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";

interface Technology {
  name: string;
  icon?: string;
  featured?: boolean;
}

interface DomainSkillGroup {
  id: string;
  index: string;
  accent: "cyan" | "emerald" | "sky" | "amber" | string;
  category: string;
  title: string;
  description: string;
  technologies: Technology[];
  capabilities: string[];
}

interface SkillsSectionProps {
  domains?: DomainSkillGroup[];
  skillGroups?: { title: string; skills: string[] }[];
}

const ACCENT_STYLES: Record<
  string,
  {
    badge: string;
    dot: string;
    titleHover: string;
    glow: string;
  }
> = {
  cyan: {
    badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    dot: "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]",
    titleHover: "group-hover/domain:text-cyan-300",
    glow: "from-cyan-500/10 via-transparent to-transparent",
  },
  emerald: {
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    dot: "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]",
    titleHover: "group-hover/domain:text-emerald-300",
    glow: "from-emerald-500/10 via-transparent to-transparent",
  },
  sky: {
    badge: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    dot: "bg-sky-400 shadow-[0_0_8px_rgba(14,165,233,0.8)]",
    titleHover: "group-hover/domain:text-sky-300",
    glow: "from-sky-500/10 via-transparent to-transparent",
  },
  amber: {
    badge: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    dot: "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]",
    titleHover: "group-hover/domain:text-amber-300",
    glow: "from-amber-500/10 via-transparent to-transparent",
  },
};

export default function SkillsSection({
  domains = [],
  skillGroups = [],
}: SkillsSectionProps) {
  const hasDomains = domains && domains.length > 0;

  return (
    <Section
      id="skills"
      eyebrow="SYSTEMS & TOOLING"
      title="Technical Taxonomy by Domain"
      description="Systematic crosshair matrix covering server engines, relational storage, web interfaces, and DevOps automation."
    >
      {hasDomains ? (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] via-zinc-950/60 to-black/80 backdrop-blur-xl overflow-hidden shadow-[0_25px_60px_-25px_rgba(0,0,0,0.7)]"
        >
          {/* Blueprint Crosshair Center Marker (Desktop only) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-20">
            <div className="h-6 w-6 rounded-full border border-white/20 bg-zinc-950 flex items-center justify-center font-mono text-xs text-zinc-400 select-none shadow-[0_0_12px_rgba(0,0,0,0.8)]">
              +
            </div>
          </div>

          {/* 2x2 Quadrant Grid with Hairline Crosshairs */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-white/10 md:[&>*:nth-child(odd)]:border-r md:[&>*:nth-child(odd)]:border-white/10 md:[&>*:nth-child(n+3)]:border-t md:[&>*:nth-child(n+3)]:border-white/10">
            {domains.map((domain) => {
              const accent = ACCENT_STYLES[domain.accent] || ACCENT_STYLES.cyan;

              return (
                <article
                  key={domain.id}
                  className="group/domain relative p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.015] flex flex-col justify-between"
                >
                  {/* Subtle Ambient Hover Glow */}
                  <div
                    className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${accent.glow} opacity-0 blur-xl transition-opacity duration-300 group-hover/domain:opacity-100`}
                  />

                  <div>
                    {/* Quadrant Header: Index + Category Pill */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-zinc-500">
                          {domain.index}
                        </span>
                        <span className="text-zinc-700">/</span>
                        <span
                          className={`rounded border px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider ${accent.badge}`}
                        >
                          {domain.category}
                        </span>
                      </div>

                      <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
                        Quadrant {domain.index}
                      </span>
                    </div>

                    {/* Domain Title with Accent Hover */}
                    <h3
                      className={`mt-4 text-lg sm:text-xl font-bold tracking-tight text-white transition-colors duration-200 ${accent.titleHover}`}
                    >
                      {domain.title}
                    </h3>

                    {/* 1-Line Architectural Context */}
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-400">
                      {domain.description}
                    </p>

                    {/* Sub-Group 1: Primary Technologies */}
                    <div className="mt-6">
                      <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2.5">
                        PRIMARY ENGINES & STACK
                      </span>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {domain.technologies.map((tech) => (
                          <div
                            key={tech.name}
                            className={`inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
                              tech.featured
                                ? "border-white/15 bg-white/[0.05] text-zinc-100 hover:border-white/30 hover:bg-white/[0.08]"
                                : "border-white/10 bg-white/[0.02] text-zinc-300 hover:border-white/20 hover:bg-white/[0.04]"
                            }`}
                          >
                            {/* Render icon if provided (e.g. tools) */}
                            {tech.icon && (
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                className="h-3.5 w-3.5 object-contain shrink-0"
                              />
                            )}

                            {/* Accent Dot for Core Technologies */}
                            {tech.featured && !tech.icon && (
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}
                              />
                            )}

                            <span>{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sub-Group 2: Key Architectural Concepts & Patterns */}
                  <div className="mt-6 pt-5 border-t border-white/5">
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2.5">
                      KEY ARCHITECTURAL PATTERNS & CONCEPTS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="rounded-lg border border-white/5 bg-zinc-900/60 px-2 py-0.5 font-mono text-[10px] sm:text-[11px] text-zinc-400 transition-colors hover:border-white/15 hover:text-zinc-200"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </motion.div>
      ) : (
        /* Legacy fallback if domains are not loaded */
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="p-6 border border-white/10 rounded-xl">
              <h3 className="font-bold text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-white/10 px-2.5 py-1 text-xs text-zinc-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
