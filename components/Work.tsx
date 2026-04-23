"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "Lumina Dashboard",
    category: "SaaS Product",
    desc: "A real-time analytics platform for modern teams. Featuring live data streams, custom widgets, and AI-driven insights.",
    tags: ["Next.js", "TypeScript", "D3.js", "Supabase"],
    gradient: "from-violet-500/20 to-indigo-500/20",
    accent: "#a78bfa",
    featured: true,
  },
  {
    id: "02",
    title: "Flora Commerce",
    category: "E-Commerce",
    desc: "A boutique online store with immersive 3D product previews, frictionless checkout, and a custom CMS.",
    tags: ["React", "Three.js", "Stripe", "Sanity"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "#34d399",
    featured: true,
  },
  {
    id: "03",
    title: "Aether Social",
    category: "Social Platform",
    desc: "An ephemeral social platform where content auto-curates based on mood. Built with real-time sync and end-to-end encryption.",
    tags: ["React Native", "WebSockets", "Redis", "AWS"],
    gradient: "from-pink-500/20 to-rose-500/20",
    accent: "#f472b6",
    featured: false,
  },
  {
    id: "04",
    title: "Pulsar CMS",
    category: "Open Source",
    desc: "A blazing-fast headless CMS with live collaboration, role-based access, and a plugin ecosystem.",
    tags: ["Node.js", "GraphQL", "PostgreSQL", "Docker"],
    gradient: "from-amber-500/20 to-orange-500/20",
    accent: "#fbbf24",
    featured: false,
  },
  {
    id: "05",
    title: "Void Music",
    category: "Web App",
    desc: "Spatial music visualizer that creates generative 3D art from audio. 40k+ monthly active users.",
    tags: ["WebGL", "Web Audio API", "GLSL", "Vite"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    accent: "#38bdf8",
    featured: false,
  },
  {
    id: "06",
    title: "Neural Forms",
    category: "AI Tool",
    desc: "Intelligent form builder that auto-generates validation logic, accessibility attributes, and analytics hooks.",
    tags: ["LangChain", "OpenAI", "React", "Zod"],
    gradient: "from-fuchsia-500/20 to-purple-500/20",
    accent: "#c084fc",
    featured: false,
  },
];

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="work" className="relative py-28 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: "var(--accent-2)", fontFamily: "Space Mono, monospace" }}>
              02. Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}>
              Selected Projects
            </h2>
          </div>
          <span className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>
            {projects.length} projects
          </span>
        </motion.div>

        {/* Featured row */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="glass glass-hover rounded-2xl p-7 cursor-pointer relative overflow-hidden"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30 transition-opacity duration-500`}
                style={{ opacity: hovered === project.id ? 0.5 : 0.2 }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold" style={{ fontFamily: "Cormorant Garamond, serif" }}>{project.title}</h3>
                  </div>
                  <div className="text-3xl font-bold opacity-20" style={{ color: project.accent, fontFamily: "Space Mono, monospace" }}>
                    {project.id}
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)", fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}>
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="text-xs font-semibold tracking-wider flex items-center gap-1.5 transition-all duration-200 hover:gap-2.5" style={{ color: project.accent, fontFamily: "Space Mono, monospace" }}>
                    View Case Study →
                  </button>
                  <button className="text-xs font-semibold tracking-wider flex items-center gap-1.5 transition-all duration-200" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>
                    GitHub ↗
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid for rest */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.filter(p => !p.featured).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="glass glass-hover rounded-2xl p-5 cursor-pointer relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-opacity duration-500`}
                style={{ opacity: hovered === project.id ? 0.4 : 0.15 }}
              />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs tracking-wider uppercase" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>{project.category}</span>
                  <span className="text-xl font-bold opacity-20" style={{ color: project.accent, fontFamily: "Space Mono, monospace" }}>{project.id}</span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Cormorant Garamond, serif" }}>{project.title}</h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="tag-pill">+{project.tags.length - 2}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
