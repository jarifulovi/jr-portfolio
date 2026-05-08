import React from "react";

interface BadgeProps {
  label: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, className = "" }) => (
  <span
    className={`inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-zinc-200 ${className}`}
  >
    {label}
  </span>
);
