"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

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

interface Project {
  title: string;
  description: string;
  summary?: string;
  features?: string[];
  highlights?: string[];
  metrics?: { label: string; value: string }[];
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  impact?: string;
  status?: string;
  period?: string;
  featured?: boolean;
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-6xl px-6">
      <Section
        id="projects"
        eyebrow="Portfolio & Case Studies"
        title="Featured Systems & Projects"
        description="A curated look into my best backend architectures, real-time engines, and modular APIs."
      >
        {/* Top 2 Featured Projects Spotlight */}
        {featuredProjects.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-8 lg:grid-cols-2"
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.title} variants={itemVariants} className="h-full">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  summary={project.summary}
                  features={project.features}
                  highlights={project.highlights}
                  metrics={project.metrics}
                  impact={project.impact}
                  stack={project.stack}
                  href={project.repoUrl || undefined}
                  liveUrl={project.liveUrl || undefined}
                  status={project.status}
                  period={project.period}
                  featured={true}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Other Notable Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-14">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Other Notable Work</h3>
                <p className="text-xs text-zinc-400">
                  Explorations in algorithms, game engines, and microservices.
                </p>
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-6 md:grid-cols-2"
            >
              {otherProjects.map((project) => (
                <motion.div key={project.title} variants={itemVariants} className="h-full">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    summary={project.summary}
                    features={project.features}
                    highlights={project.highlights}
                    metrics={project.metrics}
                    impact={project.impact}
                    stack={project.stack}
                    href={project.repoUrl || undefined}
                    liveUrl={project.liveUrl || undefined}
                    status={project.status}
                    period={project.period}
                    featured={false}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </Section>
    </div>
  );
}