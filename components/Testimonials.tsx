"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Antes de llegar con Sofía pensé que la terapia era \"para personas con problemas graves\". Ahora entiendo que es para cualquiera que quiera vivir mejor. Ella me ayudó a entender por qué me sentía tan vacía y cómo salir de ese ciclo. Fue un proceso genuino, sin falsas promesas.",
    name: "Mariana G.",
    role: "Diseñadora · 29 años",
    topic: "Ansiedad y autoestima",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    stars: 5,
  },
  {
    id: 2,
    quote:
      "Llevaba años evitando hablar de cosas que me pasaron de niño. Sofía creó un espacio donde me sentí seguro para hacerlo por primera vez. El trabajo con EMDR fue transformador. Hoy vivo sin ese peso que creí que era parte de mí.",
    name: "Rodrigo M.",
    role: "Ingeniero · 34 años",
    topic: "Trauma y EMDR",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    stars: 5,
  },
  {
    id: 3,
    quote:
      "Mi relación de pareja estaba en un punto crítico. No sabíamos comunicarnos sin pelear. Las sesiones nos dieron herramientas concretas y, sobre todo, me ayudaron a entender qué patrones míos estaban contribuyendo al problema. Completamente recomendada.",
    name: "Daniela & Luis",
    role: "Terapia de pareja · Monterrey",
    topic: "Relaciones y comunicación",
    avatar: "https://images.unsplash.com/photo-1522057384400-681b421b7228?w=200&q=80",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="text-terracota-400 fill-terracota-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref        = useRef(null);
  const inView     = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  return (
    <section id="testimonios" className="section-padding bg-warm-cream relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-0 left-1/2 w-[700px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-sage-100/50 rounded-full blur-3xl" />

      <div className="container-narrow relative" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-sans uppercase tracking-widest text-terracota-500 mb-3">
            Testimonios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-sage-900 mb-4">
            Lo que dicen quienes
            <span className="italic text-terracota-500"> ya dieron el paso</span>
          </h2>
          <p className="font-sans text-sage-600 max-w-xl mx-auto">
            Estas son palabras reales de personas reales. Cada historia es única, como la tuya.
          </p>
        </motion.div>

        {/* Carrusel principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-warm-white rounded-3xl p-8 md:p-12 shadow-sm border border-beige-200 relative overflow-hidden"
            >
              {/* Comillas decorativas */}
              <div className="absolute top-6 right-8 font-display text-8xl text-sage-200 leading-none select-none pointer-events-none">
                &ldquo;
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar e info */}
                <div className="flex-shrink-0 flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-3 min-w-[140px]">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-md border-2 border-beige-200">
                    <Image
                      src={testimonials[active].avatar}
                      alt={testimonials[active].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left md:text-center">
                    <p className="font-sans font-semibold text-sage-800 text-sm">
                      {testimonials[active].name}
                    </p>
                    <p className="font-sans text-xs text-sage-500 mt-0.5">
                      {testimonials[active].role}
                    </p>
                    <div className="mt-1.5">
                      <StarRating count={testimonials[active].stars} />
                    </div>
                    <span className="inline-block mt-2 text-xs px-2.5 py-0.5 rounded-full bg-sage-100 text-sage-600 border border-sage-200 font-sans">
                      {testimonials[active].topic}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="font-display text-xl md:text-2xl text-sage-800 leading-relaxed italic flex-1">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navegación */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? "w-8 h-2.5 bg-sage-500"
                    : "w-2.5 h-2.5 bg-beige-300 hover:bg-beige-400"
                }`}
                aria-label={`Ver testimonio ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Mini cards de los otros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-4 mt-8"
        >
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 ${
                i === active
                  ? "bg-sage-50 border-sage-300 shadow-sm"
                  : "bg-warm-white border-beige-200 hover:border-beige-300 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-sans text-xs font-medium text-sage-800">{t.name}</p>
                  <p className="font-sans text-xs text-sage-500">{t.topic}</p>
                </div>
              </div>
              <p className="font-sans text-xs text-sage-600 line-clamp-2 italic">
                &ldquo;{t.quote.substring(0, 80)}...&rdquo;
              </p>
            </button>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-xs font-sans text-sage-400 mt-6"
        >
          * Los nombres han sido modificados para proteger la privacidad de mis pacientes.
        </motion.p>
      </div>
    </section>
  );
}
