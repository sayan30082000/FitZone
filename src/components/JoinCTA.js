"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CircleCheck, Loader2 } from "lucide-react";
import { GOALS, PLANS } from "@/data/content";
import { PLAN_EVENT } from "./PlanButton";

const EMPTY = { name: "", email: "", phone: "", plan: "premium", goal: GOALS[0] };

const field =
  "w-full rounded-lg border border-white/10 bg-ink-3 px-3.5 py-3 text-sm text-white placeholder:text-muted focus:border-flame focus:outline-none";
const labelClass = "mb-1.5 block text-xs font-semibold tracking-wide text-body";

// Netlify Forms reads the form definition from public/__forms.html at deploy
// time; the browser posts here. `next dev` has no form backend, so skip it.
async function submitTrial(data) {
  if (process.env.NODE_ENV === "development") {
    console.info("[dev] would submit free-trial", data);
    return;
  }
  const res = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ "form-name": "free-trial", ...data }).toString(),
  });
  if (!res.ok) throw new Error(`Form submit failed (${res.status})`);
}

export default function JoinCTA() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  // Pricing-card buttons pick a plan for this form.
  useEffect(() => {
    const onPlan = (e) => setForm((f) => ({ ...f, plan: e.detail }));
    window.addEventListener(PLAN_EVENT, onPlan);
    return () => window.removeEventListener(PLAN_EVENT, onPlan);
  }, []);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const plan = PLANS.find((p) => p.id === form.plan);
      await submitTrial({ ...form, plan: plan ? `${plan.name} ($${plan.price}/mo)` : "Not sure yet" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="join" aria-labelledby="join-title" className="relative overflow-hidden bg-ink-2 px-6 py-18 text-center min-[900px]:px-12 min-[900px]:py-25">
      <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[600px] max-w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,107,43,0.12),transparent_70%)]" />

      <div className="relative">
        <h2 id="join-title" className="mx-auto mb-4 max-w-xl font-display text-[clamp(34px,5vw,58px)] leading-[1.1] font-black text-balance">
          Ready to Start Your Transformation?
        </h2>
        <p className="mb-9 text-sm text-muted">Join today and get your first week completely free. No commitment required.</p>

        <div className="mx-auto max-w-xl rounded-2xl border border-line bg-card p-6 text-left sm:p-8">
          {status === "sent" ? (
            <div role="status" className="py-8 text-center">
              <CircleCheck className="mx-auto size-12 text-flame" aria-hidden />
              <p className="mt-4 font-display text-2xl font-extrabold">You&rsquo;re in, {form.name.split(" ")[0] || "champ"}!</p>
              <p className="mt-2 text-sm text-body">We&rsquo;ll be in touch shortly to book your first free session.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
              <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
              <div className="sm:col-span-2">
                <label htmlFor="name" className={labelClass}>Full name</label>
                <input id="name" required autoComplete="name" value={form.name} onChange={set("name")} className={field} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input id="email" type="email" required autoComplete="email" value={form.email} onChange={set("email")} className={field} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone <span className="font-normal text-muted">(optional)</span>
                </label>
                <input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} className={field} />
              </div>
              <div>
                <label htmlFor="plan" className={labelClass}>Plan</label>
                <select id="plan" value={form.plan} onChange={set("plan")} className={field}>
                  {PLANS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — ${p.price}/mo
                    </option>
                  ))}
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>
              <div>
                <label htmlFor="goal" className={labelClass}>Main goal</label>
                <select id="goal" value={form.goal} onChange={set("goal")} className={field}>
                  {GOALS.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>
              {status === "error" && (
                <p role="alert" className="rounded-lg bg-red-500/10 p-3 text-sm text-red-300 sm:col-span-2">
                  Something went wrong sending that. Please try again.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-flame px-7 py-3.5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-flame-light hover:shadow-[0_8px_28px_rgba(255,107,43,0.4)] disabled:translate-y-0 disabled:opacity-70 sm:col-span-2"
              >
                {status === "sending" ? <Loader2 className="size-4 animate-spin" aria-hidden /> : null}
                {status === "sending" ? "Sending…" : "Start Your Free Trial"}
                {status !== "sending" && <ArrowRight className="size-4" aria-hidden />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
