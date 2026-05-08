import React from "react";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => (
  <footer className={`border-t border-zinc-200/80 bg-white/80 px-6 py-8 ${className}`}>
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
      <span>Available for backend consulting and full-time roles</span>
      <span className="text-[10px] normal-case tracking-normal text-zinc-400">
        © {new Date().getFullYear()} My Portfolio. Built with Next.js.
      </span>
    </div>
  </footer>
);
