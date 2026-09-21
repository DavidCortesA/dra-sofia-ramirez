"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

// lucide-react ya no incluye íconos de marca; se definen como SVG propios.
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M15 8.5h1.5V5.5H15c-2.2 0-4 1.8-4 4v2H9v3h2V21h3v-6.5h2.2l.5-3H14V9.5c0-.55.45-1 1-1Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-3.5c0-1.4 1-2.2 2.2-2.2 1.2 0 1.8.8 1.8 2.2v3.5" />
      <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-sage-900 text-warm-white/80 relative overflow-hidden">
      <div className="container-wide px-6 md:px-8 pt-20 pb-10">
        {/* CTA gigante */}
        <motion.a
          href="#contacto"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="group flex items-center justify-between gap-6 border-b border-white/15 pb-12 mb-14"
        >
          <span className="font-display font-bold text-[13vw] md:text-[6vw] leading-none text-warm-white group-hover:text-terracota-300 transition-colors duration-500">
            {t.footer.ctaBig}
          </span>
          <span className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/25 flex items-center justify-center flex-shrink-0 group-hover:bg-terracota-400 group-hover:border-terracota-400 transition-all duration-500">
            <ArrowUpRight size={28} className="group-hover:rotate-45 transition-transform duration-500" />
          </span>
        </motion.a>

        <div className="grid md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <p className="font-display font-bold text-2xl text-warm-white mb-2">
              {t.footer.brandName}
            </p>
            <p className="font-sans text-sm leading-relaxed opacity-60 max-w-xs mb-6">
              {t.footer.brandDesc}
            </p>
            <div className="flex gap-3">
              {[
                { label: "Instagram", Icon: InstagramIcon },
                { label: "Facebook", Icon: FacebookIcon },
                { label: "LinkedIn", Icon: LinkedinIcon },
              ].map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
              {t.footer.navTitle}
            </p>
            <nav className="flex flex-col gap-2">
              {t.footer.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm hover:text-warm-white transition-colors py-0.5 opacity-80"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
              {t.footer.specialtiesTitle}
            </p>
            <ul className="space-y-2 text-sm font-sans opacity-70">
              {t.footer.specialtiesList.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans opacity-50">
          <p>
            © {new Date().getFullYear()} {t.footer.brandName} · {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a href="/aviso-de-privacidad" className="hover:opacity-80 transition-opacity">
              {t.footer.privacyLink}
            </a>
            <a href="/codigo-de-etica" className="hover:opacity-80 transition-opacity">
              {t.footer.ethicsLink}
            </a>
            <a href="/terminos-y-condiciones" className="hover:opacity-80 transition-opacity">
              {t.footer.termsLink}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
