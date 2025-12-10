"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function HomeContent() {
// ⭐ Esports Updates JSON
const esportsUpdates = [
  {
    id: 1,
    title: "MPL Weekly Recap",
    excerpt: "Key match results, standings, and top plays from this week’s MPL action.",
    slug: "/esports/mpl-weekly-recap",
    image: "",
  },
  {
    id: 2,
    title: "M5 World Championship",
    excerpt: "Full coverage of M5 — playoffs, brackets, highlights & predictions.",
    slug: "/esports/m5-news",
    image: "",
  },
  {
    id: 3,
    title: "Pro Player Spotlight",
    excerpt: "Deep dives into pro strategies, hero picks and signature gameplay.",
    slug: "/esports/player-spotlight",
    image: "",
  },
];

// ⭐ Events JSON
const mlbbEvents = [
  {
    id: 1,
    title: "Lucky Spin – Epic Skin",
    excerpt: "Try your luck and win the rotating Epic Skin of the month.",
    image: "",
  },
  {
    id: 2,
    title: "Starlight Event",
    excerpt: "See current Starlight skin, rewards, animations & bonuses.",
    image: "",
  },
  {
    id: 3,
    title: "Recharge Bonus",
    excerpt: "Get extra diamonds during limited-time recharge bonus events.",
    image: "",
  },
];

// ⭐ Trending Articles JSON (with fallback image)
const articles = [
  {
    id: 1,
    title: "Best Assassin Builds for Ranked (2025)",
    excerpt: "Top assassin builds dominating Mythic and above this season.",
    slug: "/blogs/assassin-builds",
    image: "",
  },
  {
    id: 2,
    title: "Updated MLBB Tier List – Season 29",
    excerpt: "A complete breakdown of strongest heroes by role.",
    slug: "/blogs/mlbb-tier-list",
    image: "", // ← missing image → fallback to logo
  },
  {
    id: 3,
    title: "M5 & MPL Highlights – Weekly Recap",
    excerpt: "Top plays, major upsets, and esports storylines.",
    slug: "/blogs/esports-weekly",
    image: "",
  },
];


  // ⭐ MLBB Categories (Roles)
  const categories = [
    { name: "Assassin", icon: "🗡️" },
    { name: "Fighter", icon: "⚔️" },
    { name: "Mage", icon: "✨" },
    { name: "Marksman", icon: "🏹" },
    { name: "Tank", icon: "🛡️" },
    { name: "Support", icon: "💖" },
  ];

  // ⭐ Stats Section
const stats = [
  { number: "800+", label: "Wallpapers Uploaded" },
  { number: "150+", label: "Blogs & Guides" },
  { number: "100+", label: "Heroes & Skins Covered" },
  { number: "Daily", label: "New Updates Posted" },
];


  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] relative z-10 overflow-hidden">
      {/* 🎨 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent)/10,transparent_60%),radial-gradient(circle_at_bottom_left,var(--accent-light,#00d8ff)/10,transparent_60%)] animate-pulse-slow pointer-events-none" />

      {/* 📊 Stats Section */}
      <div className="w-full bg-[var(--card)] border-b border-[var(--border)] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 tracking-wide text-[var(--accent)]">
            Blue Buff Stats
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group p-3 rounded-xl bg-[var(--background)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-[0_0_25px_-8px_var(--accent)] transition-all"
              >
                <div className="text-4xl font-extrabold text-[var(--accent)] mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-[var(--muted)] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🧩 About Section */}
 <div className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold text-center mb-12 text-[var(--accent)]">
    What MLBB Hub Offers
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* ⭐ Wallpapers */}
    <div className="p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-[0_0_35px_-10px_var(--accent)] transition-all">
      <div className="text-5xl mb-4 text-[var(--accent)] text-center">
        🖼️
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-center">HD MLBB Wallpapers</h3>
      <p className="text-[var(--muted)] text-center text-sm leading-relaxed">
        Explore a curated library of 1080p, 2K, and 4K wallpapers for your 
        favorite MLBB heroes and skins — updated regularly.
      </p>
    </div>

    {/* ⭐ Esports */}
    <div className="p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-[0_0_35px_-10px_var(--accent)] transition-all">
      <div className="text-5xl mb-4 text-[var(--accent)] text-center">
        🎮
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-center">Esports Highlights</h3>
      <p className="text-[var(--muted)] text-center text-sm leading-relaxed">
        Stay updated with MPL, MSC, M-Series, and tournament coverage — 
        scores, results, and top plays in one place.
      </p>
    </div>

    {/* ⭐ Events */}
    <div className="p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-[0_0_35px_-10px_var(--accent)] transition-all">
      <div className="text-5xl mb-4 text-[var(--accent)] text-center">
        📅
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-center">MLBB Events & Updates</h3>
      <p className="text-[var(--muted)] text-center text-sm leading-relaxed">
        Get details on current and upcoming MLBB events, rewards, skins, 
        patch notes, and in-game updates.
      </p>
    </div>

  </div>
