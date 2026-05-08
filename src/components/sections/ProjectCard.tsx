import React from "react";
import Link from "next/link";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

interface ProjectCardProps {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  impact?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  stack,
  href,
  impact,
}) => (
  <Card className="flex h-full flex-col gap-5">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
        <p className="mt-2 text-sm text-zinc-600">{description}</p>
      </div>
      {href && (
        <Link
          href={href}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 hover:text-zinc-900"
        >
          View
        </Link>
      )}
    </div>
    {impact && (
      <div className="rounded-xl bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-700">
        {impact}
      </div>
    )}
    <div className="flex flex-wrap gap-2">
      {stack.map((item) => (
        <Badge key={item} label={item} />
      ))}
    </div>
  </Card>
);
