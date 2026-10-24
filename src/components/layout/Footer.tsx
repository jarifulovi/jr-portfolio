"use client";

import React from "react";

interface FooterProps {
  name: string;
  role: string;
  affiliation: string;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  name,
  role,
  affiliation,
  className = "",
}) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t border-white/10 bg-zinc-950/90 px-6 py-8 ${className}`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start text-center sm:text-left">
          <span className="text-sm font-bold text-white tracking-tight">
            {name}
          </span>
          <span className="text-xs text-zinc-400">
            {role} · {affiliation}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={handleScrollToTop}
            className="group inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 transition-colors duration-200 hover:text-cyan-300"
          >
            <span>Back to top</span>
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5">
              ↑
            </span>
          </button>

          <span className="text-zinc-700">·</span>

          <span className="font-mono text-xs text-zinc-500">
            © {new Date().getFullYear()} All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
};
