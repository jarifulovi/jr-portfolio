import { HeroSection } from "../components/sections/HeroSection";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Section } from "../components/sections/Section";
import { AboutSection } from "../components/sections/AboutSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import { ExperienceItem } from "../components/sections/ExperienceItem";
import SkillsSection from "../components/sections/SkillsSection";
import { ContactSection } from "../components/sections/ContactSection";
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
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Services", href: "#services" },
          { label: "Projects", href: "#projects" },
          { label: "Skills", href: "#skills" },
          { label: "Experience", href: "#experience" },
          { label: "Contact", href: "#contact" },
        ]}
      />

      {/* Hero Section with Dynamic Mouse Spotlight & Grid Matrix */}
      <HeroSection profile={profile} links={links} />

      {/* About Me Section (Replacing redundant education section) */}
      <div className="mx-auto max-w-7xl px-6">
        <AboutSection about={profile.about} />
      </div>

      {/* Services / Capabilities Section */}
      <ServicesSection services={services} />

      {/* Featured Projects with Top 2 Spotlight (ApexFlow & InboxOrchestrator AI) */}
      <ProjectsSection projects={projects} />

      <div className="mx-auto max-w-7xl px-6">
        {/* Core Stack & Tooling by Engineering Domain */}
        <SkillsSection
          domains={skills.domains}
          skillGroups={skills.skillGroups}
          tools={skills.tools}
        />

        {/* Experience Section */}
        <Section
          id="experience"
          eyebrow="PROFESSIONAL EXPERIENCE"
          title="Industry Track Record & Internship"
          description="Hands-on engineering contributions focused on full-stack web application delivery, high-volume API load profiling, and automated regression quality gates."
        >
          <div className="grid gap-6">
            {experience.map((item) => (
              <ExperienceItem
                key={`${item.role}-${item.company}`}
                role={item.role}
                company={item.company}
                period={item.period}
                duration={item.duration}
                location={item.location}
                summary={item.summary}
                tasks={item.tasks}
              />
            ))}
          </div>
        </Section>

        {/* Contact CTA Section */}
        <ContactSection links={links} />
      </div>

      <Footer />
    </main>
  );
}