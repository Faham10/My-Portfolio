"use client";

import { motion } from "framer-motion";
import {
  Server,
  Database,
  Layout,
  Braces,
  FileCode2,
  Bot,
  ClipboardCheck,
  Workflow,
} from "lucide-react";

const CATEGORIES = [
  {
    title: "Backend & DB",
    accent: "emerald",
    skills: [
      { name: "Python", icon: FileCode2, level: 92 },
      { name: "FastAPI", icon: Server, level: 88 },
      { name: "Django", icon: Server, level: 82 },
      { name: "Flask", icon: Server, level: 85 },
      { name: "SQLite / MySQL", icon: Database, level: 87 },
    ],
  },
  {
    title: "Frontend & Tools",
    accent: "indigo",
    skills: [
      { name: "React", icon: Braces, level: 90 },
      { name: "JavaScript", icon: Braces, level: 90 },
      { name: "Tailwind CSS", icon: Layout, level: 92 },
      { name: "HTML / CSS", icon: Layout, level: 95 },
    ],
  },
  {
    title: "Automation & SQA",
    accent: "emerald",
    skills: [
      { name: "Selenium", icon: Bot, level: 84 },
      { name: "QA Test Design", icon: ClipboardCheck, level: 86 },
      { name: "CI Workflows", icon: Workflow, level: 78 },
    ],
  },
];

function SkillRow({ skill }) {
  const Icon = skill.icon;
  return (
    <div className="group/skill">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2.5 text-sm text-ink">
          <Icon
            size={15}
            className="text-muted transition-all duration-300 group-hover/skill:text-emerald-glow group-hover/skill:scale-110"
          />
          <span className="transition-colors duration-300 group-hover/skill:text-ink">
            {skill.name}
          </span>
        </span>
        <span className="font-mono text-xs text-muted transition-colors duration-300 group-hover/skill:text-emerald-glow">
          {skill.level}%
        </span>
      </div>
      {/* Progress bar track — light-mode aware via skill-track class */}
      <div className="skill-track mt-2 h-[3px] w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-emerald-glow to-indigo-glow"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="site-section">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="eyebrow">03 — Skills</span>
          <h2 className="section-heading mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            The stack I build with
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass card-lift-emerald group rounded-2xl p-6 cursor-default"
            >
              <h3 className="font-display text-lg font-medium text-ink transition-colors duration-300 group-hover:text-emerald-glow">
                {cat.title}
              </h3>
              <div className="mt-6 space-y-5">
                {cat.skills.map((skill) => (
                  <SkillRow key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
