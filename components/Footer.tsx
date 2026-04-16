"use client";

import { Instagram, Facebook, Linkedin } from "lucide-react";

const links = [
  { label: "Sobre mí",       href: "#sobre-mi" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Cómo trabajo",   href: "#proceso" },
  { label: "Testimonios",    href: "#testimonios" },
  { label: "Preguntas",      href: "#faq" },
  { label: "Contacto",       href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-warm-white/80">
      <div className="container-wide px-6 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Branding */}
          <div>
            <div className="mb-4">
              <p className="font-display text-xl text-warm-white font-medium">
                Dra. Sofía Ramírez
              </p>
              <p className="text-xs uppercase tracking-widest text-warm-white/50 font-sans">
                Psicóloga Clínica
              </p>
            </div>
            <p className="font-sans text-sm leading-relaxed opacity-70 max-w-xs">
              Un espacio seguro para sanar, crecer y reconectarte con quien realmente eres.
              Monterrey y online.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { label: "Instagram", Icon: Instagram },
                { label: "Facebook",  Icon: Facebook  },
                { label: "LinkedIn",  Icon: Linkedin  },
              ].map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-full bg-warm-white/10 hover:bg-warm-white/20 flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-warm-white/50 mb-4">
              Navegación
            </p>
            <nav className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm hover:text-warm-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Especialidades SEO */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-warm-white/50 mb-4">
              Especialidades
            </p>
            <ul className="space-y-2 text-sm font-sans opacity-70">
              <li>Psicólogo Monterrey</li>
              <li>Terapia para ansiedad</li>
              <li>Terapeuta online</li>
              <li>Terapia para trauma (EMDR)</li>
              <li>Terapia de pareja</li>
              <li>Psicólogo cerca de mí</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-warm-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans opacity-50">
          <p>
            © {new Date().getFullYear()} Dra. Sofía Ramírez · Todos los derechos reservados
          </p>
          <div className="flex gap-6">
            <a href="/aviso-de-privacidad" className="hover:opacity-80 transition-opacity">Aviso de privacidad</a>
            <a href="/codigo-de-etica" className="hover:opacity-80 transition-opacity">Código de ética</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
