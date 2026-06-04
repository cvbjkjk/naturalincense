"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Material } from "@/lib/materials";

interface MaterialModalProps {
  material: Material | null;
  onClose: () => void;
}

export default function MaterialModal({
  material,
  onClose,
}: MaterialModalProps) {
  useEffect(() => {
    if (material) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [material]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {material && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-ivory"
          >
            {/* Color accent bar */}
            <div
              className="h-2 w-full"
              style={{ backgroundColor: material.color }}
            />

            <div className="p-8 md:p-12 lg:p-16">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-8 right-8 w-8 h-8 flex items-center justify-center text-charcoal/40 hover:text-charcoal transition-colors"
                aria-label="Close modal"
              >
                <span className="text-2xl leading-none">&times;</span>
              </button>

              {/* Header */}
              <div className="mb-10">
                <p className="text-xs tracking-[0.3em] uppercase font-sans text-wood mb-3">
                  Aromatic Material
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal leading-tight">
                  {material.name}
                </h2>
                <p className="text-sm md:text-base font-sans text-wood/80 italic mt-2">
                  {material.latin}
                </p>
              </div>

              {/* Content grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Left column */}
                <div className="space-y-8">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase font-sans text-charcoal/40 mb-2">
                      Origin
                    </p>
                    <p className="text-sm font-sans text-charcoal/80 leading-relaxed">
                      {material.origin}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase font-sans text-charcoal/40 mb-2">
                      Aroma Profile
                    </p>
                    <p className="text-sm font-sans text-charcoal/80 leading-relaxed italic">
                      &ldquo;{material.aroma}&rdquo;
                    </p>
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase font-sans text-charcoal/40 mb-2">
                      Description
                    </p>
                    <p className="text-sm font-sans text-charcoal/70 leading-relaxed">
                      {material.description}
                    </p>
                  </div>
                </div>

                {/* Right column */}
                <div className="space-y-8">
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase font-sans text-charcoal/40 mb-2">
                      Historical Context
                    </p>
                    <p className="text-sm font-sans text-charcoal/70 leading-relaxed">
                      {material.history}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase font-sans text-charcoal/40 mb-2">
                      Traditional Uses
                    </p>
                    <p className="text-sm font-sans text-charcoal/70 leading-relaxed">
                      {material.traditionalUses}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase font-sans text-charcoal/40 mb-2">
                      Botanical Information
                    </p>
                    <p className="text-sm font-sans text-charcoal/70 leading-relaxed">
                      {material.botanicalInfo}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
