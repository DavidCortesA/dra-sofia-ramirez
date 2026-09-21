"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-sage-800 texture-dots text-center px-6">
      <span className="text-xs font-sans uppercase tracking-[0.25em] text-terracota-300 mb-4">
        {t.notFound.eyebrow}
      </span>
      <h1 className="font-display font-bold text-4xl md:text-6xl text-warm-white leading-[1.05] mb-5">
        {t.notFound.title}
        <br />
        {t.notFound.titleAccent}
      </h1>
      <p className="font-sans text-warm-white/70 max-w-md mb-9">{t.notFound.desc}</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-7 py-4 bg-terracota-400 hover:bg-terracota-500 text-sage-900 font-sans font-semibold rounded-full transition-all duration-300"
      >
        <ArrowLeft size={16} />
        {t.notFound.cta}
      </Link>
    </section>
  );
}
