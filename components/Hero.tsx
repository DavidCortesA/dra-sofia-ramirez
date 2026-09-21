"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
  ArrowUpRight,
  Sparkles,
  CalendarCheck,
  ShieldCheck,
  HeartHandshake,
  Video,
} from "lucide-react";
import { fadeUp, staggerContainer, EASE } from "@/lib/motion";
import Underline from "@/components/Underline";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const featureIcons = [CalendarCheck, HeartHandshake, ShieldCheck, Video];

export default function Hero() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["5%", "-55%"]);
  const { t } = useLanguage();
  const marqueeItems = t.hero.marqueeItems;
  const features = t.hero.features.map((label, i) => ({ label, Icon: featureIcons[i] }));

  return (
    <section id="inicio" className="relative overflow-hidden bg-sage-800 texture-dots">
      <div className="relative min-h-screen flex flex-col justify-center container-wide px-6 md:px-8 pt-28 pb-16">
        <div className="grid md:grid-cols-12 gap-y-14 gap-x-10 items-center">
          {/* Texto */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate="show"
            className="md:col-span-7"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 text-warm-white text-xs font-sans font-medium uppercase tracking-wide px-4 py-2 rounded-full mb-7"
            >
              <Sparkles size={13} className="text-terracota-300" />
              {t.hero.kicker}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl md:text-6xl font-bold leading-[1.05] text-warm-white mb-6"
            >
              {t.hero.titleBefore}{" "}
              <Underline color="text-terracota-400">{t.hero.titleAccent}</Underline>{" "}
              {t.hero.titleAfter}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-sans text-lg text-warm-white/70 leading-relaxed mb-9 max-w-md"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-terracota-400 hover:bg-terracota-500 text-sage-900 font-sans font-semibold rounded-full transition-all duration-300 text-base"
              >
                {t.hero.ctaPrimary}
                <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#sobre-mi"
                className="inline-flex items-center justify-center px-7 py-4 border border-white/25 hover:bg-white/5 text-warm-white font-sans font-medium rounded-full transition-all duration-200 text-base"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </motion.div>

          {/* Tarjeta de foto con bloque de color offset */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
            className="md:col-span-5 relative h-[420px] md:h-[480px] mx-auto max-w-sm w-full"
          >
            {/* Bloque plano detrás, offset */}
            <div className="absolute -bottom-5 -right-5 w-full h-full rounded-[1.75rem] bg-terracota-400" />

            {/* Foto */}
            <div className="absolute inset-0 rounded-[1.75rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85"
                alt="Dra. Sofía Ramírez — Psicóloga en Monterrey"
                fill
                className="object-cover object-top"
                priority
              />

              {/* Overlay inferior con credencial */}
              <div className="absolute bottom-0 left-0 right-0 bg-sage-900/85 backdrop-blur-sm px-5 py-4">
                <p className="font-display text-sm font-semibold text-warm-white">
                  {t.hero.cardName}
                </p>
                <p className="font-sans text-xs text-warm-white/70 mt-0.5">
                  {t.hero.cardLicense}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-2 text-xs font-sans text-sage-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-300" />
                  {t.hero.cardAvailable}
                </span>
              </div>
            </div>

            {/* Badge sparkle flotante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5, ease: EASE }}
              className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-warm-white shadow-lg flex items-center justify-center"
            >
              <Sparkles size={20} className="text-terracota-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Marquee de especialidades — se mueve con el scroll */}
      <div
        ref={marqueeRef}
        className="relative border-t border-white/10 bg-sage-900 py-5 overflow-hidden"
      >
        <motion.div style={{ x }} className="flex w-max">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-4 px-6 font-display font-semibold text-lg md:text-xl text-warm-white/80 whitespace-nowrap"
            >
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-terracota-400" />
            </span>
          ))}
        </motion.div>
      </div>

      {/* Franja de features */}
      <div className="relative bg-warm-white">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4">
          {features.map((f, i) => {
            const mobileRight = i % 2 === 0;
            const mobileBottom = i < 2;
            const desktopRight = i < features.length - 1;
            return (
              <div
                key={f.label}
                className={[
                  "flex items-center gap-3 px-6 md:px-8 py-6 border-beige-200",
                  mobileRight ? "border-r" : "",
                  mobileBottom ? "border-b" : "border-b-0",
                  "md:border-b-0",
                  desktopRight ? "md:border-r" : "md:border-r-0",
                ].join(" ")}
              >
                <f.Icon size={18} className="text-terracota-500 flex-shrink-0" />
                <span className="font-sans text-sm font-medium text-sage-800">{f.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
