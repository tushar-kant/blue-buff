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

      {/* HERO */}
      <section className="pt-15 pb-16 text-center">
        <h3 className="text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-xl">
        Esports Hub
        </h3>

        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Live action • Tournaments • Breaking esports news  
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="px-10 py-3 rounded-xl bg-blue-600/20 border border-blue-500/40 text-white font-semibold hover:bg-blue-600/30 transition-all backdrop-blur-sm">
            ▶ Watch Live
          </button>

          <a
            href="https://wa.me/918983556020"
            target="_blank"
            className="px-10 py-3 rounded-xl bg-green-500/90 text-white font-semibold hover:bg-green-600 transition-all"
          >
            🏆 Join Tournament
          </a>
        </div>
      </section>

      {/* SECTION TITLE COMPONENT */}
      <SectionTitle title="Live Matches" subtitle="Ongoing action — updated in real time" />

      {/* LIVE MATCHES */}
      <section className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-6">
        {liveMatches.map((m) => (
          <div
            key={m.id}
            className="rounded-xl bg-white/5 border border-white/10 overflow-hidden
            hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 group shadow-lg"
          >
            <Image
              src={m.image || logo}
              width={500}
              height={300}
              alt="match"
              className="w-full h-44 object-cover group-hover:scale-[1.02] transition"
            />

            <div className="p-5">
              <p className="text-red-400 text-sm font-semibold">{m.status}</p>

              <h3 className="text-xl font-bold mt-1">
                {m.teams[0]} <span className="text-gray-300">vs</span> {m.teams[1]}
              </h3>

              <p className="text-gray-300 mt-1 font-medium">{m.score}</p>
            </div>
          </div>
        ))}
      </section>

      {/* TOURNAMENT SECTION */}
      <SectionTitle title="Upcoming Tournaments" subtitle="Major MLBB events you shouldn’t miss" />

      <section className="max-w-6xl mx-auto mt-10 grid md:grid-cols-3 gap-6">
        {tournaments.map((t, i) => (
          <div
            key={i}
            className="rounded-xl bg-white/5 border border-white/10 overflow-hidden
            hover:border-yellow-500/40 hover:bg-white/10 transition-all duration-300 group shadow-lg"
          >
            <Image
              src={t.image || logo}
              width={500}
              height={300}
              alt="tournament"
              className="w-full h-48 object-cover group-hover:scale-[1.02] transition"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold">{t.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{t.date}</p>
              <p className="text-yellow-400 mt-2 font-medium">Prize: {t.prize}</p>
            </div>
          </div>
        ))}
      </section>

      {/* NEWS */}
      <SectionTitle title="Latest News" subtitle="Top headlines from the MLBB esports world" />

      <section className="max-w-6xl mx-auto mt-10 mb-20 grid md:grid-cols-3 gap-6">
        {news.map((n, i) => (
          <div
            key={i}
            className="rounded-xl bg-white/5 border border-white/10 overflow-hidden
            hover:bg-white/10 hover:border-blue-400/40 transition cursor-pointer group shadow-lg"
          >
            <Image
              src={n.image || logo}
              width={500}
              height={300}
              alt="news"
              className="w-full h-40 object-cover group-hover:scale-[1.03] transition"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold group-hover:text-white transition">
                {n.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">{n.date}</p>
            </div>
          </div>
        ))}
      </section>

    </main>
  );
}

/* ---------------------------- SECTION TITLE COMPONENT ---------------------------- */

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="max-w-6xl mx-auto mt-16 ">
      <h2 className="text-3xl font-bold tracking-wide">{title}</h2>
      <p className="text-gray-400 mt-1">{subtitle}</p>

 
    </section>
  );
}
