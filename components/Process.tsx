"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Deep-dive into your goals, constraints, and vision. I ask uncomfortable questions because the best solutions start with understanding the real problem.",
    icon: "🔍",
    accent: "#a78bfa",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Design the system before touching code. Tech stack decisions, data models, API contracts — all documented and reviewed before a single line is written.",
    icon: "◈",
    accent: "#38bdf8",
  },
  {
    num: "03",
    title: "Build & Iterate",
    desc: "Ship early, ship often. Weekly demos, async updates, and a shared staging environment so you always know exactly what's being built.",
    icon: "⚡",
    accent: "#34d399",
  },
  {
    num: "04",
    title: "Polish & Launch",
    desc: "The last 20% is where most products fail. I obsess over performance, accessibility, edge cases, and the micro-interactions that users remember.",
    icon: "✦",
    accent: "#f472b6",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="relative py-28 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: "#f472b6", fontFamily: "Space Mono, monospace" }}>
            07. Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}>
            How I Work
          </h2>
        </motion.div>

        {/* Desktop: horizontal steps */}
        <div className="hidden md:grid grid-cols-4 gap-5 relative">
          {/* Connector line */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.3), rgba(52,211,153,0.3), rgba(244,114,182,0.3), transparent)" }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
              className="glass rounded-2xl p-6 relative"
            >
              {/* Step circle */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-5 mx-auto relative z-10"
                style={{ background: `${step.accent}20`, border: `2px solid ${step.accent}50` }}
              >
                <span className="text-xs font-bold" style={{ color: step.accent, fontFamily: "Space Mono, monospace" }}>{step.num}</span>
              </div>

              <div className="text-2xl text-center mb-3">{step.icon}</div>
              <h3 className="text-center font-bold mb-3" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem" }}>{step.title}</h3>
              <p className="text-xs leading-relaxed text-center" style={{ color: "var(--text-muted)" }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical steps */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="glass rounded-xl p-5 flex gap-4"
            >
              <div
                className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center"
                style={{ background: `${step.accent}20`, border: `1px solid ${step.accent}40` }}
              >
                <span className="text-xs font-bold" style={{ color: step.accent, fontFamily: "Space Mono, monospace" }}>{step.num}</span>
              </div>
              <div>
                <div className="font-bold mb-1" style={{ fontFamily: "Cormorant Garamond, serif" }}>{step.icon} {step.title}</div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
