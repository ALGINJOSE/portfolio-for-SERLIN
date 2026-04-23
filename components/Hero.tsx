"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = ["Full-Stack Developer", "UI/UX Designer", "Creative Coder", "Open Source Contributor"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          <motion.div variants={item} className="flex items-center gap-3">
            <div className="pulse-dot w-2 h-2 rounded-full" style={{ background: "var(--accent-2)" }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: "var(--accent-2)", fontFamily: "Space Mono, monospace" }}>
              Available for work
            </span>
          </motion.div>

          <motion.h1 variants={item} className="leading-none">
            <span className="block text-5xl sm:text-5xl lg:text-7xl font-bold tracking-tight" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>
              Hello, I&apos;m
            </span>
            <span
              className="block gradient-text font-bold "
              style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(3rem, 7vw, 5rem)", lineHeight: 1.05 }}
            >
              S G SERLIN
            </span>
          </motion.h1>

          <motion.div variants={item} className="h-10 flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-medium" style={{ color: "var(--text-secondary)" }}>
              {displayed}
            </span>
            <span className="cursor-blink text-xl sm:text-2xl" style={{ color: "var(--accent-1)" }}>|</span>
          </motion.div>

          <motion.p variants={item} className="text-base leading-relaxed max-w-md" style={{ color: "var(--text-secondary)", fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem" }}>
            Crafting digital experiences that merge aesthetic beauty with technical precision. Obsessed with the intersection of design and code.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="glow-btn glass px-7 py-3 rounded-xl font-semibold text-sm tracking-wide"
              style={{ color: "var(--accent-1)", borderColor: "rgba(167,139,250,0.3)" }}
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3 rounded-xl font-semibold text-sm tracking-wide border transition-all duration-300"
              style={{ borderColor: "rgba(255,255,255,0.12)", color: "var(--text-secondary)" }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div variants={item} className="flex gap-6 pt-2">
            {[
              { label: "5+", sub: "Years Exp." },
              { label: "42", sub: "Projects" },
              { label: "18", sub: "Clients" },
            ].map(({ label, sub }) => (
              <div key={sub} className="text-center">
                <div className="text-2xl font-bold gradient-text-2">{label}</div>
                <div className="text-xs tracking-wider uppercase" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>{sub}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Profile Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Outer spinning ring */}
          <div className="spin-slow absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full" style={{ border: "1px dashed rgba(167,139,250,0.2)" }} />
          <div className="counter-spin absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full" style={{ border: "1px dashed rgba(52,211,153,0.2)" }} />

          {/* Center avatar glass card */}
          <div className="relative glass-strong rounded-3xl p-8 flex flex-col items-center gap-4 w-64 sm:w-72">
            {/* Avatar placeholder */}
            <div className="relative">
              <div className="w-28 h-28 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(167,139,250,0.3), rgba(52,211,153,0.2))", border: "2px solid rgba(167,139,250,0.3)" }}>
                <div className="w-full h-full flex items-center justify-center text-5xl font-bold gradient-text" style={{ fontFamily: "Cormorant Garamond, serif" }}>SG</div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-black" style={{ background: "var(--accent-2)" }} />
            </div>

            <div className="text-center">
              <div className="font-bold text-base"></div>
              <div className="text-xs mt-1" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>Senior Dev @ Studio X</div>
            </div>

            <div className="accent-line w-full" />

            <div className="grid grid-cols-3 gap-3 w-full text-center">
              {[["React", "⚛️"], ["Node", "🟩"], ["Design", "🎨"]].map(([label, emoji]) => (
                <div key={label} className="glass rounded-xl p-2">
                  <div className="text-lg">{emoji}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating badges */}
          {[
            { label: "TypeScript", color: "#3b82f6", top: "8%", left: "0%" },
            { label: "Next.js", color: "#a78bfa", bottom: "12%", right: "0%" },
            { label: "Tailwind", color: "#34d399", top: "50%", left: "-10%" },
          ].map(({ label, color, ...pos }) => (
            <motion.div
              key={label}
              className="glass absolute px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ ...pos, fontFamily: "Space Mono, monospace", color, borderColor: `${color}30`, fontSize: "0.65rem" }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>scroll</span>
        <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, rgba(167,139,250,0.5), transparent)" }} />
      </motion.div>
    </section>
  );
}
