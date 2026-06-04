"use client";

import { motion } from "framer-motion";
import { articles } from "@/lib/journal";

const categoryColors: Record<string, string> = {
  Materials: "#8A6B4A",
  History: "#B89B5E",
  Craftsmanship: "#6B8E6B",
  "Aromatic Science": "#6B7B8E",
};

export default function ResearchJournal() {
  return (
    <section
      id="journal"
      className="relative z-10 py-32 md:py-48 px-8 md:px-16 lg:px-24 bg-ivory"
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
            Research
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-[1.15] tracking-tight"
          >
            Research
            <br />
            <span className="italic text-wood">Journal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-sm md:text-base font-sans text-charcoal/50 max-w-xl"
          >
            Explorations at the intersection of tradition and science —
            investigating incense culture through historical research, material
            science, and contemplative practice.
          </motion.p>
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-ivory-dark border border-sand/20 mb-6 aspect-[16/10]">
                {/* Placeholder color block */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundColor:
                      categoryColors[article.category] || "#8A6B4A",
                    opacity: 0.15,
                  }}
                />

                {/* Decorative pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border border-charcoal/5 rounded-full" />
                  <div className="absolute w-8 h-8 border border-charcoal/5 rounded-full" />
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase font-sans text-ivory px-3 py-1"
                    style={{
                      backgroundColor:
                        categoryColors[article.category] || "#8A6B4A",
                    }}
                  >
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-sans text-charcoal/40">
                  <span>{article.date}</span>
                  <span className="w-3 h-[1px] bg-charcoal/20" />
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif text-charcoal group-hover:text-wood transition-colors duration-500 leading-tight">
                  {article.title}
                </h3>
                <p className="text-sm font-sans text-charcoal/50 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="pt-2">
                  <span className="text-[10px] tracking-[0.25em] uppercase font-sans text-charcoal/30 group-hover:text-wood/60 transition-colors duration-500 inline-flex items-center gap-2">
                    Read Article
                    <span className="block w-6 h-[1px] bg-charcoal/20 group-hover:bg-wood/40 transition-colors duration-500" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Archive link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#"
            className="group flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-sans text-charcoal/50 hover:text-charcoal transition-colors duration-500"
          >
            <span className="w-8 h-[1px] bg-charcoal/30 group-hover:w-12 transition-all duration-500" />
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
}
