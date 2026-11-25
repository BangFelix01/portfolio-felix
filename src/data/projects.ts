export type ProjectCategory =
  | "Web Development"
  | "Backend Development"
  | "Database"
  | "Application Development"
  | "Personal Projects";

export type Project = {
  slug: string; // dipakai di alamat: /projects/<slug>
  title: string;
  category: ProjectCategory;
  summary: string;
  problem: string;
  solution: string;
  role: string;
  tech: string[];
  features: string[];
  image?: string; // contoh: "/projects/pos.png" (file di folder public)
  github?: string;
  demo?: string;
};

// Teks berawalan "Placeholder:" akan kamu ganti di Phase 5.
export const projects: Project[] = [
  {
    // Draft dari kamu: terlibat dalam pengembangan aplikasi POS bersama tim.
    // Perlu dikonfirmasi sebelum dipublikasikan.
    slug: "aplikasi-pos",
    title: "Aplikasi Point of Sale (POS)",
    category: "Application Development",
    summary:
      "Placeholder: ringkasan 1-2 kalimat tentang aplikasi POS yang dikerjakan bersama tim.",
    problem: "Placeholder: masalah yang ingin diselesaikan aplikasi ini.",
    solution: "Placeholder: solusi yang dibuat oleh tim.",
    role: "Placeholder: peranmu di dalam tim, isi sesuai kenyataan.",
    tech: [],
    features: ["Placeholder: fitur utama aplikasi."],
  },
  {
    slug: "website-portofolio",
    title: "Website Portofolio Pribadi",
    category: "Personal Projects",
    summary:
      "Website portofolio untuk memperkenalkan diri dan menampilkan proyek, dibangun dengan Next.js dan Tailwind CSS.",
    problem:
      "Dibutuhkan satu tempat online untuk menampilkan profil, proyek, dan pengalaman secara profesional.",
    solution:
      "Website responsif dengan konten yang dipisahkan dari tampilan, sehingga mudah diperbarui.",
    role: "Perancang dan pengembang.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Desain responsif", "Konten dikelola lewat file data"],
    github: "https://github.com/BangFelix01/portfolio-felix",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}