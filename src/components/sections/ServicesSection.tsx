"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Section } from "./Section";

interface RelatedWorkItem {
  name: string;
  detail: string;
  url?: string;
}

interface ServiceItem {
  id: string;
  index: string;
  accent: string;
  title: string;
  pitch: string;
  stack: string[];
  useCases: string[];
  relatedWork: RelatedWorkItem[];
  whatYouGet: string[];
}

interface ServicesSectionProps {
  services: ServiceItem[];
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const colorConfig: Record<string, { index: string; hoverTitle: string; dash: string }> = {
  cyan: {
    index: "text-cyan-400",
    hoverTitle: "group-hover:text-cyan-400",
    dash: "text-cyan-400",
  },
  amber: {
    index: "text-amber-400",
    hoverTitle: "group-hover:text-amber-400",
    dash: "text-amber-400",
  },
  emerald: {
    index: "text-emerald-400",
    hoverTitle: "group-hover:text-emerald-400",
    dash: "text-emerald-400",
  },
  sky: {
    index: "text-sky-400",
    hoverTitle: "group-hover:text-sky-400",
    dash: "text-sky-400",
  },
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full min-w-0">
      <Section
        id="services"
        eyebrow="Services & Capabilities"
        title="What I Bring to Your Team & Projects"
        description="A clear, architectural ledger of my engineering capabilities, real project use cases, and tangible deliverables."
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 border-b border-white/10"
        >
          {services.map((service) => {
            const colors = colorConfig[service.accent] || colorConfig.cyan;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group border-t border-white/10 py-12 sm:py-16 transition-colors"
              >
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 items-start">
                  {/* Column 1: Identity & Stack (Left) */}
                  <div className="lg:col-span-5">
                    <span className={`text-sm sm:text-base font-mono font-bold tracking-wider ${colors.index}`}>
                      {service.index}
                    </span>

                    <h3 className={`mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white transition-colors duration-300 ease-out ${colors.hoverTitle}`}>
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-zinc-400">
                      {service.pitch}
                    </p>

                    {/* Monospace Stack Pills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Typical Use Cases & Related Work (Center) */}
                  <div className="lg:col-span-4 space-y-8">
                    {/* Typical Use Cases */}
                    <div>
                      <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-zinc-500 uppercase">
                        Typical Use Cases
                      </p>
                      <ul className="mt-3.5 space-y-2 text-sm text-zinc-300">
                        {service.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-zinc-600 select-none">—</span>
                            <span className="leading-relaxed">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Related Work */}
                    {service.relatedWork && service.relatedWork.length > 0 && (
                      <div>
                        <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-zinc-500 uppercase">
                          Related Work
                        </p>
                        <div className="mt-3.5 space-y-2.5 text-sm">
                          {service.relatedWork.map((work) => (
                            <div key={work.name} className="leading-relaxed">
                              {work.url ? (
                                <a
                                  href={work.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="group/link text-white transition-colors hover:text-zinc-200"
                                >
                                  <span className="font-semibold underline underline-offset-4 decoration-white/20 group-hover/link:decoration-white">
                                    {work.name}
                                  </span>
                                  <span className="text-zinc-500 mx-2">—</span>
                                  <span className="text-xs sm:text-sm text-zinc-400">{work.detail}</span>
                                </a>
                              ) : (
                                <div>
                                  <span className="font-semibold text-white">{work.name}</span>
                                  <span className="text-zinc-500 mx-2">—</span>
                                  <span className="text-xs sm:text-sm text-zinc-400">{work.detail}</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Column 3: What You Get (Right) */}
                  <div className="lg:col-span-3">
                    <p className="text-[11px] font-mono font-bold tracking-[0.2em] text-zinc-500 uppercase">
                      What You Get
                    </p>
                    <ul className="mt-3.5 space-y-2.5 text-sm text-zinc-300">
                      {service.whatYouGet.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className={`font-bold select-none ${colors.dash}`}>—</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>
    </div>
  );
};
