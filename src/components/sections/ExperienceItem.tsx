import React from "react";

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  summary?: string;
  tasks: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  role,
  company,
  period,
  summary,
  tasks,
}) => (
  <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-black/40 to-black/60 p-6 shadow-[0_18px_55px_-45px_rgba(0,0,0,0.6)]">
    <div className="flex flex-wrap items-baseline justify-between gap-3">
      <div>
        <h3 className="text-lg font-semibold text-white">{role}</h3>
        <p className="text-sm font-medium text-zinc-400">{company}</p>
      </div>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
        {period}
      </span>
    </div>
    {summary && <p className="mt-4 text-sm text-zinc-300">{summary}</p>}
    <div className="mt-6 space-y-6">
      {tasks.map((task, index) => (
        <div key={task.title} className="relative flex gap-4">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/40">
              <img src={task.icon} alt={task.title} className="h-5 w-5" />
            </div>
            {index < tasks.length - 1 && (
              <div className="absolute left-1/2 top-11 h-full w-px -translate-x-1/2 bg-white/10" />
            )}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              {task.title}
            </p>
            <p className="mt-2 text-sm text-zinc-300">{task.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
