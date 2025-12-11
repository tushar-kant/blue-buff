"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function EsportsHome() {
  // API STATE
  const [liveMatches, setLiveMatches] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [communityTournaments, setCommunityTournaments] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH API ON LOAD
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/mlbb/esports/home");
        const json = await res.json();

        setLiveMatches(json.liveMatches);
        setTournaments(json.tournaments);
        setCommunityTournaments(json.communityTournaments);
        setNews(json.news);
      } catch (err) {
        console.error("Failed to load esports data", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold">
        Loading esports data...
      </div>
    );
  }

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] font-oxanium">

      {/* ------------------ LIVE MATCHES ------------------ */}
      <SectionTitle title="🔥 Live Matches" subtitle="Real-time MLBB esports action" />

      <section className="max-w-6xl mx-auto mt-6">
        <MobileCarousel>
          {liveMatches.map((m: any) => (
            <a
              key={m.id}
              href={m.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="block min-w-[80%] md:min-w-0 snap-start"
            >
              <div className="relative group bg-gradient-to-br from-[#0f1326] to-[#1b1f36]
                border border-white/10 rounded-2xl shadow-2xl overflow-hidden 
                hover:border-blue-500/50 hover:shadow-[0_0_25px_5px_rgba(0,102,255,0.3)]
                transition-all duration-300">

                <Image
                  src={m.image || logo}
                  width={600}
                  height={350}
                  alt="match"
                  className="w-full h-48 object-cover opacity-80 group-hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 px-3 py-1 text-xs bg-red-600 font-semibold rounded-full shadow-lg">
                  🔴 LIVE
                </span>

                <div className="relative p-5">
                  <div className="flex items-center justify-between mb-3">
                    <TeamCard name={m.teams[0]} />
                    <span className="text-lg font-bold text-blue-400">VS</span>
                    <TeamCard name={m.teams[1]} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </MobileCarousel>
      </section>

      {/* ------------------ UPCOMING TOURNAMENTS ------------------ */}
      <SectionTitle title="🏆 Upcoming Tournaments" subtitle="Major MLBB esports championships" />

      <section className="max-w-6xl mx-auto mt-10">
        <MobileCarousel>
          {tournaments.map((t: any, i: number) => (
            <div
              key={i}
              className="group relative rounded-2xl min-w-[80%] md:min-w-0 snap-start 
              bg-gradient-to-br from-[#15172a] to-[#1d2033]
              border border-white/10 shadow-xl overflow-hidden
              hover:border-yellow-400/50 hover:shadow-[0_0_25px_5px_rgba(255,215,0,0.3)]
              transition-all duration-300"
            >
              <Image
                src={t.image || logo}
                width={500}
                height={300}
                alt="tournament"
                className="w-full h-48 object-cover opacity-80 group-hover:scale-105 transition duration-500"
              />

              <div className="p-5">
                <h4 className="text-xl font-bold mb-1">{t.title}</h4>
                <p className="text-[var(--muted)] text-sm">{t.date}</p>

                <p className="mt-4 px-4 py-1 inline-block text-sm font-semibold rounded-full
                  bg-yellow-500/20 border border-yellow-500/40 text-yellow-300">
                  🏆 Prize: {t.prize}
                </p>
              </div>
            </div>
          ))}
        </MobileCarousel>
      </section>

      {/* ------------------ JOIN TOURNAMENTS ------------------ */}
      <SectionTitle
        title="🎮 Join Tournaments"
        subtitle="Compete with players & win exclusive MLBB rewards"
      />

      <section className="max-w-6xl mx-auto mt-10">
        <MobileCarousel>
          {communityTournaments.map((t: any, i: number) => (
            <div
              key={i}
              className="group relative rounded-2xl min-w-[80%] md:min-w-0 snap-start
              bg-gradient-to-br from-[#181b2f] to-[#232844]
              border border-white/10 shadow-xl overflow-hidden
              hover:border-purple-400/50 hover:shadow-[0_0_25px_5px_rgba(168,85,247,0.3)]
              transition-all duration-300"
            >
              <Image
                src={t.image || logo}
                width={500}
                height={300}
                alt="join-tournament"
                className="w-full h-40 object-cover opacity-80 group-hover:scale-105 transition duration-500"
              />

              <div className="p-5">
                <h4 className="text-lg font-bold mb-1 text-[var(--accent)]">{t.name}</h4>
                <p className="text-[var(--muted)] text-sm mb-2">{t.date}</p>

                <p className="px-3 py-1 inline-block text-xs bg-purple-500/20 border border-purple-400/40 rounded-full text-purple-300">
                  🏆 Reward: {t.reward}
                </p>

                <a
                  href={t.link}
                  target="_blank"
                  className="mt-4 w-full py-2 block text-center rounded-lg bg-purple-600 hover:bg-purple-700 
                    text-white font-semibold text-sm transition"
                >
                  Register on WhatsApp →
                </a>
              </div>
            </div>
          ))}
        </MobileCarousel>
      </section>

      {/* ------------------ LATEST NEWS ------------------ */}
      <SectionTitle title="📰 Latest News" subtitle="Fresh from the MLBB scene" />

      <section className="max-w-6xl mx-auto mt-10 mb-20">
        <MobileCarousel>
          {news.map((n: any, i: number) => (
            <a key={i} href={n.link} className="group relative rounded-2xl min-w-[80%] md:min-w-0 snap-start
              bg-gradient-to-br from-[#111423] to-[#1a1e32]
              border border-white/10 shadow-lg overflow-hidden
              hover:border-blue-400/40 hover:shadow-blue-500/20 transition-all cursor-pointer"
            >
              <Image
                src={n.image || logo}
                width={500}
                height={300}
                alt="news"
                className="w-full h-40 object-cover opacity-80 group-hover:scale-105 transition duration-500"
              />

              <div className="p-5">
                <h4 className="text-lg font-semibold group-hover:text-white transition">
                  {n.title}
                </h4>
                <p className="text-[var(--muted)] text-sm mt-1">{n.date}</p>
              </div>
            </a>
          ))}
        </MobileCarousel>
      </section>

    </main>
  );
}

/* ---------------------------- SECTION TITLE ---------------------------- */
function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-16">
      <div className="flex items-center gap-3">
        <h4 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-[var(--accent)]">
          {title}
        </h4>
        <span className="h-1 w-16 bg-[var(--accent)] rounded-full"></span>
      </div>
      <p className="text-[var(--muted)] mt-1">{subtitle}</p>
    </section>
  );
}

/* ---------------------------- TEAM CARD ---------------------------- */
function TeamCard({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-white/10 rounded-full border border-white/20 flex items-center justify-center text-sm">
        <span className="opacity-70">LOGO</span>
      </div>
      <p className="text-sm mt-1 font-semibold">{name}</p>
    </div>
  );
}

/* ---------------------------- MOBILE CAROUSEL ---------------------------- */
function MobileCarousel({ children }: any) {
  return (
    <div
      className="
        flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 pb-4
        md:grid md:grid-cols-3 md:gap-8 md:px-4 md:pb-0 md:overflow-visible
      "
    >
      {children}
    </div>
  );
}
