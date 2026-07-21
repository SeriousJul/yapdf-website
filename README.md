# yapdf.dev — Public Website

The marketing website for [yapdf](https://github.com/SeriousJul/yapdf), the native Rust PDF editor.

## Tech Stack

- **Next.js 15** (App Router, React Server Components)
- **Tailwind CSS 4**
- **MDX** support via `@next/mdx`
- **TypeScript** throughout

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
├── layout.tsx                  # Root layout (fonts, metadata)
├── sitemap.ts                  # Auto-generated sitemap
├── robots.ts                   # Robots.txt
└── (routes)/
    └── (marketing)/
        ├── layout.tsx          # Marketing shell (nav + footer)
        ├── page.tsx            # Home page
        ├── features/page.tsx   # Features overview
        ├── download/page.tsx   # Download page
        ├── about/page.tsx      # About page
        └── docs/getting-started/page.tsx  # Docs

components/
├── faq-schema.tsx              # JSON-LD structured data (SEO + agent discoverability)

public/images/                  # OG images, screenshots, etc.

styles/globals.css              # Tailwind + design tokens
```

## SEO & Agent Discoverability

This site is built for perfect scores on both Google and AI agents:

- **JSON-LD structured data** — `SoftwareApplication` + `FAQPage` schemas
- **Semantic HTML5** — proper heading hierarchy, `<main>`, `<nav>`, etc.
- **Open Graph + Twitter Cards** — rich social sharing previews
- **Sitemap.xml + robots.txt** — auto-generated via Next.js
- **Canonical URLs** — set on every page

## Adding Pages

1. Create a new folder under `app/(routes)/(marketing)/`
2. Add a `page.tsx` with its own `metadata` export
3. The marketing layout (nav + footer) applies automatically

For content-heavy pages, use MDX files in the same directory and import them via `@next/mdx`.

## License

MIT OR Apache-2.0 — same as yapdf itself.
