"use client";
import React, { useState, useEffect } from "react";

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
  const [activeSection, setActiveSection] = useState<string>("home");

  // Derive brand initials (filter out title prefixes like "MD", "MD." to get core initials "JR")
  const significantWords = brand
    .split(" ")
    .filter((word) => !/^(md\.?|mohammad|dr\.?|mr\.?)$/i.test(word));

  const initials =
    (significantWords.length >= 2
      ? `${significantWords[0][0]}${significantWords[significantWords.length - 1][0]}`
      : significantWords[0]?.slice(0, 2) || "JR"
    ).toUpperCase();

  // Scrollspy: update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = links
        .map((l) => l.href.replace("#", ""))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        if (id === "home") {
          if (window.scrollY < 300) {
            setActiveSection("home");
            break;
          }
        }
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3.5">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-2.5 text-base font-bold tracking-tight text-white transition-colors hover:text-zinc-300 cursor-pointer"
        >
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-cyan-500/40 bg-gradient-to-br from-cyan-500/20 via-zinc-950 to-zinc-900 text-xs font-mono font-bold text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400 group-hover:shadow-[0_0_18px_rgba(6,182,212,0.45)]">
            <span className="tracking-wider">{initials}</span>
          </span>
          <span className="inline-block font-semibold">{brand}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs sm:text-sm font-medium">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`rounded-full px-3 py-1.5 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white/10 text-cyan-300 font-semibold border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                    : "text-zinc-300 border border-transparent hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Direct Action Button */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="md:hidden inline-flex items-center gap-1 rounded-full border border-cyan-500/35 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 transition-colors hover:bg-cyan-500/20 hover:text-white"
        >
          <span>Contact</span>
          <span className="text-[10px]">→</span>
        </a>
      </div>
    </header>
  );
};