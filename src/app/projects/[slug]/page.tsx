import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectImage from "@/components/ui/ProjectImage";
import { projects, getProjectBySlug } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Felix`,
    description: project.summary,
  };
}

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-sm uppercase tracking-widest text-muted">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
      <Link
        href="/#projects"
        className="text-sm text-muted transition-colors hover:text-foreground"
      >
        ← Kembali ke projects
      </Link>

      <p className="mt-8 text-sm uppercase tracking-widest text-muted">
        {project.category}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 text-lg text-muted">{project.summary}</p>

      <ProjectImage
        src={project.image}
        title={project.title}
        sizes="(min-width: 768px) 768px, 100vw"
        className="mt-8 rounded-3xl border border-[var(--glass-border)]"
      />

      <div className="mt-10 grid gap-8">
        <DetailBlock title="Permasalahan">
          <p>{project.problem}</p>
        </DetailBlock>
        <DetailBlock title="Solusi">
          <p>{project.solution}</p>
        </DetailBlock>
        <DetailBlock title="Peran saya">
          <p>{project.role}</p>
        </DetailBlock>
        <DetailBlock title="Fitur utama">
          <ul className="list-disc space-y-1 pl-5">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </DetailBlock>
        {project.tech.length > 0 && (
          <DetailBlock title="Teknologi">
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[var(--glass-border)] px-3 py-1 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </DetailBlock>
        )}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-fill)] px-6 py-3 text-sm font-medium backdrop-blur-xl transition-colors hover:border-accent"
          >
            Lihat di GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Live Demo
          </a>
        )}
      </div>
    </main>
  );
}