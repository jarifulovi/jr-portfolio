"use client";
import React from "react";

interface NavbarLink {
  label: string;
  href: string;
}

interface NavbarProps {
  brand: string;
  links: NavbarLink[];
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  brand,
  links,
  className = "",
}) => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      if (targetId === "home" || targetId === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-md ${className}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-2 text-base font-bold tracking-tight text-white transition-colors hover:text-zinc-300 cursor-pointer"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-xs font-mono font-bold text-cyan-400 group-hover:border-cyan-400/50">
            JR
          </span>
          <span className="hidden sm:inline-block font-semibold">{brand}</span>
        </a>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 overflow-x-auto py-1 text-xs sm:text-sm font-medium text-zinc-400">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-full px-3 py-1.5 transition-all duration-200 hover:bg-white/10 hover:text-white cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};