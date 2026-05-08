import React from "react";

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  role,
  company,
  period,
  highlights,
}) => (
  <div className="rounded-2xl border border-zinc-200/80 bg-white/80 p-6 shadow-[0_18px_45px_-35px_rgba(0,0,0,0.35)]">
    <div className="flex flex-wrap items-baseline justify-between gap-3">
      <div>
        <h3 className="text-lg font-semibold text-zinc-900">{role}</h3>
        <p className="text-sm font-medium text-zinc-500">{company}</p>
      </div>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
        {period}
      </span>
    </div>
    <ul className="mt-4 space-y-2 text-sm text-zinc-600">
      {highlights.map((item) => (
        <li key={item} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  </div>
);
