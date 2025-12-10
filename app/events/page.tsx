"use client";

export default function EventsComingSoon() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)] px-6 overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[var(--accent)] to-purple-700 opacity-10 blur-[200px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      {/* Title */}
      <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-purple-500 text-center">
        Events Coming Soon 📅
      </h1>

      {/* Subtitle */}
      <p className="text-[var(--muted)] text-xl text-center max-w-2xl leading-relaxed mb-6">
        Stay updated with MLBB in-game events, reward calendars, exclusive skins,
        patch notes, lucky draws, and upcoming releases — all in one place.
      </p>

      {/* Subtext */}
      <p className="text-[var(--muted)] text-base text-center max-w-xl">
        We're building a full event tracker so you never miss a Limited-Time Skin,
        Starlight pass, recharge bonus, or special celebration again!
      </p>
    </main>
  );
}
