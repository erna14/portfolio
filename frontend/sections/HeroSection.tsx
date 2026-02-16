 "use client";
import Link from "next/link";
import { Prism } from "@/components/ui";

const scrollToSection = (id: string) => {
  if (typeof document === "undefined") return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  return (
    <section className='w-full h-screen relative overflow-hidden'>
      <Prism suspendWhenOffscreen={true} animationType="rotate" timeScale={0.5} 
        height={3} baseWidth={5} scale={3.3} hueShift={0} colorFrequency={1} 
        noise={0} glow={0.7}
      />

      <div className='absolute inset-0 z-10 flex items-center justify-center h-screen flex-col gap-6'> 
        <div className="faded-chip">
          Software Engineer · Web Developer
        </div>

        <div className="flex flex-col items-center justify-center text-center gap-1 max-w-2xl">
          <p className="text-white/70 text-sm font-medium tracking-widest uppercase">
            Hi, I&apos;m
          </p>
          <h1 className="text-white text-5xl sm:text-6xl font-bold tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
            Erna Berbić
          </h1>
          <p className="text-white/90 text-md font-medium max-w-md leading-relaxed mt-3">
            I build fast, thoughtful software and smooth experiences for the web.
          </p>
        </div>

        <div className="flex gap-3 ">
          <Link
            href="/#experience"
            className="filled-button"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("experience");
              window.history.pushState(null, "", "/#experience");
            }}
          >
            My Journey
          </Link>
          <Link
            href="/#contact"
            className="faded-button"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
              window.history.pushState(null, "", "/#contact");
            }}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection