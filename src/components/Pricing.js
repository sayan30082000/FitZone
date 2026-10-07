import { Check } from "lucide-react";
import { PLANS } from "@/data/content";
import PlanButton from "./PlanButton";
import SectionHeader from "./SectionHeader";

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="bg-ink px-6 py-18 min-[900px]:px-12 min-[900px]:py-25">
      <SectionHeader id="pricing-title" label="Pricing" title="Simple, Transparent Pricing" sub="No contracts. No hidden fees. Cancel anytime." />
      <ul className="mx-auto grid max-w-[1000px] items-stretch gap-4 min-[900px]:grid-cols-3">
        {PLANS.map((p) => (
          <li
            key={p.id}
            className={
              p.featured
                ? "relative mt-3 flex flex-col rounded-2xl border border-flame bg-[linear-gradient(145deg,#1e2230,#191d28)] px-7 py-8 shadow-[0_0_40px_rgba(255,107,43,0.15)] min-[900px]:mt-0"
                : "relative flex flex-col rounded-2xl border border-line bg-card px-7 py-8 transition-colors hover:border-flame/20"
            }
          >
            {p.featured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-flame px-3.5 py-1 text-[10px] font-extrabold tracking-[0.15em] whitespace-nowrap text-ink uppercase">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-[15px] font-extrabold tracking-widest text-body uppercase">{p.name}</h3>
            <p className="mt-3 mb-1 flex items-baseline font-display text-[56px] leading-none font-black tracking-tight">
              ${p.price}
              <span className="ml-1 font-sans text-[15px] font-medium tracking-normal text-muted">/mo</span>
            </p>
            <p className="mb-6 text-xs text-muted">{p.desc}</p>
            <div className="mb-5 h-px bg-line" />
            <ul className="mb-7 flex flex-1 flex-col gap-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-[13px] text-body">
                  <span className="grid size-[18px] shrink-0 place-items-center rounded-full bg-flame/15">
                    <Check className="size-2.5 text-flame" strokeWidth={3} aria-hidden />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <PlanButton plan={p.id} featured={p.featured} label={`Get started with ${p.name}`} />
          </li>
        ))}
      </ul>
    </section>
  );
}
