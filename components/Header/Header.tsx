"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false); // NEW: Dropdown state

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        setMoreOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slideUnderline {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          25%, 75% { opacity: 1; }
          50% { transform: translateX(0); }
        }
        .animated-underline {
          position: relative;
          display: inline-block;
        }
        .animated-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent);
          animation: slideUnderline 2s ease-in-out infinite;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md shadow-md bg-[var(--card)]/80 border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold flex items-center gap-1">
            <span className="text-[var(--accent)]">Blue</span>
            <span className="animated-underline" style={{ color: "var(--foreground)" }}>
              Buff
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-[var(--muted)] relative">

            <Link href="/" className="hover:text-[var(--foreground)] transition">Home</Link>
            <Link href="/anime" className="hover:text-[var(--foreground)] transition">Wallpapers</Link>
            <Link href="/events" className="hover:text-[var(--foreground)] transition">Events</Link>
            <Link href="/esports" className="hover:text-[var(--foreground)] transition">Esports</Link>
            <Link href="/blogs" className="hover:text-[var(--foreground)] transition">Blogs</Link>

            {/* NEW — More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="hover:text-[var(--foreground)] transition flex items-center gap-1"
              >
                More <span className="text-xs">▼</span>
              </button>

              {/* DROPDOWN */}
              {moreOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg py-2 z-50">
                  {[
                    { href: "/about", label: "About Us" },
                    { href: "/contact", label: "Contact" },
                    { href: "/privacy-policy", label: "Privacy Policy" },
                    { href: "/terms-and-conditions", label: "Terms & Conditions" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition"
                      onClick={() => setMoreOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[var(--foreground)] text-3xl"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
   {/* Mobile Menu */}
<div
  className={`md:hidden transition-all duration-300 overflow-hidden ${
    menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
  } bg-[var(--card)] border-t border-[var(--border)]`}
>
  <nav className="flex flex-col px-6 py-4 space-y-4 text-[var(--muted)]">
    {[
      { href: "/", label: "Home" },
      { href: "/anime", label: "Wallpapers" },
      { href: "/events", label: "Events" },
      { href: "/esports", label: "Esports" },
      { href: "/blogs", label: "Blogs" },
    ].map(({ href, label }) => (
      <Link
        key={label}
        href={href}
        className="hover:text-[var(--foreground)] transition"
        onClick={() => setMenuOpen(false)}
      >
        {label}
      </Link>
    ))}

    {/* NEW — Collapsible "More" Section */}
    <div className="border-t border-[var(--border)] pt-4">
      <button
        onClick={() => setMoreOpen(!moreOpen)}
        className="text-[var(--foreground)] w-full text-left flex items-center justify-between font-medium"
      >
        More
        <span className="text-xs">{moreOpen ? "▲" : "▼"}</span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          moreOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-3 pl-2">
          {[
            { href: "/about", label: "About Us" },
            { href: "/contact", label: "Contact" },
            { href: "/privacy-policy", label: "Privacy Policy" },
            { href: "/terms-and-conditions", label: "Terms & Conditions" },
          ].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              onClick={() => {
                setMoreOpen(false);
                setMenuOpen(false);
              }}
              className="hover:text-[var(--foreground)] transition"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </nav>
</div>

      </header>
    </>
  );
}
