"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons/lib";
import { skills } from "@/data/constants";

function SkillItem({
  name,
  icon: Icon,
  color,
  index,
}: {
  name: string;
  icon: IconType;
  color: string;
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group overflow-visible"
    >
      <div
        className="
          relative flex flex-col items-center gap-3
          overflow-visible rounded-xl border border-white/10
          bg-white/2 px-6 py-5
          transition-all duration-300
          group-hover:border-(--skill-color)/60
          group-hover:bg-white/8
          group-hover:shadow-[0_0_28px_var(--skill-glow)]
        "
        style={
          {
            "--skill-color": color,
            "--skill-glow": `color-mix(in srgb, ${color} 35%, transparent)`,
          } as React.CSSProperties
        }
      >
        {/* Glow behind card */}
        <div
          className="
            pointer-events-none absolute -inset-4 -z-10
            rounded-2xl opacity-0 blur-3xl
            transition-opacity duration-300
            group-hover:opacity-100
          "
          style={{ background: `var(--skill-glow)` }}
          aria-hidden
        />
        <div
          className="
            flex h-12 w-12 items-center justify-center rounded-xl
            text-white/60 transition-colors duration-300
            group-hover:text-(--skill-color)
          "
        >
          <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <span className="text-sm font-medium text-white/70 transition-colors group-hover:text-white">
          {name}
        </span>
      </div>
    </motion.li>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative w-full overflow-hidden border-t border-white/10 bg-black/40 py-10 md:py-20">
      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 md:mb-16"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Tech stack
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/60 md:text-base">
            Technologies and tools I use to design, build, and ship modern web
            applications.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {skills.map((skill, index) => (
            <SkillItem key={skill.name} {...skill} index={index} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
