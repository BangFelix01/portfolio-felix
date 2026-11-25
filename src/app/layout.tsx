import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Felix | Portfolio",
  description: "Portofolio pribadi (deskripsi akan diisi di Phase 5).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}