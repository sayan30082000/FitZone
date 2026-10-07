export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink px-6 py-5 text-center min-[900px]:px-12">
      <p className="text-xs text-muted">© {new Date().getFullYear()} FitZone Studio. All rights reserved.</p>
    </footer>
  );
}
