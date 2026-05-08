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
  brand = "Backend Engineer",
  links,
  className = "",
}) => {
  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/40 backdrop-blur-md ${className}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white transition-colors hover:text-zinc-300"
        >
          {brand}
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-2 text-sm font-medium text-zinc-400">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-1.5 transition-all duration-200 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};