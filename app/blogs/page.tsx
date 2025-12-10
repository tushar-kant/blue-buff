"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
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
    { title: "Strongest Early Game Heroes Ranked", image: "" },
    { title: "Meta Tanks You Must Master", image: "" },
    { title: "Best 2025 Emblem Setups", image: "" },
  ];

  const featured = {
    title: "Top 10 Assassin Heroes to Rank Up Fast",
    desc: "A complete breakdown of the strongest assassins in the current meta.",
    image: "",
  };

  const latestBlogs = [
    { title: "Best Mage Builds for 2025 Season", date: "12 Jan 2025", image: "" },
    { title: "How to Counter OP Marksmen in Late Game", date: "10 Jan 2025", image: "" },
    { title: "MLBB Esports 2025 Roadmap Breakdown", date: "9 Jan 2025", image: "" },
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

      {/* 🔥 SEARCH + DROPDOWN SIDE BY SIDE */}
      <section className="pt-10 max-w-6xl mx-auto lg:flex lg:items-center lg:justify-between gap-6">

        {/* Search */}
        <div className="w-full lg:w-1/2 relative">
          <input
            placeholder="Search heroes, builds, guides..."
            className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10
            outline-none text-base shadow focus:border-purple-400 transition"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        </div>

        {/* Dropdown */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 relative" ref={wrapperRef}>
          <button
            onClick={() => setOpen(!open)}
            className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl 
            flex justify-between items-center text-base hover:border-purple-400 transition"
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

      {/* 🏆 TOP ARTICLES */}
      <section className="mt-12 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Top Articles</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topArticles.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 p-4 border border-white/10 rounded-xl hover:border-purple-400/40 hover:shadow-xl transition cursor-pointer"
            >
              <Image
                src={t.image || logo}
                width={500}
                height={300}
                alt="top article"
                className="w-full h-40 object-cover rounded-xl"
              />
              <h3 className="mt-3 text-lg font-semibold">{t.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ FEATURED */}
      <section className="mt-14 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Featured Guide ⭐</h2>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-7 
        flex flex-col sm:flex-row gap-6 hover:border-purple-400/40 transition shadow-xl">

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
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{featured.title}</h3>
            <p className="text-gray-300 text-sm sm:text-base">{featured.desc}</p>

            <button className="mt-4 px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg 
            text-white text-sm sm:text-base transition">
              Read Guide →
            </button>
          </div>
        </div>
      </section>

      {/* 📰 LATEST BLOGS */}
      <section className="mt-14 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Latest Blogs</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestBlogs.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/5 border border-white/10 p-3 cursor-pointer 
              hover:border-purple-400/40 hover:shadow-lg transition"
            >
              <Image
                src={b.image || logo}
                width={500}
                height={300}
                alt="blog"
                className="w-full h-40 object-cover rounded-xl"
              />
              <h3 className="mt-3 text-lg font-semibold">{b.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{b.date}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
