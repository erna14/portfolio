"use client";

import { motion } from "framer-motion";
import { SkillItem } from "@/components/skills";
import { skills } from "@/data/constants";


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
