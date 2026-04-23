"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const socials = [
  { label: "GitHub", handle: "@SGSerlin", href: "#", color: "#a78bfa" },
  { label: "Twitter/X", handle: "@SGSerlin", href: "#", color: "#38bdf8" },
  { label: "LinkedIn", handle: "in/SGSerlin", href: "#", color: "#34d399" },
  { label: "Dribbble", handle: "sgserlin.design", href: "#", color: "#f472b6" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputBase = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid",
    borderRadius: "12px",
    color: "var(--text-primary)",
    fontFamily: "Syne, sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    width: "100%",
    padding: "14px 18px",
    transition: "all 0.3s",
  };

  return (
    <section id="contact" className="relative py-28 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: "var(--accent-2)", fontFamily: "Space Mono, monospace" }}>
            04. Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}>
            Let&apos;s Build Together
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-base leading-relaxed" style={{ color: "var(--text-secondary)", fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem" }}>
            Have a project in mind, or just want to say hello? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-strong rounded-2xl p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="text-5xl">✉️</div>
                  <h3 className="text-2xl font-bold gradient-text" style={{ fontFamily: "Cormorant Garamond, serif" }}>Message Sent!</h3>
                  <p style={{ color: "var(--text-secondary)" }}>I&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => setSent(false)} className="text-xs mt-4" style={{ color: "var(--accent-1)", fontFamily: "Space Mono, monospace" }}>
                    Send another →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs tracking-wider uppercase" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        placeholder="Your name"
                        style={{
                          ...inputBase,
                          borderColor: focused === "name" ? "rgba(167,139,250,0.5)" : "rgba(255,255,255,0.1)",
                          boxShadow: focused === "name" ? "0 0 20px rgba(167,139,250,0.1)" : "none",
                        }}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs tracking-wider uppercase" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        placeholder="your@email.com"
                        style={{
                          ...inputBase,
                          borderColor: focused === "email" ? "rgba(167,139,250,0.5)" : "rgba(255,255,255,0.1)",
                          boxShadow: focused === "email" ? "0 0 20px rgba(167,139,250,0.1)" : "none",
                        }}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs tracking-wider uppercase" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell me about your project..."
                      style={{
                        ...inputBase,
                        resize: "none",
                        borderColor: focused === "message" ? "rgba(167,139,250,0.5)" : "rgba(255,255,255,0.1)",
                        boxShadow: focused === "message" ? "0 0 20px rgba(167,139,250,0.1)" : "none",
                      }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="glow-btn glass w-full py-4 rounded-xl font-bold tracking-widest uppercase text-sm"
                    style={{ color: "var(--accent-1)", borderColor: "rgba(167,139,250,0.3)", letterSpacing: "0.1em" }}
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar info */}
          <motion.div
            className="lg:col-span-2 space-y-5"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Email card */}
            <div className="glass rounded-2xl p-6 space-y-2">
              <div className="text-xs tracking-wider uppercase" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>Email</div>
              <div className="font-semibold" style={{ color: "var(--accent-1)" }}>hello@serlin.dev</div>
            </div>

            {/* Availability */}
            <div className="glass rounded-2xl p-6 space-y-2">
              <div className="text-xs tracking-wider uppercase" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>Status</div>
              <div className="flex items-center gap-2">
                <div className="pulse-dot w-2 h-2 rounded-full" style={{ background: "var(--accent-2)" }} />
                <span className="font-semibold text-sm" style={{ color: "var(--accent-2)" }}>Open to opportunities</span>
              </div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>Response time: &lt; 24h</div>
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-6 space-y-3">
              <div className="text-xs tracking-wider uppercase mb-4" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>Social</div>
              {socials.map(({ label, handle, color }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between py-2 transition-all duration-200 border-b last:border-b-0"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{label}</span>
                  <span className="text-xs font-semibold" style={{ color, fontFamily: "Space Mono, monospace" }}>{handle}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
