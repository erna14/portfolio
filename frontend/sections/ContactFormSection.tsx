"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import InputTextField from "@/components/InputTextField";
import TextAreaField from "@/components/TextAreaField";
import { sendContactMessage } from "@/api/contact";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange =
    (field: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    try {
      await sendContactMessage(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative w-full border-t border-white/10 bg-black/40 py-16 md:py-24">
      <div className="pointer-events-none absolute -left-40 top-20 h-50 w-50 md:h-90 md:w-90 rounded-full bg-sky-700/30 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-70 w-70 md:h-90 md:w-90 rounded-full bg-teal-700/30 blur-[100px]" aria-hidden />

      <div className="relative mx-auto max-w-3xl px-6 md:px-12">
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

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
          <InputTextField
            label="Name"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange("name")}
          />

          <InputTextField
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange("email")}
          />

          <TextAreaField
            label="Message"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange("message")}
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-2 rounded-full border border-white bg-white text-black text-sm transition-all duration-300 ease-in-out
              hover:bg-white/15 hover:border-white/30 hover:text-white hover:backdrop-blur-sm
              disabled:opacity-50"
          >
            {status === "loading"
              ? "Sending..."
              : "Send Message"}
          </button>

          {status === "success" && (
            <p className="mt-2 text-sm text-green-400">
              Message sent! I&apos;ll get back to you soon ✨
            </p>
          )}

          {status === "error" && error && (
            <p className="mt-2 text-sm text-red-400">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
