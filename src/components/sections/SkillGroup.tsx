import React from "react";
import { Badge } from "../ui/Badge";

interface SkillGroupProps {
  title: string;
  skills: string[];
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
      {title}
    </h3>
    <div className="mt-4 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill} label={skill} />
      ))}
    </div>
  </div>
);
