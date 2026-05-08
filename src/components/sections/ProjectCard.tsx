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
  impact?: string;
  status?: string;
  period?: string;
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
  impact,
  status,
  period,
}) => {
  return (
    <Card className="flex h-full flex-col gap-5 overflow-hidden border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-white/25">
      <div className="-mx-6 -mt-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-gradient-to-r from-sky-500/10 via-cyan-500/5 to-emerald-500/10 px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
            {status || "Project"}
          </span>
          {period && (
            <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              {period}
            </span>
          )}
        </div>
        {href && (
          <Link
            href={href}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white"
          >
            View Repo →
          </Link>
        )}
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-zinc-300">{description}</p>
        {summary && (
          <p className="mt-3 text-sm text-zinc-400">
            {summary}
          </p>
        )}
      </div>

      {features.length > 0 && (
        <div className="grid gap-2 rounded-2xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Feature Focus
          </p>
          <div className="grid gap-2 text-sm text-zinc-200">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {highlights.length > 0 && (
        <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Highlights
          </p>
          <ul className="mt-2 space-y-1 text-sm text-zinc-300">
            {highlights.map((item) => (
              <li key={item} className="leading-relaxed">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Impact */}
      {impact && (
        <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Impact
          </p>
          <p className="mt-1 text-sm font-medium text-zinc-200">
            {impact}
          </p>
        </div>
      )}

      {metrics.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                {metric.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Stack */}
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {stack.map((item) => (
          <Badge key={item} label={item} />
        ))}
      </div>
    </Card>
  );
};