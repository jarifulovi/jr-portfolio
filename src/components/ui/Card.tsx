import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div
    className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_35px_80px_-60px_rgba(0,0,0,0.8)] backdrop-blur transition-transform duration-300 hover:-translate-y-1 ${className}`}
  >
    {children}
  </div>
);
