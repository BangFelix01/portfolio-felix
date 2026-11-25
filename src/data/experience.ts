export type ExperienceType =
  | "PKL"
  | "Internship"
  | "Freelance"
  | "Pekerjaan"
  | "Proyek Tim";

export type ExperienceItem = {
  id: string;
  type: ExperienceType;
  role: string;
  organization: string;
  period: string;
  responsibilities: string[];
  tech: string[];
  results?: string[];
};

// Semua teks "Placeholder" diganti dengan data aslimu di Phase 5.
export const experience: ExperienceItem[] = [
  {
    id: "pkl",
    type: "PKL",
    // Draf dari kamu: PKL di software house. Perlu dikonfirmasi.
    role: "Peserta PKL",
    organization: "Placeholder: nama software house",
    period: "Placeholder: periode PKL",
    responsibilities: ["Placeholder: tugas dan tanggung jawabmu selama PKL."],
    tech: [],
  },
  {
    id: "proyek-pos",
    type: "Proyek Tim",
    // Draf dari kamu: terlibat dalam pengembangan aplikasi POS bersama tim.
    // Perlu dikonfirmasi, termasuk apakah ini bagian dari PKL atau bukan.
    role: "Placeholder: perananmu di dalam tim",
    organization: "Aplikasi Point of Sale (POS)",
    period: "Placeholder: periode",
    responsibilities: ["Placeholder: kontribusimu pada pengembangan aplikasi."],
    tech: [],
  },
];