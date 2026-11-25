"use client";

import { useState } from "react";
import Link from "next/link";
import ProjectImage from "@/components/ui/ProjectImage";
import type { Project } from "@/data/projects";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const categories = [
    "Semua",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];
  const [active, setActive] = useState("Semua");

  const visible =
    active === "Semua"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              active === category
                ? "border-accent text-accent"
                : "border-[var(--glass-border)] text-muted hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-fill)] transition-colors hover:border-accent"
          >
            <ProjectImage src={project.image} title={project.title} />

            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs uppercase tracking-widest text-muted">
                {project.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm text-muted">{project.summary}</p>

              {project.tech.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[var(--glass-border)] px-3 py-1 text-xs"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto flex flex-wrap items-center gap-4 pt-6 text-sm">
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-medium text-accent"
                >
                  Lihat detail
                </Link>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}