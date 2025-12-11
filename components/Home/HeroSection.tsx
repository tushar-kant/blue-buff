"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeroSection() {
  const [search, setSearch] = useState("");
  const pathname = usePathname();

  const isLive = pathname.startsWith("/anime-live");

  return (
    <section className="relative h-[100vh] flex flex-col justify-center text-center px-6 overflow-hidden bg-[var(--background)] text-[var(--foreground)]">

      {/* 🖋 Title */}
      <div className="relative -translate-y-12">
        <h1 className="font-extrabold mb-6 tracking-tight drop-shadow-lg flex items-center justify-center gap-6">

          {/* Normal BB */}
          <span
            className="text-[var(--accent)] inline-block animated-letter text-[120px] md:text-[180px] leading-none"
          >
            B
          </span>

          {/* Mirrored BB */}
          <span
            className="text-[var(--foreground)] inline-block animated-letter text-[120px] md:text-[180px] leading-none"
            style={{ transform: "scaleX(-1)" }}
          >
            B
          </span>

        </h1>

        <p className="text-[var(--muted)] text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore <span className="text-[var(--accent)] font-medium">Wallpapers</span>,  
          <span className="text-[var(--accent)] font-medium"> Events</span>, 
          and <span className="text-[var(--accent)] font-medium"> Esports Updates</span>
          — All in one MLBB fandom place.
        </p>
      </div>

      {/* 🔼 Breadcrumb */}
      <div className="max-w-3xl mx-auto w-full mb-6 -translate-y-8">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1 bg-[var(--card)] border border-[var(--border)] rounded-full px-1 py-2 shadow-sm">

            <Link
              href="/anime"
              className="px-1 py-1.5 rounded-full text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-all duration-300"
            >
              /wallpaper
            </Link>

            <span className="text-[var(--muted)]">|</span>

            <Link
              href="/events"
              className="px-1 py-1.5 rounded-full text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-all duration-300"
            >
              /events
            </Link>

            <span className="text-[var(--muted)]">|</span>

            <Link
              href="/esports"
              className="px-1 py-1.5 rounded-full text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-all duration-300"
            >
              /esports
            </Link>

            <span className="text-[var(--muted)]">|</span>

            <Link
              href="/blogs"
              className="px-1 py-1.5 rounded-full text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-all duration-300"
            >
              /blogs
            </Link>
          </div>
        </div>
      </div>

      {/* 🔍 Search Bar */}
      <div className="max-w-3xl mx-auto w-full relative -translate-y-8">
        <div className="w-full">
          <div className="relative w-full">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Heroes, Wallpapers, MLBB News..."
              className="w-full p-4 pl-12 text-lg rounded-full bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] focus:outline-none focus:ring-4 focus:ring-[var(--accent)] shadow-lg transition-all duration-300 placeholder:text-[var(--muted)]"
            />
            <svg
              className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[var(--muted)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

    </section>
  );
}
