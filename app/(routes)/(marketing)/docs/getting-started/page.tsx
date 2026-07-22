import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting Started — yapdf Documentation",
description: "Install and run yapdf on Linux, macOS, or Windows. Free for personal use."
};

const shortcuts = [
  ["Open file", "Ctrl/Cmd + O"],
  ["Save / Save As", "Ctrl/Cmd + S"],
  ["Print", "Ctrl/Cmd + P"],
  ["Search", "Ctrl/Cmd + F"],
  ["Go to page", "Ctrl/Cmd + G"],
  ["Undo / Redo", "Ctrl/Cmd + Z / Shift+Z"],
  ["Zoom in/out/reset", "Ctrl/Cmd +/-/0"],
  ["Toggle sidebar", "Ctrl/Cmd + B"],
  ["Toggle inspector", "Ctrl/Cmd + Shift + I"],
  ["Close tab", "Ctrl/Cmd + W"],
];

export default function GettingStartedPage() {
  return (
    <div className="flex-1">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge badge-brand mb-6 inline-block">Documentation</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Getting Started</h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
Install yapdf in minutes.
          </p>
        </div>
      </section>

      {/* ── Quick Install ────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Option 1: Binary download */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--brand-500)] to-violet-500 flex items-center justify-center text-white text-sm font-bold">1</span>
              Download a binary
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-6 pl-4">
              The fastest way to get started. Grab the latest release for your platform from GitHub — no installation required.
            </p>

            {/* Quick links callout */}
            <div className="pl-4 group rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:border-brand-400/30 dark:hover:border-brand-500/30 p-5 border-l-4 border-l-[var(--brand-500)]">
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-[var(--brand-600)] dark:text-[var(--brand-400)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Quick links
              </h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  { name: "Linux (x64)", format: "AppImage / tar.gz", href: "https://github.com/SeriousJul/yapdf/releases/latest" },
                  { name: "macOS (Apple Silicon)", format: ".dmg", href: "https://github.com/SeriousJul/yapdf/releases/latest" },
                  { name: "macOS (Intel)", format: ".dmg", href: "https://github.com/SeriousJul/yapdf/releases/latest" },
                  { name: "Windows (x64)", format: ".zip", href: "https://github.com/SeriousJul/yapdf/releases/latest" },
                ].map((p) => (
                  <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[var(--card)] transition-colors text-sm group">
                    <span>{p.name}</span>
                    <span className="text-xs text-[var(--muted)] font-mono group-hover:text-[var(--brand-600)] dark:group-hover:text-[var(--brand-400)] transition-colors">{p.format} →</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Platform instructions */}
            <div className="mt-8 pl-4 space-y-6">
              {[
                { title: "Linux (AppImage)", code: `# Download the AppImage\nwget https://github.com/SeriousJul/yapdf/releases/latest/download/yapdf-x86_64.AppImage\n\n# Make it executable and run\nchmod +x yapdf-x86_64.AppImage\n./yapdf-x86_64.AppImage document.pdf` },
                { title: "macOS", code: `# Open the .dmg, drag yapdf to Applications\n# First launch may show a Gatekeeper warning —\n# go to System Settings > Privacy & Security and click "Open anyway"` },
                { title: "Windows", code: `# Extract the .zip file\n# Run yapdf.exe (you may need to allow it through Windows SmartScreen)` },
              ].map((platform) => (
                <div key={platform.title}>
                  <h3 className="font-semibold text-sm mb-2">{platform.title}</h3>
                  <div className="group rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:border-brand-400/30 dark:hover:border-brand-500/30">
                    <pre className="p-4 text-xs font-mono leading-relaxed overflow-x-auto"><code>{platform.code}</code></pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

<section className="py-12 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold mb-3">Need a commercial license?</h3>
          <p className="text-[var(--muted)] mb-6 max-w-lg mx-auto">
            yapdf is free for personal use. For professional or business use, contact us to discuss licensing options.
          </p>
          <a href="mailto:contact@yapdf.dev" className="btn-primary !px-6 !py-2 text-sm inline-flex items-center gap-2">
            Contact Sales
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

          {/* Keyboard shortcuts */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Keyboard shortcuts</h2>
            <div className="group rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:border-brand-400/30 dark:hover:border-brand-500/30 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)] bg-[var(--card)]/50">
                    <th className="text-left py-3 px-5 font-medium text-[var(--muted)]">Action</th>
                    <th className="text-right py-3 px-5 font-medium text-[var(--muted)]">Shortcut</th>
                  </tr>
                </thead>
                <tbody>
                  {shortcuts.map(([action, shortcut]) => (
                    <tr key={action} className="border-b border-[var(--border)]/50 last:border-0">
                      <td className="py-2.5 px-5 text-[var(--muted)]">{action}</td>
                      <td className="py-2.5 px-5 text-right">
                        <code className="text-xs bg-[var(--card)] border border-[var(--border)] rounded-md px-2 py-1 font-mono">{shortcut}</code>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Known limitations */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-6">Known limitations</h2>
            <div className="space-y-3 pl-4">
              {[
                { title: "Wayland drag-and-drop", desc: "On Linux Wayland compositors (Hyprland, Sway), file drops don't fire. Use the \"Open\" button or pass the PDF path as a CLI argument instead." },
                { title: "Digital signatures", desc: "You can view existing signatures but cannot sign or verify them (pdfium-render 0.9 limitation)." },
              ].map((item) => (
                <div key={item.title} className="group rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:border-brand-400/30 dark:hover:border-brand-500/30 p-5 flex items-start gap-3">
                  <svg className="w-4 h-4 mt-0.5 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <div>
                    <span className="font-medium text-sm">{item.title}</span>
                    <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[var(--card)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-3">Need more help?</h2>
<p className="text-[var(--muted)] mb-6">For support or licensing inquiries, please contact us.</p>
          <Link href="https://github.com/SeriousJul/yapdf" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
