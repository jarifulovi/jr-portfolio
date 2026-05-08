import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectsSection({ projects }: { projects: any[] }) {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <Section
        id="projects"
        eyebrow="Projects"
        title="Backend systems and APIs"
        description="A selection of backend-heavy projects focused on real-time systems, data, and reliable services."
      >
        {/* GRID WRAPPER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={item}>
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
                status={project.status}
                period={project.period}
              />
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </div>
  );
}