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
      {/* 🌈 Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--accent)] opacity-20 blur-[130px] animate-float" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-purple-600 opacity-20 blur-[150px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-blue-500 opacity-15 blur-[140px] animate-pulse-slow" />
      </div>

      {/* 🖋 Title */}
      <div className="relative -translate-y-12">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
          <span className="text-[var(--accent)]">Blue</span>
          <span className="text-[var(--foreground)]"> BUFF</span>
        </h1>
        <p className="text-[var(--muted)] text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Explore <span className="text-[var(--accent)] font-medium">Wallpapers</span>,  
          <span className="text-[var(--accent)] font-medium"> Events</span>, 
          and <span className="text-[var(--accent)] font-medium"> Esports Updates</span>
          — All in one MLBB fandom place.
        </p>
      </div>

      {/* 🔍 Search UI only */}
  {/* 🔼 Breadcrumb on Top */}
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

{/* 🔍 Search Below */}
<div className="max-w-3xl mx-auto w-full relative -translate-y-8">
  <div className="w-full">
    <div className="relative w-full">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Heroes, Wallpapers, MLBB News..."
        className="w-full p-5 pl-14 text-lg rounded-full bg-[var(--card)] text-[var(--foreground)] border border-[var(--border)] focus:outline-none focus:ring-4 focus:ring-[var(--accent)] shadow-lg transition-all duration-300 placeholder:text-[var(--muted)]"
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


      {/* 🎞️ Animations */}
      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translate(0, 0) } 50% { transform: translate(20px, -20px) } }
        @keyframes float-delayed { 0%, 100% { transform: translate(0, 0) } 50% { transform: translate(-20px, 20px) } }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.15 } 50% { opacity: 0.25 } }
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 25s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 15s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>
    </section>
  );
}
