"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const STORAGE_KEY = "cookie-consent";

export default function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[70] bg-sage-900 text-warm-white rounded-2xl shadow-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <p className="font-sans text-sm text-warm-white/80 leading-relaxed">
            {t.cookieBanner.text}{" "}
            <a href="/aviso-de-privacidad" className="underline hover:text-warm-white">
              {t.cookieBanner.linkText}
            </a>
            .
          </p>
          <button
            onClick={accept}
            className="flex-shrink-0 px-5 py-2.5 bg-terracota-400 hover:bg-terracota-500 text-sage-900 text-sm font-sans font-semibold rounded-full transition-colors w-full sm:w-auto"
          >
            {t.cookieBanner.accept}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
