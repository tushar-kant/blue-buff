"use client";

import { useState } from "react";

export default function EventsComingSoon() {
  // ===== EVENTS DATA =====
  const eventsData: Record<
    string,
    { name: string; image: string }
  > = {
    "2025-12-12": {
      name: "Hero Discount Event",
      image:
        "https://res.cloudinary.com/dk0sslz1q/image/upload/v1762668036/bbdhr_agvtlc.jpg",
    },
    "2025-12-07": {
      name: "Lucky Draw Spin",
      image: "",
    },
    "2025-12-22": {
      name: "MLBB Anniversary",
      image: "",
    },
  };

  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const monthStart = new Date(year, month, 1);
  const monthEnd = new Date(year, month + 1, 0);
  const daysInMonth = monthEnd.getDate();
  const startDay = monthStart.getDay();

  const calendarCells: any[] = [];

  // Empty cells before month starts
  for (let i = 0; i < startDay; i++) calendarCells.push(null);

  // Fill calendar days
  for (let day = 1; day <= daysInMonth; day++) {
    const fullDate = `${year}-${String(month + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;

    calendarCells.push({
      day,
      fullDate,
      event: eventsData[fullDate] || null,
    });
  }

  // Extract events for list format
  const eventList = Object.entries(eventsData).map(([date, ev]) => ({
    date,
    ...ev,
  }));

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-[var(--background)] text-[var(--foreground)] px-4 md:px-6 overflow-hidden py-10">

      {/* Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-gradient-to-tr from-[var(--accent)] to-purple-700 opacity-10 blur-[200px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      {/* FLEX WRAP FOR CALENDAR + LIST */}
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8">

        {/* ===== CALENDAR AREA ===== */}
        <div className="w-full md:w-2/3">

          {/* Header Row */}
          <div className="flex items-center justify-between mb-4 md:mb-6 px-2 md:px-0">
            <button
              onClick={() => setMonth((prev) => (prev === 0 ? 11 : prev - 1))}
              className="p-2 md:p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] text-xl md:text-2xl hover:bg-[var(--accent)]/20 transition"
            >
              ←
            </button>

            <h2 className="text-2xl md:text-3xl font-bold">
              {new Date(year, month).toLocaleString("default", {
                month: "long",
              })}{" "}
              {year}
            </h2>

            <button
              onClick={() => setMonth((prev) => (prev === 11 ? 0 : prev + 1))}
              className="p-2 md:p-3 rounded-lg bg-[var(--card)] border border-[var(--border)] text-xl md:text-2xl hover:bg-[var(--accent)]/20 transition"
            >
              →
            </button>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 text-center font-semibold mb-2 text-xs md:text-sm">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="text-[var(--muted)]">{d}</div>
            ))}
          </div>

          {/* Calendar */}
          <div className="grid grid-cols-7 gap-1 md:gap-2">
            {calendarCells.map((cell, i) =>
              cell ? (
                <div
                  key={i}
                  className={`relative p-2 md:p-3 h-16 md:h-20 rounded-xl border shadow-sm transition-all overflow-hidden
                    ${
                      cell.event
                        ? "bg-[var(--accent)]/20 border-[var(--accent)] cursor-pointer"
                        : "bg-[var(--card)] border-[var(--border)]"
                    }
                  `}
                  style={{
                    backgroundImage: cell.event?.image
                      ? `url(${cell.event.image})`
                      : "",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="font-bold text-sm md:text-base">
                    {cell.day}
                  </span>

                  {cell.event && (
                    <p className="text-[9px] md:text-xs mt-1 font-medium bg-black/50 text-white p-1 rounded leading-tight">
                      {cell.event.name}
                    </p>
                  )}
                </div>
              ) : (
                <div key={i}></div>
              )
            )}
          </div>
        </div>

        {/* ===== EVENT LIST (RIGHT on Desktop, BELOW on Mobile) ===== */}
        <div className="w-full md:w-1/3 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 h-max shadow">

          <h3 className="text-xl font-bold mb-4">📅 Upcoming Events</h3>

          <div className="flex flex-col gap-4">
            {eventList.map((ev, i) => (
              <div
                key={i}
                className="p-3 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] bg-[var(--background)] hover:bg-[var(--accent)]/10 transition cursor-pointer"
              >
                <p className="text-sm text-[var(--muted)]">
                  {ev.date}
                </p>
                <p className="text-lg font-semibold">{ev.name}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
