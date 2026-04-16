"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Star, ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.18 } },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-warm-cream"
    >
      {/* Fondo con textura orgánica */}
      <div className="absolute inset-0 texture-warm" />

      {/* Círculo decorativo sage */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sage-100/60 -translate-y-1/4 translate-x-1/4 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-terracota-100/40 translate-y-1/3 -translate-x-1/4 blur-3xl" />

      <div className="relative container-wide px-6 md:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Texto */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="order-2 md:order-1"
          >
            {/* Etiqueta pequeña */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-terracota-400" />
              <span className="text-xs font-sans uppercase tracking-widest text-terracota-500 font-medium">
                Psicóloga Clínica · Monterrey
              </span>
            </motion.div>

            {/* Título principal */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-sage-900 leading-[1.1] mb-6"
            >
              No tienes que
              <span className="italic text-terracota-500"> cargar sola </span>
              con todo lo que sientes
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              variants={fadeUp}
              className="font-sans text-lg md:text-xl text-sage-700 leading-relaxed mb-8 max-w-lg"
            >
              La terapia puede ayudarte a entenderte mejor, sanar lo que duele
              y encontrar la calma que mereces. Juntas construiremos ese camino.
            </motion.p>

            {/* Indicadores de confianza */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-10 text-sm text-sage-600 font-sans"
            >
              {["Sesiones presenciales y online", "+8 años de experiencia", "Primera sesión sin compromiso"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-sage-400 flex-shrink-0" />
                    {item}
                  </span>
                )
              )}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-sage-500 hover:bg-sage-600 text-warm-white font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-base"
              >
                Agenda tu primera sesión
              </a>
              <a
                href="#sobre-mi"
                className="inline-flex items-center justify-center px-8 py-4 border border-sage-300 hover:border-sage-500 text-sage-700 hover:text-sage-900 font-medium rounded-full transition-all duration-200 bg-warm-white/60 hover:bg-warm-white text-base"
              >
                Conóceme primero
              </a>
            </motion.div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="order-1 md:order-2 relative"
          >
            {/* Forma orgánica de fondo */}
            <div className="absolute inset-0 -m-4 bg-sage-100 rounded-[60%_40%_55%_45%_/_40%_60%_40%_60%] transform rotate-3" />

            {/* Foto principal */}
            <div className="relative rounded-[45%_55%_60%_40%_/_50%_45%_55%_50%] overflow-hidden aspect-[4/5] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85"
                alt="Dra. Sofía Ramírez — Psicóloga en Monterrey"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 via-transparent to-transparent" />
            </div>

            {/* Badge flotante */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 md:-left-8 bg-warm-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-beige-200"
            >
              <div className="w-10 h-10 rounded-full bg-terracota-100 flex items-center justify-center">
                <Leaf size={18} className="text-terracota-500" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-sage-800">Espacio seguro</p>
                <p className="text-xs text-beige-600 font-sans">Sin juicios, con empatía</p>
              </div>
            </motion.div>

            {/* Estadística flotante */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute -top-4 -right-4 md:-right-6 bg-sage-500 rounded-2xl shadow-xl p-4 text-warm-white"
            >
              <p className="font-display text-2xl font-semibold">+200</p>
              <p className="text-xs font-sans opacity-90">pacientes acompañados</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-sans text-sage-500 uppercase tracking-widest">Explorar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-sage-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
