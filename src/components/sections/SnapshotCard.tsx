"use client";
import { motion } from "framer-motion";
import React from "react";
import { Badge } from "../ui/Badge";

interface SnapshotCardProps {
  profile: {
    location: string;
    email: string;
    specialization: string;
    focusAreas: string[];
    education: {
      graduation: string;
      institution: string;
      degree: string;
    }[];
  };
}

export const SnapshotCard: React.FC<SnapshotCardProps> = ({ profile }) => {
  const primaryEducation = profile.education[0];

  const snapshotItems = [
    {
      label: "Location",
      value: profile.location,
      icon: <LocationIcon />,
    },
    {
      label: "Specialization",
      value: profile.specialization,
      icon: <FocusIcon />,
    },
    {
      label: "Education",
      value: primaryEducation.institution,
      subValue: primaryEducation.degree,
      icon: <GraduationIcon />,
    },
    {
      label: "Graduation",
      value: primaryEducation.graduation,
      icon: <CalendarIcon />,
    },
    {
      label: "Direct Email",
      value: profile.email,
      isEmail: true,
      icon: <EmailIcon />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent p-5 sm:p-7 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:shadow-cyan-500/10 hover:shadow-2xl w-full min-w-0"
    >
      <div>
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-300">
            Quick Snapshot
          </h2>
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
        </div>

        <div className="mt-5 space-y-4">
          {snapshotItems.map((item) => (
            <div key={item.label} className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 group-hover:border-white/20 group-hover:text-cyan-300 transition-colors">
                {item.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  {item.label}
                </p>
                {item.isEmail ? (
                  <a
                    href={`mailto:${item.value}`}
                    className="truncate block text-sm font-semibold text-white transition-colors hover:text-cyan-300"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold text-white truncate">
                    {item.value}
                  </p>
                )}
                {item.subValue && (
                  <p className="text-xs text-zinc-400 mt-0.5">{item.subValue}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Focus Areas Badges */}
      <div className="mt-6 border-t border-white/10 pt-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">
          Core Domains
        </p>
        <div className="flex flex-wrap gap-1.5">
          {profile.focusAreas.map((area) => (
            <Badge key={area} label={area} variant="default" className="text-[11px]" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const LocationIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

const EmailIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const GraduationIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="m4 10 8-4 8 4-8 4-8-4z" />
    <path d="m8 12 4 2 4-2" />
    <path d="M6 12v4" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const FocusIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 3" />
  </svg>
);
