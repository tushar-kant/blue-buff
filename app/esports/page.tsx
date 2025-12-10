"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function EsportsHome() {
  const liveMatches = [
    {
      id: 1,
      teams: ["Blacklist", "ONIC"],
      score: "1 - 2",
      status: "Live Now",
      image: "",
    },
    {
      id: 2,
      teams: ["RRQ", "Falcon"],
      score: "0 - 1",
      status: "Live Now",
      image: "",
    },
  ];

  const tournaments = [
    {
      title: "M6 World Championship",
      date: "Dec 2025",
      prize: "$1,000,000",
      image: "",
    },
    {
      title: "MPL PH Season 14",
      date: "March 2026",
      prize: "$300,000",
      image: "",
    },
  ];

  const news = [
    {
      title: "ONIC Crowned Champion — Full Match Recap",
      date: "12 Jan 2025",
      image: "",
    },
    {
      title: "M6 Group Draw Results — Wild Surprises!",
      date: "10 Jan 2025",
      image: "",
    },
    {
      title: "RRQ Roster Shuffle for 2025 Season",
      date: "8 Jan 2025",
      image: "",
    },
  ];

  const topTeams = [
    { name: "Blacklist International", region: "PH", logo: "/teams/blck.png" },
    { name: "ONIC Esports", region: "ID", logo: "/teams/onic.png" },
    { name: "RRQ Hoshi", region: "ID", logo: "/teams/rrq.png" },
    { name: "ECHO", region: "PH", logo: "/teams/echo.png" },
  ];

  return (
  <main className="relative min-h-screen bg-[#050510] text-white overflow-hidden font-oxanium">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10 opacity-30">
    <div className="absolute top-1/3 left-1/2 w-[900px] h-[900px] bg-gradient-to-br from-blue-700 to-purple-800 blur-[200px] -translate-x-1/2"></div>
    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-t from-purple-900 to-transparent blur-[160px]"></div>
  </div>

  {/* HERO */}
  <section className="pt-32 pb-20 text-center relative">
    <h1 className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 drop-shadow-2xl">
      MLBB Esports Hub
    </h1>



    <div className="mt-10 inline-block px-12 py-4 rounded-full bg-gradient-to-r 
      from-blue-500 to-purple-600 text-white font-bold shadow-lg 
      hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] hover:scale-105 transition-all cursor-pointer animate-pulse">
      Watch Live Matches →
    </div>
  </section>

  {/* SECTION TITLE */}
  <section className="max-w-6xl mx-auto mt-16 text-center">
    <h2 className="text-4xl font-bold mb-3">
      ⚔️ Esports Matches
    </h2>
    <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-4"></div>
    <p className="text-gray-400 max-w-xl mx-auto">
      Stay updated with live MLBB tournament action.
    </p>
  </section>

  {/* LIVE MATCHES */}
  <section className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
    {liveMatches.map(m => (
      <div key={m.id}
        className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl 
        border border-white/10 hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.5)]
        transition-all group">

        <Image
          src={m.image || logo}
          width={500}
          height={300}
          alt="match"
          className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-all"
        />

        <div className="p-6">
          <p className="text-blue-400 font-semibold">{m.status}</p>

          <h3 className="text-2xl font-bold mt-1">
            {m.teams[0]} <span className="text-purple-400">vs</span> {m.teams[1]}
          </h3>

          <p className="text-gray-300 mt-2">
            {m.score}
          </p>
        </div>
      </div>
    ))}
  </section>

  {/* TOURNAMENT SECTION */}
  <section className="max-w-6xl mx-auto mt-24">
    <h2 className="text-4xl font-bold mb-6">🏆 Upcoming Tournaments</h2>
    <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full mb-4"></div>

    <div className="grid md:grid-cols-2 gap-8">
      {tournaments.map((t, i) => (
        <div key={i}
          className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
          hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all">

          <Image
            src={t.image || logo}
            width={500}
            height={300}
            alt="tournament"
            className="w-full h-56 object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-bold">{t.title}</h3>
            <p className="text-gray-400 mt-1">{t.date}</p>
            <p className="mt-2 text-yellow-400 font-semibold">
              Prize Pool: {t.prize}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* CTA */}
  <section className="max-w-6xl mx-auto mt-20 text-center p-10 rounded-2xl 
    bg-gradient-to-r from-purple-700/40 to-blue-600/30 border border-white/10 shadow-lg">
    
    <h2 className="text-3xl font-bold">🎯 Want to Join a Tournament?</h2>
    <p className="text-gray-300 max-w-xl mx-auto mt-2">
      Join community MLBB qualifiers, squad leagues & ranked tournaments.
    </p>

    <a
      href="https://wa.me/918983556020"
      target="_blank"
      className="inline-block mt-6 px-10 py-3 bg-green-500 text-white 
      rounded-full shadow-lg hover:scale-105 transition-all font-semibold"
    >
      WhatsApp Us
    </a>
  </section>

  {/* NEWS */}
  <section className="max-w-6xl mx-auto mt-24 mb-20">
    <h2 className="text-4xl font-bold mb-6">📰 Latest News</h2>

    <div className="grid md:grid-cols-3 gap-8">
      {news.map((n, i) => (
        <div key={i}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl 
          hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all">

          <Image
            src={n.image || logo}
            width={500}
            height={300}
            alt="news"
            className="w-full h-44 object-cover"
          />

          <div className="p-5">
            <h3 className="text-lg font-semibold hover:text-purple-400 transition-all">
              {n.title}
            </h3>
            <p className="text-gray-400 mt-1">{n.date}</p>
          </div>
        </div>
      ))}
    </div>
  </section>

</main>

  );
}
