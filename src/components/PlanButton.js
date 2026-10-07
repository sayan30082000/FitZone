"use client";

export const PLAN_EVENT = "fitzone:plan";

// Picks the plan in the join form below, then scrolls to it.
export default function PlanButton({ plan, featured, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => {
        window.dispatchEvent(new CustomEvent(PLAN_EVENT, { detail: plan }));
        document.getElementById("join")?.scrollIntoView({ behavior: "smooth" });
      }}
      className={
        featured
          ? "w-full rounded-lg border border-flame bg-flame py-3.5 text-[13px] font-bold tracking-wide text-ink transition hover:border-flame-light hover:bg-flame-light hover:shadow-[0_6px_24px_rgba(255,107,43,0.4)]"
          : "w-full rounded-lg border border-white/12 py-3.5 text-[13px] font-bold tracking-wide text-white transition hover:bg-white/7"
      }
    >
      Get Started
    </button>
  );
}
