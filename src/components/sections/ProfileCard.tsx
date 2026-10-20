"use client";
import React from "react";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

interface ProfileCardProps {
  profile: {
    name: string;
    role: string;
    headline: string;
    summary: string;
    email: string;
    availability?: string;
    resumeUrl?: string;
  };
  links: { label: string; url: string }[];
}

function getSocialIcon(label: string) {
  switch (label.toLowerCase()) {
    case "github":
      return (
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg className="h-3.5 w-3.5 text-[#0a66c2]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.67 1.67 0 0 0-1.67 1.67 1.67 1.67 0 0 0 1.67 1.67 1.67 1.67 0 0 0 1.67-1.67c0-.92-.75-1.67-1.67-1.67z" />
        </svg>
      );
    case "email":
      return (
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case "phone":
    default:
      return (
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
  }
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, links }) => {
  // Split name to highlight last name with gradient
  const nameParts = profile.name.trim().split(" ");
  const firstName = nameParts.slice(0, -1).join(" ");
  const lastName = nameParts[nameParts.length - 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col justify-center"
    >
      {/* Availability Status Badge */}
      <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-400 shadow-sm backdrop-blur-sm">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        <span>{profile.availability || "Open to Full-Time Backend & Software Developer Roles"}</span>
      </div>

      {/* Main Role with Seamless Glyph-Clipped Shimmer */}
      <p className="text-shimmer text-sm sm:text-base font-black uppercase tracking-[0.25em] drop-shadow-[0_0_12px_rgba(6,182,212,0.35)]">
        {profile.role}
      </p>

      {/* Dynamic Name with Gradient on Last Name */}
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {firstName}{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
          {lastName}
        </span>
      </h1>

      <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-zinc-200">
        {profile.headline}
      </p>

      {/* Action Buttons */}
      <div className="mt-7 flex flex-wrap items-center gap-3">
        {profile.resumeUrl && (
          <Button
            as="a"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="MD_Jariful_Rahman_Resume.pdf"
            variant="primary"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </Button>
        )}
        <Button as="a" href={`mailto:${profile.email}`} variant="secondary">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Get in Touch
        </Button>
        <Button
          as="a"
          href="#services"
          variant="ghost"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", "#services");
          }}
        >
          Explore Services ↓
        </Button>
      </div>

      {/* Social / Contact Links */}
      <div className="mt-8 flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/10 text-xs font-semibold text-zinc-300">
        {links
          .filter((link) => link.label.toLowerCase() !== "linkedin")
          .map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 transition-all hover:border-cyan-500/40 hover:bg-white/[0.08] hover:text-white"
            >
              {getSocialIcon(link.label)}
              <span>{link.label}</span>
            </a>
          ))}
      </div>
    </motion.div>
  );
};
