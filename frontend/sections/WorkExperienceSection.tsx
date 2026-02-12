"use client"
import SpotlightCard from "@/components/SpotlightCard";
import { experiences } from "@/data/constants";
import { motion } from "framer-motion";

export default function WorkExperienceSection() {
  return (
    <section id="experience" className="relative w-full border-t border-white/10 bg-black/40 py-16 md:py-24">
      <div className="relative mx-auto max-w-5xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Career
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
            Roles and projects where I applied my skills to build impactful applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-vertical-line" />

          <div className="flex flex-col gap-8 md:gap-14">
            {experiences.map((job) => (
              <motion.div 
                className="relative md:pl-16" key={job.company} 
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="hidden md:flex absolute left-[16px] top-8 items-center">
                  <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.9)]" />
                  <span className="h-px w-10 bg-sky-400/70" />
                </div>

                <SpotlightCard>
                  <article className="px-6 py-6 md:px-8 md:py-8">
                    <div className="mb-3 flex justify-between gap-2">
                      <h3 className="text-lg font-semibold text-white md:text-xl">
                        {job.role}
                      </h3>
                      <span className="text-sm text-white/50">
                        {job.period}
                      </span>
                    </div>

                    <p className="text-sm text-white/70">
                      {job.company}
                    </p>

                    <p className="mt-4 text-sm text-white/80">
                      {job.summary}
                    </p>

                    <ul className="mt-4 flex flex-col gap-2 text-sm text-white/70">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 rounded-full bg-white/40" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
