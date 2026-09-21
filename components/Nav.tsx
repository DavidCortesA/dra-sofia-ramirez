"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`flex items-center rounded-full border border-sage-200 p-0.5 text-xs font-sans font-semibold ${className}`}>
      {(["es", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-1 rounded-full uppercase transition-colors ${
            lang === l ? "bg-sage-800 text-warm-white" : "text-sage-600 hover:text-sage-900"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-terracota-400 origin-left z-[60]"
      />

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-6 left-0 right-0 z-50 px-4 md:px-6"
      >
        <div
          className={`container-wide flex items-center justify-between rounded-full pl-5 pr-2 md:pl-6 md:pr-3 py-2 transition-shadow duration-300 ${
            scrolled ? "bg-warm-white shadow-lg" : "bg-warm-white shadow-md"
          }`}
        >
          {/* Logo */}
          <a href="#inicio" className="flex flex-col leading-none pr-4">
            <span className="font-display text-lg md:text-xl text-sage-900 font-bold tracking-tight">
              Sofía Ramírez
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-sans font-medium text-sage-700 hover:bg-sage-50 hover:text-sage-900 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LangSwitch />
            <a
              href="#contacto"
              className="group inline-flex items-center gap-1.5 px-5 py-2.5 bg-terracota-400 hover:bg-terracota-500 text-sage-900 text-sm font-sans font-semibold rounded-full transition-all duration-300"
            >
              {t.nav.agendar}
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 text-sage-800"
            aria-label={t.nav.menuAria}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-4 right-4 z-40 bg-warm-white rounded-3xl shadow-xl p-6 md:hidden"
          >
            <nav className="flex flex-col">
              {t.nav.links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                  className="font-display text-2xl font-semibold text-sage-900 py-3 border-b border-beige-200 last:border-none"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <LangSwitch className="mt-5 w-fit" />
            <motion.a
              href="#contacto"
              onClick={handleLinkClick}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + t.nav.links.length * 0.05, duration: 0.3 }}
              className="mt-5 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-terracota-400 text-sage-900 font-sans font-semibold rounded-full text-base w-full"
            >
              {t.nav.agendar}
              <ArrowUpRight size={16} />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
