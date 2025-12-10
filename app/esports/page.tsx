"use client";

export default function EsportsComingSoon() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)] px-6 overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[var(--accent)] to-purple-600 opacity-10 blur-[200px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      {/* Title */}
      <h1 className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-purple-500 text-center">
        Esports Section Coming Soon 🎮
      </h1>

      {/* Subtitle */}
      <p className="text-[var(--muted)] text-xl text-center max-w-2xl leading-relaxed mb-6">
        MPL, M-Series, MSC, match highlights, tournament stats and weekly recaps —  
        all in one place. We're building something awesome for MLBB esports fans.
      </p>

      {/* Subtext */}
      <p className="text-[var(--muted)] text-base text-center max-w-xl">
        Stay tuned for updates as we prepare live esports coverage, team rosters, match insights,
        pro player profiles, and more!
      </p>
    </main>
  );
}
