"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    accent: "#a78bfa",
    skills: [
      { name: "React / Next.js", level: 96 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend",
    accent: "#34d399",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "GraphQL", level: 78 },
      { name: "Redis", level: 72 },
    ],
  },
  {
    category: "Design & Tools",
    accent: "#f472b6",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Three.js / WebGL", level: 70 },
      { name: "Docker / CI/CD", level: 80 },
      { name: "AWS / Vercel", level: 85 },
    ],
  },
];

const techs = [
  "React", "Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL",
  "GraphQL", "Redis", "Docker", "AWS", "Figma", "Three.js", "Supabase",
  "Prisma", "tRPC", "Zod", "Framer Motion", "Vitest", "Playwright",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-28 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: "var(--accent-3)", fontFamily: "Space Mono, monospace" }}>
            03. Skills
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}>
            Technical Arsenal
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + gi * 0.1 }}
              className="glass-strong rounded-2xl p-7 space-y-5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 rounded-full" style={{ background: group.accent }} />
                <h3 className="font-bold text-sm tracking-widest uppercase" style={{ fontFamily: "Space Mono, monospace", color: group.accent }}>
                  {group.category}
                </h3>
              </div>

              {group.skills.map(({ name, level }, si) => (
                <div key={name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{name}</span>
                    <span className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>
                      {level}%
                    </span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      style={{ background: `linear-gradient(90deg, ${group.accent}, ${group.accent}88)` }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${level}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.5 + gi * 0.1 + si * 0.08, ease: [0.23, 1, 0.32, 1] }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass rounded-2xl p-8"
        >
          <div className="text-xs tracking-widest uppercase mb-6 text-center" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>
            Also proficient in
          </div>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {techs.map((tech, i) => (
              <motion.span
                key={tech}
                className="tag-pill cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.03 }}
                whileHover={{ scale: 1.08 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
