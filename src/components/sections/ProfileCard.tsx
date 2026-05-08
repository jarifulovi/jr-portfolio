"use client";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

interface ProfileCardProps {
  profile: any;
  links: { label: string; url: string }[];
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, links }) => (
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-400">
      {profile.role}
    </p>
    <h1 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
      {profile.name}
    </h1>
    <p className="mt-5 max-w-2xl text-lg text-zinc-300">
      {profile.headline}
    </p>
    <p className="mt-4 max-w-2xl text-sm text-zinc-400">
      {profile.summary}
    </p>
    <div className="mt-8 flex flex-wrap gap-4">
      <Button
        as="a"
        href={profile.resumeUrl}
        target="_blank"
        rel="noreferrer"
        download
        variant="primary"
      >
        Download Resume
      </Button>
      <Button as="a" href={`mailto:${profile.email}`} variant="secondary">
        Contact Me
      </Button>
    </div>
    <div className="mt-10 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
      {links.map((link) => (
        <a key={link.label} href={link.url} className="hover:text-white">
          {link.label}
        </a>
      ))}
    </div>
  </motion.div>
);
