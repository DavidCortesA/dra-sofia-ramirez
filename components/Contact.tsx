"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { fadeUp, viewportOnce, EASE } from "@/lib/motion";
import Underline from "@/components/Underline";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const contactIcons = [MapPin, Phone, Mail, Clock];

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useLanguage();
  const contactInfo = t.contact.infoItems.map((item, i) => ({ ...item, Icon: contactIcons[i] }));

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
      <div className="container-wide relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-16 border-b border-beige-200 pb-8"
        >
          <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-terracota-500 mb-3">
            {t.contact.eyebrow}
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-sage-900 leading-[0.95]">
            {t.contact.titleBefore}
            <br />
            <Underline>{t.contact.titleAccent}</Underline>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          {/* Info de contacto */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="md:col-span-5 flex flex-col gap-6"
          >
            <div>
              <h3 className="font-display text-2xl text-sage-800 mb-2">{t.contact.introTitle}</h3>
              <p className="font-sans text-sage-600 text-sm leading-relaxed">{t.contact.introDesc}</p>
            </div>

            <div className="grid gap-3">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 items-start p-4 rounded-2xl bg-warm-white border border-beige-200 hover:border-sage-300 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <item.Icon size={16} className="text-sage-600" />
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
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-sage-800 hover:bg-sage-900 text-warm-white font-medium rounded-2xl transition-all duration-300"
              >
                <Clock size={18} />
                {showCalendar ? t.contact.hideCalendar : t.contact.showCalendar}
              </button>
              <p className="text-xs font-sans text-sage-500 text-center mt-2">
                {t.contact.calendarHint}
              </p>
            </div>

            {showCalendar && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4, ease: EASE }}
                className="overflow-hidden rounded-2xl border border-beige-200 shadow-md"
              >
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
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="md:col-span-7"
          >
            <div className="bg-warm-white rounded-[2rem] shadow-sm border border-beige-200 p-8 md:p-10">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center">
                    <CheckCircle size={32} className="text-sage-500" />
                  </div>
                  <h3 className="font-display text-2xl text-sage-800">{t.contact.successTitle}</h3>
                  <p className="font-sans text-sage-600 max-w-xs">{t.contact.successDesc}</p>
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
                    {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-display text-xl text-sage-800 mb-1">{t.contact.formTitle}</h3>
                    <p className="font-sans text-sm text-sage-500">{t.contact.formDesc}</p>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium text-sage-700 mb-1.5 uppercase tracking-wide">
                      {t.contact.labelName} <span className="text-terracota-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder={t.contact.placeholderName}
                      className="w-full px-4 py-3 rounded-xl border border-beige-300 bg-warm-cream focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 font-sans text-sm text-sage-800 placeholder-sage-400 transition-all"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-medium text-sage-700 mb-1.5 uppercase tracking-wide">
                        {t.contact.labelEmail} <span className="text-terracota-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder={t.contact.placeholderEmail}
                        className="w-full px-4 py-3 rounded-xl border border-beige-300 bg-warm-cream focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 font-sans text-sm text-sage-800 placeholder-sage-400 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-medium text-sage-700 mb-1.5 uppercase tracking-wide">
                        {t.contact.labelPhone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder={t.contact.placeholderPhone}
                        className="w-full px-4 py-3 rounded-xl border border-beige-300 bg-warm-cream focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 font-sans text-sm text-sage-800 placeholder-sage-400 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium text-sage-700 mb-1.5 uppercase tracking-wide">
                      {t.contact.labelTopic}
                    </label>
                    <select
                      name="topic"
                      value={form.topic}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-beige-300 bg-warm-cream focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 font-sans text-sm text-sage-800 transition-all appearance-none"
                    >
                      <option value="">{t.contact.topicPlaceholder}</option>
                      {t.contact.topicOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans font-medium text-sage-700 mb-1.5 uppercase tracking-wide">
                      {t.contact.labelMessage} <span className="text-terracota-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder={t.contact.placeholderMessage}
                      className="w-full px-4 py-3 rounded-xl border border-beige-300 bg-warm-cream focus:outline-none focus:border-sage-400 focus:ring-2 focus:ring-sage-100 font-sans text-sm text-sage-800 placeholder-sage-400 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-terracota-500 hover:bg-terracota-600 disabled:bg-terracota-300 text-warm-white font-medium rounded-xl transition-all duration-300 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-warm-white/30 border-t-warm-white rounded-full"
                        />
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        {t.contact.submit}
                      </>
                    )}
                  </button>

                  <p className="text-xs font-sans text-sage-400 text-center">{t.contact.disclaimer}</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
