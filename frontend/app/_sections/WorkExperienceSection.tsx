"use client";

import { useEffect, useRef, useState } from "react";

/* ----------------------------------
   GlowCard
----------------------------------- */

function GlowCard({ children }: { children: React.ReactNode }) {
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

/* ----------------------------------
   Animate on Scroll
----------------------------------- */

function AnimateWhenVisible({
  children,
  index = 0,
}: {
  children: React.ReactNode;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={inView ? { transitionDelay: `${index * 120}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* ----------------------------------
   Data
----------------------------------- */

const experiences = [
  {
    company: "Monetize Ad Sarajevo",
    role: "Software Engineer",
    period: "Feb 2024 — Present",
    summary:
      "Building scalable, performance-focused web applications and internal tools.",
    bullets: [
      "Developed drag-and-drop workflow builders and interactive dashboards",
      "Implemented real-time features using WebSockets and background processes",
      "Worked on SEO-driven e-commerce solutions with advanced search",
    ],
    skills: ["React", "Next.js", "TypeScript", "WebSockets"],
  },
  {
    company: "MIBO Komunikacije Sarajevo",
    role: "Network Engineer Intern",
    period: "Jul 2023 — Aug 2023",
    summary:
      "Hands-on experience with networking infrastructure and system administration.",
    bullets: [
      "Configured Cisco devices and routing and switching fundamentals",
      "Managed Windows Server, Active Directory, DHCP, and DNS",
      "Worked with Linux CLI, backups, monitoring, and basic cybersecurity",
    ],
    skills: ["Cisco", "Linux", "Windows Server"],
  },
  {
    company: "Trinity d.o.o. Sarajevo",
    role: "Full-stack Development Intern",
    period: "Oct 2022 — Jan 2023",
    summary:
      "Built full-stack features with a focus on authentication and user management.",
    bullets: [
      "Developed frontend and backend for a social media application",
      "Implemented secure authentication, authorization, and session handling",
    ],
    skills: ["React", "Node.js", "Auth"],
  },
];

/* ----------------------------------
   Section
----------------------------------- */

export default function WorkExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full border-t border-white/10 bg-black/40 py-16 md:py-24"
    >
      <div className="relative mx-auto max-w-5xl px-6 md:px-12">
        {/* Header */}
        <div className="mb-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Career
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="
              hidden md:block
              absolute left-5 top-0 h-full w-px
              bg-gradient-to-b from-sky-400/0 via-sky-400/60 to-sky-400/0
              shadow-[0_0_14px_rgba(56,189,248,0.4)]
            "
          />

          <div className="flex flex-col gap-14">
            {experiences.map((job, index) => (
              <AnimateWhenVisible key={job.company} index={index}>
                <div className="relative md:pl-16">
                  {/* Dot + connector */}
                  <div className="hidden md:flex absolute left-[15px] top-8 items-center">
                    {/* dot */}
                    <span className="h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.9)]" />
                    {/* connector */}
                    <span className="h-px w-10 bg-sky-400/70" />
                  </div>

                  <GlowCard>
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
                  </GlowCard>
                </div>
              </AnimateWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
