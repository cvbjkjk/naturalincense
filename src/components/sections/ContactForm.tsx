"use client";

import { createClient } from "@/lib/supabase";
import { motion } from "framer-motion";
import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const subjects = [
  "General Inquiry",
  "Research Collaboration",
  "Material Knowledge",
  "Workshop / Event",
  "Press & Media",
  "Other",
];

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const updateField = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setState("submitting");
    setErrorMessage("");

    const supabase = createClient();

    const { error } = await supabase
      .from("contact_submissions")
      .insert({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject || null,
        message: form.message.trim(),
      });

    if (error) {
      setState("error");
      setErrorMessage(error.message);
      return;
    }

    setState("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
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
            Connect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-[1.15] tracking-tight"
          >
            Get in
            <br />
            <span className="italic text-wood">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-sm md:text-base font-sans text-charcoal/50 max-w-xl"
          >
            Whether you share our passion for natural incense, have a research
            inquiry, or wish to collaborate — we look forward to hearing from
            you.
          </motion.p>
        </div>

        {/* Form + info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-8"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-[10px] tracking-[0.25em] uppercase font-sans text-charcoal/50 mb-3"
              >
                Name <span className="text-wood">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Your name"
                className="w-full bg-transparent border-b border-sand/50 pb-3 text-sm font-sans text-charcoal placeholder:text-charcoal/20 outline-none focus:border-wood transition-colors duration-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-[10px] tracking-[0.25em] uppercase font-sans text-charcoal/50 mb-3"
              >
                Email <span className="text-wood">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="your@email.com"
                className="w-full bg-transparent border-b border-sand/50 pb-3 text-sm font-sans text-charcoal placeholder:text-charcoal/20 outline-none focus:border-wood transition-colors duration-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="contact-subject"
                className="block text-[10px] tracking-[0.25em] uppercase font-sans text-charcoal/50 mb-3"
              >
                Subject
              </label>
              <select
                id="contact-subject"
                value={form.subject}
                onChange={(e) => updateField("subject", e.target.value)}
                className="w-full bg-transparent border-b border-sand/50 pb-3 text-sm font-sans text-charcoal outline-none focus:border-wood transition-colors duration-500 appearance-none cursor-pointer"
              >
                <option value="">Select a subject</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-[10px] tracking-[0.25em] uppercase font-sans text-charcoal/50 mb-3"
              >
                Message <span className="text-wood">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder="Share your thoughts..."
                className="w-full bg-transparent border-b border-sand/50 pb-3 text-sm font-sans text-charcoal placeholder:text-charcoal/20 outline-none focus:border-wood transition-colors duration-500 resize-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={!isValid || state === "submitting"}
                className="group inline-flex items-center gap-4 text-xs tracking-[0.25em] uppercase font-sans text-charcoal/50 hover:text-charcoal transition-colors duration-500 disabled:opacity-30 disabled:pointer-events-none"
              >
                <span className="w-8 h-[1px] bg-charcoal/30 group-hover:w-12 transition-all duration-500" />
                {state === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </div>

            {/* Feedback messages */}
            {state === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-sans text-[#6B8E6B]"
              >
                Thank you. Your message has been received.
              </motion.p>
            )}
            {state === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-sans text-red-500/80"
              >
                {errorMessage || "Something went wrong. Please try again."}
              </motion.p>
            )}
          </motion.form>

          {/* Side info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-12"
          >
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-charcoal/40 mb-4">
                Email
              </p>
              <p className="text-sm font-sans text-charcoal/60">
                hello@naturalincense.de
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-charcoal/40 mb-4">
                Location
              </p>
              <p className="text-sm font-sans text-charcoal/60">
                Berlin, Germany
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase font-sans text-charcoal/40 mb-4">
                Response Time
              </p>
              <p className="text-sm font-sans text-charcoal/60">
                We typically respond within 48 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
