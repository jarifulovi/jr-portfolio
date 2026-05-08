import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border border-zinc-200/80 bg-white/90 p-6 shadow-[0_20px_50px_-35px_rgba(0,0,0,0.45)] backdrop-blur ${className}`}
  >
    {children}
  </div>
);
