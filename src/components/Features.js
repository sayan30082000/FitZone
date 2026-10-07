import { FEATURES } from "@/data/content";
import { ICONS } from "./icons";
import SectionHeader from "./SectionHeader";

export default function Features() {
  return (
    <section id="programs" aria-labelledby="programs-title" className="bg-ink px-6 py-18 min-[900px]:px-12 min-[900px]:py-25">
      <SectionHeader
        id="programs-title"
        label="What We Offer"
        title="Everything You Need to Hit Your Goals"
        sub="Everything you need to reach your fitness goals under one roof."
      />
      <ul className="mx-auto grid max-w-[1100px] gap-4 min-[600px]:grid-cols-2 min-[900px]:grid-cols-3">
        {FEATURES.map((f) => {
          const Icon = ICONS[f.icon];
          return (
            <li
              key={f.title}
              className="group relative overflow-hidden rounded-[14px] border border-line bg-card px-6 py-7 transition duration-300 hover:-translate-y-[3px] hover:border-flame/35"
            >
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,107,43,0.06),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative mb-4 grid size-[42px] place-items-center rounded-[10px] border border-flame/20 bg-flame/12">
                <Icon className="size-5 text-flame" aria-hidden />
              </span>
              <h3 className="relative mb-2 font-display text-base font-extrabold tracking-wide">{f.title}</h3>
              <p className="relative text-[13px] leading-relaxed text-muted">{f.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
