"use client";

import React from "react";
import { Badge } from "../ui/Badge";

interface SecondaryProjectProps {
  title: string;
  description: string;
  highlights?: string[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  status?: string;
}

export const SecondaryProjectCard: React.FC<SecondaryProjectProps> = ({
  title,
  description,
  highlights = [],
  stack,
  repoUrl,
  liveUrl,
  status,
}) => {
  return (
    <article className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] via-zinc-950/70 to-black/90 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/35 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.18)]">
      {/* Ambient Neon Backlight Aura */}
      <div className="pointer-events-none absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-b from-cyan-500/20 via-cyan-500/5 to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

      <div>
        {/* Top Header Row: Status Badge */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
          <span className="rounded bg-white/5 border border-white/10 px-2.5 py-0.5 font-semibold uppercase tracking-wider text-zinc-300 transition-colors duration-200 group-hover:border-cyan-500/30 group-hover:text-cyan-200">
            {status || "Operational System"}
          </span>
        </div>

        {/* Project Title */}
        <h4 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-cyan-300">
          {title}
        </h4>

        {/* Description */}
        <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-zinc-300">
          {description}
        </p>

        {/* Key Highlights */}
        {highlights.length > 0 && (
          <ul className="mt-4 space-y-2 text-xs sm:text-sm text-zinc-300">
            {highlights.slice(0, 2).map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer: Tech Stack & Action Links */}
      <div className="mt-6 border-t border-white/10 pt-4">
        <div className="flex flex-wrap gap-2 mb-4">
          {stack.map((item) => (
            <Badge
              key={item}
              label={item}
              variant="default"
              className="bg-white/[0.03] border-white/10 text-xs text-zinc-300 hover:border-white/20 px-2.5 py-1"
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-300 transition-colors hover:text-white group/link"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>Repository</span>
              <span className="text-zinc-500 transition-transform duration-200 group-hover/link:translate-x-0.5">
                →
              </span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
            >
              <span>Live</span>
              <span>↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
