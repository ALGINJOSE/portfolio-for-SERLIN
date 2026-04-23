"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["about", "work", "skills", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActive(id);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-800 border-none 
          ${ scrolled
            ? "glass py-3 mx-4 mt-3 rounded-2xl bg-purple-600/80"
            : "py-6 px-8 bg-transparent" }
        `}
        style={scrolled ? { margin: "12px 24px 0", paddingLeft: "24px", paddingRight: "24px" } : {}}
      >
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #a78bfa, #34d399)" }}>
              <span className="text-black font-bold text-sm" style={{ fontFamily: "Space Mono, monospace" }}>A</span>
            </div>
            <span className="font-bold text-sm tracking-wider" style={{ fontFamily: "Space Mono, monospace", color: "rgba(255,255,255,0.9)" }}>
              S G Serlin.DEV
            </span>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`nav-link ${active === link ? "text-white!" : "text-white"}`}
              >
                {link}
                {active === link && (
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: "var(--accent-1)" }}
                    layoutId="navUnderline"
                  />
                )}
              </button>
            ))}
            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass glow-btn px-5 py-2 rounded-xl text-xs tracking-widest uppercase font-semibold"
              style={{ color: "var(--accent-1)", borderColor: "rgba(167,139,250,0.3)" }}
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-white transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-px bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-white"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-4 right-4 z-40 glass rounded-2xl p-6"
          >
            <div className="flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => scrollTo(link)}
                  className="text-left nav-link py-2 text-base"
                >
                  <span className="mr-3" style={{ color: "var(--accent-1)", fontFamily: "Space Mono, monospace", fontSize: "0.7rem" }}>0{i + 1}.</span>
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
