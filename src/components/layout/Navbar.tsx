"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Derive brand initials
  const initials =
    brand
      .split(" ")
      .map((word) => word[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase() || "JR";

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
      setIsOpen(false);
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
            {initials}
          </span>
          <span className="inline-block font-semibold">{brand}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs sm:text-sm font-medium text-zinc-400">
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
                    : "hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-b border-white/10 bg-zinc-950/95 backdrop-blur-2xl px-6 py-4"
          >
            <nav className="flex flex-col space-y-1.5">
              {links.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-semibold"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
                    )}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};