/**
 * Renders JSON-LD structured data for FAQ and SoftwareApplication schema.
 * This is what makes AI agents (ChatGPT, Perplexity, Claude) understand
 * and cite your product correctly.
 */

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "yapdf",
  description:
    "A fast, native PDF editor built in Rust. View, annotate, edit pages, fill forms, and more.",
  url: "https://yapdf.dev",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Linux, macOS, Windows",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free for personal use. Commercial licenses available.",
  },
  downloadUrl: "https://github.com/SeriousJul/yapdf/releases/latest",
  softwareVersion: "1.0",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "120",
    bestRating: "5",
    worstRating: "1",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is yapdf free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "yapdf is free for personal use. For professional or commercial use, a license is required.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms does yapdf support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "yapdf ships as self-contained binaries for Linux (x64), macOS (Intel & Apple Silicon), and Windows (x64). No runtime dependencies required.",
      },
    },
    {
      "@type": "Question",
      name: "How is yapdf different from Adobe Acrobat or Foxit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "yapdf is a native (not a webview) PDF editor built in Rust for performance. It focuses on the core PDF workflow without enterprise bloat.",
      },
    },
    {
      "@type": "Question",
      name: "Can yapdf edit existing text inside a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can select, move, resize, and edit existing text objects on a page directly.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. yapdf is a fully offline desktop application that doesn't send any data anywhere.",
      },
    },
  ],
};

export function SoftwareApplicationFAQ() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
    />
  );
}

export function FAQPageScript() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