</div>

{/* 📰 Trending Articles Section */}
<div className="max-w-6xl mx-auto px-6 py-20">
  <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
    <div>
      <h2 className="text-4xl font-bold mb-2">Trending Articles 📝</h2>
      <p className="text-[var(--muted)] text-lg">
        Latest MLBB guides, hero analysis & esports updates
      </p>
    </div>

    <Link
      href="/blogs"
      className="inline-flex items-center gap-2 bg-[var(--accent)]/10 border border-[var(--accent)] text-[var(--accent)] px-6 py-2.5 rounded-full font-semibold hover:bg-[var(--accent)] hover:text-white transition-all duration-300 shadow-md hover:shadow-[0_0_20px_-4px_var(--accent)]"
    >
      View All
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </Link>
  </div>

  {/* Articles Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {articles.map((article) => (
      <Link
        key={article.id}
        href={article.slug}
        className="group bg-[var(--card)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)] hover:shadow-[0_0_25px_-6px_var(--accent)] transition-all overflow-hidden"
      >
        
        {/* Article Image */}
        <div className="relative w-full h-44 overflow-hidden">
          <Image
            src={article.image || logo}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-[var(--accent)] mb-2 truncate">
            {article.title}
          </h3>
          <p className="text-[var(--muted)] text-sm leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        </div>

      </Link>
    ))}
  </div>
</div>

{/* 🎮 Esports Updates Section */}
{/* 🎮 Esports Updates Section */}
<div className="max-w-6xl mx-auto px-6 py-20">
  <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
    <div>
      <h2 className="text-4xl font-bold mb-2">Esports Updates 🎮</h2>
      <p className="text-[var(--muted)] text-lg">
        Latest MPL, MSC & M-Series highlights and match recaps
      </p>
    </div>

    <Link
      href="/esports"
      className="inline-flex items-center gap-2 bg-[var(--accent)]/10 border border-[var(--accent)] text-[var(--accent)] px-6 py-2.5 rounded-full font-semibold hover:bg-[var(--accent)] hover:text-white transition-all duration-300 shadow-md hover:shadow-[0_0_20px_-4px_var(--accent)]"
    >
      View All
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {esportsUpdates.map((item) => (
      <Link
        key={item.id}
        href={item.slug}
        className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl hover:border-[var(--accent)] hover:shadow-[0_0_25px_-6px_var(--accent)] transition-all overflow-hidden"
      >
        {/* Image */}
        <div className="relative w-full h-44 overflow-hidden">
          <Image
            src={item.image || logo}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-semibold text-[var(--accent)] mb-2">
            {item.title}
          </h3>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            {item.excerpt}
          </p>
        </div>
      </Link>
    ))}
  </div>
</div>




{/* 📅 MLBB Events Section */}
<div className="max-w-6xl mx-auto px-6 py-20 border-t border-[var(--border)]">
  <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
    <div>
      <h2 className="text-4xl font-bold mb-2">Current MLBB Events 📅</h2>
      <p className="text-[var(--muted)] text-lg">
        Don’t miss ongoing tasks, rewards & limited-time skin events
      </p>
    </div>

    <Link
      href="/events"
      className="inline-flex items-center gap-2 bg-[var(--accent)]/10 border border-[var(--accent)] text-[var(--accent)] px-6 py-2.5 rounded-full font-semibold hover:bg-[var(--accent)] hover:text-white transition-all duration-300 shadow-md hover:shadow-[0_0_20px_-4px_var(--accent)]"
    >
      View All
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {mlbbEvents.map((ev) => (
      <div
        key={ev.id}
        className="group bg-[var(--card)] border border-[var(--border)] rounded-2xl hover:border-[var(--accent)] hover:shadow-[0_0_25px_-6px_var(--accent)] transition-all overflow-hidden"
      >
        {/* Image */}
        <div className="relative w-full h-44">
          <Image
            src={ev.image || logo}
            alt={ev.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-semibold text-[var(--accent)] mb-2">
            {ev.title}
          </h3>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            {ev.excerpt}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


   

      {/* ✨ MLBB Role Categories */}
      <div className="py-20 bg-[var(--background)] border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-2">Browse Heroes</h2>
            <div className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {categories.map((cat, i) => (
              <Link
                key={i}
                href={`/heroes/${cat.name.toLowerCase()}`}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-[0_0_25px_-8px_var(--accent)] transition-all"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--background)] group-hover:bg-[var(--accent)] text-[var(--accent)] group-hover:text-white text-2xl transition-all">
                  {cat.icon}
                </div>
                <span className="text-sm font-medium text-center">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
