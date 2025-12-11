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

  // Close dropdown on outside click
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

      {/* ================= SEARCH + DROPDOWN ================= */}
      <section className="pt-10 max-w-6xl mx-auto lg:flex lg:items-center lg:justify-between gap-6">

        {/* Search */}
        <div className="w-full lg:w-1/2 relative">
          <input
            placeholder="Search heroes, builds, guides..."
            className="
              w-full px-5 py-3 rounded-xl
              bg-white/5 border border-white/10 shadow 
              outline-none text-base 
              focus:border-[var(--accent)]
              transition
            "
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">🔍</span>
        </div>

        {/* Dropdown */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 relative" ref={wrapperRef}>
          <button
            onClick={() => setOpen(!open)}
            className="
              w-full px-5 py-3 rounded-xl 
              bg-white/5 border border-white/10 
              flex justify-between items-center 
              hover:border-[var(--accent)]/40 
              transition
            "
          >
            <span>Select category</span>
            <span className={`transition transform ${open ? "rotate-180" : ""}`}>▼</span>
          </button>

          {open && (
            <div
              className="
                absolute w-full mt-2 rounded-xl z-20 shadow-xl overflow-hidden 
                bg-white/5 backdrop-blur-xl border border-white/10 animate-fadeIn
              "
            >
              {categories.map((c, i) => (
                <div
                  key={i}
                  onClick={() => setOpen(false)}
                  className="
                    px-5 py-3 flex items-center gap-3 
                    cursor-pointer text-base 
                    hover:bg-[var(--accent)]/15 
                    transition
                  "
                >
                  <span className="text-lg">{c.icon}</span>
                  <span>{c.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

      </section>

      {/* ================= TOP ARTICLES ================= */}
      <SectionTitle title="🔥 Top Articles" />

      <section className="max-w-6xl mx-auto mt-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topArticles.map((t, i) => (
            <Link
              key={i}
              href={t.url}
              className="
                block bg-white/5 p-4 rounded-xl 
                border border-white/10 
                hover:border-[var(--accent)]/40 
                hover:shadow-[0_0_25px_var(--accent)/30]
                transition
              "
            >
              <Image
                src={t.image || logo}
                width={500}
                height={300}
                alt="article"
                className="w-full h-40 object-cover rounded-xl"
              />

              <Tag>{t.tag}</Tag>

              <h4 className="mt-2 text-lg font-semibold">{t.title}</h4>
              <p className="text-[var(--muted)] text-sm">{t.date}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= FEATURED GUIDE ================= */}
      <SectionTitle title="⭐ Featured Guide" />

      <section className="max-w-6xl mx-auto mt-6">
        <Link
          href={featured.url}
          className="
            flex flex-col sm:flex-row gap-6 
            p-5 sm:p-7 rounded-2xl bg-white/5 
            border border-white/10 shadow-xl 
            hover:border-[var(--accent)]/40 
            transition
          "
        >
          <Image
            src={featured.image || logo}
            width={600}
            height={400}
            alt="featured"
            className="w-full sm:w-1/2 h-52 object-cover rounded-xl"
          />

          <div className="w-full sm:w-1/2 flex flex-col justify-center">
            <Tag>{featured.tag}</Tag>

            <h4 className="text-xl sm:text-2xl font-bold mt-2">{featured.title}</h4>
            <p className="text-[var(--muted)] text-sm mt-2">{featured.desc}</p>

            <p className="text-[var(--muted)] text-xs mt-2">{featured.date}</p>

            <button className="
              mt-4 px-5 py-2 bg-[var(--accent)] 
              hover:bg-[var(--accent-dark)] 
              text-white rounded-lg transition
            ">
              Read Guide →
            </button>
          </div>
        </Link>
      </section>

      {/* ================= LATEST BLOGS ================= */}
      <SectionTitle title="🆕 Latest Blogs" />

      <section className="max-w-6xl mx-auto mt-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestBlogs.map((b, i) => (
            <Link
              key={i}
              href={b.url}
              className="
                block rounded-2xl p-3 
                bg-white/5 border border-white/10 
                hover:border-[var(--accent)]/40 
                hover:shadow-[0_0_25px_var(--accent)/30]
                transition
              "
            >
              <Image
                src={b.image || logo}
                width={500}
                height={300}
                alt="blog"
                className="w-full h-40 object-cover rounded-xl"
              />

              <Tag>{b.tag}</Tag>

              <h4 className="mt-2 text-lg font-semibold">{b.title}</h4>
              <p className="text-[var(--muted)] text-sm">{b.date}</p>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}

/* ---------------------------- SECTION TITLE ---------------------------- */
function SectionTitle({ title }: { title: string }) {
  return (
    <section className="max-w-6xl mx-auto mt-14 px-4">
      <h4 className="text-2xl font-bold text-[var(--accent)] flex items-center gap-3">
        {title}
        <span className="h-1 w-12 bg-[var(--accent)] rounded-full"></span>
      </h4>
    </section>
  );
}

/* ---------------------------- TAG COMPONENT ---------------------------- */
function Tag({ children }: any) {
  return (
    <span
      className="
        inline-block mt-3 px-3 py-1 text-xs 
        rounded-full border border-purple-600/40 
        bg-purple-600/20 text-purple-300
      "
    >
      {children}
    </span>
  );
}
