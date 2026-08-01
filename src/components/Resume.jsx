"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Loader2, CheckCircle2, GraduationCap, Briefcase } from "lucide-react";
import toast from "react-hot-toast";

const TIMELINE = [
  {
    icon: GraduationCap,
    period: "2022 — 2026",
    title: "BE Software Engineering",
    org: "Karachi Institute of Economics and Technology (KIET)",
    detail:
      "Graduated with a strong foundation in software engineering, web development, databases, software testing, and data structures & algorithms.",
  },
  {
    icon: Briefcase,
    period: "2026",
    title: "Frontend Developer Intern",
    org: "Tech Claw Company",
    detail:
      "Completed a 6-week frontend development internship, building responsive websites using HTML5, CSS3, Bootstrap, JavaScript, and React.js while collaborating with the development team.",
  },
  {
    icon: Briefcase,
    period: "2024 — 2026",
    title: "Software Development Projects",
    org: "Personal & Academic Projects",
    detail:
      "Developed multiple frontend, backend, desktop, and QA automation projects using React.js, Python, Flask, C#, MySQL, Selenium WebDriver, and Bootstrap.",
  },
];
export default function Resume() {
  const [status, setStatus] = useState("idle"); // idle | loading | done

  const handleDownload = () => {
    if (status !== "idle") return;
    // start loading state
    setStatus("loading");

    // Trigger an actual download of the CV file (works in dev & prod)
    try {
      const fileUrl = `${import.meta.env.BASE_URL}cv/Faham_Hussain_CV.pdf`;
      const a = document.createElement("a");
      a.href = fileUrl;
      a.download = "Faham_Hussain_CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch {
      // ignore — browsers usually handle the download
    }

    // Keep the existing simulated UX feedback
    setTimeout(() => {
      setStatus("done");
      toast.success("Resume downloaded");
      setTimeout(() => setStatus("idle"), 2200);
    }, 800);
  };

  return (
    <section id="resume" className="site-section">
      <div className="site-container !max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="eyebrow">05 — Resume</span>
          <h2 className="section-heading mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Where I&apos;ve been
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-7 sm:pl-10">
          {/* Vertical line — uses theme-aware gradient */}
          <div
            className="absolute left-[9px] top-2 bottom-2 w-px sm:left-[13px]"
            style={{ background: "var(--timeline-line)" }}
          />

          {TIMELINE.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-8 last:mb-0 sm:mb-10"
              >
                {/* Timeline dot */}
                <span className="glass absolute -left-7 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-glow/40 sm:-left-10 sm:h-6 sm:w-6">
                  <span className="h-2 w-2 rounded-full bg-emerald-glow glow-dot" />
                </span>

                {/* Timeline card */}
                <div className="glass card-lift-emerald group rounded-2xl p-5 sm:p-6 cursor-default">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs text-indigo-glow">{item.period}</span>
                    <Icon
                      size={16}
                      className="text-muted transition-colors duration-300 group-hover:text-emerald-glow"
                    />
                  </div>
                  <h3 className="mt-2 font-display text-base font-medium text-ink transition-colors duration-300 group-hover:text-emerald-glow sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-emerald-glow">{item.org}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Download + View buttons */}
        <div className="mt-12 flex justify-center gap-3 sm:mt-14">
          {/* Download button (triggers actual download + simulated UX) */}
          <button
            onClick={handleDownload}
            disabled={status === "loading"}
            className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-glow to-indigo-glow px-6 py-3.5 text-sm font-medium shadow-glow transition-all duration-300 disabled:opacity-90 hover:scale-[1.04] hover:shadow-[0_0_36px_rgba(16,185,129,0.4)] active:scale-[0.97]"
            style={{ color: "var(--button-text)" }}
          >
            {status === "idle" && (
              <>
                <Download size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                Download CV
              </>
            )}
            {status === "loading" && (
              <>
                <Loader2 size={17} className="animate-spin" />
                Preparing file…
              </>
            )}
            {status === "done" && (
              <>
                <CheckCircle2 size={17} />
                Downloaded
              </>
            )}
          </button>

          {/* View CV button (opens PDF in new tab) */}
          <a
            href={`${import.meta.env.BASE_URL}cv/Faham_Hussain_CV.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-border theme-heading inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/8 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] active:scale-[0.97]"
          >
            View CV
          </a>
        </div>
      </div>
    </section>
  );
}
