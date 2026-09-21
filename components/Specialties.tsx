"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Waves, Feather, Handshake, Sparkles, Plus, type LucideIcon } from "lucide-react";
import { fadeUp, viewportOnce, EASE } from "@/lib/motion";
import Underline from "@/components/Underline";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const specialtyMeta: { id: string; Icon: LucideIcon; image: string }[] = [
  {
    id: "ansiedad",
    Icon: Waves,
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=700&q=80",
  },
  {
    id: "trauma",
    Icon: Feather,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=80",
  },
  {
    id: "relaciones",
    Icon: Handshake,
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=700&q=80",
  },
  {
    id: "autoestima",
    Icon: Sparkles,
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=700&q=80",
  },
];

export default function Specialties() {
  const { t } = useLanguage();
  const [active, setActive] = useState("ansiedad");

  const specialties = t.specialties.items.map((item, i) => ({ ...item, ...specialtyMeta[i] }));
  const activeSpec = specialties.find((s) => s.id === active)!;

  return (
    <section id="especialidades" className="section-padding bg-warm-cream relative overflow-hidden">
      <div className="container-wide relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-beige-200 pb-8"
        >
          <div>
            <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-terracota-500 mb-3">
              {t.specialties.eyebrow}
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-sage-900 leading-[0.95]">
              {t.specialties.titleBefore}
              <br />
              <Underline>{t.specialties.titleAccent}</Underline>
              {t.specialties.titleAfter}
            </h2>
          </div>
          <p className="font-sans text-sage-600 max-w-sm">{t.specialties.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-10">
          {/* Índice interactivo */}
          <div className="md:col-span-7 flex flex-col">
            {specialties.map((spec, i) => {
              const isActive = spec.id === active;
              return (
                <motion.button
                  key={spec.id}
                  onClick={() => setActive(spec.id)}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  variants={fadeUp}
                  transition={{ delay: i * 0.06 }}
                  className={`group text-left border-b border-beige-300/70 py-6 md:py-7 flex items-start gap-5 transition-colors ${
                    isActive ? "" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <span
                    className={`font-display text-2xl md:text-3xl tabular-nums transition-colors ${
                      isActive ? "text-terracota-500" : "text-beige-400"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <spec.Icon
                        size={18}
                        className={isActive ? "text-sage-700" : "text-sage-400"}
                      />
                      <h3
                        className={`font-display text-2xl md:text-4xl transition-colors ${
                          isActive ? "text-sage-900" : "text-sage-500"
                        }`}
                      >
                        {spec.title}
                      </h3>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p className="font-sans text-sage-600 text-sm md:text-base leading-relaxed mt-3 max-w-lg">
                            {spec.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-4">
                            {spec.symptoms.map((s) => (
                              <span
                                key={s}
                                className="text-xs px-3 py-1 bg-warm-white text-sage-700 rounded-full border border-beige-200 font-sans"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!isActive && (
                      <p className="font-sans text-sm text-sage-500 mt-1">{spec.shortDesc}</p>
                    )}
                  </div>
                  <Plus
                    size={20}
                    className={`flex-shrink-0 mt-2 transition-transform duration-300 ${
                      isActive ? "rotate-45 text-terracota-500" : "text-beige-400"
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Imagen de la especialidad activa */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="md:col-span-5 relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5] md:sticky md:top-32">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpec.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeSpec.image}
                    alt={activeSpec.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sage-900/50 via-sage-900/0 to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-6 left-6 right-6">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-warm-white text-sage-800 font-medium rounded-full text-sm hover:bg-warm-cream transition-colors"
                >
                  {t.specialties.cardCta}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
