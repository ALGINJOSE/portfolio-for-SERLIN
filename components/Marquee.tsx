"use client";
import { motion } from "framer-motion";

const items = [
  "React", "⬡", "Next.js", "⬡", "TypeScript", "⬡", "Node.js", "⬡",
  "Figma", "⬡", "Tailwind", "⬡", "PostgreSQL", "⬡", "GraphQL", "⬡",
  "Three.js", "⬡", "Framer Motion", "⬡", "Supabase", "⬡", "Vercel", "⬡",
];

export default function Marquee() {
  return (
    <div className="relative py-8 overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #030712, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(-90deg, #030712, transparent)" }} />

      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-sm font-medium tracking-widest"
            style={{
              color: item === "⬡" ? "var(--accent-1)" : "var(--text-muted)",
              fontFamily: item === "⬡" ? "inherit" : "Space Mono, monospace",
              fontSize: item === "⬡" ? "0.5rem" : "0.7rem",
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
