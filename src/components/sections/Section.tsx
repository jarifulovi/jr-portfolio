import React from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}) => (
  <section id={id} className={`py-14 ${className}`}>
    {(eyebrow || title || description) && (
      <div className="mb-8">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            {eyebrow}
          </p>
        )}
        {title && <h2 className="mt-3 text-3xl font-bold text-white">{title}</h2>}
        {description && <p className="mt-4 max-w-2xl text-base text-zinc-300">{description}</p>}
      </div>
    )}
    {children}
  </section>
);
