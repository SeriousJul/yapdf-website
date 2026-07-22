import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — yapdf PDF Editor",
  description:
    "Learn about yapdf — a fast, native Rust PDF editor built for performance, privacy, and simplicity. Free for personal use, licensed for professional use.",
};

const principles = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    term: "Native first",
    desc: "No webview, no Electron. Pure Rust with egui for a UI that feels like it belongs on your OS.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    term: "Privacy by default",
    desc: "yapdf is fully offline. No telemetry, no analytics, no phone home. Your documents stay on your machine.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    term: "Dual licensing",
    desc: "Free for personal use. Commercial licenses available for professional and business use.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    term: "Performance matters",
    desc: "Async rendering, lazy loading, memory-capped caches — yapdf handles large PDFs without breaking a sweat.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex-1">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="border border-[var(--border)] bg-[var(--card)] rounded-full px-3 py-1 text-xs font-medium mb-6 inline-block">Free for Personal Use</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">About yapdf</h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
            A fast, native PDF editor built in Rust — private, performant, and available on every platform.
          </p>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8 text-[var(--muted)] leading-relaxed">
          <p>
            yapdf was built out of frustration with existing PDF editors. They're either bloated webviews wrapped in Electron, or expensive proprietary tools that treat you like a customer — not a user.
          </p>
          <p>
            We wanted something different: a genuinely native application that starts instantly, uses minimal resources, and respects your privacy by staying fully offline. Built with Rust for safety and performance, with egui for the UI, and Google's PDFium for rendering.
          </p>

          {/* Design Principles */}
          <div className="pt-8">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] mb-6">Design principles</h2>
            <div className="grid sm:grid-cols-2 gap-4 stagger-children">
              {principles.map((p) => (
                <div key={p.term} className="group rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:border-brand-400/30 dark:hover:border-brand-500/30 p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--brand-500)]/10 to-violet-500/10 border border-[var(--border)] flex items-center justify-center text-[var(--brand-600)] dark:text-[var(--brand-400)] flex-shrink-0">
                      {p.icon}
                    </div>
                    <h3 className="font-semibold text-[var(--foreground)]">{p.term}</h3>
                  </div>
                  <p className="text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Need a commercial license?</h2>
          <p className="text-[var(--muted)] text-lg mb-8 max-w-xl mx-auto">
            yapdf is free for personal use. For professional or business use, contact us to discuss licensing options.
          </p>
          <a href="mailto:contact@yapdf.dev" className="btn-primary !px-8 !py-3 text-base inline-flex items-center gap-2">
            Contact Sales
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
