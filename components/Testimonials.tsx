"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { fadeUp, viewportOnce, EASE } from "@/lib/motion";
import Underline from "@/components/Underline";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  "https://images.unsplash.com/photo-1522057384400-681b421b7228?w=200&q=80",
];

export default function Testimonials() {
  const { t } = useLanguage();
  const testimonials = t.testimonials.items.map((item, i) => ({
    ...item,
    id: i,
    avatar: avatars[i],
    stars: 5,
  }));
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (i: number) => {
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };
  const next = () => go((active + 1) % testimonials.length);
  const prev = () => go((active - 1 + testimonials.length) % testimonials.length);

  const item = testimonials[active];

  return (
    <section id="testimonios" className="section-padding bg-sage-900 relative overflow-hidden text-warm-white">
      <div className="container-narrow relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/15 pb-8"
        >
          <div>
            <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-terracota-300 mb-3">
              {t.testimonials.eyebrow}
            </span>
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
              {t.testimonials.titleBefore}
              <br />
              <Underline color="text-terracota-400">{t.testimonials.titleAccent}</Underline>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label={t.testimonials.prevAria}
              className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              onClick={next}
              aria-label={t.testimonials.nextAria}
              className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-10 items-center min-h-[280px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={item.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="md:col-span-8"
            >
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <Star key={i} size={14} className="text-terracota-300 fill-terracota-300" />
                ))}
              </div>
              <blockquote className="font-display font-semibold text-2xl md:text-4xl leading-[1.2]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </motion.div>
          </AnimatePresence>

          <motion.div
            key={`meta-${item.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="md:col-span-4 flex items-center gap-4 md:flex-col md:items-start md:border-l md:border-white/15 md:pl-8"
          >
            <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20">
              <Image src={item.avatar} alt={item.name} fill className="object-cover" />
            </div>
            <div>
              <p className="font-sans font-semibold text-sm">{item.name}</p>
              <p className="font-sans text-xs text-white/50 mt-0.5">{item.role}</p>
              <span className="inline-block mt-2 text-xs px-2.5 py-0.5 rounded-full border border-white/20 text-white/70 font-sans">
                {item.topic}
              </span>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center gap-3 mt-14">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`${t.testimonials.dotAria} ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === active ? "w-8 h-1.5 bg-terracota-300" : "w-1.5 h-1.5 bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
          <p className="ml-auto text-xs font-sans text-white/40">{t.testimonials.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
