import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Pengalaman"
        accent="profesional"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {experience.map((item) => (
          <article
            key={item.id}
            className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-fill)] p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
              <span className="rounded-full border border-[var(--glass-border)] px-2.5 py-0.5 text-xs">
                {item.type}
              </span>
              <span>{item.period}</span>
            </div>

            <h3 className="mt-4 text-xl font-semibold">{item.role}</h3>
            <p className="text-muted">{item.organization}</p>

            <h4 className="mt-6 text-sm uppercase tracking-widest text-muted">
              Tanggung jawab
            </h4>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>

            {item.results && item.results.length > 0 && (
              <>
                <h4 className="mt-6 text-sm uppercase tracking-widest text-muted">
                  Hasil
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {item.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </>
            )}

            {item.tech.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {item.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-[var(--glass-border)] px-3 py-1 text-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}