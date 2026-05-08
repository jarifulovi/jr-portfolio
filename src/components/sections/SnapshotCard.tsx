"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

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


  return (
    <motion.div
      className={`rounded-3xl border ${borderClass} bg-white/5 p-8 shadow-[0_30px_70px_-50px_rgba(0,0,0,0.6)] backdrop-blur will-change-transform transition-all duration-300 ${shadowClass} ${scaleClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
        Snapshot
      </h2>
      <div className="mt-6 space-y-4 text-sm text-zinc-300">
        <div>
          <p className="text-xs uppercase text-zinc-500">Location</p>
          <p className="text-base text-zinc-100">{profile.location}</p>
        </div>
        <div>
          <p className="text-xs uppercase text-zinc-500">Email</p>
          <p className="text-base text-zinc-100">{profile.email}</p>
        </div>
        <div>
          <p className="text-xs uppercase text-zinc-500">Phone</p>
          <p className="text-base text-zinc-100">{profile.phone}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-4 rounded-2xl bg-black/30 p-6">
        {profile.heroStats.map((stat: any) => (
          <div key={stat.label} className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              {stat.label}
            </span>
            <span className="text-lg font-semibold text-white">{stat.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
