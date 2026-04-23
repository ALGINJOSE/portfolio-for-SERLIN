"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const articles = [
  {
    title: "The Architecture of Beautiful Codebases",
    excerpt: "Clean code is not just about tests and variable names. It's about the emotional clarity a developer feels when they open a file for the first time.",
    date: "Mar 18, 2025",
    readTime: "7 min read",
    tag: "Engineering",
    accent: "#a78bfa",
  },
  {
    title: "Why Most Design Systems Fail",
    excerpt: "A design system is a product. Most teams treat it like a documentation project. That's why 80% of them end up abandoned after 18 months.",
    date: "Feb 2, 2025",
    readTime: "5 min read",
    tag: "Design",
    accent: "#f472b6",
  },
  {
    title: "Framer Motion Secrets You Actually Need",
    excerpt: "Skip the docs rabbit hole. Here are the 7 animation patterns I use in literally every project — with production-tested code you can copy.",
    date: "Jan 15, 2025",
    readTime: "9 min read",
    tag: "Tutorial",
    accent: "#34d399",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="relative py-28 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: "#34d399", fontFamily: "Space Mono, monospace" }}>
              08. Writing
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}>
              Latest Articles
            </h2>
          </div>
          <a href="#" className="text-xs font-semibold tracking-wider flex items-center gap-2 transition-colors hover:text-white" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>
            All articles →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              className="glass glass-hover rounded-2xl p-7 flex flex-col cursor-pointer group"
            >
              {/* Tag + date */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ color: article.accent, background: `${article.accent}15`, border: `1px solid ${article.accent}30`, fontFamily: "Space Mono, monospace" }}
                >
                  {article.tag}
                </span>
                <span className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>{article.date}</span>
              </div>

              {/* Title */}
              <h3
                className="font-bold mb-3 leading-snug group-hover:text-white transition-colors duration-200"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.25rem", color: "rgba(255,255,255,0.88)" }}
              >
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--text-muted)", fontFamily: "Cormorant Garamond, serif", fontSize: "0.95rem" }}>
                {article.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>{article.readTime}</span>
                <motion.span
                  className="text-xs font-semibold"
                  style={{ color: article.accent, fontFamily: "Space Mono, monospace" }}
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Read →
                </motion.span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
