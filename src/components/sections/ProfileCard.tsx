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

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, links }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="flex flex-col justify-center"
  >
    {/* Availability Status Badge */}
    <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-400 shadow-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
      </span>
      <span>{profile.availability || "Open to Backend Roles & Internships"}</span>
    </div>

    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
      {profile.role}
    </p>

    <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
      {profile.name}
    </h1>

    <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-zinc-200">
      {profile.headline}
    </p>

    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
      {profile.summary}
    </p>

    {/* Action Buttons */}
    <div className="mt-7 flex flex-wrap items-center gap-3">
      {profile.resumeUrl && (
        <Button
          as="a"
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          download
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
      <Button as="a" href="#services" variant="ghost">
        Explore Services ↓
      </Button>
    </div>

    {/* Social / Contact Links */}
    <div className="mt-8 flex flex-wrap items-center gap-3 pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target={link.url.startsWith("http") ? "_blank" : undefined}
          rel={link.url.startsWith("http") ? "noreferrer" : undefined}
          className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  </motion.div>
);
