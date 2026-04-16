"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre mí",     href: "#sobre-mi" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Cómo trabajo", href: "#proceso" },
  { label: "Preguntas",   href: "#faq" },
  { label: "Contacto",    href: "#contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-warm-white/95 backdrop-blur-sm shadow-sm border-b border-beige-200"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide px-6 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#inicio" className="group flex flex-col leading-none">
              <span className="font-display text-xl md:text-2xl text-sage-700 font-medium tracking-tight">
                Dra. Sofía Ramírez
              </span>
              <span className="text-xs text-beige-600 font-sans font-light tracking-widest uppercase">
                Psicóloga Clínica
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-sans text-sage-800 hover:text-terracota-500 transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-terracota-400 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <a
                href="#contacto"
                className="ml-4 px-5 py-2.5 bg-sage-500 hover:bg-sage-600 text-warm-white text-sm font-medium rounded-full transition-all duration-200 hover:shadow-md hover:-translate-y-px"
              >
                Agenda tu sesión
              </a>
            </nav>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 text-sage-700 hover:text-terracota-500 transition-colors"
              aria-label="Menú"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-16 z-40 bg-warm-white/98 backdrop-blur-sm flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-display text-2xl text-sage-800 hover:text-terracota-500 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contacto"
              onClick={handleLinkClick}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className="mt-4 px-8 py-3 bg-sage-500 hover:bg-sage-600 text-warm-white font-medium rounded-full transition-all duration-200 shadow-md"
            >
              Agenda tu sesión
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
