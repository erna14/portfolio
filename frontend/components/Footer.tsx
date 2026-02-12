"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, socialLinks } from "@/data/constants";

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-white/10 bg-black/40 py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-white/90">Erna Berbić</p>
            <p className="mt-0.5 text-xs text-white/50">
              Software Engineer · Web Developer
            </p>
          </div>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60"
            aria-label="Footer navigation"
          >
            {navLinks.map(({ href, label }) => {
              const hash = href.includes("#") ? href.split("#")[1] : null;
              const isHashLink = hash && pathname === "/";

              return (
                <Link
                  key={label}
                  href={href}
                  className="transition-colors hover:text-white"
                  onClick={
                    isHashLink
                      ? (e) => {
                          e.preventDefault();
                          scrollToHash(hash);
                          window.history.pushState(null, "", href);
                        }
                      : undefined
                  }
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-center gap-5 md:justify-end">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60
                  transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} Erna Berbić. All rights reserved.
        </p>
      </div>
    </footer>
  );
}