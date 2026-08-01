import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Loader2, Send } from "lucide-react";
import toast from "react-hot-toast";
import { submitContactForm } from "../services/contact";

const CHANNELS = [
  { icon: Mail, label: "Email", value: "fahamhussain14@gmail.com", href: "mailto:fahamhussain14@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com", href: "https://github.com/Faham10" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com", href: "https://www.linkedin.com/in/syed-faham-hussain-38a3702ab/" },
  { icon: MapPin, label: "Location", value: "Karachi, Pakistan", href: null },
];

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const result = await submitContactForm(form);

      if (!result.ok) {
        if (result.errors) setErrors(result.errors);
        toast.error(result.message || "Something went wrong");
        return;
      }

      toast.success(result.message || "Message sent successfully");
      setForm(initialForm);
    } catch {
      toast.error("Network error — please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mb-12 text-center sm:mb-16"
        >
          <span className="eyebrow">06 — Contact</span>
          <h2 className="section-heading mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            Let&apos;s build something
          </h2>
        </motion.div>

        {/* Layout: stacked on mobile/tablet, side-by-side on large screens */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">

          {/* ── Left column: channels ── */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-2"
          >
            <p className="text-sm leading-relaxed text-white">
              I&apos;m open to internships, freelance projects, and full-time
              roles in full-stack development or SQA automation. Reach out
              through whichever channel works best for you.
            </p>

            <div className="mt-7 space-y-3 sm:mt-8">
              {CHANNELS.map(({ icon: Icon, label, value, href }) => {
                const Wrapper = href ? "a" : "div";
                return (
                  <Wrapper
                    key={label}
                    {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
                    className="glass contact-channel flex items-center gap-3 rounded-xl p-4"
                  >
                    <span className="channel-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-glow-10 text-emerald-glow transition-all duration-300">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wide text-white/70">
                        {label}
                      </p>
                      <p className="text-sm text-white">{value}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </motion.div>

          {/* ── Right column: form ── */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass-strong space-y-4 rounded-2xl p-5 sm:p-6 lg:col-span-3"
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-white/80">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="theme-input w-full rounded-lg border border-line px-4 py-2.5 text-sm text-ink outline-none transition-all duration-300 placeholder:text-muted/60 hover:border-muted/50 focus:border-emerald-glow/50 focus:shadow-[0_0_0_3px_var(--accent-soft)]"
                />
                {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-white/80">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="theme-input w-full rounded-lg border border-line px-4 py-2.5 text-sm text-ink outline-none transition-all duration-300 placeholder:text-muted/60 hover:border-muted/50 focus:border-emerald-glow/50 focus:shadow-[0_0_0_3px_var(--accent-soft)]"
                />
                {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="mb-1.5 block font-mono text-xs text-white/80">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="theme-input w-full rounded-lg border border-line px-4 py-2.5 text-sm text-ink outline-none transition-all duration-300 placeholder:text-muted/60 hover:border-muted/50 focus:border-emerald-glow/50 focus:shadow-[0_0_0_3px_var(--accent-soft)]"
              />
              {errors.subject && <p className="mt-1 text-xs text-rose-400">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-white/80">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about the project..."
                className="theme-input w-full resize-none rounded-lg border border-line px-4 py-2.5 text-sm text-ink outline-none transition-all duration-300 placeholder:text-muted/60 hover:border-muted/50 focus:border-emerald-glow/50 focus:shadow-[0_0_0_3px_var(--accent-soft)]"
              />
              {errors.message && <p className="mt-1 text-xs text-rose-400">{errors.message}</p>}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-glow to-indigo-glow px-5 py-3 text-sm font-medium shadow-glow transition-all duration-300 disabled:opacity-80 hover:scale-[1.02] hover:shadow-[0_0_34px_rgba(16,185,129,0.38)] active:scale-[0.97] sm:w-auto"
              style={{ color: "var(--button-text)" }}
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
   );
}
