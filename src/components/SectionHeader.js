export default function SectionHeader({ label, title, sub, id }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-[11px] font-bold tracking-[0.22em] text-flame uppercase">{label}</p>
      <h2 id={id} className="font-display text-[clamp(32px,4vw,52px)] leading-[1.1] font-black text-balance">
        {title}
      </h2>
      {sub && <p className="mt-3 text-sm text-muted">{sub}</p>}
    </div>
  );
}
