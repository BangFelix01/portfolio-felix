import Hero from "@/components/sections/Hero";

const sections = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "contact", title: "Contact" },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="flex min-h-screen items-center justify-center border-t border-[var(--glass-border)] px-6"
        >
          <h2 className="text-3xl font-semibold sm:text-5xl">
            {section.title}
          </h2>
        </section>
      ))}
    </main>
  );
}