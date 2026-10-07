"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu if the window grows past the breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/85 backdrop-blur-md">
      <nav aria-label="Main" className="flex items-center justify-between px-6 py-4 min-[900px]:px-12">
        <a href="#top" className="font-condensed text-[22px] font-black tracking-wide">
          Fit<span className="text-flame">Zone</span>
        </a>

        <ul className="hidden gap-8 min-[900px]:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[13px] font-medium tracking-wide text-body transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#join"
            className="rounded-md bg-flame px-5 py-2.5 text-[13px] font-bold tracking-wide text-ink transition hover:-translate-y-px hover:bg-flame-light"
          >
            Join Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-md text-body hover:bg-white/5 hover:text-white min-[900px]:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-nav" className="flex flex-col border-t border-white/5 px-6 py-3 min-[900px]:hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-md px-2 py-3 text-sm font-medium text-body hover:bg-white/5 hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
