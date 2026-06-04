"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const craftSteps = [
  {
    number: "01",
    title: "Material Selection",
    description:
      "The foundation of exceptional incense begins with sourcing. Masters evaluate raw materials by sight, touch, and aroma — assessing age, origin, and quality. A single batch may require materials from multiple regions, each selected for its specific character.",
    detail: "Agarwood from Vietnam · Sandalwood from Mysore · Frankincense from Oman",
  },
  {
    number: "02",
    title: "Grinding",
    description:
      "Selected materials are ground to precise particle sizes. The texture affects how the incense burns and releases its fragrance. Woods and resins are traditionally ground using stone mills, a slow process that generates minimal heat to preserve volatile aromatic compounds.",
    detail: "Particle size: 40–120 mesh depending on material and intended use",
  },
  {
    number: "03",
    title: "Blending",
    description:
      "The perfumer's art — master blenders combine materials in precise ratios to create balanced, complex aromatic compositions. This process can take months or years of refinement, with formulas often passed down through generations of incense families.",
    detail: "A single blend may contain 5–30 different aromatic ingredients",
  },
  {
    number: "04",
    title: "Shaping",
    description:
      "The blended incense paste is shaped into sticks, cones, coils, or compressed into powder. Traditional methods involve hand-rolling or extrusion, requiring years of practice to achieve consistency. The shape influences burn rate and fragrance dispersion.",
    detail: "Traditional bamboo-core sticks · Solid sticks · Cones · Loose powder",
  },
  {
    number: "05",
    title: "Drying",
    description:
      "Newly shaped incense is dried in controlled conditions over several days to weeks. Proper drying is critical — too fast and the incense cracks or loses essential oils; too slow and it may develop mold. Traditional drying rooms are ventilated to preserve subtle fragrance notes.",
    detail: "Drying time: 3–30 days depending on climate and material density",
  },
  {
    number: "06",
    title: "Aging",
    description:
      "Like fine wine, premium incense improves with age. Aged incense burns more smoothly, with a richer, more rounded fragrance. Some traditional houses age their incense for years before release, allowing the materials to meld and mature into harmonious compositions.",
    detail: "Aging period: 6 months to 10+ years for premium varieties",
  },
];

export default function Craftsmanship() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["0%", "20%", "60%", "100%"]
  );

  return (
    <section
      id="craftsmanship"
      ref={containerRef}
      className="relative z-10 py-32 md:py-48 bg-ivory"
    >
      <div className="px-8 md:px-16 lg:px-24">
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
              Traditional Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-[1.15] tracking-tight"
            >
              The Art of
              <br />
              <span className="italic text-wood">Craftsmanship</span>
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="sticky top-0 z-20 h-[2px] bg-sand/30">
        <motion.div
          className="h-full bg-wood"
          style={{ width: progressWidth }}
        />
      </div>

      <div ref={scrollRef} className="px-8 md:px-16 lg:px-24 -mt-8">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
          {craftSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16"
            >
              {/* Number */}
              <div className="md:col-span-2">
                <span className="text-6xl md:text-8xl lg:text-9xl font-serif text-sand/50 leading-none">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-5 md:col-start-7">
                <p className="text-sm md:text-base font-sans text-charcoal/60 leading-relaxed mb-6">
                  {step.description}
                </p>
                <p className="text-xs font-sans text-wood/60 italic">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative divider */}
      <div className="flex justify-center mt-32">
        <div className="w-16 h-[1px] bg-sand/50" />
      </div>
    </section>
  );
}
