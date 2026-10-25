"use client";
import React, { useState, useRef, useEffect } from "react";
import { ProfileCard } from "./ProfileCard";
import { SnapshotCard } from "./SnapshotCard";

interface HeroProfile {
  name: string;
  role: string;
  headline: string;
  summary: string;
  email: string;
  availability: string;
  resumeUrl: string;
  location: string;
  specialization: string;
  focusAreas: string[];
  education: {
    graduation: string;
    institution: string;
    degree: string;
  }[];
}

interface HeroSectionProps {
  profile: HeroProfile;
  links: { label: string; url: string }[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, links }) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const lastClientPos = useRef<{ clientX: number; clientY: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    lastClientPos.current = { clientX: e.clientX, clientY: e.clientY };
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    lastClientPos.current = null;
    setMousePos(null);
  };

  // Scroll listener: dynamically updates coordinates when user scrolls while mouse is over hero
  useEffect(() => {
    const handleScroll = () => {
      if (!lastClientPos.current || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      if (
        lastClientPos.current.clientY >= rect.top &&
        lastClientPos.current.clientY <= rect.bottom &&
        lastClientPos.current.clientX >= rect.left &&
        lastClientPos.current.clientX <= rect.right
      ) {
        setMousePos({
          x: lastClientPos.current.clientX - rect.left,
          y: lastClientPos.current.clientY - rect.top,
        });
      } else {
        setMousePos(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
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

      {/* 2. Top Edge Luminous Horizon Line */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent" />

      {/* 3. Persistent Volumetric Atmospheric Backlights (Stationary 3D Depth) */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-full max-w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500/20 via-sky-500/8 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.10] blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 top-1/3 h-[380px] w-[380px] rounded-full bg-emerald-500/[0.07] blur-[130px]" />

      {/* 4. Interactive Revealed Dimmed Cyan Dot Matrix (Subtle, non-distracting) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out"
        style={{
          opacity: mousePos ? 1 : 0,
          backgroundImage: `radial-gradient(rgba(6, 182, 212, 0.45) 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px",
          maskImage: mousePos
            ? `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 0, 0, 0.8) 15%, transparent 75%)`
            : "none",
          WebkitMaskImage: mousePos
            ? `radial-gradient(circle 200px at ${mousePos.x}px ${mousePos.y}px, rgba(0, 0, 0, 0.8) 15%, transparent 75%)`
            : "none",
        }}
      />

      {/* 5. Soft Ambient Halo around Cursor */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out"
        style={{
          opacity: mousePos ? 1 : 0,
          background: mousePos
            ? `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.07), transparent 75%)`
            : "none",
        }}
      />

      {/* 4. Centered Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-20 md:pt-24 md:pb-28 w-full min-w-0">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-start w-full min-w-0">
          <ProfileCard profile={profile} links={links} />
          <SnapshotCard profile={profile} />
        </div>
      </div>
    </section>
  );
};
