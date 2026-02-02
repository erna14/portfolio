"use client";

import { useState } from "react";

/* ----------------------------------
   Glow Input
----------------------------------- */

function GlowInput({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full">
      <label className="mb-1 block text-xs font-medium text-white/50">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`
          w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white/70
          backdrop-blur-sm transition-all duration-300
          focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400
        `}
      />
      {/* Glow effect behind input */}
      <div
        className={`
          pointer-events-none absolute -inset-1 rounded-xl
          bg-gradient-to-r from-sky-400/30 via-cyan-400/20 to-blue-500/30
          blur-xl transition-opacity duration-300
          ${focused ? "opacity-100" : "opacity-0"}
        `}
      />
    </div>
  );
}

/* ----------------------------------
   Section
----------------------------------- */

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative w-full border-t border-white/10 bg-black/40 py-16 md:py-24"
    >
      {/* subtle background glows */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-sky-500/5 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-violet-500/5 blur-[100px]"
        aria-hidden
      />

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
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <GlowInput label="Name" placeholder="Your full name" />
          <GlowInput label="Email" type="email" placeholder="you@example.com" />
          <GlowInput label="Message" placeholder="Write your message..." />
          
          <button
            type="submit"
            className="
              mt-2 self-start rounded-lg bg-sky-400 px-6 py-3 text-sm font-semibold text-black
              shadow-[0_0_20px_rgba(56,189,248,0.5)]
              transition-all duration-300 hover:shadow-[0_0_28px_rgba(56,189,248,0.7)]
            "
          >
            Send Message
          </button>

          {submitted && (
            <p className="mt-2 text-sm text-green-400">
              Message sent! I’ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
