"use client";
import React, { useState } from "react";
import { ProfileCard } from "./ProfileCard";
import { SnapshotCard } from "./SnapshotCard";

interface HeroSectionProps {
  profile: any;
  links: { label: string; url: string }[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, links }) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group/hero relative w-full scroll-mt-20 overflow-hidden"
    >
      {/* 1. Subtle Engineering Grid Matrix with Radial Mask (Full Width) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, #000 50%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 45%, #000 50%, transparent 95%)",
        }}
      />

      {/* 2. Ambient Top Spotlight Beam (Full Width Centered) */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500/15 via-sky-500/5 to-transparent blur-3xl" />

      {/* 3. Interactive Mouse-Following Spotlight (Full Bleed Viewport) */}
      {mousePos && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(14, 165, 233, 0.14), rgba(16, 185, 129, 0.04) 40%, transparent 75%)`,
          }}
        />
      )}

      {/* 4. Centered Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <ProfileCard profile={profile} links={links} />
          <SnapshotCard profile={profile} />
        </div>
      </div>
    </section>
  );
};
