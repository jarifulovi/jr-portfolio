import React from "react";

interface BadgeProps {
  label: string;
  variant?: "default" | "accent" | "success" | "outline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = "default",
  className = "",
}) => {
  const variants = {
    default: "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20",
    accent: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    outline: "border-zinc-700 bg-transparent text-zinc-400",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {label}
    </span>
  );
};
