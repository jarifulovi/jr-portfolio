import React from "react";
import { Badge } from "../ui/Badge";

interface SkillGroupProps {
  title: string;
  skills: string[];
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills }) => (
  <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-black/40 to-black/60 p-5 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.7)]">
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-300">
        {title}
      </h3>
      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
        {skills.length} items
      </span>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill} label={skill} />
      ))}
    </div>
  </div>
);
