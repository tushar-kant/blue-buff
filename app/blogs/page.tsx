"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function BlogsHome() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const categories = [
    { name: "Hero Guides", icon: "📘" },
    { name: "Builds", icon: "⚔️" },
    { name: "Esports", icon: "🔥" },
    { name: "MLBB Tips", icon: "🎯" },
    { name: "Tier Lists", icon: "🏆" },
    { name: "Updates", icon: "📝" },
  ];

  const topArticles = [
    {
      title: "Strongest Early Game Heroes Ranked",
      image: "",
      url: "/blogs/strongest-early-game-heroes",
      tag: "Hero Guides",
      date: "5 Jan 2025",
    },
    {
      title: "Meta Tanks You Must Master",
      image: "",
      url: "/blogs/meta-tanks-guide",
      tag: "Builds",
      date: "3 Jan 2025",
    },
    {
      title: "Best 2025 Emblem Setups",
      image: "",
      url: "/blogs/best-emblem-2025",
      tag: "MLBB Tips",
      date: "1 Jan 2025",
    },
  ];

  const featured = {
    title: "Top 10 Assassin Heroes to Rank Up Fast",
    desc: "A complete breakdown of the strongest assassins in the current meta.",
    image: "",
    url: "/blogs/top-10-assassins",
    tag: "Hero Guides",
    date: "8 Jan 2025",
  };

  const latestBlogs = [
    {
      title: "Best Mage Builds for 2025 Season",
      date: "12 Jan 2025",
      image: "",
      url: "/blogs/best-mage-builds-2025",
      tag: "Builds",
    },
    {
      title: "How to Counter OP Marksmen in Late Game",
      date: "10 Jan 2025",
      image: "",
      url: "/blogs/counter-marksmen",
      tag: "MLBB Tips",
    },
    {
      title: "MLBB Esports 2025 Roadmap Breakdown",
      date: "9 Jan 2025",
      image: "",
      url: "/blogs/esports-roadmap-2025",
      tag: "Esports",
    },
  ];

  // close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !(wrapperRef.current as any).contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="min-h-screen px-4 sm:px-6 pb-24 font-oxanium bg-[var(--background)] text-[var(--foreground)]">

      {/* SEARCH + DROPDOWN */}
      <section className="pt-10 max-w-6xl mx-auto lg:flex lg:items-center lg:justify-between gap-6">

        {/* Search */}
        <div className="w-full lg:w-1/2 relative">
          <input
            placeholder="Search heroes, builds, guides..."
            className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 outline-none
            text-base shadow focus:border-[var(--accent)] transition"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">🔍</span>
        </div>

        {/* Dropdown */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 relative" ref={wrapperRef}>
          <button
            onClick={() => setOpen(!open)}
            className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl 
            flex justify-between items-center text-base hover:border-[var(--accent)] transition"
          >
            <span>Select category</span>
            <span className={`transition transform ${open ? "rotate-180" : ""}`}>▼</span>
          </button>

          {open && (
            <div className="absolute w-full mt-2 bg-white/5 backdrop-blur-xl border border-white/10 
            rounded-xl shadow-xl overflow-hidden z-20 animate-fadeIn">

              {categories.map((c, i) => (
                <div
                  key={i}
                  onClick={() => setOpen(false)}
                  className="px-5 py-3 flex items-center gap-3 cursor-pointer 
                  hover:bg-purple-500/20 transition text-base"
                >
                  <span className="text-lg">{c.icon}</span>
                  <span>{c.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

      </section>

      {/* TOP ARTICLES */}
      <section className="mt-12 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--accent)]">Top Articles</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topArticles.map((t, i) => (
            <Link
              key={i}
              href={t.url}
              className="bg-white/5 p-4 border border-white/10 rounded-xl hover:border-[var(--accent)]/40 
              hover:shadow-xl transition cursor-pointer block"
            >
              <Image
                src={t.image || logo}
                width={500}
                height={300}
                alt="top article"
                className="w-full h-40 object-cover rounded-xl"
              />

              <span className="inline-block mt-3 px-3 py-1 text-xs bg-purple-600/20 border border-purple-600/30 rounded-full text-purple-300">
                {t.tag}
              </span>

              <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">{t.title}</h3>
              <p className="text-[var(--muted)] text-sm">{t.date}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="mt-14 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--accent)]">Featured Guide ⭐</h2>

        <Link
          href={featured.url}
          className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-7 flex flex-col sm:flex-row 
          gap-6 hover:border-[var(--accent)]/40 transition shadow-xl"
        >
          <div className="w-full sm:w-1/2">
            <Image
              src={featured.image || logo}
              width={600}
              height={400}
              alt="featured"
              className="w-full h-52 object-cover rounded-xl"
            />
          </div>

          <div className="w-full sm:w-1/2 flex flex-col justify-center">
            <span className="px-3 py-1 text-xs bg-purple-600/20 border border-purple-600/30 rounded-full text-purple-300 w-fit mb-3">
              {featured.tag}
            </span>

            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[var(--foreground)]">{featured.title}</h3>
            <p className="text-[var(--muted)] text-sm sm:text-base">{featured.desc}</p>
            <p className="text-[var(--muted)] text-xs mt-2">{featured.date}</p>

            <button className="mt-4 px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg 
            text-white text-sm sm:text-base transition w-fit">
              Read Guide →
            </button>
          </div>
        </Link>
      </section>

      {/* LATEST BLOGS */}
      <section className="mt-14 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[var(--accent)]">Latest Blogs</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestBlogs.map((b, i) => (
            <Link
              key={i}
              href={b.url}
              className="rounded-2xl bg-white/5 border border-white/10 p-3 cursor-pointer 
              hover:border-[var(--accent)]/40 hover:shadow-lg transition block"
            >
              <Image
                src={b.image || logo}
                width={500}
                height={300}
                alt="blog"
                className="w-full h-40 object-cover rounded-xl"
              />

              <span className="inline-block mt-3 px-3 py-1 text-xs bg-purple-600/20 border border-purple-600/30 rounded-full text-purple-300">
                {b.tag}
              </span>

              <h3 className="mt-2 text-lg font-semibold text-[var(--foreground)]">{b.title}</h3>
              <p className="text-[var(--muted)] text-sm mt-1">{b.date}</p>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
