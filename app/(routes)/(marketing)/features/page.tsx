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
    items: [
      "Image stamping: drop PNG/JPEG/GIF/BMP/WebP onto pages",
      "AcroForm form filling — text fields, checkboxes, radio groups",
      "Inline editing on the page or via a dedicated Forms sidebar tab",
      "Undoable edits with live preview and regenerated appearances",
    ],
  },
  {
    heading: "Editing Page Content",
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
      {/* Hero */}
      <section className="py-16 sm:py-20 border-b border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Features</h1>
          <p className="text-lg text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
            A complete PDF editor with everything from basic viewing to advanced
            redaction — all in a fast, native Rust application.
          </p>
        </div>
      </section>

      {/* Feature categories */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((cat) => (
            <div key={cat.heading}>
              <h2 className="text-2xl font-bold mb-6">{cat.heading}</h2>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[var(--muted)] leading-relaxed"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--card)] border-t border-[var(--border)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to try it?</h2>
          <p className="text-[var(--muted)] mb-8">
            Download yapdf and start editing PDFs with a native, fast experience.
          </p>
          <Link
            href="/download"
            className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-lg font-medium inline-block transition-colors"
          >
            Download for free →
          </Link>
        </div>
      </section>
    </div>
  );
}
