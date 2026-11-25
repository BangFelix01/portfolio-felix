import SectionHeading from "@/components/ui/SectionHeading";
import { journey } from "@/data/journey";

export default function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <SectionHeading
        eyebrow="Journey"
        title="Perjalanan"
        accent="belajar"
      />

      <ol className="ml-2 max-w-3xl border-l border-[var(--glass-border)]">
        {journey.map((item) => (
          <li key={item.id} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[6.5px] top-1.5 size-3 rounded-full bg-accent"
            />

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
              <span>{item.period}</span>
              <span className="rounded-full border border-[var(--glass-border)] px-2.5 py-0.5 text-xs">
                {item.type}
              </span>
            </div>

            <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
            <p className="text-muted">{item.institution}</p>
            <p className="mt-3">{item.description}</p>

            {item.achievements && item.achievements.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}