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
  tools?: { name: string; icon: string }[];
}

const ACCENT_STYLES: Record<
  string,
  {
    badge: string;
    dot: string;
    borderHover: string;
    glow: string;
  }
> = {
  cyan: {
    badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    dot: "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]",
    borderHover: "group-hover/domain:border-cyan-500/30",
    glow: "from-cyan-500/10 via-transparent to-transparent",
  },
  emerald: {
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    dot: "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]",
    borderHover: "group-hover/domain:border-emerald-500/30",
    glow: "from-emerald-500/10 via-transparent to-transparent",
  },
  sky: {
    badge: "border-sky-500/30 bg-sky-500/10 text-sky-300",
    dot: "bg-sky-400 shadow-[0_0_8px_rgba(14,165,233,0.8)]",
    borderHover: "group-hover/domain:border-sky-500/30",
    glow: "from-sky-500/10 via-transparent to-transparent",
  },
  amber: {
    badge: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    dot: "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]",
    borderHover: "group-hover/domain:border-amber-500/30",
    glow: "from-amber-500/10 via-transparent to-transparent",
  },
};

export default function SkillsSection({
  domains = [],
  skillGroups = [],
  tools = [],
}: SkillsSectionProps) {
  // Fallback if domains are not provided
  const hasDomains = domains && domains.length > 0;

  return (
    <Section
      id="skills"
      eyebrow="SYSTEMS & TOOLING"
      title="Technical Skills by Engineering Domain"
      description="Categorized breakdown of runtime frameworks, data persistence layers, client interfaces, and daily developer tooling."
    >
      {hasDomains ? (
        <div className="space-y-6">
          {domains.map((domain, idx) => {
            const accent = ACCENT_STYLES[domain.accent] || ACCENT_STYLES.cyan;

            return (
              <motion.article
                key={domain.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`group/domain relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] via-zinc-950/40 to-black/70 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] ${accent.borderHover}`}
              >
                {/* Subtle top ambient gradient line on hover */}
                <div
                  className={`pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-b ${accent.glow} opacity-0 blur-lg transition-opacity duration-300 group-hover/domain:opacity-100`}
                />

                <div className="grid gap-8 lg:grid-cols-[340px_1fr] xl:grid-cols-[380px_1fr]">
                  {/* Left Column: Domain Identity & Framing */}
                  <div className="flex flex-col justify-between">
                    <div>
                      {/* Domain Index and Category Pill */}
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-zinc-400">
                          {domain.index}
                        </span>
                        <span className="text-zinc-600">/</span>
                        <span
                          className={`rounded border px-2 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider ${accent.badge}`}
                        >
                          {domain.category}
                        </span>
                      </div>

                      {/* Domain Title */}
                      <h3 className="mt-3 text-lg sm:text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover/domain:text-white">
                        {domain.title}
                      </h3>

                      {/* 1-Line Architectural Context */}
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-300">
                        {domain.description}
                      </p>
                    </div>

                    <div className="hidden lg:block mt-4 border-t border-white/5 pt-3 font-mono text-[11px] text-zinc-400">
                      <span>Production Proven</span>
                      <span className="mx-2 text-zinc-600">·</span>
                      <span>{domain.technologies.length} Stack Items</span>
                    </div>
                  </div>

                  {/* Right Column: Divided Sub-Groups (Technologies + Capabilities) */}
                  <div className="flex flex-col justify-center space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
                    {/* Sub-Group 1: Primary Technologies & Engines */}
                    <div>
                      <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2.5">
                        PRIMARY TECHNOLOGIES & ENGINES
                      </span>
                      <div className="flex flex-wrap gap-2">
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
                              <div className="flex h-4 w-4 items-center justify-center">
                                <img
                                  src={tech.icon}
                                  alt={tech.name}
                                  className="h-3.5 w-3.5 object-contain"
                                />
                              </div>
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

                    {/* Sub-Group 2: Key Architectural Concepts & Patterns */}
                    <div>
                      <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2.5">
                        KEY ARCHITECTURAL PATTERNS & CONCEPTS
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {domain.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="rounded-lg border border-white/5 bg-black/40 px-2.5 py-1 font-mono text-[11px] text-zinc-300 transition-colors hover:border-white/15 hover:text-zinc-100"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      ) : (
        /* Legacy fallback if domains are not loaded */
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
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
