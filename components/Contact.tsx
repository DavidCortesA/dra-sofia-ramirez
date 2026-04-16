"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Col. Del Valle, Monterrey, N.L.",
    sub: "Sesiones presenciales y online",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+52 81 1234 5678",
    sub: "Respondo en menos de 24h",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "sofia@psicologamonterrey.mx",
    sub: "Para consultas generales",
  },
  {
    icon: Clock,
    label: "Horarios",
    value: "Lunes a Viernes · 9am – 7pm",
    sub: "Sábados con cita previa",
  },
];

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    topic: "",
  });
  const [status, setStatus] = useState<FormState>("idle");
  const [showCalendar, setShowCalendar] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulación de envío — reemplazar con API real (Resend, EmailJS, etc.)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  return (
    <section
      id="contacto"
      className="section-padding bg-warm-cream relative overflow-hidden"
    >
      {/* Decoración */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-sage-200/30 -translate-x-1/2 translate-y-1/2 blur-3xl" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-terracota-100/30 translate-x-1/3 -translate-y-1/3 blur-3xl" />

      <div className="container-narrow relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-sans uppercase tracking-widest text-terracota-500 mb-3">
            Contacto
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-sage-900 mb-4">
            Da el primer paso
            <span className="italic text-terracota-500"> hoy</span>
          </h2>
          <p className="font-sans text-sage-600 text-lg max-w-xl mx-auto">
            Escríbeme sin compromiso. Me alegra que estés aquí y que estés
            considerando este paso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 md:gap-14">
          {/* Info de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h3 className="font-display text-2xl text-sage-800 mb-2">
                Estoy aquí para escucharte
              </h3>
              <p className="font-sans text-sage-600 text-sm leading-relaxed">
                No tienes que tener todo claro antes de escribir. A veces lo
                único que se necesita es dar un pequeño paso hacia adelante.
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 items-start p-4 rounded-2xl bg-warm-white border border-beige-200 hover:border-sage-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-sage-600" />
                  </div>
                  <div>
                    <p className="font-sans text-xs text-sage-500 uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-sans text-sm font-medium text-sage-800">
                      {item.value}
                    </p>
                    <p className="font-sans text-xs text-sage-500 mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón agendar directo con YouCanBook.me */}
            <div className="mt-2">
              <button
                onClick={() => setShowCalendar((v) => !v)}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-sage-500 hover:bg-sage-600 text-warm-white font-medium rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Clock size={18} />
                {showCalendar
                  ? "Ocultar calendario"
                  : "Ver disponibilidad y agendar"}
              </button>
              <p className="text-xs font-sans text-sage-500 text-center mt-2">
                Agenda directamente en mi calendario — sin intermediarios
              </p>
            </div>

            {/* YouCanBook.me iframe */}
            {showCalendar && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-2xl border border-beige-200 shadow-md"
              >
                {/*
                  INSTRUCCIONES DE PERSONALIZACIÓN:
                  1. Crea tu cuenta en https://youcanbook.me
                  2. Configura tus horarios disponibles
                  3. Reemplaza "TU-SLUG-AQUI" con tu nombre de perfil de YouCanBook.me
                  4. Ejemplo: https://sofia-ramirez.youcanbook.me
                */}
                <iframe
                  src="https://davidcortez.youcanbook.me"
                  width="100%"
                  height="750"
                  frameBorder="0"
                  className="rounded-2xl"
                />
              </motion.div>
            )}
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-3"
          >
            <div className="bg-warm-white rounded-3xl shadow-sm border border-beige-200 p-8">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center">
                    <CheckCircle size={32} className="text-sage-500" />
                  </div>
                  <h3 className="font-display text-2xl text-sage-800">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="font-sans text-sage-600 max-w-xs">
                    Gracias por escribirme. Te respondo en menos de 24 horas.
                    Mientras tanto, respira. Ya diste el primer paso.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                        topic: "",
                      });
                    }}
                    className="mt-2 text-sm font-medium text-sage-600 hover:text-sage-800 underline underline-offset-2"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-display text-xl text-sage-800 mb-1">
                      Cuéntame un poco sobre ti
                    </h3>
                    <p className="font-sans text-sm text-sage-500">
                      Solo lo que quieras compartir. Todo en este espacio es
                      confidencial.
                    </p>
                  </div>

                  {/* Nombre */}
                  <div>
                    <label className="block text-xs font-sans font-medium text-sage-700 mb-1.5 uppercase tracking-wide">
                      Tu nombre <span className="text-terracota-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="¿Cómo te llamas?"
                      className="w-full px-4 py-3 rounded-xl border border-beige-300 bg-warm-cream focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 font-sans text-sm text-sage-800 placeholder-sage-400 transition-all"
                    />
                  </div>

                  {/* Email y teléfono */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-medium text-sage-700 mb-1.5 uppercase tracking-wide">
                        Correo <span className="text-terracota-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@correo.com"
                        className="w-full px-4 py-3 rounded-xl border border-beige-300 bg-warm-cream focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 font-sans text-sm text-sage-800 placeholder-sage-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-medium text-sage-700 mb-1.5 uppercase tracking-wide">
                        WhatsApp (opcional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+52 81 ..."
                        className="w-full px-4 py-3 rounded-xl border border-beige-300 bg-warm-cream focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 font-sans text-sm text-sage-800 placeholder-sage-400 transition-all"
                      />
                    </div>
                  </div>

                  {/* Tema */}
                  <div>
                    <label className="block text-xs font-sans font-medium text-sage-700 mb-1.5 uppercase tracking-wide">
                      ¿Sobre qué quieres trabajar?
                    </label>
                    <select
                      name="topic"
                      value={form.topic}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-beige-300 bg-warm-cream focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 font-sans text-sm text-sage-800 transition-all appearance-none"
                    >
                      <option value="">Selecciona una opción...</option>
                      <option value="ansiedad">Ansiedad o estrés</option>
                      <option value="trauma">
                        Trauma o experiencias pasadas
                      </option>
                      <option value="relaciones">Relaciones o vínculos</option>
                      <option value="autoestima">Autoestima o identidad</option>
                      <option value="otro">Otro / No estoy seguro/a</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block text-xs font-sans font-medium text-sage-700 mb-1.5 uppercase tracking-wide">
                      Tu mensaje <span className="text-terracota-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Cuéntame brevemente lo que te trae aquí. No hay respuestas correctas ni incorrectas..."
                      className="w-full px-4 py-3 rounded-xl border border-beige-300 bg-warm-cream focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 font-sans text-sm text-sage-800 placeholder-sage-400 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-terracota-500 hover:bg-terracota-600 disabled:bg-terracota-300 text-warm-white font-medium rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-warm-white/30 border-t-warm-white rounded-full"
                        />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar mensaje
                      </>
                    )}
                  </button>

                  <p className="text-xs font-sans text-sage-400 text-center">
                    Al enviar este formulario aceptas nuestra política de
                    privacidad. Tu información es confidencial y nunca se
                    compartirá con terceros.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
