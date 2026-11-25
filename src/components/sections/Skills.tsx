import SectionHeading from "@/components/ui/SectionHeading";
import SkillIcon from "@/components/ui/SkillIcon";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Keahlian dan"
        accent="teknologi"
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-fill)] p-6"
          >
            <h3 className="text-sm uppercase tracking-widest text-muted">
              {category.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 rounded-full border border-[var(--glass-border)] px-3 py-1.5 text-sm"
                >
                  <SkillIcon name={skill.icon} label={skill.name} />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}