"use client";

import React from "react";
import { Badge } from "../ui/Badge";

interface SecondaryProjectProps {
  index?: string;
  title: string;
  tagline?: string;
  description: string;
  highlights?: string[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  status?: string;
}

export const SecondaryProjectCard: React.FC<SecondaryProjectProps> = ({
  index = "03",
  title,
  tagline,
  description,
  stack,
  repoUrl,
  liveUrl,
  status,
}) => {
  return (
    <div className="group relative py-8 sm:py-10 transition-colors duration-300 hover:bg-white/[0.015] px-4 -mx-4 rounded-2xl w-full min-w-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start w-full min-w-0">
        {/* Left Column (5 Cols): Index, Big Title, Subtitle */}
        <div className="md:col-span-5 flex items-start gap-4 sm:gap-6 min-w-0">
          <span className="font-mono text-xs sm:text-sm font-bold text-zinc-500 pt-1 shrink-0 select-none">
            {index}
          </span>

          <div className="min-w-0 flex-1">
            <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white transition-all duration-300 group-hover:text-cyan-300 group-hover:translate-x-1">
              {title}
            </h4>
            {tagline && (
              <p className="mt-1 text-xs sm:text-sm text-zinc-400 font-medium tracking-normal">
                {tagline}
              </p>
            )}
          </div>
        </div>

        {/* Right Column (7 Cols): Narrative, Stack Pills, Metadata Line */}
        <div className="md:col-span-7 flex flex-col justify-between space-y-4 min-w-0">
          <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-300">
            {description}
          </p>

          {/* Technology Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {stack.map((item) => (
              <Badge
                key={item}
                label={item}
                variant="default"
                className="bg-white/[0.03] border-white/10 text-xs font-mono text-zinc-300 hover:border-white/25 px-2.5 py-0.5"
              />
            ))}
          </div>

          {/* Bottom Metadata & Action Link */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-zinc-400 border-t border-white/5">
            <span className="uppercase tracking-wider text-[11px] text-zinc-500">
              {status || "Operational System"} · OPEN SOURCE
            </span>

            <div className="flex items-center gap-4">
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-zinc-300 transition-colors duration-200 hover:text-white group/link"
                >
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
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
                  className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Live</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

