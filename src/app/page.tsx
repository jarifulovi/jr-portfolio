"use client";
import { ProfileCard } from "../components/sections/ProfileCard";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Section } from "../components/sections/Section";
import { AboutSection } from "../components/sections/AboutSection";
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
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Projects", href: "#projects" },
          { label: "Skills", href: "#skills" },
          { label: "Experience", href: "#experience" },
        ]}
      />

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <ProfileCard profile={profile} links={links} />
          <SnapshotCard profile={profile} />
        </div>
      </section>

      {/* About Me Section (Replacing redundant education section) */}
      <div className="mx-auto max-w-6xl px-6">
        <AboutSection about={profile.about} />
      </div>

      {/* Services / Capabilities Section */}
      <ServicesSection services={services} />

      {/* Featured Projects with Top 2 Spotlight (ApexFlow & InboxOrchestrator AI) */}
      <ProjectsSection projects={projects} />

      <div className="mx-auto max-w-6xl px-6">
        {/* Core Stack & Tooling */}
        <SkillsSection skillGroups={skills.skillGroups} tools={skills.tools} />

        {/* Experience Section */}
        <Section
          id="experience"
          eyebrow="Work Experience"
          title="Industry Experience & Internships"
          description="Hands-on contributions focused on automated testing, load testing, and web application feature delivery."
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
      </div>

      <Footer />
    </main>
  );
}