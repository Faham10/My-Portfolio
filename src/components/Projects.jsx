"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const FILTERS = ["All", "Frontend", "Backend", "SQA/Automation"];

const PROJECTS = [
  {
  title: "Car Showcase Frontend",
  description:
    "Built and deployed a responsive car showcase website using HTML5, CSS3, and JavaScript. Features a modern UI, responsive layout, smooth navigation, and is hosted on GitHub Pages.",
  tags: ["HTML5", "CSS3", "JavaScript"],
  category: "Frontend",
  github: "https://github.com/Faham10/Faham",
  demo: "https://faham10.github.io/Faham/",
},
  {
  title: "Tech Claw Company Website",
  description:
    "Developed a responsive company website using HTML5, CSS3, and Bootstrap, delivering a modern, mobile-friendly user interface with clean navigation and optimized performance.",
  tags: ["HTML5", "CSS3", "Bootstrap"],
  category: "Frontend",
  github: "https://github.com/Faham10/TechClaw",
  demo: "https://faham10.github.io/TechClaw/",
},
  {
  title: "Flask-Based E-Commerce & Administration System",
  description:
    "Built a full-stack e-commerce and administration system using Python, Flask, and MySQL. Features user authentication, product management, shopping cart, order management, and an admin dashboard. Deployed on PythonAnywhere.",
  tags: ["Python", "Flask", "MySQL"],
  category: "Backend",
  github: "",
  demo: "https://faham12.pythonanywhere.com/",
},
  {
  title: "Fresh Kart E-Commerce Website",
  description:
    "Built a responsive e-commerce web application using React.js, TypeScript, and Bootstrap. Features a modern shopping interface, product browsing, responsive design, and is deployed on Vercel.",
  tags: ["React.js", "TypeScript", "Bootstrap"],
  category: "Frontend",
  github: "https://github.com/Faham10/freshkart-store",
  demo: "https://freshkart-store.vercel.app/",
},
  {
  title: "Gym Management System",
  description:
    "Developed a desktop gym management application using C# and a relational database. Features member registration, membership management, attendance tracking, billing, and payment records through a user-friendly interface.",
  tags: ["C#", ".NET", "SQL"],
  category: "Desktop",
  github: "",
  demo: null,
},
  {
  title: "Daraz.pk E-Commerce Testing",
  description:
    "Conducted Black Box and End-to-End Testing on Daraz.pk using Selenium WebDriver with Python. Designed automated test cases, validated core user workflows, identified defects, and documented test results.",
  tags: ["Python", "Selenium WebDriver", "QA Testing"],
  category: "SQA/Automation",
  github: "",
  demo: "",
},
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () =>
      filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="site-section">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="eyebrow">04 — Projects</span>
          <h2 className="section-heading mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Things I&apos;ve shipped
          </h2>
        </motion.div>

        {/* Filter pills */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-pill rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                filter === f
                  ? "filter-pill-active border-emerald-glow/40 bg-emerald-glow/10 text-emerald-glow"
                  : "filter-pill-inactive border-line text-muted"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project cards grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35 }}
                className="glass card-lift-emerald group relative overflow-hidden rounded-2xl p-6 cursor-default"
              >
                {/* Card header */}
                <div className="flex items-start justify-between">
                  <span className="eyebrow text-[10px] text-indigo-glow">
                    {project.category}
                  </span>
                  {/* Icon links — visible by default */}
                  <div className="flex gap-2 opacity-100 transition-all duration-300">
                      {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-md border border-line p-1.5 text-muted transition-all duration-300 hover:border-emerald-glow/50 hover:text-emerald-glow hover:scale-110 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-line p-1.5 text-muted transition-all duration-300 hover:border-emerald-glow/50 hover:text-emerald-glow hover:scale-110 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mt-4 font-display text-lg font-medium text-ink transition-colors duration-300 group-hover:text-emerald-glow">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                {/* Tag badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-muted transition-all duration-300 hover:border-emerald-glow/40 hover:text-emerald-glow hover:bg-emerald-glow/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
