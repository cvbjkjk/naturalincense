"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const topics = [
  {
    title: "Meditation",
    description:
      "Incense has been an anchor for contemplative practice across traditions for millennia. The rising smoke offers a visual focus — a tangible representation of impermanence, dissolving as it rises. The fragrance anchors the mind in the present moment, creating a sensory bridge between the physical and the meditative.",
    quote: "A fragrance that passes through the nose and awakens the heart.",
  },
  {
    title: "Ritual",
    description:
      "The act of lighting incense is itself a ritual — a deliberate pause in the flow of daily life. Preparing the burner, selecting the material, watching the ember catch, and witnessing the first wisp of smoke rise. These simple actions create a container for attention, transforming an ordinary moment into something sacred.",
    quote: "Ritual is the poetry of everyday action.",
  },
  {
    title: "Attention",
    description:
      "In a world designed for distraction, incense demands a different relationship with attention. Its fragrance cannot be grasped or possessed — only received. To appreciate incense is to cultivate the art of noticing: the subtle shift of a burning ember, the unfolding layers of a complex blend, the fading trail that lingers after the smoke has cleared.",
    quote: "The deepest appreciation comes not from grasping, but from receiving.",
  },
  {
    title: "Presence",
    description:
      "Incense teaches presence because it is irreproducible. Each lighting is unique — influenced by temperature, humidity, the stillness of the air, and the state of the person who lights it. This unrepeatable quality invites us to meet each moment fully, knowing it will not come again.",
    quote: "No two burns are the same — like moments, like lives.",
  },
  {
    title: "Slowness",
    description:
      "The incense tradition is an invitation to deceleration. A single stick burns for thirty minutes to an hour — a commitment of time in a time-poor world. This inherent slowness creates space for reflection, for conversation, for simply being. In the Japanese Kōdō tradition, a single incense session can last hours, unfolding with the deliberate pacing of a tea ceremony.",
    quote: "In a world that burns too fast, incense teaches us to burn slow.",
  },
];

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.97, 1]);

  return (
    <section
      ref={containerRef}
      className="relative z-10 py-32 md:py-48 px-8 md:px-16 lg:px-24 bg-ivory-dark overflow-hidden"
    >
      {/* Ambient background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(184,155,94,0.15) 0%, transparent 70%)",
          opacity: bgOpacity,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-[2]">
        {/* Section header */}
        <div className="mb-20 md:mb-32 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.3em] uppercase font-sans text-wood/60 mb-4"
          >
            Contemplation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-[1.15] tracking-tight"
          >
            Philosophy
            <br />
            <span className="italic text-wood">&amp; Mindfulness</span>
          </motion.h2>
        </div>

        {/* Content */}
        <div className="space-y-32 md:space-y-48">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="text-4xl font-serif text-sand/40 leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
                  {topic.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6 md:col-start-6 space-y-6">
                <p className="text-sm md:text-base font-sans text-charcoal/60 leading-relaxed">
                  {topic.description}
                </p>
                <blockquote className="border-l-2 border-gold/40 pl-5">
                  <p className="text-base md:text-lg font-serif italic text-charcoal/50 leading-relaxed">
                    &ldquo;{topic.quote}&rdquo;
                  </p>
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
