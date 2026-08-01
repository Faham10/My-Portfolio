import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/certification", label: "Certification" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

function DevLogo() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-8 w-8 shrink-0"
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="2.5"
        width="35"
        height="35"
        rx="10"
        fill="rgba(34, 211, 238, 0.12)"
        stroke="rgba(103, 232, 249, 0.82)"
        strokeWidth="1.5"
      />
      <path
        d="M14 13 10 20l4 7"
        stroke="#67e8f9"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 13l4 7-4 7"
        stroke="#67e8f9"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 27l4-14"
        stroke="#67e8f9"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.dataset.theme = savedTheme;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = () => setOpen(false);
  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="site-container">
        <div
          className={`glass flex items-center justify-between rounded-2xl px-4 py-3 transition-shadow duration-300 sm:px-5 ${
            scrolled ? "shadow-card" : ""
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2 font-display text-lg font-medium tracking-tight text-ink transition-all duration-300 hover:opacity-90"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-glow-10 text-emerald-glow transition-all duration-300 group-hover:bg-emerald-glow-18 group-hover:shadow-glow">
              <DevLogo />
            </span>
            <span>
              Faham<span className="text-emerald-glow">.dev</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex flex-1 justify-center min-w-0">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative px-4 py-2 text-sm text-muted transition-all duration-300 hover:text-ink"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="nav-active absolute inset-0 rounded-lg bg-white/5"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${active ? "text-ink" : ""}`}
                  >
                    {link.label}
                  </span>
                  {active && (
                    <motion.span
                      layoutId="nav-dot"
                      className="glow-dot absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-emerald-glow"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-toggle hidden rounded-lg border border-line bg-white/5 px-3 py-2 text-sm text-ink transition-all duration-300 hover:border-cyan-400/40 hover:text-cyan-300 hover:scale-[1.03] active:scale-[0.97] lg:flex lg:items-center lg:gap-2"
              aria-label="Toggle dark and light theme"
              aria-pressed={theme === "light"}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              <span>{theme === "dark" ? "Light" : "Dark"}</span>
            </button>

            <Link
              to="/contact"
              className="hidden rounded-lg border border-emerald-glow-40 bg-emerald-glow-10 px-4 py-2 text-sm font-medium text-emerald-glow transition-all duration-300 hover:bg-emerald-glow-20 hover:shadow-glow hover:scale-[1.03] active:scale-[0.97] lg:block"
            >
              Let&apos;s talk
            </Link>

            {/* Mobile hamburger */}
            <button
              className="rounded-lg p-1.5 text-ink transition-all duration-300 hover:bg-white/10 hover:text-cyan-300 active:scale-90 lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3 lg:hidden"
            >
              {LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={handleNav}
                    className={`rounded-lg px-4 py-3 text-left text-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] ${
                      active
                        ? "nav-link-active bg-white/5 text-ink"
                        : "text-muted hover:bg-white/5 hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  toggleTheme();
                  handleNav();
                }}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-line px-4 py-3 text-sm text-ink transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/5 hover:text-cyan-300 active:scale-[0.97]"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                Switch to {theme === "dark" ? "Light" : "Dark"} Theme
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
