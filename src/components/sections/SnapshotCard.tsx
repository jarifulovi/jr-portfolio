"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Badge } from "../ui/Badge";

interface SnapshotCardProps {
  profile: any;
}

export const SnapshotCard: React.FC<SnapshotCardProps> = ({ profile }) => {
  const [borderClass, setBorderClass] = useState("border-white/10");
  const [shadowClass, setShadowClass] = useState("");
  const [scaleClass, setScaleClass] = useState("");


  function handleMouseEnter() {
    setBorderClass("border-white/40");
    setShadowClass("shadow-2xl");
    setScaleClass("scale-105");
  }

  function handleMouseLeave() {
    setBorderClass("border-white/10");
    setShadowClass("");
    setScaleClass("");
  }

  const graduationValueRaw = profile?.education?.[0]?.graduation ?? "Sep 2026";
  let graduationValue = typeof graduationValueRaw === "string"
    ? graduationValueRaw.replace("Expected ", "")
    : "Sep 2026";

  // Add (expected) if graduation is in the future
  const gradYearMatch = graduationValue.match(/(\d{4})/);
  const gradYear = gradYearMatch ? parseInt(gradYearMatch[1], 10) : null;
  const gradMonthMatch = graduationValue.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i);
  const gradMonth = gradMonthMatch ? gradMonthMatch[1] : null;
  const now = new Date();
  let isFuture = false;
  if (gradYear) {
    const monthIndex = gradMonth ? ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].findIndex(m => m.toLowerCase() === gradMonth.toLowerCase()) : 0;
    const gradDate = new Date(gradYear, monthIndex, 1);
    isFuture = gradDate > now;
  }
  if (isFuture) graduationValue += " (expected)";

  const projectsValue = profile?.heroStats?.find(
    (stat: { label: string }) => stat.label === "Projects"
  )?.value ?? "4+";

  const focusAreas = ["Backend", "APIs", "Databases"];
  const snapshotItems = [
    {
      label: "Location",
      value: profile?.location ?? "Dhaka, Bangladesh",
      icon: <LocationIcon />,
    },
    {
      label: "Email",
      value: profile?.email ?? "bsse1419@iit.du.ac.bd",
      icon: <EmailIcon />,
    },
    {
      label: "Graduation",
      value: graduationValue,
      icon: <GraduationIcon />,
    },
    {
      label: "Projects",
      value: projectsValue,
      icon: <ProjectsIcon />,
    },
    {
      label: "Focus",
      value: null, // will render badges inline below
      icon: <FocusIcon />,
    },
  ];


  return (
    <motion.div
      className={`rounded-3xl border ${borderClass} bg-white/5 p-8 shadow-[0_30px_70px_-50px_rgba(0,0,0,0.6)] backdrop-blur will-change-transform transition-all duration-300 ${shadowClass} ${scaleClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-200">
        Snapshot
      </h2>
      <div className="mt-6 grid gap-4 text-sm text-zinc-200">
        {snapshotItems.map((item) => (
          <div key={item.label} className="flex items-start gap-3">
            <span className="mt-0.5 text-zinc-400">{item.icon}</span>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                {item.label}
              </p>
              {item.label === "Focus" ? (
                <div className="flex flex-wrap gap-2 py-2">
                  {focusAreas.map((area) => (
                    <Badge key={area} label={area} />
                  ))}
                </div>
              ) : (
                <p className="text-base font-semibold text-white">
                  {item.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

const iconClassName = "h-4 w-4";

const LocationIcon = () => (
  <svg
    className={iconClassName}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

const EmailIcon = () => (
  <svg
    className={iconClassName}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const GraduationIcon = () => (
  <svg
    className={iconClassName}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m4 10 8-4 8 4-8 4-8-4z" />
    <path d="m8 12 4 2 4-2" />
    <path d="M6 12v4" />
  </svg>
);

const ProjectsIcon = () => (
  <svg
    className={iconClassName}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="4" y="5" width="16" height="14" rx="2" />
    <path d="M4 9h16" />
    <path d="M8 3v4" />
    <path d="M16 3v4" />
  </svg>
);

const FocusIcon = () => (
  <svg
    className={iconClassName}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 3" />
  </svg>
);
