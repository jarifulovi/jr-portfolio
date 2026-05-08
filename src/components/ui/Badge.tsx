import React from "react";

interface BadgeProps {
  label: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full bg-zinc-900/10 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-700 ${className}`}
  >
    {label}
  </span>
);
