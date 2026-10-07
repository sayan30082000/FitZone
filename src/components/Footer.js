import { Dumbbell, Mail, Navigation, Phone } from "lucide-react";
import { CONTACT, NAV_LINKS, SOCIALS } from "@/data/content";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="bg-[#090b10] px-6 min-[900px]:px-12">
      <div className="mx-auto grid max-w-[1100px] gap-12 border-t border-white/10 py-14 min-[700px]:grid-cols-2 min-[1000px]:grid-cols-3">
        {/* Logo tile */}
        <a
          href="#top"
          aria-label="FitZone Studio, back to top"
          className="flex aspect-[6/5] w-full max-w-[250px] flex-col items-center justify-center gap-3 rounded-md border border-white/10 bg-ink-3 transition-colors hover:border-flame/40"
        >
          <span className="grid size-16 place-items-center rounded-2xl bg-flame/15 ring-1 ring-flame/30">
            <Dumbbell className="size-9 rotate-45 text-flame" strokeWidth={2.2} aria-hidden />
          </span>
          <span className="text-center font-condensed text-[34px] leading-[0.9] font-black tracking-wide uppercase">
            Fit<span className="text-flame">Zone</span>
            <span className="mt-1 block text-[13px] font-bold tracking-[0.4em] text-body">Studio</span>
          </span>
        </a>

        {/* Site links */}
        <nav aria-labelledby="footer-site">
          <h2 id="footer-site" className="mb-6 font-display text-lg font-extrabold tracking-wide text-flame uppercase">
            FitZone Studio
          </h2>
          <ul className="space-y-3.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm font-medium tracking-wide text-white uppercase transition-colors hover:text-flame-light">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social + contact */}
        <div>
          <h2 className="mb-6 font-display text-base font-extrabold tracking-wide text-flame uppercase">Follow Us</h2>
          <ul className="mb-7 flex flex-wrap gap-4">
            {SOCIALS.map((s) => (
              <li key={s.id}>
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`FitZone on ${s.label}`}
                    className="block transition hover:-translate-y-0.5 hover:brightness-110"
                  >
                    <SocialIcon id={s.id} className="size-[26px]" />
                  </a>
                ) : (
                  // No profile link yet: show the icon without a dead link.
                  <span title={`${s.label} coming soon`} className="block">
                    <SocialIcon id={s.id} className="size-[26px]" />
                    <span className="sr-only">{s.label} (coming soon)</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
          <ul className="space-y-4 text-sm font-semibold">
            <li>
              <a href={CONTACT.phoneHref} className="flex items-center gap-2.5 hover:text-flame-light">
                <Phone className="size-4 text-flame" aria-hidden /> {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Navigation className="size-4 text-flame" aria-hidden /> {CONTACT.location}
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 break-all hover:text-flame-light">
                <Mail className="size-4 shrink-0 text-flame" aria-hidden /> {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] border-t border-white/10 py-5 text-center">
        <p className="text-xs text-muted">Copyright {new Date().getFullYear()}. FitZone Studio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
