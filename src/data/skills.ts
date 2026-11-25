export type Skill = {
  name: string;
  // Nama ikon dari react-icons/si, contoh "SiReact". Kosongkan jika tidak ada.
  icon?: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

// SEMUA entri di bawah adalah CONTOH.
// Di Phase 5 kita sesuaikan dengan kemampuanmu yang sebenarnya.
export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss3" },
    ],
  },
  {
    title: "Backend Development",
    skills: [{ name: "Node.js", icon: "SiNodedotjs" }],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: "SiMysql" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
    ],
  },
  {
    title: "Tools & Software",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Figma", icon: "SiFigma" },
      { name: "Postman", icon: "SiPostman" },
    ],
  },
  {
    title: "Other Technical Skills",
    skills: [{ name: "Responsive Design" }, { name: "REST API" }],
  },
];