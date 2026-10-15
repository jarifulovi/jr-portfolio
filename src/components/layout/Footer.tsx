import React from "react";

interface FooterLink {
  label: string;
  url: string;
}

interface FooterProps {
  className?: string;
  links?: FooterLink[];
}

export const Footer: React.FC<FooterProps> = ({ className = "", links = [] }) => (
  <footer className={`border-t border-white/10 bg-zinc-950/90 px-6 py-12 ${className}`}>
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
      <div className="flex flex-col items-center gap-1.5 md:items-start">
        <span className="text-base font-bold text-white tracking-tight">MD Jariful Rahman</span>
        <span className="text-xs text-zinc-400">
          Software Developer (Backend Focus) · University of Dhaka (IIT)
        </span>
      </div>

      {links.length > 0 && (
        <div className="flex items-center gap-6 text-xs font-mono">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noreferrer" : undefined}
              className="text-zinc-400 transition-colors duration-200 hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <div className="flex flex-col items-center gap-1.5 text-center md:items-end">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Open to backend engineering roles & internships
        </span>
        <span className="text-[11px] text-zinc-500 font-mono">
          © {new Date().getFullYear()} MD Jariful Rahman · All rights reserved
        </span>
      </div>
    </div>
  </footer>
);
