"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function Loader() {
  const shouldReduceMotion = useReducedMotion();
  const [loading, setLoading] = useState(!shouldReduceMotion);

  useEffect(() => {
    if (shouldReduceMotion) return;

    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 850);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-sage-800 texture-dots flex flex-col items-center justify-center gap-4"
        >
          <span className="font-display font-bold text-2xl text-warm-white">
            Sofía Ramírez
          </span>
          <div className="w-36 h-[3px] bg-white/15 rounded-full overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full bg-terracota-400 origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
