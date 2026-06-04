"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "About", href: "#" },
  { label: "Research Journal", href: "#journal" },
  { label: "Materials Library", href: "#materials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-charcoal text-ivory/80">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase font-sans text-ivory/40 mb-6">
                Natural Incense
              </p>
              <p className="text-sm font-sans leading-relaxed text-ivory/60 max-w-xs">
                Preserving the wisdom of natural incense.
              </p>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase font-sans text-ivory/40 mb-6">
                Explore
              </p>
              <div className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-sans text-ivory/60 hover:text-ivory transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase font-sans text-ivory/40 mb-6">
                Contact
              </p>
              <p className="text-sm font-sans text-ivory/60 leading-relaxed">
                hello@naturalincense.de
              </p>
              <p className="text-sm font-sans text-ivory/60 mt-6 leading-relaxed">
                Berlin, Germany
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="border-t border-ivory/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs font-sans text-ivory/40 tracking-wide">
            © {new Date().getFullYear()} naturalincense.de — All rights reserved.
          </p>
          <p className="text-[10px] font-sans text-ivory/30 tracking-[0.2em] uppercase">
            A Digital Museum of Natural Incense and Aromatic Culture
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
