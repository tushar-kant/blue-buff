"use client";

import Image from "next/image";
import logo from "@/public/logo.png";

export default function BlogsHome() {
  const categories = [
    { name: "Hero Guides", icon: "📘" },
    { name: "Builds & Emblems", icon: "⚔️" },
    { name: "Esports", icon: "🔥" },
    { name: "MLBB Tips", icon: "🎯" },
    { name: "Tier Lists", icon: "🏆" },
  ];

  const featured = {
    title: "Top 10 Assassin Heroes to Rank Up Fast",
    desc: "A breakdown of the strongest assassins in the current meta, best builds, and gameplay tips.",
    image: "", // empty = will show default logo
  };

  const latestBlogs = [
    {
      title: "Best Mage Builds for 2025 Season",
      date: "12 Jan 2025",
      image: "",
    },
    {
      title: "How to Counter OP Marksmen in Late Game",
      date: "10 Jan 2025",
      image: "",
    },
    {
      title: "MLBB Esports 2025 Roadmap Breakdown",
      date: "9 Jan 2025",
      image: "",
    },
  ];

  return (
 <main className="relative min-h-screen bg-[#06060f] text-white px-6 pb-24 font-oxanium">



  {/* HERO SECTION */}
  <section className="pt-28 pb-20 text-center">

    <div className="mt-10 max-w-2xl mx-auto relative">
      <input
        placeholder="Search guides, heroes, builds..."
        className="w-full px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-xl 
        border border-white/10 text-lg outline-none 
        focus:border-purple-400 transition placeholder-gray-400 shadow-lg"
      />

      {/* Search Icon */}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔍</span>
    </div>
  </section>

  {/* CATEGORIES */}
  <section className="max-w-6xl mx-auto mt-14">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-4xl font-bold">Categories</h2>
      <div className="w-24 h-[3px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
    </div>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      {categories.map((c, i) => (
        <div
          key={i}
          className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 
          shadow hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] 
          hover:border-purple-400/50 hover:scale-[1.06] transition-all cursor-pointer text-center"
        >
          <div className="text-4xl mb-2">{c.icon}</div>
          <p className="text-lg font-semibold tracking-wide">{c.name}</p>
        </div>
      ))}
    </div>
  </section>

  {/* FEATURED POST */}
  <section className="max-w-6xl mx-auto mt-24">
    <h2 className="text-4xl font-bold mb-6">Featured Guide ⭐</h2>

    <div
      className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl 
      border border-white/10 shadow-2xl cursor-pointer group"
    >
      <Image
        src={featured.image || logo}
        width={1200}
        height={600}
        alt="featured blog"
        className="w-full h-80 object-cover opacity-90 group-hover:opacity-100 
        group-hover:scale-105 transition-all"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-3xl font-bold group-hover:text-purple-400 transition">
          {featured.title}
        </h3>
        <p className="text-gray-300 mt-2 text-lg">{featured.desc}</p>
      </div>
    </div>
  </section>

  {/* LATEST BLOGS */}
  <section className="max-w-6xl mx-auto mt-24">
    <h2 className="text-4xl font-bold mb-6">Latest Blogs</h2>

    <div className="grid md:grid-cols-3 gap-8">
      {latestBlogs.map((b, i) => (
        <div
          key={i}
          className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl 
          border border-white/10 shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] 
          hover:border-purple-400/50 cursor-pointer group transition-all"
        >
          <Image
            src={b.image || logo}
            width={500}
            height={300}
            alt="blog"
            className="w-full h-48 object-cover group-hover:scale-105 transition-all"
          />

          <div className="p-5">
            <h3 className="text-xl font-semibold group-hover:text-purple-400 transition">
              {b.title}
            </h3>
            <p className="text-gray-400 mt-1">{b.date}</p>
          </div>
        </div>
      ))}
    </div>
  </section>

</main>

  );
}
