"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  { year: "2019", title: "Started Journey", desc: "Began freelancing with React and built first SaaS product." },
  { year: "2020", title: "Joined AgencyX", desc: "Led frontend team, shipped 8 client projects with zero bugs." },
  { year: "2022", title: "Senior Dev", desc: "Promoted to Senior Developer. Mentored 3 junior engineers." },
  { year: "2024", title: "Studio X", desc: "Co-founded Studio X — design-led development studio." },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: "var(--accent-1)", fontFamily: "Space Mono, monospace" }}>
            01. About
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}>
            The Person Behind the Code
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-strong rounded-2xl p-8 space-y-4">
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)", fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem" }}>
                I&apos;m a developer who believes that great software is indistinguishable from great design. I write clean, performant code that doesn&apos;t just work — it <em>breathes</em>.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "Cormorant Garamond, serif", fontSize: "1.05rem" }}>
                Based in San Francisco, I specialize in building thoughtful digital products that scale. From micro-interactions to distributed systems — I care about every layer of the stack.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects Shipped", value: "42+" },
                { label: "Happy Clients", value: "18" },
                { label: "Open Source Stars", value: "2.4k" },
                { label: "Cups of Coffee", value: "∞" },
              ].map(({ label, value }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.02 }}
                  className="glass glass-hover rounded-xl p-4"
                >
                  <div className="text-2xl font-bold gradient-text-2 mb-1">{value}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>
              Career Timeline
            </div>
            {timeline.map(({ year, title, desc }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="glass glass-hover rounded-xl p-5 flex gap-4"
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)" }}>
                    <span className="text-xs font-bold" style={{ color: "var(--accent-1)", fontFamily: "Space Mono, monospace" }}>{year}</span>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">{title}</div>
                  <div className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
