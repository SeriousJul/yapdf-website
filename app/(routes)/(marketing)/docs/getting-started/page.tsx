import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started — yapdf Documentation",
  description:
    "Install and run yapdf on Linux, macOS, or Windows. Build from source with Rust.",
};

export default function GettingStartedPage() {
  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Getting Started</h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
            Install yapdf in minutes — or build from source if you prefer.
          </p>
        </div>
      </section>

      {/* Quick install */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Binary download */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Option 1: Download a binary</h2>

            <p className="text-[var(--muted)] leading-relaxed mb-6">
              The fastest way to get started. Grab the latest release for your
              platform from GitHub — no installation required.
            </p>

            <div className="bg-brand-50 dark:bg-brand-950/20 border border-brand-200 dark:border-brand-800 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-brand-700 dark:text-brand-300 mb-3">
                Quick links
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "Linux (x64)", format: "AppImage / tar.gz" },
                  { name: "macOS (Apple Silicon)", format: ".dmg" },
                  { name: "macOS (Intel)", format: ".dmg" },
                  { name: "Windows (x64)", format: ".zip" },
                ].map((p) => (
                  <li key={p.name}>
                    <a
                      href="https://github.com/SeriousJul/yapdf/releases/latest"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-600 hover:text-brand-700 underline underline-offset-4"
                    >
                      {p.name} ({p.format})
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="font-semibold mb-2">Linux (AppImage)</h3>
            <div className="bg-slate-900 rounded-xl p-4 text-sm font-mono text-slate-300 overflow-x-auto mb-4">
              <pre>{`# Download the AppImage
wget https://github.com/SeriousJul/yapdf/releases/latest/download/yapdf-x86_64.AppImage

# Make it executable and run
chmod +x yapdf-x86_64.AppImage
./yapdf-x86_64.AppImage document.pdf`}</pre>
            </div>

            <h3 className="font-semibold mb-2">macOS</h3>
            <div className="bg-slate-900 rounded-xl p-4 text-sm font-mono text-slate-300 overflow-x-auto mb-4">
              <pre>{`# Open the .dmg, drag yapdf to Applications
# First launch may show a Gatekeeper warning —
# go to System Settings > Privacy & Security and click "Open anyway"`}</pre>
            </div>

            <h3 className="font-semibold mb-2">Windows</h3>
            <div className="bg-slate-900 rounded-xl p-4 text-sm font-mono text-slate-300 overflow-x-auto mb-4">
              <pre>{`# Extract the .zip file
# Run yapdf.exe (you may need to allow it through Windows SmartScreen)`}</pre>
            </div>
          </div>

          {/* Build from source */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Option 2: Build from source</h2>

            <p className="text-[var(--muted)] leading-relaxed mb-6">
              Requires Rust stable. This is the recommended approach if you want
              to contribute or customize yapdf.
            </p>

            <div className="bg-slate-900 rounded-xl p-5 text-sm font-mono text-slate-300 overflow-x-auto mb-6">
              <pre>{`# 1. Clone the repository
git clone https://github.com/SeriousJul/yapdf.git
cd yapdf

# 2. Fetch the PDFium native library
./scripts/fetch-pdfium.sh

# 3. Run (optionally opening a file)
cargo run -p yapdf-app -- path/to/document.pdf

# 4. Build for release
cargo build --release -p yapdf-app`}</pre>
            </div>

            <h3 className="font-semibold mb-2">Custom PDFium location</h3>
            <div className="bg-slate-900 rounded-xl p-4 text-sm font-mono text-slate-300 overflow-x-auto">
              <pre>{`# If PDFium is installed elsewhere:
PDFIUM_LIB_PATH=/opt/pdfium/lib cargo run -p yapdf-app`}</pre>
            </div>
          </div>

          {/* Keyboard shortcuts */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Keyboard shortcuts</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left py-3 pr-4 font-medium text-[var(--muted)]">Action</th>
                    <th className="text-right py-3 pl-4 font-medium text-[var(--muted)]">Shortcut</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--muted)]">
                  {[
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
                  ].map(([action, shortcut]) => (
                    <tr key={action} className="border-b border-[var(--border)]/50">
                      <td className="py-2.5 pr-4">{action}</td>
                      <td className="py-2.5 pl-4 text-right font-mono text-xs bg-slate-100 dark:bg-slate-800 rounded px-2 inline-block ml-auto">
                        {shortcut}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Known limitations */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Known limitations</h2>
            <ul className="space-y-3 text-[var(--muted)]">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                <span>
                  <strong>Wayland drag-and-drop:</strong> On Linux Wayland compositors
                  (Hyprland, Sway), file drops don't fire. Use the "Open" button or pass
                  the PDF path as a CLI argument instead.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
                <span>
                  <strong>Digital signatures:</strong> You can view existing signatures but
                  cannot sign or verify them (pdfium-render 0.9 limitation).
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
