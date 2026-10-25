"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/Badge";

interface ProjectData {
  title: string;
  tagline?: string;
  description: string;
  summary?: string;
  features?: string[];
  highlights?: string[];
  metrics?: { label: string; value: string }[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  impact?: string;
  status?: string;
  period?: string;
}

interface FeaturedProjectSpotlightProps {
  index: string;
  category: string;
  project: ProjectData;
  accent: "cyan" | "emerald";
  urlBarText: string;
  codeSnippet?: {
    filename: string;
    code: string;
    tabLabel?: string;
  };
  customWidget?: React.ReactNode;
}

export const FeaturedProjectSpotlight: React.FC<FeaturedProjectSpotlightProps> = ({
  index,
  category,
  project,
  accent,
  urlBarText,
  codeSnippet,
  customWidget,
}) => {
  const [activeTab, setActiveTab] = useState<"ui" | "code">("ui");

  const isCyan = accent === "cyan";

  const accentStyles = isCyan
    ? {
        badgeBg: "bg-cyan-500/10 border-cyan-400/30 text-cyan-300",
        titleHover: "group-hover:text-cyan-400",
        tagline: "text-cyan-400",
        metricBorder: "border-cyan-500/25 bg-cyan-950/20 hover:border-cyan-400/40",
        dotColor: "bg-cyan-400",
        liveBtn: "bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-zinc-950 shadow-cyan-500/25",
        tabActive: "bg-cyan-500/25 text-cyan-200 border-cyan-500/50",
        windowBorder: "border-cyan-500/30 group-hover:border-cyan-400/50 shadow-[0_20px_50px_-20px_rgba(6,182,212,0.25)]",
        windowBg: "bg-gradient-to-b from-cyan-950/40 via-zinc-950/90 to-black",
        topHighlight: "from-transparent via-cyan-400 to-transparent",
        chromeBg: "bg-cyan-950/35 border-cyan-500/25",
        bottomRibbon: "border-cyan-500/20 bg-cyan-950/20",
      }
    : {
        badgeBg: "bg-emerald-500/10 border-emerald-400/30 text-emerald-300",
        titleHover: "group-hover:text-emerald-400",
        tagline: "text-emerald-400",
        metricBorder: "border-emerald-500/25 bg-emerald-950/20 hover:border-emerald-400/40",
        dotColor: "bg-emerald-400",
        liveBtn: "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-zinc-950 shadow-emerald-500/25",
        tabActive: "bg-emerald-500/25 text-emerald-200 border-emerald-500/50",
        windowBorder: "border-emerald-500/30 group-hover:border-emerald-400/50 shadow-[0_20px_50px_-20px_rgba(16,185,129,0.25)]",
        windowBg: "bg-gradient-to-b from-emerald-950/40 via-zinc-950/90 to-black",
        topHighlight: "from-transparent via-emerald-400 to-transparent",
        chromeBg: "bg-emerald-950/35 border-emerald-500/25",
        bottomRibbon: "border-emerald-500/20 bg-emerald-950/20",
      };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="group relative border-t border-white/10 pt-12 pb-16 transition-colors duration-500 w-full min-w-0 max-w-full overflow-hidden"
    >
      {/* Top Header Row: Category, Index, Status & Direct CTAs */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 w-full min-w-0">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
            {index} // {category}
          </span>
          {project.status && (
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-xs font-semibold uppercase tracking-wider ${accentStyles.badgeBg}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full animate-pulse ${accentStyles.dotColor}`} />
              {project.status}
            </span>
          )}
        </div>

        {/* CTA Buttons (Deployed Site & Source Code) */}
        <div className="flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-wide shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 ${accentStyles.liveBtn}`}
            >
              <span>Deployed Site</span>
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white active:scale-95"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>Source Code</span>
              <span className="text-zinc-500">→</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Showcase Grid */}
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start w-full min-w-0 max-w-full">
        {/* Left Column (5 Cols): Scannable, Larger Text without clutter */}
        <div className="flex flex-col space-y-6 lg:col-span-5 w-full min-w-0 max-w-full">
          {/* Title & Tagline */}
          <div>
            <h3
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight text-white transition-colors duration-300 ${accentStyles.titleHover}`}
            >
              {project.title}
            </h3>
            {project.tagline && (
              <p className={`mt-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider ${accentStyles.tagline}`}>
                {project.tagline}
              </p>
            )}
            {/* Compressed Single Core Narrative */}
            <p className="mt-4 text-base leading-relaxed text-zinc-300">
              {project.impact || project.description}
            </p>
          </div>

          {/* Core Engineering Takeaways (3 high-impact bullets) */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3 pt-1">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
                KEY ARCHITECTURAL HIGHLIGHTS
              </span>
              <ul className="space-y-2.5 text-sm text-zinc-200">
                {project.features.slice(0, 3).map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${accentStyles.dotColor}`} />
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Operational Metrics (2x2 Grid with larger labels & values) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3 pt-2">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className={`rounded-2xl border p-3.5 backdrop-blur-sm transition-all duration-300 ${accentStyles.metricBorder}`}
                >
                  <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Technology Stack Pills */}
          <div className="pt-1">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((item) => (
                <Badge
                  key={item}
                  label={item}
                  variant="default"
                  className="bg-white/[0.04] border-white/10 text-xs text-zinc-300 hover:border-white/25"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (7 Cols): Atmospheric Tinted Glass Showcase Window */}
        <div className="relative lg:col-span-7 w-full min-w-0 max-w-full">
          {/* Luminous Atmospheric Backlight Glow */}
          <div
            className={`pointer-events-none absolute inset-0 sm:-inset-6 rounded-3xl opacity-25 blur-3xl transition-all duration-700 group-hover:opacity-45 ${
              isCyan ? "bg-cyan-500/30" : "bg-emerald-500/30"
            }`}
          />

          <div
            className={`relative flex h-full flex-col overflow-hidden rounded-2xl border ${accentStyles.windowBorder} ${accentStyles.windowBg} backdrop-blur-2xl transition-all duration-500 w-full min-w-0 max-w-full`}
          >
            {/* Luminous Top-Edge Highlight Line */}
            <div className={`h-[1px] w-full bg-gradient-to-r ${accentStyles.topHighlight}`} />

            {/* macOS Tinted Chrome Bar */}
            <div
              className={`flex flex-wrap items-center justify-between gap-2 border-b ${accentStyles.chromeBg} px-3 sm:px-4 py-2.5 sm:py-3 min-w-0`}
            >
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <span className="h-3 w-3 rounded-full bg-red-500/80 shadow-sm shrink-0" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80 shadow-sm shrink-0" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80 shadow-sm shrink-0" />
                <span className="ml-2 font-mono text-[11px] sm:text-xs text-zinc-300 truncate max-w-[120px] xs:max-w-[160px] sm:max-w-xs">
                  {urlBarText}
                </span>
              </div>

              {/* View Mode Tab Selector (Only if codeSnippet exists) */}
              {codeSnippet ? (
                <div className="flex items-center gap-1 rounded-lg border border-white/15 bg-black/50 p-0.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveTab("ui")}
                    className={`rounded-md px-2.5 sm:px-3 py-1 font-mono text-xs font-semibold transition-all ${
                      activeTab === "ui" ? accentStyles.tabActive : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    System UI
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("code")}
                    className={`rounded-md px-2.5 sm:px-3 py-1 font-mono text-xs font-semibold transition-all ${
                      activeTab === "code" ? accentStyles.tabActive : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {codeSnippet.tabLabel || "Python SDK"}
                  </button>
                </div>
              ) : (
                <span className={`rounded-md border px-2.5 py-0.5 font-mono text-[11px] sm:text-xs font-medium shrink-0 ${accentStyles.badgeBg}`}>
                  Full-Stack Platform
                </span>
              )}
            </div>

            {/* Window Content */}
            <div className="relative flex-1 min-h-[360px] sm:min-h-[380px] w-full min-w-0 max-w-full overflow-hidden">
              {codeSnippet && activeTab === "code" ? (
                <div className="h-full overflow-x-auto p-4 sm:p-5 text-zinc-300 bg-black/60">
                  <pre className="whitespace-pre font-mono text-xs leading-6">
                    <code>{codeSnippet.code}</code>
                  </pre>
                </div>
              ) : (
                <div className="h-full w-full min-w-0 max-w-full overflow-hidden">
                  {customWidget}
                </div>
              )}
            </div>

            {/* Window Bottom Status Bar */}
            <div
              className={`flex flex-wrap items-center justify-between gap-2 border-t ${accentStyles.bottomRibbon} px-3 sm:px-4 py-2 sm:py-2.5 font-mono text-[11px] sm:text-xs text-zinc-400 min-w-0`}
            >
              <span className="flex items-center gap-1.5 min-w-0 truncate">
                <span className={`h-2 w-2 rounded-full shrink-0 ${accentStyles.dotColor}`} />
                <span className="truncate">
                  {codeSnippet && activeTab === "code"
                    ? codeSnippet.filename
                    : "Interactive System View"}
                </span>
              </span>
              <span className="text-zinc-300 font-medium shrink-0">100% Operational</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
