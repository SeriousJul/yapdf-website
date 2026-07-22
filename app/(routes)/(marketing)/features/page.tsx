import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features — yapdf PDF Editor",
  description:
    "Complete feature list for yapdf: viewing, annotations, page operations, form filling, redaction, text editing, and more.",
};

const categories = [
  {
    heading: "Viewing & Navigation",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      "Open PDFs via native dialog or CLI argument",
      "Continuous vertical scroll with lazy rendering",
      "Fit-width, fit-page, actual size, manual zoom (10%–800%)",
      "Page thumbnails and outline/bookmarks tree navigation",
      "Go-to-page dialog (Ctrl+G) with live page counter",
      "Keyboard shortcuts with hover tooltips on toolbar buttons",
    ],
  },
  {
    heading: "Search & Text Selection",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    items: [
      "Full-text search (Ctrl+F) with async worker-thread execution",
      "Find bar with match count and wrap-around navigation",
      "In-page highlight overlays for current and previous matches",
      "Text selection & copy — drag to select, Ctrl+C to copy",
      "Right-click a selection to create highlight annotations",
    ],
  },
  {
    heading: "Page Operations",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      "Rotate pages left/right",
      "Delete pages (refuses to delete the last remaining page)",
      "Reorder via Page menu or drag-and-drop thumbnails",
      "Insert blank pages and merge/append other PDFs",
      "Extract page ranges to new PDFs",
      "Batch extract across multiple files at once",
      "Undo/redo with unified per-tab timeline (capped at 12 snapshots)",
    ],
  },
  {
    heading: "Annotations",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    items: [
      "Highlight, Rectangle, Text box, Ink/free-draw, Sticky note",
      "Select, move, and resize annotations (corner handles)",
      "Live preview while drawing with undo support",
      "Inspector panel for opacity, border width, font size, color",
      "Right-click context menu: duplicate, delete, properties",
      "Annotations flatten on save — visible in every PDF viewer",
    ],
  },
  {
    heading: "Overlays & Forms",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6" />
      </svg>
    ),
    items: [
      "Image stamping: drop PNG/JPEG/GIF/BMP/WebP onto pages",
      "AcroForm form filling — text fields, checkboxes, radio groups",
      "Inline editing on the page or via a dedicated Forms sidebar tab",
      "Undoable edits with live preview and regenerated appearances",
    ],
  },
  {
    heading: "Editing Page Content",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    items: [
      "Select existing text/image/path objects by clicking",
      "Move, resize (scale about anchor), edit text content directly",
      "Recolor text via inspector swatches",
      "Delete objects or replace images at the same bounds",
      "Safe fallback to overlay when font re-encoding fails",
    ],
  },
  {
    heading: "Advanced",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    items: [
      "Redaction — drag regions, rasterize on save (truly permanent)",
      "Document properties dialog with editable metadata fields",
      "Digital signature viewing (reason and signing date)",
      "Multiple document tabs with independent state per tab",
      "Print support via OS print system (CUPS / PowerShell)",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex-1">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="border border-[var(--border)] bg-[var(--card)] rounded-full px-3 py-1 text-xs font-medium mb-6 inline-block">Feature-rich</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Features</h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
            A complete PDF editor with everything from basic viewing to advanced redaction — all in a fast, native Rust application.
          </p>
        </div>
      </section>

      {/* ── Feature Categories ───────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((cat) => (
            <div key={cat.heading} className="group rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:border-brand-400/30 dark:hover:border-brand-500/30 p-6 sm:p-8 transition-all duration-300 hover:border-[var(--brand-400)/30]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand-500)]/10 to-violet-500/10 border border-[var(--border)] flex items-center justify-center text-[var(--brand-600)] dark:text-[var(--brand-400)]">
                  {cat.icon}
                </div>
                <h2 className="text-xl font-bold">{cat.heading}</h2>
              </div>
              <ul className="space-y-3 pl-13 ml-5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--muted)] leading-relaxed text-sm">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--brand-500)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--card)]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to try it?</h2>
          <p className="text-[var(--muted)] text-lg mb-8 max-w-xl mx-auto">
            Download yapdf and start editing PDFs with a native, fast experience.
          </p>
          <Link href="/download" className="btn-primary !px-8 !py-3 text-base inline-flex items-center gap-2">
            Download for free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
