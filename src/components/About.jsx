import { motion } from "framer-motion";
import { Code2, Server, TestTube2, GraduationCap, MapPin } from "lucide-react";

const FOCUS = [
  { icon: Code2, label: "Frontend", detail: "React, Next.js, Tailwind" },
  { icon: Server, label: "Backend", detail: "FastAPI, Django, Flask" },
  { icon: TestTube2, label: "SQA Automation", detail: "Selenium, test pipelines" },
];

const STATS = [
  { icon: GraduationCap, label: "Degree", value: "BE Software Engineering" },
  { icon: MapPin, label: "Location", value: "Karachi, Pakistan" },
];

const PROFILE_IMAGE = "/images/profile.jpg";

function TiltCard() {
  return (
    <div className="relative mx-auto flex w-full max-w-[360px] items-center justify-center">
      <div className="about-profile-shell">
        <div className="about-profile-mask">
          <img
            src={PROFILE_IMAGE}
            alt="Syed Faham Hussain"
            width={560}
            height={560}
            className="about-profile-image"
          />
          <div className="profile-overlay-gradient absolute inset-0 rounded-[24px]" />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="site-section">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="eyebrow">02 — About</span>
          <h2 className="section-heading mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Engineering with intent
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Profile image */}
          <div>
            <TiltCard />
          </div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-sm leading-relaxed text-white">
              I&apos;m a software engineer who enjoys the full arc of building a
              product — shaping the interface, wiring up the backend, and
              writing the tests that keep it honest. My background in Software
              Engineering gave me a habit of treating quality as a feature, not
              an afterthought.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white">
              Lately I&apos;ve been focused on full-stack apps built with React
              and Python frameworks, with automated QA workflows wired into the
              release process from day one.
            </p>

            {/* Focus area cards */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {FOCUS.map(({ icon: Icon, label, detail }) => (
                <div
                  key={label}
                  className="glass card-lift rounded-xl p-4 cursor-default"
                >
                  <Icon size={18} className="text-emerald-glow transition-transform duration-300 group-hover:scale-110" />
                  <p className="mt-3 text-sm font-medium text-white">{label}</p>
                  <p className="mt-1 font-mono text-xs text-white/75">{detail}</p>
                </div>
              ))}
            </div>

            {/* Stat cards */}
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {STATS.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="glass card-lift-subtle flex items-center gap-3 rounded-xl p-4 cursor-default"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-glow-10 text-indigo-glow transition-all duration-300">
                    <Icon size={16} />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-white/70">
                      {label}
                    </p>
                    <p className="text-sm text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
