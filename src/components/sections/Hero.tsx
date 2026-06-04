"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Three.js Scene */}
      <Scene />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/0 via-ivory/0 to-ivory pointer-events-none z-[2]" />

      {/* Content */}
      <motion.div
        style={{ opacity, y }}
        className="relative z-[3] text-center px-8 md:px-16 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-wood/70 mb-6 md:mb-8">
            A Digital Museum
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.7,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
          }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-charcoal leading-[1.1] mb-6 md:mb-8 tracking-tight"
        >
          The Art of
          <br />
          Natural Incense
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 1,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
          }}
          className="text-sm md:text-base lg:text-lg font-sans text-charcoal/60 max-w-2xl mx-auto leading-relaxed"
        >
          Exploring the history, materials, craftsmanship, and philosophy of
          Eastern incense traditions.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            delay: 1.3,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-10 md:mt-14"
        >
          <a
            href="#materials"
            className="group flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-sans text-charcoal hover:text-wood transition-colors duration-500"
          >
            <span className="w-8 h-[1px] bg-charcoal/30 group-hover:w-12 transition-all duration-500" />
            Explore the Collection
          </a>
          <a
            href="#craftsmanship"
            className="group flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-sans text-charcoal hover:text-wood transition-colors duration-500"
          >
            <span className="w-8 h-[1px] bg-charcoal/30 group-hover:w-12 transition-all duration-500" />
            Learn the Craft
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3]"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans text-charcoal/30">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-charcoal/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
