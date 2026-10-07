import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";
import SectionHeader from "./SectionHeader";

const initials = (name) =>
  name
    .replace(/\./g, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function Testimonials() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="bg-ink-2 px-6 py-18 min-[900px]:px-12 min-[900px]:py-25">
      <SectionHeader id="reviews-title" label="Reviews" title="What Our Members Say" />
      <ul className="mx-auto grid max-w-[1100px] gap-4 min-[900px]:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <li key={t.name} className="flex flex-col gap-4 rounded-[14px] border border-line bg-card px-6 py-7 transition-colors hover:border-flame/25">
            <p className="flex gap-0.5 text-flame" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-3.5 fill-current" aria-hidden />
              ))}
            </p>
            <blockquote className="flex-1 text-sm leading-relaxed text-body italic">“{t.quote}”</blockquote>
            <div className="flex items-center gap-3">
              <span aria-hidden className="grid size-9 shrink-0 place-items-center rounded-full bg-flame/20 font-display text-xs font-extrabold text-flame">
                {initials(t.name)}
              </span>
              <div>
                <p className="text-[13px] font-bold">{t.name}</p>
                <p className="text-[11px] text-muted">{t.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
