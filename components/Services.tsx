"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "⚡",
    title: "Full-Stack Development",
    desc: "End-to-end product engineering — from database schema to pixel-perfect UI. I build fast, scalable systems that don't cut corners.",
    features: ["Next.js / React", "Node.js APIs", "Database design", "CI/CD pipelines"],
    accent: "#a78bfa",
    price: "From $4,000",
  },
  {
    icon: "✦",
    title: "UI/UX Design Systems",
    desc: "Design systems that scale. Every component, token, and interaction principle documented and ready for teams to build on.",
    features: ["Figma design tokens", "Component libraries", "Accessibility audits", "Brand guidelines"],
    accent: "#f472b6",
    price: "From $2,500",
  },
  {
    icon: "◈",
    title: "Performance Engineering",
    desc: "Diagnose and eliminate bottlenecks. I've cut load times by 80%+ for production apps with millions of monthly users.",
    features: ["Core Web Vitals", "Bundle optimization", "CDN strategy", "Database tuning"],
    accent: "#34d399",
    price: "From $1,500",
  },
  {
    icon: "◉",
    title: "Technical Consulting",
    desc: "Architecture reviews, tech stack decisions, and engineering leadership for teams that want to move faster without breaking things.",
    features: ["Architecture review", "Tech stack audit", "Team mentoring", "Code reviews"],
    accent: "#38bdf8",
    price: "From $250/hr",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-28 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: "#38bdf8", fontFamily: "Space Mono, monospace" }}>
            06. Services
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}>
              What I Offer
            </h2>
            <p className="text-sm max-w-xs" style={{ color: "var(--text-muted)", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}>
              Flexible engagements for startups, scale-ups, and agencies.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-8 relative overflow-hidden group cursor-default"
              style={{ transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)" }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${s.accent}15, transparent 60%)`, border: `1px solid ${s.accent}30` }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${s.accent}15`, border: `1px solid ${s.accent}30` }}
                  >
                    {s.icon}
                  </div>
                  <span
                    className="text-xs font-bold tracking-wider px-3 py-1 rounded-full"
                    style={{ color: s.accent, background: `${s.accent}15`, border: `1px solid ${s.accent}25`, fontFamily: "Space Mono, monospace" }}
                  >
                    {s.price}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Cormorant Garamond, serif" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}>
                  {s.desc}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {s.features.map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ background: s.accent }} />
                      <span className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>{f}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-xs font-semibold tracking-wider flex items-center gap-1.5 group/btn transition-all duration-200"
                  style={{ color: s.accent, fontFamily: "Space Mono, monospace" }}
                >
                  <span>Enquire</span>
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >→</motion.span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 glass-strong rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(167,139,250,0.05), rgba(52,211,153,0.05))" }} />
          <div className="relative z-10">
            <div className="font-bold text-lg mb-1">Not sure what you need?</div>
            <div className="text-sm" style={{ color: "var(--text-secondary)" }}>Let&apos;s have a free 30-minute discovery call.</div>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="relative z-10 glow-btn glass px-8 py-3 rounded-xl font-bold text-sm tracking-widest uppercase shrink-0"
            style={{ color: "var(--accent-1)", borderColor: "rgba(167,139,250,0.3)" }}
          >
            Book a Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
