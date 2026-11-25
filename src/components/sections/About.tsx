import SectionHeading from "@/components/ui/SectionHeading";
import { about } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <SectionHeading eyebrow="About" title="Sedikit tentang" accent="saya" />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-fill)] p-8 md:col-span-2">
          {about.intro.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-lg text-muted first:mt-0">
              {paragraph}
            </p>
          ))}
        </div>

        {about.highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-fill)] p-6"
          >
            <h3 className="text-sm uppercase tracking-widest text-muted">
              {item.title}
            </h3>
            <p className="mt-3">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}