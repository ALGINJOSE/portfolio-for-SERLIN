"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, Lumina Labs",
    avatar: "SC",
    color: "#a78bfa",
    text: "S G Serlin completely transformed our product. The attention to detail in every animation, every interaction — it elevated our platform from a tool into an experience. Delivery was early, quality was exceptional.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "Founder, Flora Commerce",
    avatar: "MR",
    color: "#34d399",
    text: "We needed someone who could think in both design and code simultaneously. S G Serlin is that rare unicorn. Our conversion rates increased 40% after the redesign. Absolutely phenomenal work.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Product Lead, Aether",
    avatar: "PN",
    color: "#f472b6",
    text: "Working with S G Serlin felt like having a co-founder who actually cared about our vision. The technical depth combined with aesthetic sensibility is something I've never seen before.",
    rating: 5,
  },
  {
    name: "Tom Wickfield",
    role: "Engineering Manager, Pulsar",
    avatar: "TW",
    color: "#fbbf24",
    text: "The open-source CMS S G Serlin built for us has 2k stars on GitHub. Clean code, phenomenal docs, and a plugin system that our community loves. A true craftsperson.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="relative py-28 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-xs tracking-widest uppercase mb-3 block" style={{ color: "#fbbf24", fontFamily: "Space Mono, monospace" }}>
            05. Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300 }}>
            What Clients Say
          </h2>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-strong rounded-3xl p-10 mb-8 relative overflow-hidden"
        >
          {/* Decorative quote mark */}
          <div
            className="absolute top-6 right-8 text-8xl font-bold select-none pointer-events-none"
            style={{ color: testimonials[active].color, opacity: 0.08, fontFamily: "Cormorant Garamond, serif", lineHeight: 1 }}
          >
            "
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                <span key={i} className="text-lg" style={{ color: "#fbbf24" }}>★</span>
              ))}
            </div>
            <p
              className="text-xl sm:text-2xl leading-relaxed mb-8 italic"
              style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)" }}
            >
              &quot;{testimonials[active].text}&quot;
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm"
                style={{ background: `${testimonials[active].color}25`, border: `1px solid ${testimonials[active].color}40`, color: testimonials[active].color, fontFamily: "Space Mono, monospace" }}
              >
                {testimonials[active].avatar}
              </div>
              <div>
                <div className="font-bold text-sm">{testimonials[active].name}</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)", fontFamily: "Space Mono, monospace" }}>
                  {testimonials[active].role}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Selector pills */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.name}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              className="glass rounded-xl p-4 text-left transition-all duration-300"
              style={{
                borderColor: active === i ? `${t.color}50` : "rgba(255,255,255,0.08)",
                background: active === i ? `${t.color}10` : undefined,
                boxShadow: active === i ? `0 0 20px ${t.color}20` : undefined,
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ background: `${t.color}20`, color: t.color, fontFamily: "Space Mono, monospace" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-xs font-semibold">{t.name}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{t.role.split(",")[1]?.trim()}</div>
                </div>
              </div>
              {active === i && (
                <motion.div
                  className="h-0.5 rounded-full mt-2"
                  style={{ background: t.color }}
                  layoutId="testimonialIndicator"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
