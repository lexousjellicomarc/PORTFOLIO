import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { siteConfig } from "../data/siteConfig";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, prefersReducedMotion ? 450 : 1450);

    return () => window.clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#050509]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
          role="status"
          aria-live="polite"
          aria-label={`Loading ${siteConfig.name} portfolio`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(241,48,36,0.18),transparent_30%),radial-gradient(circle_at_70%_45%,rgba(0,128,255,0.22),transparent_32%)]" />
          <motion.div
            className="relative flex flex-col items-center justify-center gap-6 px-6"
            initial={prefersReducedMotion ? false : { scale: 0.88, opacity: 0 }}
            animate={prefersReducedMotion ? undefined : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              className="relative h-40 w-40 sm:h-56 sm:w-56 md:h-64 md:w-64"
              animate={prefersReducedMotion ? undefined : { scale: [1, 1.04, 1] }}
              transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0 rounded-full border border-red-500/25"
                animate={prefersReducedMotion ? undefined : { rotate: 360, scale: [1, 1.08, 1] }}
                transition={{ duration: 4.2, repeat: prefersReducedMotion ? 0 : Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-blue-500/25"
                animate={prefersReducedMotion ? undefined : { rotate: -360, scale: [1, 0.94, 1] }}
                transition={{ duration: 5.4, repeat: prefersReducedMotion ? 0 : Infinity, ease: "linear" }}
              />
              <div className="absolute inset-3 rounded-[36px] bg-red-500/20 blur-3xl" />
              <div className="absolute inset-3 rounded-[36px] bg-blue-500/20 blur-3xl mix-blend-screen" />
              <Image
                src="/logo-mark.webp"
                alt="Lexus_ji LJ logo"
                fill
                priority
                sizes="(max-width: 640px) 160px, 256px"
                className="relative object-contain"
              />
            </motion.div>

            <div className="relative h-1 w-48 overflow-hidden rounded-full bg-white/10 sm:w-64">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-red-500 via-white to-blue-500"
                initial={{ x: "-100%" }}
                animate={prefersReducedMotion ? { x: "0%" } : { x: ["-100%", "100%"] }}
                transition={{ duration: 1.15, repeat: prefersReducedMotion ? 0 : Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="flex items-center gap-2 text-center text-xs uppercase tracking-[0.45em] text-white/55">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
              Loading Portfolio
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
