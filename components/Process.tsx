"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Users, MapPin, Star, type LucideIcon } from "lucide-react";

type Step = {
  number: string;
  Icon: LucideIcon;
  iconBg: string;
  title: string;
  desc: string;
  detail: string;
  color: string;
  numColor: string;
};

const steps: Step[] = [
  {
    number: "01",
    Icon:   Phone,
    iconBg: "text-sage-600 bg-sage-100",
    title:  "Primer contacto",
    desc:
      "Me escribes o llenas el formulario. En menos de 24 horas te respondo para programar una llamada gratuita de 20 minutos. Sin costo, sin presión.",
    detail: "Sin compromiso · Respuesta en 24h",
    color:  "bg-sage-100 border-sage-200",
    numColor: "text-sage-500",
  },
  {
    number: "02",
    Icon:   Users,
    iconBg: "text-terracota-600 bg-terracota-100",
    title:  "Sesión inicial",
    desc:
      "Nos conocemos en una sesión de 50 minutos. Cuéntame lo que vives, lo que esperas y tus dudas. Evaluamos juntos si somos un buen match terapéutico.",
    detail: "50 minutos · Presencial u online",
    color:  "bg-terracota-50 border-terracota-200",
    numColor: "text-terracota-400",
  },
  {
    number: "03",
    Icon:   MapPin,
    iconBg: "text-beige-700 bg-beige-100",
    title:  "Proceso terapéutico",
    desc:
      "Diseñamos un plan personalizado. Sesiones semanales o quincenales donde trabajamos con técnicas basadas en evidencia adaptadas a tu ritmo y necesidades.",
    detail: "Plan personalizado · A tu ritmo",
    color:  "bg-beige-100 border-beige-200",
    numColor: "text-beige-500",
  },
  {
    number: "04",
    Icon:   Star,
    iconBg: "text-sage-700 bg-sage-100",
    title:  "Transformación",
    desc:
      "No se trata de llegar a un punto de perfección, sino de construir una vida más consciente, auténtica y en paz. Tú llevas las herramientas para siempre.",
    detail: "Habilidades para toda la vida",
    color:  "bg-sage-50 border-sage-200",
    numColor: "text-sage-600",
  },
];

export default function Process() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="proceso" className="section-padding bg-warm-white relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute left-0 top-1/2 w-64 h-64 rounded-full bg-sage-100/60 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute right-0 bottom-20 w-48 h-48 rounded-full bg-terracota-100/40 translate-x-1/2 blur-3xl" />

      <div className="container-narrow relative" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-sans uppercase tracking-widest text-terracota-500 mb-3">
            Cómo trabajo
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-sage-900 mb-4">
            Tu proceso,
            <span className="italic text-sage-600"> paso a paso</span>
          </h2>
          <p className="font-sans text-sage-600 text-lg max-w-xl mx-auto">
            Sé que dar el primer paso puede ser lo más difícil. Por eso lo hago lo más sencillo posible.
          </p>
        </motion.div>

        {/* Pasos — timeline vertical en móvil, horizontal en desktop */}
        <div className="relative">

          {/* Línea conectora (solo desktop) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-beige-300 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Número / ícono */}
                <div
                  className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border-2 ${step.color} shadow-sm`}
                >
                  <step.Icon size={22} className={step.iconBg.split(" ")[0]} />
                </div>

                {/* Número de paso */}
                <span className={`font-display text-5xl font-light ${step.numColor} opacity-25 absolute top-0 right-0 leading-none`}>
                  {step.number}
                </span>

                {/* Contenido */}
                <h3 className="font-display text-xl text-sage-800 mb-3">{step.title}</h3>
                <p className="font-sans text-sm text-sage-600 leading-relaxed mb-4">{step.desc}</p>

                {/* Tag detalle */}
                <span className="inline-block text-xs font-sans text-sage-500 bg-beige-50 border border-beige-200 px-3 py-1 rounded-full">
                  {step.detail}
                </span>

                {/* Flecha conectora entre steps (móvil) */}
                {i < steps.length - 1 && (
                  <div className="md:hidden mt-6 mb-2 text-beige-400 text-xl">↓</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA bloque informativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 rounded-3xl bg-gradient-to-br from-sage-500 to-sage-700 p-8 md:p-12 text-warm-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 -translate-x-1/4 translate-y-1/4" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl md:text-3xl mb-3">
                ¿Lista para dar el primer paso?
              </h3>
              <p className="font-sans opacity-85 text-lg max-w-md">
                La llamada inicial es gratuita y sin compromiso. Solo cuéntame lo que vives.
              </p>
            </div>
            <a
              href="#contacto"
              className="flex-shrink-0 px-8 py-4 bg-warm-white text-sage-700 hover:bg-warm-cream font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-base whitespace-nowrap"
            >
              Agenda una llamada →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
