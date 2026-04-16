"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, FlaskConical, Sprout } from "lucide-react";

const values = [
  {
    icon: Heart,
    color: "text-terracota-500 bg-terracota-50",
    title: "Calidez genuina",
    desc: "Cada persona que entra a mi consultorio merece sentirse vista, escuchada y respetada tal como es.",
  },
  {
    icon: FlaskConical,
    color: "text-sage-600 bg-sage-50",
    title: "Enfoque basado en evidencia",
    desc: "Integro TCC, EMDR y mindfulness para ofrecer herramientas que realmente funcionan.",
  },
  {
    icon: Sprout,
    color: "text-sage-500 bg-sage-50",
    title: "Crecimiento real",
    desc: "No busco que dependas de la terapia; te ayudo a desarrollar las habilidades para florecer por tu cuenta.",
  },
];

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre-mi" className="section-padding bg-warm-white relative overflow-hidden">
      {/* Decoración fondo */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-beige-100/70 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-sage-100/50 translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container-narrow relative" ref={ref}>

        {/* Header de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-sans uppercase tracking-widest text-terracota-500 mb-3">
            Sobre mí
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-sage-900 mb-4">
            Alguien que realmente
            <span className="italic text-sage-600"> te escucha</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=700&q=85"
                alt="Dra. Sofía Ramírez en su consultorio en Monterrey"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sage-900/30" />
            </div>

            {/* Badge credencial */}
            <div className="absolute -bottom-6 -right-6 bg-warm-white border border-beige-200 rounded-2xl shadow-lg p-4 max-w-[200px]">
              <p className="font-display text-sm font-semibold text-sage-800 mb-0.5">
                Psicóloga Clínica
              </p>
              <p className="text-xs text-beige-600 font-sans">Cédula Prof. 12345678</p>
              <p className="text-xs text-beige-600 font-sans">Certificada en EMDR</p>
            </div>

            {/* Elemento decorativo */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-2 border-terracota-200 opacity-60" />
            <div className="absolute -top-2 -left-2 w-16 h-16 rounded-full border-2 border-sage-200 opacity-60" />
          </motion.div>

          {/* Texto bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-sage-800 mb-4">
                Hola, soy Sofía.
              </h3>
              <p className="font-sans text-sage-700 leading-relaxed mb-4">
                Sé lo que es sentir que algo en tu interior pide atención y no saber por dónde
                empezar. Por eso me convertí en psicóloga: para acompañar a personas como tú en
                ese proceso de autoconocimiento y sanación.
              </p>
              <p className="font-sans text-sage-700 leading-relaxed mb-4">
                Soy Doctora en Psicología Clínica por la UANL, con especialización en Terapia
                Cognitivo-Conductual y certificación internacional en EMDR. Llevo más de 8 años
                trabajando con adultos que enfrentan ansiedad, trauma, dificultades relacionales
                y crisis de identidad.
              </p>
              <p className="font-sans text-sage-700 leading-relaxed">
                Mi consultorio en Monterrey —y mis sesiones online— son espacios donde no hay
                juicios. Solo conversaciones honestas, herramientas efectivas y un acompañamiento
                genuino hacia quien quieres ser.
              </p>
            </div>

            {/* Filosofía */}
            <div className="bg-beige-50 rounded-2xl p-6 border border-beige-200">
              <p className="font-display text-lg italic text-sage-700 leading-relaxed">
                &ldquo;Creo que cada persona ya tiene dentro de sí lo que necesita para sanar.
                Mi trabajo es ayudarte a encontrarlo.&rdquo;
              </p>
            </div>

            {/* Valores */}
            <div className="grid gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${v.color}`}>
                    <v.icon size={18} />
                  </div>
                  <div>
                    <p className="font-sans font-medium text-sage-800 mb-0.5">{v.title}</p>
                    <p className="font-sans text-sm text-sage-600 leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#contacto"
              className="self-start mt-2 px-7 py-3.5 bg-terracota-500 hover:bg-terracota-600 text-warm-white font-medium rounded-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 text-sm"
            >
              Comienza tu proceso →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
