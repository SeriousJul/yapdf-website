import Link from "next/link";
import { Metadata } from "next";
import { SoftwareApplicationFAQ } from "@/components/faq-schema";

export const metadata: Metadata = {
  title: "yapdf — Fast, Native Rust PDF Editor for Linux, macOS & Windows",
description: "Fast, native PDF editor built in Rust. Free for personal use, licensed for professional use. View, annotate, edit pages, fill forms, and more."
};

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "View & Navigate",
    desc: "Continuous scroll, thumbnails, bookmarks, text search, and zoom — all async so the UI never freezes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    title: "Annotations",
    desc: "Highlight, rectangle, text box, ink drawing, sticky notes — with live editing and undo/redo.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6" />
      </svg>
    ),
    title: "Form Filling",
    desc: "Fill AcroForm fields inline — text inputs, checkboxes, radio groups. Edits persist on save.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 0a3 3 0 100 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Redaction",
    desc: "Drag to redact regions. Pages are rasterized so nothing survives underneath — truly permanent.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Page Operations",
    desc: "Rotate, delete, reorder (drag & drop), insert blank pages, merge PDFs, and extract ranges.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Native Performance",
    desc: "Built in Rust with egui. Zero Electron overhead. Starts instantly, uses minimal memory.",
  },
];

const faqs = [
  {
q: "Is yapdf free to use?",a: "yapdf is free for personal use. For professional or commercial use, a license is required. Download and try it on Linux, macOS, and Windows."
  },
  {
    q: "What platforms does yapdf support?",
    a: "yapdf ships as self-contained binaries for Linux (x64), macOS (Intel & Apple Silicon), and Windows (x64). No runtime dependencies required — PDFium is bundled.",
  },
  {
q: "How is yapdf different from Adobe Acrobat or Foxit?",a: "yapdf is a native (not a webview) PDF editor built in Rust for performance. It focuses on the core PDF workflow without the bloat of enterprise features. It's lightweight, fast to start, and respects your privacy."
  },
  {
    q: "Can yapdf edit existing text inside a PDF?",
    a: "Yes. You can select existing text objects on a page, move them, resize them, and edit their content directly. If the embedded font can't be re-encoded, yapdf falls back to a safe overlay approach.",
  },
  {
    q: "Is my data private?",
    a: "Absolutely. yapdf is a fully offline desktop application. It doesn't send any data anywhere — all processing happens locally on your machine.",
  },
];

export default function HomePage() {
  return (
    <div className="flex-1">
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="pt-20 pb-24 sm:pt-28 sm:pb-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


          {/* Main heading */}
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              A PDF editor that{" "}
              <span className="gradient-text animate-gradient bg-[length:200%_auto]">feels native</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[var(--muted)] mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms" }}>
Fast, native PDF editor built in Rust. No webview, no Electron bloat — just a snappy native app for Linux, macOS, and Windows.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <Link href="/download" className="btn-primary !px-8 !py-3 text-base w-full sm:w-auto">
              Download for free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
            <Link href="https://github.com/SeriousJul/yapdf" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              View on GitHub
            </Link>
          </div>

          {/* Platform badges */}
          <div className="flex items-center justify-center gap-4 text-sm text-[var(--muted)] animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            {["🐧 Linux", "🍎 macOS", "🪟 Windows"].map((platform) => (
              <span key={platform} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--card)] border border-[var(--border)]">
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Highlights ───────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
              A complete PDF toolkit in a lightweight, native application.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-300 hover:border-brand-400/30 dark:hover:border-brand-500/30"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-500)]/10 to-violet-500/10 border border-[var(--border)] flex items-center justify-center text-[var(--brand-600)] dark:text-[var(--brand-400)] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/features" className="inline-flex items-center gap-1.5 text-[var(--brand-600)] hover:text-[var(--brand-700)] dark:text-[var(--brand-400)] font-medium transition-colors group">
              See all features
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Architecture Callout ─────────────────────────── */}
      <section className="py-24 sm:py-32 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
<span className="border border-[var(--border)] bg-[var(--card)] rounded-full px-3 py-1 text-xs font-medium inline-block mb-6">Free for Personal Use</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Clean architecture,<br />
                <span className="gradient-text">zero compromises</span>
              </h2>
              <p className="text-[var(--muted)] text-lg leading-relaxed mb-8">
                yapdf uses a clean architecture: a headless core for document model and undo/redo, PDFium for rendering, and egui for the native UI. Every mutation flows through a command pattern — fully testable, no GUI required.
              </p>

              <div className="space-y-4">
                {[
                  { label: "Document Model", desc: "Immutable data structures with persistent undo/redo" },
                  { label: "Rendering Engine", desc: "PDFium integration for pixel-perfect page rendering" },
                  { label: "Native GUI", desc: "egui-based interface that feels at home on any OS" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[var(--brand-500)] to-violet-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-sm">{item.label}</span>
                      <p className="text-sm text-[var(--muted)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Code block */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--card)]/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-[var(--muted)] font-mono">workspace</span>
              </div>
              <pre className="p-6 text-sm font-mono leading-relaxed overflow-x-auto">
                <code>{`Workspace: 3 crates

├── yapdf-core   — Document model, commands, undo/redo
├── yapdf-render — PDFium wrapper (open, rasterize)
└── yapdf-app    — eframe GUI (toolbar, canvas, inspector)`}</code>
              </pre>
            </div>
          </div>

<p className="text-center mt-12 text-sm text-[var(--muted)]">Free for personal use · Commercial licenses available</p>
        </div>
      </section>

      {/* ── FAQ Section ──────────────────────────────────── */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12">
            Frequently asked questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary className="text-[var(--foreground)]">{faq.q}</summary>
                <div className="px-5 pb-5 text-[var(--muted)] leading-relaxed border-t border-[var(--border)] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          {/* Structured data for agents */}
          <SoftwareApplicationFAQ />
        </div>
      </section>
    </div>
  );
}
