"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timelineEvents } from "@/lib/timeline";

export default function HistoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 100]);

  const regionColors: Record<string, string> = {
    China: "#8A6B4A",
    Japan: "#B89B5E",
    Eurasia: "#6B8E6B",
    Global: "#6B7B8E",
  };

  return (
    <section
      id="history"
      ref={containerRef}
      className="relative z-10 py-32 md:py-48 px-8 md:px-16 lg:px-24 bg-ivory-dark"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20 md:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.3em] uppercase font-sans text-wood/60 mb-4"
          >
            Historical Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-[1.15] tracking-tight"
          >
            Incense Through
            <br />
            <span className="italic text-wood">History</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div ref={trackRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[1px] bg-sand/40 -translate-x-1/2">
            <motion.div
              className="w-full bg-wood"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-24 md:space-y-32">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                  }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[12px] md:left-1/2 top-1 w-[15px] h-[15px] rounded-full bg-ivory-dark border-2 -translate-x-1/2 z-10"
                    style={{
                      borderColor:
                        regionColors[event.region] || "#8A6B4A",
                    }}
                  />

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />

                  {/* Content card */}
                  <div className="relative pl-12 md:pl-0 md:w-[calc(50%-40px)]">
                    {/* Region badge */}
                    <span
                      className="inline-block text-[10px] tracking-[0.2em] uppercase font-sans text-ivory px-3 py-1 mb-4"
                      style={{
                        backgroundColor:
                          regionColors[event.region] || "#8A6B4A",
                      }}
                    >
                      {event.region}
                    </span>

                    {/* Year */}
                    <p className="text-xs tracking-[0.3em] uppercase font-sans text-wood/70 mb-2">
                      {event.year}
                    </p>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-charcoal leading-tight mb-1">
                      {event.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm md:text-base font-serif italic text-wood/80 mb-4">
                      {event.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm md:text-base font-sans text-charcoal/60 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
