import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — yapdf PDF Editor",
  description:
    "Learn about yapdf — an open-source native Rust PDF editor built for performance, privacy, and simplicity.",
};

export default function AboutPage() {
  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About yapdf</h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
            An open-source PDF editor built in Rust — fast, private, and native on every platform.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8 text-[var(--muted)] leading-relaxed">
          <p>
            yapdf was built out of frustration with existing PDF editors. They're
            either bloated webviews wrapped in Electron, or expensive proprietary
            tools that treat you like a customer — not a user.
          </p>
          <p>
            We wanted something different: a genuinely native application that
            starts instantly, uses minimal resources, and respects your privacy by
            staying fully offline. Built with Rust for safety and performance, with
            egui for the UI, and Google's PDFium for rendering.
          </p>

          <h2 className="text-2xl font-bold text-[var(--foreground)] dark:text-[var(--foreground-dark)] mt-12">
            Design principles
          </h2>

          <dl className="space-y-6">
            {[
              {
                term: "Native first",
                desc: "No webview, no Electron. Pure Rust with egui for a UI that feels like it belongs on your OS.",
              },
              {
                term: "Privacy by default",
                desc: "yapdf is fully offline. No telemetry, no analytics, no phone home. Your documents stay on your machine.",
              },
              {
                term: "Open source",
                desc: "MIT OR Apache-2.0 licensed. You can inspect the code, contribute, or build it yourself.",
              },
              {
                term: "Performance matters",
                desc: "Async rendering, lazy loading, memory-capped caches — yapdf handles large PDFs without breaking a sweat.",
              },
            ].map((p) => (
              <div key={p.term}>
                <dt className="font-semibold text-[var(--foreground)] dark:text-[var(--foreground-dark)]">
                  {p.term}
                </dt>
                <dd>{p.desc}</dd>
              </div>
            ))}
          </dl>

          <h2 className="text-2xl font-bold text-[var(--foreground)] dark:text-[var(--foreground-dark)] mt-12">
            The team
          </h2>
          <p>
            yapdf is a passion project maintained by{" "}
            <a
              href="https://github.com/SeriousJul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:text-brand-700 underline underline-offset-4"
            >
              SeriousJul
            </a>{" "}
            on GitHub. Contributions are welcome — check the{" "}
            <a
              href="https://github.com/SeriousJul/yapdf/blob/main/AGENTS.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:text-brand-700 underline underline-offset-4"
            >
              contributor guide
            </a>{" "}
            to get started.
          </p>

          <h2 className="text-2xl font-bold text-[var(--foreground)] dark:text-[var(--foreground-dark)] mt-12">
            License
          </h2>
          <p>
            yapdf is dual-licensed under MIT OR Apache-2.0. PDFium (the rendering
            engine) is BSD-3-Clause and is not bundled — it's fetched at setup
            time.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--card)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold mb-4">Interested in contributing?</h2>
          <a
            href="https://github.com/SeriousJul/yapdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-lg font-medium inline-block transition-colors"
          >
            View on GitHub →
          </a>
        </div>
      </section>
    </div>
  );
}
