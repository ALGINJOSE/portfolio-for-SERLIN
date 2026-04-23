"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      // Lerp ring toward cursor
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    // Hover effects
    const onEnter = () => {
      ringRef.current?.classList.add("cursor-hover");
    };
    const onLeave = () => {
      ringRef.current?.classList.remove("cursor-hover");
    };
    const interactables = document.querySelectorAll("a, button, [role='button']");
    interactables.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
          .cursor-dot {
            position: fixed; top: 0; left: 0; width: 8px; height: 8px;
            background: var(--accent-1); border-radius: 50%; z-index: 9999;
            pointer-events: none; will-change: transform;
            transition: opacity 0.2s;
          }
          .cursor-ring {
            position: fixed; top: 0; left: 0; width: 36px; height: 36px;
            border: 1.5px solid rgba(167,139,250,0.5); border-radius: 50%; z-index: 9998;
            pointer-events: none; will-change: transform;
            transition: opacity 0.2s, width 0.2s, height 0.2s, border-color 0.2s;
          }
          .cursor-ring.cursor-hover {
            width: 46px; height: 46px;
            margin-left: -10px; margin-top: -10px;
            border-color: rgba(167,139,250,0.8);
            background: rgba(167,139,250,0.05);
          }
        }
      `}</style>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
