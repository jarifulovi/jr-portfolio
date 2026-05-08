"use client";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { SkillGroup } from "./SkillGroup";

interface ToolItem {
  name: string;
  icon: string;
}

interface SkillsSectionProps {
  skillGroups: { title: string; skills: string[] }[];
  tools: ToolItem[];
}

export default function SkillsSection({ skillGroups, tools }: SkillsSectionProps) {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const leftItem = {
    hidden: { opacity: 0, x: -24, y: 8 },
    show: { opacity: 1, x: 0, y: 0 },
  };

  const rightItem = {
    hidden: { opacity: 0, x: 24, y: 8 },
    show: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Core stack and tooling"
      description="Languages, frameworks, and tooling I use for backend development and delivery."
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={leftItem}>
              <SkillGroup title={group.title} skills={group.skills} />
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={rightItem}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-black/30 to-black/40 p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
            Tools
          </p>
          <p className="mt-3 text-sm text-zinc-300">
            Daily drivers across development, debugging, and delivery pipelines.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition-all duration-300 hover:border-white/25 hover:bg-white/10"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/40">
                  <img src={tool.icon} alt={tool.name} className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-zinc-200">{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
