import React from "react";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => (
  <footer className={`border-t border-white/10 bg-zinc-950/90 px-6 py-12 ${className}`}>
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
      <div className="flex flex-col items-center gap-1 md:items-start">
        <span className="text-sm font-bold text-white">MD Jariful Rahman</span>
        <span className="text-xs text-zinc-400">
          Software Developer (Backend Focus) · University of Dhaka (IIT)
        </span>
      </div>

      <div className="flex flex-col items-center gap-2 text-center md:items-end">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
          Open to backend engineering roles & internships
        </span>
        <span className="text-[11px] text-zinc-400">
          © {new Date().getFullYear()} MD Jariful Rahman. Built with Next.js & Tailwind CSS.
        </span>
      </div>
    </div>
  </footer>
);
