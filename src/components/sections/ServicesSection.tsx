"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Section } from "./Section";
import { Badge } from "../ui/Badge";

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  badge: string;
}

interface ServicesSectionProps {
  services: ServiceItem[];
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function getServiceIcon(id: string) {
  switch (id) {
    case "backend-api":
      return (
        <svg
          className="h-6 w-6 text-cyan-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case "database-performance":
      return (
        <svg
          className="h-6 w-6 text-emerald-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "realtime-integrations":
      return (
        <svg
          className="h-6 w-6 text-indigo-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m13 2-2 2.5h3L11 9" />
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5" />
        </svg>
      );
    case "testing-devops":
    default:
      return (
        <svg
          className="h-6 w-6 text-amber-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <Section
        id="services"
        eyebrow="Services & Capabilities"
        title="What I Bring to Your Team"
        description="Focused on scalable server-side systems, efficient data architectures, and reliable software delivery."
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-transparent p-7 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-cyan-500/10 hover:shadow-2xl"
            >
              <div>
                {/* Header: Icon + Badge */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 shadow-inner group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <Badge
                    label={service.badge}
                    variant={
                      service.id === "backend-api"
                        ? "accent"
                        : service.id === "database-performance"
                        ? "success"
                        : "default"
                    }
                  />
                </div>

                {/* Title & Tagline */}
                <h3 className="mt-5 text-xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cyan-400/90">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="mt-5 space-y-2 rounded-2xl border border-white/5 bg-black/30 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    Key Deliverables
                  </p>
                  <ul className="space-y-2 pt-1 text-xs text-zinc-300">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                          <svg
                            className="h-2.5 w-2.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2 pt-2 border-t border-white/5">
                {service.technologies.map((tech) => (
                  <Badge key={tech} label={tech} variant="outline" className="text-[11px]" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </div>
  );
};
