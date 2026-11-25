import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");

  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-12 px-6 pb-16 pt-32 md:flex-row md:justify-between"
    >
      <div className="max-w-xl text-center md:text-left">
        <p className="mb-4 text-sm uppercase tracking-widest text-muted">
          {profile.role}
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Halo, saya{" "}
          <span className="font-serif font-normal italic text-accent">
            {profile.name}
          </span>
        </h1>

        <p className="mt-6 text-lg text-muted">{profile.summary}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <a
            href="/#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Explore My Work
          </a>
          <a
            href={profile.cvUrl}
            download
            className="rounded-full border border-[var(--glass-border)] bg-[var(--glass-fill)] px-6 py-3 text-sm font-medium backdrop-blur-xl transition-colors hover:border-accent"
          >
            Download CV
          </a>
          <a
            href="/#contact"
            className="px-3 py-3 text-sm text-muted transition-colors hover:text-foreground"
          >
            Hubungi saya
          </a>
        </div>

        <ul className="mt-8 flex items-center justify-center gap-5 text-sm text-muted md:justify-start">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative flex size-56 items-center justify-center overflow-hidden rounded-full border border-[var(--glass-border)] bg-[var(--glass-fill)] md:size-72">
        {profile.photo ? (
          <Image
            src={profile.photo}
            alt={`Foto profil ${profile.name}`}
            width={288}
            height={288}
            priority
            className="size-full object-cover"
          />
        ) : (
          <span className="font-serif text-6xl italic text-muted">
            {initials}
          </span>
        )}
      </div>
    </section>
  );
}