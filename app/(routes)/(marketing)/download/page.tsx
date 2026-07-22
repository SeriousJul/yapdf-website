import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download — yapdf PDF Editor",
  description:
    "Download yapdf for Linux, macOS (Intel & Apple Silicon), and Windows. Self-contained binaries with no dependencies required.",
};

const platforms = [
  {
    name: "Linux (x64)",
    format: "AppImage / tar.gz",
    arch: "x86_64",
    icon: "🐧",
    desc: "Works on Ubuntu, Fedora, Arch, and other distros. Requires a Wayland or X11 session.",
  },
  {
    name: "macOS (Apple Silicon)",
    format: ".dmg",
    arch: "aarch64",
    icon: "🍎",
    desc: "Native Apple Silicon binary. Gatekeeper may prompt — open from System Settings > Privacy & Security.",
  },
  {
    name: "macOS (Intel)",
    format: ".dmg",
    arch: "x86_64",
    icon: "🍎",
    desc: "Universal binary includes Intel support for older Macs.",
  },
  {
    name: "Windows (x64)",
    format: ".zip",
    arch: "x86_64",
    icon: "🪟",
    desc: "No installer needed — extract and run. Windows 10/11 supported.",
  },
];

export default function DownloadPage() {
  return (
    <div className="flex-1">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<span className="border border-[var(--border)] bg-[var(--card)] rounded-full px-3 py-1 text-xs font-medium mb-6 inline-block">Free for Personal Use</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Download yapdf</h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
            Self-contained binaries for Linux, macOS, and Windows. No runtime dependencies — PDFium is bundled.
          </p>
        </div>
      </section>

      {/* ── Download Cards ───────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-4 stagger-children">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={`https://github.com/SeriousJul/yapdf/releases/latest`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:border-brand-400/30 dark:hover:border-brand-500/30 group flex items-center justify-between p-6 transition-all duration-300 hover:border-[var(--brand-400)/30]"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5">{p.icon}</span>
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-[var(--brand-600)] dark:group-hover:text-[var(--brand-400)] transition-colors">{p.name}</h3>
                  <p className="text-sm text-[var(--muted)] mt-1 font-mono">
                    {p.format} · {p.arch}
                  </p>
                  <p className="text-xs text-[var(--muted)] mt-2 opacity-70 max-w-md">{p.desc}</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-[var(--brand-600)] dark:text-[var(--brand-400)] group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          ))}
        </div>
      </section>

<section className="py-20 sm:py-28 bg-[var(--card)] border-y border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Need a commercial license?</h2>
          <p className="text-[var(--muted)] mb-8 leading-relaxed max-w-xl mx-auto">
            yapdf is free for personal use. For professional or commercial use, please contact us to discuss licensing options.
          </p>
          <a href="mailto:contact@yapdf.dev" className="btn-primary !px-8 !py-3 text-base inline-flex items-center gap-2">
            Contact Sales
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── System Requirements ──────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold tracking-tight mb-8">System Requirements</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "⚡", label: "GPU", desc: "OpenGL 3.3+ or Vulkan" },
              { icon: "💾", label: "RAM", desc: "512 MB minimum" },
              { icon: "📦", label: "Disk", desc: "~100 MB per platform" },
            ].map((req) => (
              <div key={req.label} className="group rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:border-brand-400/30 dark:hover:border-brand-500/30 p-5 text-center transition-all duration-300 hover:border-[var(--brand-400)/30]">
                <span className="text-2xl mb-2 block">{req.icon}</span>
                <h3 className="font-semibold text-sm mb-1">{req.label}</h3>
                <p className="text-xs text-[var(--muted)]">{req.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
