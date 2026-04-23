"use client";
import { motion } from "framer-motion";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Services", id: "services" },
  { label: "Skills", id: "skills" },
  { label: "Process", id: "process" },
  { label: "Writing", id: "blog" },
  { label: "Contact", id: "contact" },
];

const socials = [
  { label: "GH", href: "#", color: "#a78bfa" },
  { label: "X", href: "#", color: "#38bdf8" },
  { label: "LI", href: "#", color: "#34d399" },
  { label: "DR", href: "#", color: "#f472b6" },
];

export default function Footer() {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative pt-16 pb-10 px-4">
      <div className="accent-line mb-14 max-w-6xl mx-auto opacity-50" />
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid sm:grid-cols-3 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #a78bfa, #34d399)" }}>
                <span className="text-black font-bold text-sm" style={{ fontFamily: "Space Mono, monospace" }}>A</span>
              </div>
              <span className="font-bold tracking-wider" style={{ fontFamily: "Space Mono, monospace" }}>SERLIN.DEV</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}>
              Building digital experiences that merge aesthetic beauty with technical precision.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>Navigation</div>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scroll(id)}
                  className="text-sm text-left transition-colors duration-200 hover:text-white"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>Connect</div>
            <div className="space-y-2 mb-5">
              <div className="text-sm" style={{ color: "var(--text-secondary)" }}>hello@sgserlin.dev</div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-2)" }} />
                <span className="text-sm" style={{ color: "var(--accent-2)" }}>Open to work</span>
              </div>
            </div>
            <div className="flex gap-3">
              {socials.map(({ label, color }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-9 h-9 glass rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-200"
                  style={{ color, fontFamily: "Space Mono, monospace" }}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <motion.div
            className="text-xs tracking-widest"
            style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            © {new Date().getFullYear()} S G Serlin · Crafted with precision
          </motion.div>
          <div className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>
            Built with Next.js · Tailwind · Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
