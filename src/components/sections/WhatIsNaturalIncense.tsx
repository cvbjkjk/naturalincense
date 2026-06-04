"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WhatIsNaturalIncense() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rightX = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative z-10 py-32 md:py-48 px-8 md:px-16 lg:px-24 bg-ivory"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-wood/60">
            Introduction
          </p>
        </motion.div>

        {/* Main editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24">
          {/* Left content */}
          <motion.div
            style={{ x: leftX, opacity }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-[1.15] tracking-tight">
              What Is
              <br />
              <span className="italic text-wood">Natural</span> Incense?
            </h2>
          </motion.div>

          {/* Right content */}
          <motion.div
            style={{ x: rightX, opacity }}
            className="lg:col-span-6 lg:col-start-7 space-y-8"
          >
            <p className="text-base md:text-lg font-sans text-charcoal/70 leading-relaxed">
              Incense is one of humanity's oldest sensory experiences — aromatic
              material that releases fragrant smoke when burned. Used for
              millennia in spiritual practice, medicine, and cultural ceremony,
              it represents a profound intersection of nature, chemistry, and
              human consciousness.
            </p>

            <p className="text-base md:text-lg font-sans text-charcoal/70 leading-relaxed">
              Natural incense is crafted from pure botanical materials — woods,
              resins, herbs, and spices — without synthetic fragrances,
              chemical binders, or artificial enhancers. Each material carries
              the memory of its origin: the soil, climate, and centuries of
              traditional knowledge that shaped its harvest and preparation.
            </p>

            <div className="border-l-2 border-wood/30 pl-6 my-10">
              <p className="text-lg md:text-xl font-serif italic text-charcoal/60 leading-relaxed">
                &ldquo;A single thread of smoke carries the wisdom of a thousand
                years.&rdquo;
              </p>
            </div>

            <p className="text-base md:text-lg font-sans text-charcoal/70 leading-relaxed">
              In an age of synthetic imitations and mass production, natural
              incense represents a return to authenticity — a connection to
              the ancient knowledge systems that understood the profound
              relationship between aromatic materials and human well-being.
            </p>

            <p className="text-base md:text-lg font-sans text-charcoal/70 leading-relaxed">
              This digital museum is dedicated to preserving and sharing that
              knowledge: the materials, the craftsmanship, the history, and the
              contemplative practices that have made incense an enduring art
              form across Eastern cultures.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
