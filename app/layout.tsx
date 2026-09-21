import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.psicologamonterrey.mx"),
  title: "Dra. Sofía Ramírez | Psicóloga en Monterrey | Terapia para Ansiedad y Trauma",
  description:
    "Psicóloga profesional en Monterrey especializada en ansiedad, trauma y relaciones. Atención presencial y online. Agenda tu primera sesión hoy. Psicólogo cerca de mí, terapia emocional.",
  keywords: [
    "psicólogo Monterrey",
    "terapia para ansiedad",
    "terapeuta online",
    "psicólogo cerca de mí",
    "terapia emocional",
    "psicólogo profesional",
    "terapia para trauma",
    "salud mental Monterrey",
    "psicología clínica",
    "terapia individual",
  ],
  openGraph: {
    title: "Dra. Sofía Ramírez | Psicóloga en Monterrey",
    description:
      "Un espacio seguro para sanar, crecer y reconectarte contigo mismo. Especializada en ansiedad, trauma y relaciones.",
    type: "website",
    locale: "es_MX",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
