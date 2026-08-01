import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Github, Linkedin, Sparkles } from "lucide-react";

// Typing effect cycling through multiple titles
function Typing({
  titles = [
    "Software Engineer",
    "Frontend Engineer",
    "QA Engineer",
    "React Developer",
    "Python Developer",
  ],
  typingSpeed = 70,
  deletingSpeed = 40,
  pause = 2000,
}) {
  const [display, setDisplay] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | deleting

  useEffect(() => {
    const prefersReduced = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(titles[0]);
      return;
    }

    const currentTitle = titles[titleIndex];
    let timeout = null;

    if (phase === "typing") {
      if (display.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplay(currentTitle.slice(0, display.length + 1));
        }, typingSpeed + Math.floor(Math.random() * 30));
      } else {
        timeout = setTimeout(() => {
          setPhase("deleting");
        }, pause);
      }
    } else if (phase === "deleting") {
      if (display.length > 0) {
        timeout = setTimeout(() => {
          setDisplay(currentTitle.slice(0, display.length - 1));
        }, deletingSpeed + Math.floor(Math.random() * 20));
      } else {
        timeout = setTimeout(() => {
          setTitleIndex((idx) => (idx + 1) % titles.length);
          setPhase("typing");
        }, typingSpeed);
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [display, phase, titleIndex, titles, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="inline-flex items-center">
      <span className="theme-heading ml-2 min-h-[1.5em] inline-block">{display}</span>
      <span aria-hidden className="cursor"></span>
    </span>
  );
}

export default function Hero() {
  // section reveal variant for the hero heading and content
  const container = useMemo(() => ({
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  }), []);

  const heading = useMemo(() => ({
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } },
  }), []);

  return (
    <motion.section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 sm:pt-28 lg:pt-32"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.2, 0.9, 0.2, 1] }}
    >
      {/* Floating background subtle blobs/particles (pure CSS animation) */}
      <div className="theme-orb pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full blur-[120px] sm:h-[520px] sm:w-[520px]" />
      <div className="theme-orb pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full blur-[120px] sm:h-[420px] sm:w-[420px]" />

      <div className="hero-bg-floating pointer-events-none -z-20">
        <span className="hero-p" />
        <span className="hero-p" />
        <span className="hero-p" />
      </div>

      <div className="site-container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center w-full">
        {/* ── Text column ── */}
        <motion.div variants={container} initial="hidden" animate="show">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 glow-dot" />
            open to opportunities
          </span>

          <motion.h1
            variants={heading}
            className="theme-heading mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-[-0.03em] sm:mt-6 sm:text-5xl lg:text-6xl"
          >
            <span className="inline-flex flex-wrap items-baseline gap-x-2 text-white">
              <span>Hi, I&apos;m</span>
              <span className="hero-name-gradient inline-block">Syed Faham</span>
            </span>
            <span className="block">
              <span className="inline-block invisible">Hi, I&apos;m </span>
              <span className="hero-name-gradient inline-block">Hussain</span>
            </span>
          </motion.h1>

          {/* Typing role */}
          <div className="mt-4 flex h-8 items-center font-mono text-base text-white sm:text-lg md:text-xl">
            <span className="text-cyan-300 select-none">&gt;</span>
            <Typing />
          </div>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white sm:mt-6">
            I craft luxury-grade full-stack experiences with React, Python, and
            strong product thinking — blending polished interfaces with
            dependable backend delivery.
          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] active:scale-[0.97]"
            >
              My Projects
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="theme-border theme-heading inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/8 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] active:scale-[0.97]"
            >
              Contact Me
            </Link>
          </div>

          {/* Social icons */}
          <div className="mt-7 flex items-center gap-3 sm:mt-9">
            <a
              href="mailto:fahamhussain14@gmail.com"
              className="btn-icon rounded-lg p-2.5 transition-colors hover:bg-slate-800"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
            <a
              href="https://github.com/Faham10"
              target="_blank"
              rel="noreferrer"
              className="btn-icon rounded-lg p-2.5 transition-colors hover:bg-slate-800"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/syed-faham-hussain-38a3702ab/"
              target="_blank"
              rel="noreferrer"
              className="btn-icon rounded-lg p-2.5 transition-colors hover:bg-slate-800"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
          </div>
        </motion.div>

        {/* ── Profile image column ── */}
        <div className="relative mx-auto flex w-full max-w-[360px] items-center justify-center sm:max-w-md">
          <div className="absolute inset-6 -z-10 rounded-full bg-cyan-400/20 blur-[80px]" />

          <div className="profile-shell relative">
            {/* Added style containment to suppress CSS masking syntax warnings if global classes conflict */}
            <div className="profile-mask overflow-hidden rounded-full relative">
              <img
                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                alt="Syed Faham Hussain"
                width={560}
                height={560}
                className="profile-image object-cover rounded-full"
              />
              <div className="profile-overlay-gradient absolute inset-0 rounded-full transition-opacity duration-300 bg-gradient-to-t from-slate-950/40 to-transparent" />
              <div className="absolute inset-0 flex items-end justify-center rounded-full pb-7 transition-all duration-300">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-slate-950/70 px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur">
                 <Sparkles size={12} />
                 VIP Profile Spotlight
               </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}