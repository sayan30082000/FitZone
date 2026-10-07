import { ArrowRight, Medal } from "lucide-react";
import { STATS } from "@/data/content";
import { ICONS } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 pt-28 pb-20 min-[900px]:px-12 min-[900px]:pt-32">
      <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 size-[640px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(180,80,30,0.35)_0%,transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute bottom-10 left-[30%] size-[300px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,107,43,0.08)_0%,transparent_70%)]" />

      <div className="relative">
        <p className="mb-7 inline-flex w-fit animate-fade-up items-center gap-1.5 rounded-full border border-flame/35 bg-flame/15 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-flame-light">
          <Medal className="size-3.5" aria-hidden /> #1 Rated Studio in the City
        </p>

        <h1 className="mb-5 max-w-4xl animate-fade-up font-display text-[clamp(38px,6vw,72px)] leading-[1.05] font-black tracking-tight [animation-delay:.1s]">
          Transform Your Body,
          <br />
          Transform Your <em className="text-flame">Life</em>
        </h1>

        <p className="mb-9 max-w-md animate-fade-up text-[15px] leading-relaxed text-body [animation-delay:.2s]">
          Premium personal training and group fitness classes. Results guaranteed or your money back.
        </p>

        <div className="mb-13 animate-fade-up [animation-delay:.3s]">
          <a
            href="#join"
            className="inline-flex items-center gap-2 rounded-lg bg-flame px-7 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-flame-light hover:shadow-[0_8px_28px_rgba(255,107,43,0.4)]"
          >
            Start Your Free Trial <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>

        <ul className="flex animate-fade-up flex-wrap items-center gap-x-9 gap-y-4 [animation-delay:.4s]">
          {STATS.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <li key={s.label} className="flex items-center gap-2 text-[13px] text-body">
                <span className="grid size-7 place-items-center rounded-md bg-white/7">
                  <Icon className="size-3.5 text-flame-light" aria-hidden />
                </span>
                <span>
                  <strong className="font-semibold text-white">{s.value}</strong> {s.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
