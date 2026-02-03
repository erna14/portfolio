"use client";

import { useState } from "react";
import GlowField from "@/components/GlowField";

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative w-full border-t border-white/10 bg-black/40 py-16 md:py-24" >
      <div className="pointer-events-none absolute -left-40 top-20 h-50 w-50 md:h-90 md:w-90 rounded-full bg-sky-700/30 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-70 w-70 md:h-90 md:w-90 rounded-full bg-teal-700/30 blur-[100px]" aria-hidden />

      <div className="relative mx-auto max-w-3xl px-6 md:px-12">
        {/* header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Get in Touch
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Contact Me
          </h2>
          <p className="mt-4 text-sm text-white/60 md:text-base">
            Have a project or just want to say hi? Send me a message!
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
          <GlowField label="Name" placeholder="Your full name" />
          <GlowField label="Email" type="email" placeholder="you@example.com" />
          <GlowField as="textarea" label="Message" placeholder="Write your message..." />
          
          <button
            type="submit"
            className="px-6 py-2 bg-white border border-white rounded-full text-black text-sm transition-all duration-300 ease-in-out hover:bg-white/15 hover:border-white/30 hover:text-white hover:backdrop-blur-sm"
          >
            Send Message
          </button>

          {/* {submitted && (
            <p className="mt-2 text-sm text-green-400">
              Message sent! I’ll get back to you soon.
            </p>
          )} */}
        </form>
      </div>
    </section>
  );
}
