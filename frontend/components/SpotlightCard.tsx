"use client"
import { useRef, useState } from "react";

export default function SpotlightCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const bounds = el.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative overflow-hidden rounded-2xl border border-white/10"
    >
      <div
        className={`pointer-events-none absolute z-0 size-64 rounded-full bg-linear-to-r from-sky-400/60 via-cyan-400/50 to-blue-500/60 blur-3xl transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: position.y - 128,
          left: position.x - 128,
        }}
        aria-hidden
      />

      <div className="relative z-10 rounded-[15px] bg-black/60 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}