"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Phone, Users, MapPin, Star, type LucideIcon } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/motion";
import Underline from "@/components/Underline";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const stepIcons: LucideIcon[] = [Phone, Users, MapPin, Star];

export default function Process() {
  const { t } = useLanguage();
  const steps = t.process.steps.map((s, i) => ({ ...s, Icon: stepIcons[i] }));
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="proceso" className="section-padding bg-warm-white relative overflow-hidden">
      <div className="container-narrow relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-20 border-b border-beige-200 pb-8"
        >
          <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-terracota-500 mb-3">
            {t.process.eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-sage-900 leading-[0.95]">
            {t.process.titleBefore}
            <br />
            <Underline color="text-terracota-300">{t.process.titleAccent}</Underline>
          </h2>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Línea base */}
          <div className="absolute left-7 top-2 bottom-2 w-px bg-beige-200" />
          {/* Línea de progreso ligada al scroll */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-7 top-2 w-px bg-terracota-400"
          />

          <div className="flex flex-col gap-16 md:gap-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="relative flex gap-8 pl-0"
              >
                <div className="relative z-10 w-14 h-14 rounded-full bg-warm-white border-2 border-sage-800 flex items-center justify-center flex-shrink-0">
                  <step.Icon size={20} className="text-sage-800" />
                </div>

                <div className="pt-1">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-display text-lg text-beige-400">{step.number}</span>
                    <h3 className="font-display text-2xl md:text-3xl text-sage-900">{step.title}</h3>
                  </div>
                  <p className="font-sans text-sage-600 leading-relaxed max-w-lg mb-3">{step.desc}</p>
                  <span className="inline-block text-xs font-sans text-sage-500 bg-beige-50 border border-beige-200 px-3 py-1 rounded-full">
                    {step.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA bloque informativo */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-20 rounded-[2rem] bg-sage-900 p-8 md:p-14 text-warm-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/4 -translate-y-1/4" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-3xl md:text-4xl mb-3">{t.process.ctaTitle}</h3>
              <p className="font-sans opacity-75 text-lg max-w-md">{t.process.ctaDesc}</p>
            </div>
            <a
              href="#contacto"
              className="flex-shrink-0 px-8 py-4 bg-warm-white text-sage-800 hover:bg-warm-cream font-medium rounded-full transition-all duration-300 text-base whitespace-nowrap"
            >
              {t.process.ctaButton}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
