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
    desc: "Works on Ubuntu, Fedora, Arch, and other distros. Requires a Wayland or X11 session.",
  },
  {
    name: "macOS (Apple Silicon)",
    format: ".dmg",
    arch: "aarch64",
    desc: "Native Apple Silicon binary. Gatekeeper may prompt — open from System Settings > Privacy & Security.",
  },
  {
    name: "macOS (Intel)",
    format: ".dmg",
    arch: "x86_64",
    desc: "Universal binary includes Intel support for older Macs.",
  },
  {
    name: "Windows (x64)",
    format: ".zip",
    arch: "x86_64",
    desc: "No installer needed — extract and run. Windows 10/11 supported.",
  },
];

export default function DownloadPage() {
  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Download</h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
            Self-contained binaries for Linux, macOS, and Windows. No runtime
            dependencies — PDFium is bundled.
          </p>
        </div>
      </section>

      {/* Download cards */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-4">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={`https://github.com/SeriousJul/yapdf/releases/latest`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] hover:border-brand-300 dark:hover:border-brand-700 transition-colors group"
            >
              <div>
                <h3 className="font-semibold text-lg">{p.name}</h3>
                <p className="text-sm text-[var(--muted)] mt-1">
                  {p.format} · {p.arch}
                </p>
                <p className="text-xs text-[var(--muted)] mt-2 opacity-70">
                  {p.desc}
                </p>
              </div>
              <span className="text-brand-600 group-hover:text-brand-700 font-medium text-sm flex-shrink-0 ml-4">
                Download →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Manual install */}
      <section className="py-16 bg-[var(--card)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Build from source</h2>
          <p className="text-[var(--muted)] mb-6 leading-relaxed">
            yapdf is open-source. Clone the repo and build locally:
          </p>

          <div className="bg-slate-900 rounded-xl p-5 text-sm font-mono text-slate-300 overflow-x-auto">
            <pre>{`# 1. Clone the repository
git clone https://github.com/SeriousJul/yapdf.git
cd yapdf

# 2. Fetch the PDFium native library
./scripts/fetch-pdfium.sh

# 3. Build and run
cargo run -p yapdf-app -- path/to/document.pdf`}</pre>
          </div>

          <p className="text-xs text-[var(--muted)] mt-4">
            Requires Rust stable (see{" "}
            <a
              href="https://github.com/SeriousJul/yapdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:text-brand-700 underline underline-offset-4"
            >
              github.com/SeriousJul/yapdf
            </a>
            ).
          </p>
        </div>
      </section>

      {/* System requirements */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold mb-4">System Requirements</h2>
          <ul className="inline-block text-left space-y-2 text-[var(--muted)] text-sm">
            <li>• GPU with OpenGL 3.3+ or Vulkan support (for egui rendering)</li>
            <li>• At least 512 MB RAM</li>
            <li>• ~100 MB disk space per platform</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
