import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yapdf.dev"),
  title: {
    default: "yapdf — Native Rust PDF Editor",
    template: "%s | yapdf",
  },
  description:
    "A fast, native PDF editor built in Rust. View, annotate, edit pages, fill forms, and more — on Linux, macOS, and Windows.",
keywords: [
    "PDF editor",
    "Rust",
    "Linux",
    "macOS",
    "Windows",
    "annotations",
    "redaction",
    "form filling",
    "native app",
  ],
  authors: [{ name: "yapdf contributors" }],
  creator: "yapdf",
  publisher: "yapdf",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "yapdf",
    title: "yapdf — Native Rust PDF Editor",
    description:
      "A fast, native PDF editor built in Rust. View, annotate, edit pages, fill forms, and more.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "yapdf — Native Rust PDF Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "yapdf — Native Rust PDF Editor",
    description:
      "A fast, native PDF editor built in Rust. View, annotate, edit pages, fill forms, and more.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://yapdf.dev",
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
