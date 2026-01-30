"use client";

import { useEffect, useRef, useState } from "react";

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
      className="relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
    >
      <div
        className={`pointer-events-none absolute z-0 size-60 rounded-full bg-linear-to-r from-sky-400/60 via-cyan-400/50 to-blue-500/60 blur-3xl transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
        style={{
          top: position.y - 120,
          left: position.x - 120,
        }}
        aria-hidden
      />
      <div className="relative z-10 rounded-[11px] bg-black/60 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}

function AnimateWhenVisible({
  children,
  index = 0,
  className = "",
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        inView
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
      style={inView ? { transitionDelay: `${index * 120}ms` } : undefined}
    >
      {children}
    </div>
  );
}

const experiences = [
  {
    company: "Monetize Ad Sarajevo",
    role: "Software Engineer",
    period: "Feb 2024 - Present",
    bullets: [
      "Built full-stack web applications with a focus on performance, usability, and SEO",
      "Developed interactive dashboards and drag-and-drop workflow builders",
      "Implemented real-time features using WebSockets and background processes",
      "Worked on e-commerce solutions with advanced search and user management",
    ],
  },
  {
    company: "MIBO Komunikacije Sarajevo",
    role: "Network Engineer Intern",
    period: "Jul 2023 - Aug 2023",
    bullets: [
      "Configured Cisco networking devices and gained hands-on experience with routing and switching fundamentals",
      "Managed Windows Server environments, including Active Directory, DHCP, and DNS services",
      "Worked with Linux command line, implemented basic cybersecurity practices, and explored cloud services, backup, and monitoring solutions",
    ],
  },
  {
    company: "Trinity d.o.o. Sarajevo",
    role: "Full-stack Development Intern",
    period: "Oct 2022 - Jan 2023",
    bullets: [
      "Developed a social media app, enhancing frontend and backend skills",
      "Developed backend systems for robust user management, including authentication, authorization, and profile handling with secure session management",
    ],
  },
];

export default function WorkExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full border-t border-white/10 bg-black/40 py-10 md:py-20"
    >
      <div className="mx-auto max-w-[900px] px-6 md:px-12">
        <h2 className="mb-10 text-3xl font-bold tracking-tight text-white md:mb-16 md:text-4xl">
          Work Experience
        </h2>

        <div className="flex flex-col gap-8">
          {experiences.map((job, index) => (
            <AnimateWhenVisible key={job.company} index={index}>
              <GlowCard>
                <article className="px-6 py-6 md:px-8 md:py-8">
                  <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                    <h3 className="text-lg font-semibold text-white md:text-xl">
                      {job.company}
                    </h3>
                    <span className="text-sm text-white/60">
                      {job.role} · {job.period}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2 text-sm leading-relaxed text-white/80">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/50" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </GlowCard>
            </AnimateWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
