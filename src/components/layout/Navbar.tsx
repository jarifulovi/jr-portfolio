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
}) => (
  <nav
    className={`w-full border-b border-zinc-200/80 bg-white/80 px-6 py-4 backdrop-blur ${className}`}
  >
    <div className="mx-auto flex max-w-6xl items-center justify-between">
      <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900">
        {brand}
      </Link>
      <ul className="flex gap-6 text-sm font-semibold text-zinc-600">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="transition-colors hover:text-zinc-900">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);
