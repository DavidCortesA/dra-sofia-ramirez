"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Cómo sé si la terapia es para mí?",
    a: "Si sientes que algo en tu vida no está funcionando —ya sea en tus emociones, relaciones, trabajo o simplemente en cómo te sientes contigo mismo— la terapia puede ayudarte. No necesitas estar \"en crisis\" para buscar apoyo. La terapia también es para personas que simplemente quieren crecer, conocerse mejor y vivir con más plenitud.",
  },
  {
    q: "¿Cuánto dura una sesión y cada cuándo son?",
    a: "Las sesiones individuales duran 50 minutos. Normalmente empezamos con una frecuencia semanal, que puede ir ajustándose a quincenal según tu proceso. La constancia es importante, especialmente al inicio, porque permite que el trabajo terapéutico tenga continuidad y profundidad.",
  },
  {
    q: "¿Atiendes de forma online?",
    a: "Sí, ofrezco sesiones tanto presenciales (en mi consultorio en Monterrey) como online vía videollamada. Las sesiones online funcionan muy bien y son igual de efectivas. Solo necesitas un espacio privado, buena conexión a internet y ganas de trabajar.",
  },
  {
    q: "¿Qué pasa en la primera sesión?",
    a: "La primera sesión es una conversación para conocernos. Te haré algunas preguntas sobre lo que te trae a terapia, tu historia y lo que esperas de este proceso. También es un espacio para que tú me preguntes lo que necesites. Al final evaluamos si somos un buen match y cómo podría verse nuestro trabajo juntos.",
  },
  {
    q: "¿Cuánto cuesta una sesión?",
    a: "El costo de la sesión lo compartimos directamente al agendar la llamada gratuita, ya que puede variar según la modalidad (individual, pareja, EMDR) y la frecuencia. No quiero que el costo sea una barrera: hablemos y encontramos algo que funcione para ambas.",
  },
  {
    q: "¿Cómo agendo mi primera cita?",
    a: "Es muy sencillo: puedes llenar el formulario de contacto en esta página, escribirme por WhatsApp o usar el botón de agendar que te llevará directamente a mi calendario. Te respondo en menos de 24 horas para confirmar o coordinar el mejor horario para ti.",
  },
  {
    q: "¿La información que comparto es confidencial?",
    a: "Absolutamente. Todo lo que hablamos en sesión es estrictamente confidencial, como lo establece el código de ética de la psicología. Las únicas excepciones son situaciones de riesgo grave para ti o para otros, en cuyo caso lo abordaríamos juntos primero.",
  },
];

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
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b border-beige-200 last:border-none"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`font-sans font-medium text-base transition-colors duration-200 ${
            isOpen ? "text-sage-700" : "text-sage-800 group-hover:text-sage-600"
          }`}
        >
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-sage-500 text-warm-white" : "bg-beige-100 text-sage-500 group-hover:bg-beige-200"
          }`}
        >
          {isOpen ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sage-600 text-sm leading-relaxed pb-5 max-w-2xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const ref      = useRef(null);
  const inView   = useInView(ref, { once: true, margin: "-60px" });
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="section-padding bg-warm-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-beige-100/60 translate-x-1/2 -translate-y-1/2 blur-3xl" />

      <div className="container-narrow relative" ref={ref}>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">

          {/* Columna izquierda — sticky en desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 md:sticky md:top-32 md:self-start"
          >
            <span className="inline-block text-xs font-sans uppercase tracking-widest text-terracota-500 mb-3">
              Preguntas frecuentes
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-sage-900 mb-4">
              Tus dudas,
              <br />
              <span className="italic text-sage-600">resueltas</span>
            </h2>
            <p className="font-sans text-sage-600 leading-relaxed mb-8">
              Es normal tener preguntas antes de empezar. Aquí respondo las más comunes.
              Si la tuya no está, escríbeme.
            </p>

            {/* CTA lateral */}
            <div className="bg-sage-50 border border-sage-200 rounded-2xl p-6">
              <p className="font-display text-lg text-sage-800 mb-2">
                ¿Tienes una pregunta diferente?
              </p>
              <p className="font-sans text-sm text-sage-600 mb-4">
                Escríbeme directamente. Respondo en 24 horas.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-sm font-medium text-sage-700 hover:text-terracota-500 transition-colors"
              >
                Contáctame →
              </a>
            </div>

            {/* Imagen decorativa */}
            <div className="mt-8 relative h-32 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&q=75"
                alt="Planta decorativa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-sage-800/20" />
            </div>
          </motion.div>

          {/* Columna derecha — acordeón */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-3"
          >
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                index={i}
                isOpen={open === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
