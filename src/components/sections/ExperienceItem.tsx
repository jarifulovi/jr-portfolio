"use client";

import React from "react";
import { motion } from "framer-motion";

interface ExperienceTask {
  index?: string;
  title: string;
  category?: string;
  description: string;
  icon?: string;
  tag?: string;
  stack?: string[];
}

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  duration?: string;
  location?: string;
  summary?: string;
  tasks: ExperienceTask[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  role,
  company,
  period,
  duration,
  location,
  summary,
  tasks,
}) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5 }}
    className="group/experience relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] via-zinc-950/60 to-black/80 p-6 sm:p-10 backdrop-blur-xl shadow-[0_25px_60px_-25px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-white/20"
  >
    {/* Subtle Ambient Backlight Glow on Hover */}
    <div className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-transparent opacity-0 blur-xl transition-opacity duration-300 group-hover/experience:opacity-100" />

    <div className="grid gap-10 lg:grid-cols-[340px_1fr] xl:grid-cols-[380px_1fr] items-start">
      {/* Left Column: Organization & Positioning */}
      <div className="flex flex-col justify-between">
        <div>
          {/* Role Pill */}
          <span className="inline-block rounded border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
            {role}
          </span>

          {/* Company Title */}
          <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {company}
          </h3>

          {/* Period & Location Metadata */}
          <div className="mt-4 space-y-1.5 font-mono text-xs">
            <div className="flex items-center gap-2 text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>
                {period} {duration && <span className="text-zinc-500">· {duration}</span>}
              </span>
            </div>
            {location && (
              <div className="flex items-center gap-2 text-zinc-500">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                <span>{location}</span>
              </div>
            )}
          </div>

          {/* Executive Summary */}
          {summary && (
            <p className="mt-5 text-xs sm:text-sm leading-relaxed text-zinc-300">
              {summary}
            </p>
          )}
        </div>

        {/* Verification Checkmark */}
        <div className="mt-8 pt-5 border-t border-white/10">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500 block mb-2">
            INDUSTRY VERIFICATION
          </span>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Completed 6-Month Engineering Internship</span>
          </div>
        </div>
      </div>

      {/* Right Column: 3 Core Engineering Deliverables */}
      <div className="space-y-4 lg:border-l lg:border-white/10 lg:pl-8">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500 block mb-3">
          DELIVERABLES & TECHNICAL SCOPE
        </span>

        {tasks.map((task, idx) => (
          <div
            key={task.title}
            className="group/task relative rounded-xl border border-white/5 bg-white/[0.015] p-5 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.04]"
          >
            {/* Header: Index, Category & Tag */}
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs mb-2.5">
              <div className="flex items-center gap-2">
                <span className="font-bold text-cyan-400">
                  {task.index || `0${idx + 1}`}
                </span>
                <span className="text-zinc-600">/</span>
                <span className="text-zinc-300 font-semibold uppercase tracking-wider text-[11px]">
                  {task.category || "Deliverable"}
                </span>
              </div>
              {task.tag && (
                <span className="rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] text-zinc-400 font-mono">
                  {task.tag}
                </span>
              )}
            </div>

            {/* Task Title */}
            <h4 className="text-base sm:text-lg font-bold text-white transition-colors duration-200 group-hover/task:text-cyan-300 flex items-center gap-2.5">
              {task.icon && (
                <img
                  src={task.icon}
                  alt=""
                  className="h-4 w-4 shrink-0 object-contain"
                />
              )}
              <span>{task.title}</span>
            </h4>

            {/* Description */}
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-300">
              {task.description}
            </p>

            {/* Technical Scope Badges */}
            {task.stack && task.stack.length > 0 && (
              <div className="mt-3.5 flex flex-wrap gap-1.5 pt-1">
                {task.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </motion.article>
);
