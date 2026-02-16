"use client";

import { navLinks } from "@/data/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";


function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3">
        <span className="text-sm font-medium tracking-wide text-white/90 link-styles">
          Erna Berbić
        </span>
      
        <nav
          className="flex items-center gap-5 md:gap-10 text-sm"
          aria-label="Main navigation"
        >
          {navLinks.map(({ href, label }) => {
            const hash = href.includes("#") ? href.split("#")[1] : null;
            const isHashLink = hash && pathname === "/";

            return (
              <Link 
                key={label} href={href} className="link-styles"
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
      </div>
    </header>
  );
}
