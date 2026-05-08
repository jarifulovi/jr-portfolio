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
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_55px_-45px_rgba(0,0,0,0.6)]">
    <div className="flex flex-wrap items-baseline justify-between gap-3">
      <div>
        <h3 className="text-lg font-semibold text-white">{role}</h3>
        <p className="text-sm font-medium text-zinc-400">{company}</p>
      </div>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
        {period}
      </span>
    </div>
    <ul className="mt-4 space-y-2 text-sm text-zinc-300">
      {highlights.map((item) => (
        <li key={item} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  </div>
);
