"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Waves, Feather, Handshake, Sparkles, type LucideIcon } from "lucide-react";

type Specialty = {
  id: string;
  Icon: LucideIcon;
  iconColor: string;
  title: string;
  shortDesc: string;
  description: string;
  symptoms: string[];
  image: string;
  color: string;
  accent: string;
};

const specialties: Specialty[] = [
  {
    id: "ansiedad",
    Icon: Waves,
    iconColor: "text-sage-600 bg-sage-100",
    title: "Ansiedad",
    shortDesc: "Cuando tu mente no puede dejar de correr",
    description:
      "¿Sientes que la preocupación no te da descanso? ¿Tu cuerpo reacciona con tensión, insomnio o ataques de pánico? La ansiedad es tratable. Trabajamos con técnicas basadas en evidencia para que recuperes el control y la paz interior.",
    symptoms: ["Pensamientos acelerados", "Ataques de pánico", "Insomnio", "Tensión constante"],
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80",
    color: "from-sage-100 to-sage-50",
    accent: "bg-sage-500",
  },
  {
    id: "trauma",
    Icon: Feather,
    iconColor: "text-terracota-600 bg-terracota-100",
    title: "Trauma y EMDR",
    shortDesc: "Sanar lo que el pasado dejó en ti",
    description:
      "Las experiencias dolorosas del pasado no tienen que definir tu presente. Con EMDR y terapia focalizada en el trauma, procesamos esas heridas de forma segura para que dejen de afectar tu vida cotidiana.",
    symptoms: ["Recuerdos intrusivos", "Hipervigilancia", "Evitación", "Reacciones desproporcionadas"],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80",
    color: "from-terracota-50 to-beige-50",
    accent: "bg-terracota-400",
  },
  {
    id: "relaciones",
    Icon: Handshake,
    iconColor: "text-beige-700 bg-beige-100",
    title: "Relaciones",
    shortDesc: "Vínculos más sanos, contigo y con los demás",
    description:
      "¿Sientes que siempre terminas en los mismos patrones relacionales? Trabajamos los estilos de apego, la comunicación y los límites para que puedas construir relaciones auténticas y nutritivas.",
    symptoms: ["Codependencia", "Miedos al abandono", "Límites difusos", "Conflictos repetidos"],
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80",
    color: "from-beige-100 to-warm-cream",
    accent: "bg-beige-500",
  },
  {
    id: "autoestima",
    Icon: Sparkles,
    iconColor: "text-sage-600 bg-sage-100",
    title: "Autoestima e Identidad",
    shortDesc: "Reconocer tu valor y vivir auténticamente",
    description:
      "¿La autocrítica domina tu mente? ¿Sientes que no eres suficiente? Exploramos las creencias que tienes sobre ti mismo y construimos una relación más compasiva y honesta contigo.",
    symptoms: ["Autocrítica excesiva", "Perfeccionismo", "Inseguridad", "Baja autoconfianza"],
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80",
    color: "from-sage-50 to-beige-50",
    accent: "bg-sage-400",
  },
];

export default function Specialties() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="especialidades" className="section-padding bg-warm-cream relative overflow-hidden">
      {/* Decoración */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-terracota-100/40 translate-x-1/2 blur-3xl" />

      <div className="container-wide relative" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-sans uppercase tracking-widest text-terracota-500 mb-3">
            Especialidades
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-sage-900 mb-4">
            ¿En qué te puedo
            <span className="italic text-terracota-500"> ayudar</span>?
          </h2>
          <p className="font-sans text-sage-600 text-lg max-w-2xl mx-auto">
            Estas son las áreas en las que me especializo. Si lo que vives no aparece aquí,
            escríbeme. Seguro podemos encontrar el camino juntos.
          </p>
        </motion.div>

        {/* Cards de especialidades */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {specialties.map((spec, i) => (
            <motion.div
              key={spec.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${spec.color} border border-beige-200/80 hover:shadow-xl transition-all duration-300`}
            >
              <div className="p-8 flex flex-col gap-5">
                {/* Header de card */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${spec.iconColor}`}>
                        <spec.Icon size={20} />
                      </div>
                      <h3 className="font-display text-2xl text-sage-800">{spec.title}</h3>
                    </div>
                    <p className="font-sans text-sm text-sage-600 italic">{spec.shortDesc}</p>
                  </div>
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                    <Image
                      src={spec.image}
                      alt={spec.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Descripción */}
                <p className="font-sans text-sage-700 text-sm leading-relaxed">
                  {spec.description}
                </p>

                {/* Síntomas/señales */}
                <div>
                  <p className="text-xs font-sans font-medium text-sage-500 uppercase tracking-wider mb-2">
                    Señales de que esto puede ser para ti:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {spec.symptoms.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-3 py-1 bg-warm-white/70 text-sage-700 rounded-full border border-beige-200 font-sans"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA de card */}
                <a
                  href="#contacto"
                  className="self-start text-sm font-medium text-sage-700 hover:text-terracota-500 transition-colors group/link"
                >
                  Quiero trabajar esto
                  <span className="ml-1 group-hover/link:ml-2 transition-all duration-200">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-14"
        >
          <p className="font-sans text-sage-600 mb-6">
            ¿No sabes si la terapia es para ti?{" "}
            <span className="font-medium text-sage-800">Te ayudo a descubrirlo.</span>
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sage-500 hover:bg-sage-600 text-warm-white font-medium rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Agenda una llamada gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
}
