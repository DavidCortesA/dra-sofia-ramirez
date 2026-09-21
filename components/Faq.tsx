"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { fadeUp, viewportOnce, EASE } from "@/lib/motion";
import Underline from "@/components/Underline";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function DotMark() {
  const cols = 8;
  const rows = 5;
  return (
    <svg viewBox="0 0 200 120" className="w-full h-full">
      <rect x="0" y="0" width="200" height="120" rx="20" className="fill-sage-50" />
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={20 + c * 22}
            cy={20 + r * 20}
            r={r === 2 && c === 5 ? 5 : 2.5}
            className={r === 2 && c === 5 ? "fill-terracota-400" : "fill-sage-200"}
          />
        ))
      )}
    </svg>
  );
}

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay: index * 0.05 }}
      className="border-b border-beige-200 last:border-none"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`font-display text-xl md:text-2xl transition-colors duration-200 ${
            isOpen ? "text-sage-800" : "text-sage-900 group-hover:text-sage-600"
          }`}
        >
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-sage-800 text-warm-white" : "bg-beige-100 text-sage-500 group-hover:bg-beige-200"
          }`}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sage-600 text-sm md:text-base leading-relaxed pb-6 max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="section-padding bg-warm-white relative overflow-hidden">
      <div className="container-narrow relative" ref={ref}>
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Columna izquierda — sticky en desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="md:col-span-2 md:sticky md:top-32 md:self-start"
          >
            <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-terracota-500 mb-3">
              {t.faq.eyebrow}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-sage-900 leading-[0.95] mb-4">
              {t.faq.titleBefore}
              <br />
              <Underline>{t.faq.titleAccent}</Underline>
            </h2>
            <p className="font-sans text-sage-600 leading-relaxed mb-8">{t.faq.intro}</p>

            <div className="bg-sage-50 border border-sage-200 rounded-2xl p-6 mb-8">
              <p className="font-display text-lg text-sage-800 mb-2">{t.faq.sideCtaTitle}</p>
              <p className="font-sans text-sm text-sage-600 mb-4">{t.faq.sideCtaDesc}</p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-sm font-medium text-sage-700 hover:text-terracota-500 transition-colors"
              >
                {t.faq.sideCtaLink}
              </a>
            </div>

            <div className="h-28 hidden md:block">
              <DotMark />
            </div>
          </motion.div>

          {/* Columna derecha — acordeón */}
          <div className="md:col-span-3">
            {t.faq.items.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                index={i}
                isOpen={open === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
