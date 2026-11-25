import SectionHeading from "@/components/ui/SectionHeading";
import ProjectGrid from "@/components/sections/ProjectGrid";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <SectionHeading eyebrow="Projects" title="Proyek" accent="pilihan" />
      <ProjectGrid projects={projects} />
    </section>
  );
}