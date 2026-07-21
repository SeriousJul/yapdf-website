import Link from "next/link";
import { Metadata } from "next";
import { SoftwareApplicationFAQ } from "@/components/faq-schema";

export const metadata: Metadata = {
  title: "yapdf — Fast, Native Rust PDF Editor for Linux, macOS & Windows",
  description:
    "Open-source PDF editor built in Rust. View, annotate, edit pages, fill forms, redact content — with a native feel on every platform.",
};

export default function HomePage() {
  return (
    <div className="flex-1">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              A PDF editor that{" "}
              <span className="gradient-text">feels native</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--muted)] mb-8 leading-relaxed">
              yapdf is a fast, open-source PDF editor built in Rust. No webview,
              no Electron bloat — just a snappy native app for Linux, macOS, and
              Windows that handles everything from annotations to redaction.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/download"
                className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-lg text-base font-medium transition-colors w-full sm:w-auto"
              >
                Download for free →
              </Link>
              <Link
                href="https://github.com/SeriousJul/yapdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--border)] hover:border-[var(--foreground)] px-8 py-3 rounded-lg text-base font-medium transition-colors w-full sm:w-auto text-center"
              >
                View on GitHub
              </Link>
            </div>

            {/* Platform badges */}
            <div className="mt-10 flex items-center justify-center gap-6 text-sm text-[var(--muted)]">
              <span className="flex items-center gap-2">🐧 Linux</span>
              <span className="flex items-center gap-2">🍎 macOS</span>
              <span className="flex items-center gap-2">🪟 Windows</span>
            </div>
          </div>
        </div>

        {/* Subtle gradient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/50 to-transparent dark:from-brand-950/20" />
      </section>

      {/* ── Feature highlights ───────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need, nothing you don&apos;t
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📄",
                title: "View & Navigate",
                desc: "Continuous scroll, thumbnails, bookmarks, text search, and zoom — all async so the UI never freezes.",
              },
              {
                icon: "✏️",
                title: "Annotations",
                desc: "Highlight, rectangle, text box, ink drawing, sticky notes — with live editing and undo/redo.",
              },
              {
                icon: "📝",
                title: "Form Filling",
                desc: "Fill AcroForm fields inline — text inputs, checkboxes, radio groups. Edits persist on save.",
              },
              {
                icon: "🔴",
                title: "Redaction",
                desc: "Drag to redact regions. Pages are rasterized so nothing survives underneath — truly permanent.",
              },
              {
                icon: "📑",
                title: "Page Operations",
                desc: "Rotate, delete, reorder (drag & drop), insert blank pages, merge PDFs, and extract ranges.",
              },
              {
                icon: "⚡",
                title: "Native Performance",
                desc: "Built in Rust with egui. Zero Electron overhead. Starts instantly, uses minimal memory.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-brand-200 dark:hover:border-brand-800 transition-colors"
              >
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/features"
              className="text-brand-600 hover:text-brand-700 font-medium inline-flex items-center gap-1"
            >
              See all features →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Code / tech stack callout ─────────────────────── */}
      <section className="py-20 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Built with modern Rust</h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto mb-8 leading-relaxed">
            yapdf uses a clean architecture: a headless core for document model
            and undo/redo, PDFium for rendering, and egui for the native UI.
            Every mutation flows through a command pattern — fully testable, no
            GUI required.
          </p>

          <div className="inline-block text-left bg-slate-900 rounded-xl p-6 text-sm font-mono text-slate-300 max-w-lg">
            <pre>
              <code>{`Workspace: 3 crates
├── yapdf-core   — Document model, commands, undo/redo
├── yapdf-render — PDFium wrapper (open, rasterize)
└── yapdf-app    — eframe GUI (toolbar, canvas, inspector)`}</code>
            </pre>
          </div>

          <p className="mt-6 text-sm text-[var(--muted)]">
            MIT OR Apache-2.0 licensed ·{" "}
            <Link
              href="https://github.com/SeriousJul/yapdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:text-brand-700 underline underline-offset-4"
            >
              github.com/SeriousJul/yapdf
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAQ (for SEO + agent discoverability) ─────────── */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently asked questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Is yapdf free?",
                a: "Yes. yapdf is open-source under the MIT OR Apache-2.0 license. Download and use it freely on Linux, macOS, and Windows.",
              },
              {
                q: "What platforms does yapdf support?",
                a: "yapdf ships as self-contained binaries for Linux (x64), macOS (Intel & Apple Silicon), and Windows (x64). No runtime dependencies required — PDFium is bundled.",
              },
              {
                q: "How is yapdf different from Adobe Acrobat or Foxit?",
                a: "yapdf is open-source, native (not a webview), and built in Rust for performance. It focuses on the core PDF workflow without the bloat of enterprise features. It's lightweight, fast to start, and respects your privacy.",
              },
              {
                q: "Can yapdf edit existing text inside a PDF?",
                a: "Yes. You can select existing text objects on a page, move them, resize them, and edit their content directly. If the embedded font can't be re-encoded, yapdf falls back to a safe overlay approach.",
              },
              {
                q: "Is my data private?",
                a: "Absolutely. yapdf is a fully offline desktop application. It doesn't send any data anywhere — all processing happens locally on your machine.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group border border-[var(--border)] rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 font-medium bg-[var(--card)] hover:bg-brand-50 dark:hover:bg-brand-950/20 transition-colors">
                  {faq.q}
                  <span className="ml-4 text-[var(--muted)] group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <div className="p-5 text-[var(--muted)] leading-relaxed border-t border-[var(--border)]">
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
