"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const stored = localStorage.getItem("yapdf-dark-mode");
    if (stored === "true" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDark = () => {
    const next = !darkMode;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("yapdf-dark-mode", String(next));
    setDarkMode(next);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] transition-colors duration-300">
      {/* ── Navigation ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)]/80 bg-[var(--background)]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[var(--background)]/60">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 font-bold text-xl group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--brand-600)] to-violet-600 flex items-center justify-center shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-shadow">
              <span className="text-white text-sm font-bold">Y</span>
            </div>
            <span className="gradient-text hidden sm:inline">yapdf</span>
          </Link>

          {/* Nav links — desktop */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/features">Features</NavLink>
            <NavLink href="/docs/getting-started">Docs</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* GitHub */}
            <Link
              href="https://github.com/SeriousJul/yapdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>

            {/* Download CTA */}
            <Link
              href="/download"
              className="ml-1 btn-primary !px-4 !py-2 text-xs sm:!text-sm"
            >
              Download
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-xl">
            <div className="px-4 py-3 space-y-1">
              <MobileNavLink href="/features" onClick={() => setMobileMenuOpen(false)}>Features</MobileNavLink>
              <MobileNavLink href="/docs/getting-started" onClick={() => setMobileMenuOpen(false)}>Docs</MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
              <Link
                href="https://github.com/SeriousJul/yapdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-colors text-sm font-medium"
              >
                GitHub
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ── Main content ───────────────────────────────────── */}
      <main className="flex-1">{children}</main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-[var(--border)] bg-[var(--card)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-3">
                <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[var(--brand-600)] to-violet-600 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Y</span>
                </div>
                <span className="gradient-text">yapdf</span>
              </Link>
<p className="text-sm text-[var(--muted)] leading-relaxed max-w-xs">A fast, native PDF editor built in Rust. Free for personal use, licensed for professional use.</p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-sm mb-3">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Features</Link></li>
                <li><Link href="/download" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Download</Link></li>
                <li><a href="https://github.com/SeriousJul/yapdf/releases" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Changelog</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-sm mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/docs/getting-started" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Documentation</Link></li>
                <li><a href="https://github.com/SeriousJul/yapdf" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">GitHub</a></li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-semibold text-sm mb-3">About</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">About yapdf</Link></li>
<li><Link href="/download" className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Licensing</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[var(--border)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
<p>© {new Date().getFullYear()} yapdf. All rights reserved.</p>
            <div className="flex items-center gap-1 text-xs">
              <span>Built with</span>
              <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <span>and Rust</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-lg text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-all duration-200"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card)] transition-colors text-sm font-medium"
    >
      {children}
    </Link>
  );
}
