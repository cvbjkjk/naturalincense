"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { materials, type Material } from "@/lib/materials";
import MaterialModal from "@/components/ui/MaterialModal";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

const materialIcons: Record<string, string> = {
  agarwood: "🌳",
  sandalwood: "🪵",
  frankincense: "💧",
  myrrh: "🟤",
  clove: "🌸",
  cinnamon: "🌿",
  patchouli: "🍃",
};

export default function MaterialsLibrary() {
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(
    null
  );

  return (
    <section
      id="materials"
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
            Knowledge Archive
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-[1.15] tracking-tight"
          >
            Incense Materials
            <br />
            <span className="text-wood/70 italic">Library</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-sm md:text-base font-sans text-charcoal/50 max-w-xl"
          >
            Explore the botanical treasures that form the foundation of natural
            incense traditions. Each material has a story spanning continents
            and centuries.
          </motion.p>
        </div>

        {/* Materials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          {materials.map((material) => (
            <motion.button
              key={material.id}
              variants={cardVariants}
              onClick={() => setSelectedMaterial(material)}
              className="group relative overflow-hidden aspect-[4/5] bg-ivory border border-sand/30 cursor-pointer text-left"
            >
              {/* Color block */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundColor: material.color }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <span className="text-2xl mb-3 opacity-60">{materialIcons[material.id] || "🌿"}</span>
                <h3 className="text-xl md:text-2xl font-serif text-ivory mb-1">
                  {material.name}
                </h3>
                <p className="text-xs font-sans text-ivory/60 italic mb-3 line-clamp-1">
                  {material.latin}
                </p>
                <p className="text-xs font-sans text-ivory/50 leading-relaxed line-clamp-2">
                  {material.aroma}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-ivory/70">
                    Explore
                  </span>
                  <span className="block w-6 h-[1px] bg-ivory/50" />
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <MaterialModal
        material={selectedMaterial}
        onClose={() => setSelectedMaterial(null)}
      />
    </section>
  );
}
