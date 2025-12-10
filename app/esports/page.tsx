"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function EsportsHome() {
  const liveMatches = [
    { id: 1, teams: ["Blacklist", "ONIC"], score: "1 - 2", status: "Live Now", image: "" },
    { id: 2, teams: ["RRQ", "Falcon"], score: "0 - 1", status: "Live Now", image: "" },
  ];

  const tournaments = [
    { title: "M6 World Championship", date: "Dec 2025", prize: "$1,000,000", image: "" },
    { title: "MPL PH Season 14", date: "March 2026", prize: "$300,000", image: "" },
  ];

  const news = [
    { title: "ONIC Crowned Champion — Full Match Recap", date: "12 Jan 2025", image: "" },
    { title: "M6 Group Draw Results — Wild Surprises!", date: "10 Jan 2025", image: "" },
    { title: "RRQ Roster Shuffle for 2025 Season", date: "8 Jan 2025", image: "" },
  ];

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] font-oxanium">




      {/* ★ LIVE MATCHES ★ */}
      <SectionTitle title="🔥 Live Matches" subtitle="Ongoing action — updated in real time" />

      <section className="max-w-6xl mx-auto mt-5 grid md:grid-cols-3 gap-6 px-4">
        {liveMatches.map((m) => (
          <div
            key={m.id}
            className="group relative rounded-2xl bg-white/5 border border-white/10 
              shadow-xl overflow-hidden hover:border-blue-500/40 hover:bg-white/10 transition-all"
          >
            <Image
              src={m.image || logo}
              width={500}
              height={300}
              alt="match"
              className="w-full h-44 object-cover group-hover:scale-[1.03] transition duration-300"
            />

            {/* live badge */}
            <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-red-600 text-white font-semibold shadow">
              LIVE
            </span>

            <div className="p-5">
              <h3 className="text-xl font-bold text-[var(--foreground)]">
                {m.teams[0]} <span className="text-[var(--muted)]">vs</span> {m.teams[1]}
              </h3>

              <p className="text-[var(--accent)] mt-2 font-bold text-lg">{m.score}</p>
            </div>
          </div>
        ))}
      </section>

      {/* ★ TOURNAMENTS ★ */}
      <SectionTitle title="🏆 Upcoming Tournaments" subtitle="Major MLBB events you shouldn’t miss" />

      <section className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-6 px-4">
        {tournaments.map((t, i) => (
          <div
            key={i}
            className="group rounded-2xl bg-white/5 border border-white/10 
              shadow-xl overflow-hidden hover:border-yellow-500/40 hover:bg-white/10 transition-all"
          >
            <Image
              src={t.image || logo}
              width={500}
              height={300}
              alt="tournament"
              className="w-full h-48 object-cover group-hover:scale-[1.03] transition duration-300"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-[var(--foreground)]">{t.title}</h3>
              <p className="text-[var(--muted)] text-sm mt-1">{t.date}</p>

              <p className="mt-3 px-3 py-1 inline-block text-sm rounded-full 
                bg-yellow-600/30 border border-yellow-500/40 text-yellow-200">
                🏆 Prize: {t.prize}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ★ NEWS ★ */}
      <SectionTitle title="📰 Latest News" subtitle="Top headlines from the MLBB esports world" />

      <section className="max-w-6xl mx-auto mt-10 mb-20 grid md:grid-cols-3 gap-6 px-4">
        {news.map((n, i) => (
          <div
            key={i}
            className="group rounded-2xl bg-white/5 border border-white/10 shadow-lg overflow-hidden 
              cursor-pointer hover:border-blue-400/40 hover:bg-white/10 transition-all"
          >
            <Image
              src={n.image || logo}
              width={500}
              height={300}
              alt="news"
              className="w-full h-40 object-cover group-hover:scale-[1.03] transition duration-300"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-white transition">
                {n.title}
              </h3>
              <p className="text-[var(--muted)] text-sm mt-1">{n.date}</p>
            </div>
          </div>
        ))}
      </section>

    </main>
  );
}

/* ---------------------------- SECTION TITLE ---------------------------- */
function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-16">
      <h2 className="text-3xl font-bold tracking-wide text-[var(--accent)]">
        {title}
      </h2>
      <p className="text-[var(--muted)] mt-1">{subtitle}</p>
    </section>
  );
}
