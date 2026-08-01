"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Sparkles } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "Python for Everybody",
    issuer: "University of Michigan (Coursera)",
    detail:
      "Learned Python fundamentals, data structures, file handling, and problem-solving techniques.",
  },
  {
    title: "React Fundamentals",
    issuer: "Coursera / Udemy",
    detail:
      "Covered React components, hooks, state management, routing, and responsive UI development.",
  },
  {
    title: "Backend & API Development",
    issuer: "Professional Online Course",
    detail:
      "Learned REST API development, Flask backend architecture, authentication, and database integration.",
  },
];

export default function Certification() {
  return (
    <section id="certification" className="site-section">
      <div className="site-container">
        <motion.div
          className="mb-12 text-center sm:mb-16"
        >
          <span className="eyebrow">05 — Certification</span>
          <h2 className="section-heading mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Learning that keeps me sharp
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
          {CERTIFICATIONS.map((item) => (
            <motion.div
              key={item.title}
              className="glass card-lift group rounded-2xl p-6 cursor-default"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 transition-all duration-300 group-hover:bg-cyan-400/20 group-hover:shadow-[0_0_16px_rgba(34,211,238,0.3)]">
                  <Award size={18} />
                </span>
                <Sparkles
                  size={16}
                  className="text-cyan-300 transition-all duration-300 group-hover:scale-125 group-hover:text-cyan-200"
                />
              </div>
              <h3 className="mt-5 font-display text-lg font-medium text-ink transition-colors duration-300 group-hover:text-cyan-300">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-cyan-300">{item.issuer}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
              {/* Verified badge — light-mode aware via cert-badge class */}
              <div className="cert-badge mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-200 transition-all duration-300 group-hover:border-cyan-400/45 group-hover:bg-cyan-400/10">
                <ShieldCheck size={12} />
                Verified learning
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
