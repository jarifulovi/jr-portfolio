import React from "react";
import Link from "next/link";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

interface ProjectCardProps {
  title: string;
  description: string;
  summary?: string;
  features?: string[];
  highlights?: string[];
  metrics?: { label: string; value: string }[];
  stack: string[];
  href?: string;
  liveUrl?: string;
  impact?: string;
  status?: string;
  period?: string;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  summary,
  features = [],
  highlights = [],
  metrics = [],
  stack,
  href,
  liveUrl,
  impact,
  status,
  period,
  featured = false,
}) => {
  if (featured) {
    return (
      <Card className="group relative flex h-full flex-col justify-between overflow-hidden border-cyan-500/20 bg-gradient-to-br from-white/[0.08] via-cyan-950/10 to-black/60 p-7 shadow-[0_30px_70px_-30px_rgba(6,182,212,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-500/20 hover:shadow-2xl">
        {/* Top Accent Bar */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400" />

        <div>
          {/* Header row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                <svg className="h-3 w-3 fill-cyan-400 text-cyan-400" viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Featured Project
              </span>
              {status && (
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  {status}
                </span>
              )}
            </div>
            {period && (
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-zinc-400">
                {period}
              </span>
            )}
          </div>

          {/* Title & Description */}
          <div className="mt-5">
            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              {description}
            </p>
          </div>

          {/* Impact Callout */}
          {impact && (
            <div className="mt-5 rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Architectural Impact
              </p>
              <p className="mt-1.5 text-xs font-medium leading-relaxed text-zinc-200">
                {impact}
              </p>
            </div>
          )}

          {/* Core Features */}
          {features.length > 0 && (
            <div className="mt-4 rounded-2xl border border-white/5 bg-black/40 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Key Engineering Deliverables
              </p>
              <ul className="mt-2.5 space-y-2 text-xs text-zinc-300">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics */}
          {metrics.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer: Stack & Actions */}
        <div className="mt-6 border-t border-white/10 pt-5">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {stack.map((item) => (
              <Badge key={item} label={item} variant="default" className="text-[11px]" />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {href && (
              <Link
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-950 transition-all hover:bg-zinc-200 active:scale-95"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                View Repository →
              </Link>
            )}
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
              >
                Live Demo ↗
              </Link>
            )}
          </div>
        </div>
      </Card>
    );
  }

  // Standard Secondary Project Card
  return (
    <Card className="group flex h-full flex-col justify-between overflow-hidden border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
              {status || "Project"}
            </span>
          </div>
          {period && (
            <span className="text-[11px] text-zinc-400">
              {period}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-zinc-300">
          {description}
        </p>

        {highlights.length > 0 && (
          <div className="mt-4 rounded-xl border border-white/5 bg-black/30 p-3">
            <ul className="space-y-1.5 text-xs text-zinc-300">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-5 border-t border-white/5 pt-4">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {stack.map((item) => (
            <Badge key={item} label={item} variant="default" className="text-[10px]" />
          ))}
        </div>
        {href && (
          <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 transition-colors hover:text-white"
          >
            Repository →
          </Link>
        )}
      </div>
    </Card>
  );
};