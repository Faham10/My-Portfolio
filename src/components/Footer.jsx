import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-8">
      {/* Subtle accent separator gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--accent-soft) 30%, var(--accent-secondary) 50%, var(--accent-soft) 70%, transparent)",
          opacity: 0.6,
        }}
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted sm:flex-row">
        <Link
          to="/"
          className="group flex items-center gap-2 font-display text-ink transition-all duration-300 hover:opacity-80"
        >
          <Terminal
            size={14}
            className="text-emerald-glow transition-transform duration-300 group-hover:rotate-12"
          />
          Faham<span className="text-emerald-glow">.dev</span>
        </Link>
        <span className="font-mono text-xs">
          © {new Date().getFullYear()} Syed Faham Hussain — built with React + Vite
        </span>
      </div>
    </footer>
  );
}
