import React from "react";
import { Badge } from "../ui/Badge";

interface SkillGroupProps {
  title: string;
  skills: string[];
}

export const SkillGroup: React.FC<SkillGroupProps> = ({ title, skills }) => (
  <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-5">
    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
      {title}
    </h3>
    <div className="mt-4 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill} label={skill} />
      ))}
    </div>
  </div>
);
