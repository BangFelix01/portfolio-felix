export type JourneyType = "Pendidikan" | "Organisasi" | "Lainnya";

export type JourneyItem = {
  id: string;
  type: JourneyType;
  institution: string;
  title: string; // jurusan atau posisi
  period: string;
  description: string;
  achievements?: string[];
};

// Urutan: yang terbaru di paling atas.
// Semua teks "Placeholder" diganti dengan data aslimu di Phase 5.
export const journey: JourneyItem[] = [
  {
    id: "smk",
    type: "Pendidikan",
    // Draf dari kamu: SMK jurusan RPL. Perlu dikonfirmasi sebelum dipublikasikan.
    institution: "Placeholder: nama SMK",
    title: "Rekayasa Perangkat Lunak (RPL)",
    period: "Placeholder: tahun masuk - tahun lulus",
    description:
      "Placeholder: ringkasan singkat apa yang kamu pelajari dan kerjakan selama di sekolah.",
  },
  {
    id: "organisasi",
    type: "Organisasi",
    institution: "Placeholder: nama organisasi",
    title: "Placeholder: posisi atau peranmu",
    period: "Placeholder: periode",
    description:
      "Placeholder: hapus item ini kalau kamu tidak punya pengalaman organisasi.",
  },
];