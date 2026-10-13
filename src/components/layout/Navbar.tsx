import React from "react";
import Link from "next/link";

interface NavbarLink {
  label: string;
  href: string;
}

interface NavbarProps {
  brand?: string;
  links: NavbarLink[];
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  brand = "MD Jariful Rahman",
  links,
  className = "",
}) => {
  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-md ${className}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-base font-bold tracking-tight text-white transition-colors hover:text-zinc-300"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-xs font-mono font-bold text-cyan-400 group-hover:border-cyan-400/50">
            JR
          </span>
          <span className="hidden sm:inline-block font-semibold">{brand}</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 overflow-x-auto py-1 text-xs sm:text-sm font-medium text-zinc-400">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 transition-all duration-200 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};