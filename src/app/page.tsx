"use client";
import { ProfileCard } from "../components/sections/ProfileCard";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Section } from "../components/sections/Section";
import { ServicesSection } from "../components/sections/ServicesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import { SnapshotCard } from "../components/sections/SnapshotCard";
import { ExperienceItem } from "../components/sections/ExperienceItem";
import SkillsSection from "../components/sections/SkillsSection";
import profile from "../data/profile.json";
import projects from "../data/projects.json";
import links from "../data/links.json";
import skills from "../data/skills.json";
import experience from "../data/experience.json";
import services from "../data/services.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.12),rgba(255,255,255,0))] text-zinc-100">
      <Navbar
        brand={profile.name}
        links={[
          { label: "Services", href: "#services" },
          { label: "Projects", href: "#projects" },
          { label: "Skills", href: "#skills" },
          { label: "Experience", href: "#experience" },
          { label: "Education", href: "#education" },
        ]}
      />

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <ProfileCard profile={profile} links={links} />
          <SnapshotCard profile={profile} />
        </div>
      </section>

      {/* Services / What I Do */}
      <ServicesSection services={services} />

      {/* Projects Section with Top 2 Featured Spotlight */}
      <ProjectsSection projects={projects} />

      <div className="mx-auto max-w-6xl px-6">
        {/* Core Stack & Tooling */}
        <SkillsSection skillGroups={skills.skillGroups} tools={skills.tools} />

        {/* Experience Section */}
        <Section
          id="experience"
          eyebrow="Work Experience"
          title="Internship & Industry Experience"
          description="Hands-on roles focused on backend contributions, automated testing, and performance validation."
        >
          <div className="grid gap-6">
            {experience.map((item) => (
              <ExperienceItem
                key={`${item.role}-${item.company}`}
                role={item.role}
                company={item.company}
                period={item.period}
                summary={item.summary}
                tasks={item.tasks}
              />
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section
          id="education"
          eyebrow="Academic Background"
          title="Education & Formal Training"
          description="Strong foundation in software engineering, system design, and algorithms at University of Dhaka."
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-black/30 p-8 text-zinc-200">
            {profile.education.map((item) => (
              <div key={item.institution} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                  <p className="mt-1 text-sm font-medium text-cyan-300">{item.degree}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    CGPA {item.cgpa}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
                    {item.graduation}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Footer />
    </main>
  );
}