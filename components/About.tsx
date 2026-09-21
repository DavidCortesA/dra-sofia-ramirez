"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, FlaskConical, Sprout, Quote } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import Underline from "@/components/Underline";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const valueIcons = [Heart, FlaskConical, Sprout];

export default function About() {
  const { t } = useLanguage();
  const values = t.about.values.map((v, i) => ({ ...v, Icon: valueIcons[i] }));

  return (
    <section id="sobre-mi" className="section-padding bg-warm-white relative overflow-hidden">
      <div className="container-wide relative">
        {/* Header editorial */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24 border-b border-beige-200 pb-8"
        >
          <div>
            <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-terracota-500 mb-3">
              {t.about.eyebrow}
            </span>
            <h2 className="font-display text-4xl md:text-6xl text-sage-900 leading-[0.95]">
              {t.about.titleBefore}
              <br />
              <Underline color="text-terracota-300">{t.about.titleAccent}</Underline>
            </h2>
          </div>
          <p className="font-sans text-sage-500 max-w-xs text-sm leading-relaxed">
            {t.about.credentialTag}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-y-12 gap-x-10">
          {/* Imagen — columna angosta, ligeramente rotada */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotate: -1 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9 }}
            className="md:col-span-4 relative md:sticky md:top-32 self-start"
          >
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85"
                alt="Dra. Sofía Ramírez en su consultorio en Monterrey"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sage-900/30" />
            </div>

            <div className="absolute -bottom-6 -right-4 bg-warm-white border border-beige-200 rounded-2xl shadow-lg p-4 max-w-[190px] rotate-2">
              <p className="font-display text-sm font-semibold text-sage-800 mb-0.5">
                {t.about.badgeTitle}
              </p>
              <p className="text-xs text-beige-600 font-sans">{t.about.badgeCred}</p>
              <p className="text-xs text-beige-600 font-sans">{t.about.badgeEmdr}</p>
            </div>
          </motion.div>

          {/* Contenido */}
          <div className="md:col-span-8 flex flex-col gap-10">
            {/* Pull quote */}
            <motion.blockquote
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp}
              className="relative max-w-2xl"
            >
              <Quote size={28} className="text-terracota-300 mb-2" />
              <p className="font-display font-semibold text-2xl md:text-4xl text-sage-800 leading-[1.15]">
                {t.about.quote}
              </p>
            </motion.blockquote>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp}
              className="font-sans text-sage-700 leading-relaxed max-w-2xl flex flex-col gap-4 text-base md:text-lg"
            >
              {t.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </motion.div>

            {/* Valores — fila editorial con divisores, no cards */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerContainer(0.12)}
              className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-beige-200"
            >
              {values.map((v) => (
                <motion.div key={v.title} variants={staggerItem}>
                  <v.Icon size={20} className="text-terracota-500 mb-3" />
                  <p className="font-display text-lg text-sage-800 mb-1.5">{v.title}</p>
                  <p className="font-sans text-sm text-sage-600 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp}
              href="#contacto"
              className="self-start mt-2 px-8 py-4 bg-terracota-500 hover:bg-terracota-600 text-warm-white font-medium rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 text-sm"
            >
              {t.about.cta}
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
