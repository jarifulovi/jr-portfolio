"use client";
import { ProfileCard } from "../components/sections/ProfileCard";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Section } from "../components/sections/Section";
import ProjectsSection from "../components/sections/ProjectsSection";
import { SnapshotCard } from "../components/sections/SnapshotCard";
import { ExperienceItem } from "../components/sections/ExperienceItem";
import SkillsSection from "../components/sections/SkillsSection";
import profile from "../data/profile.json";
import projects from "../data/projects.json";
import links from "../data/links.json";
import skills from "../data/skills.json";
import experience from "../data/experience.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#1f2937,_#09090b_70%)] text-zinc-100">
      <Navbar
        brand={profile.name}
        links={[
          { label: "Projects", href: "#projects" },
          { label: "Skills", href: "#skills" },
          { label: "Experience", href: "#experience" },
          { label: "Education", href: "#education" }
        ]}
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <ProfileCard profile={profile} links={links} />
          <SnapshotCard profile={profile} />
        </div>
      </section>

      <ProjectsSection projects={projects} />

      <div className="mx-auto max-w-6xl px-6">
        <SkillsSection skillGroups={skills.skillGroups} tools={skills.tools} />

        <Section
          id="experience"
          eyebrow="Experience"
          title="Internship experience"
          description="Hands-on roles focused on backend contributions, testing, and performance validation."
        >
          <div className="grid gap-6">
            {experience.map((item) => (
              <ExperienceItem
                key={`${item.role}-${item.company}`}
                role={item.role}
                company={item.company}
                period={item.period}
                highlights={item.highlights}
              />
            ))}
          </div>
        </Section>

        <Section
          id="education"
          eyebrow="Education"
          title="Academic background"
          description="Foundation in software engineering and systems thinking."
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-200">
            {profile.education.map((item) => (
              <div key={item.institution}>
                <h3 className="text-lg font-semibold text-white">{item.institution}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.degree}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-400">
                  CGPA {item.cgpa} · {item.graduation}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Footer />
    </main>
  );
}