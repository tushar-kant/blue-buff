"use client";

import { useState, useEffect, useRef } from "react";

// ====================== CATEGORY COLORS ======================
const CATEGORY_COLORS: Record<string, string> = {
  discount: "bg-green-500/20 text-green-400 border-green-500/30",
  spin: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  anniversary: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  default: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

export default function EventsComingSoon() {
  // ===== EVENTS DATA =====
  const eventsData: Record<
    string,
    { name: string; image: string; category: string }
  > = {
    "2025-12-12": {
      name: "Hero Discount Event",
      image:
        "https://res.cloudinary.com/dk0sslz1q/image/upload/v1762668036/bbdhr_agvtlc.jpg",
      category: "discount",
    },
    "2025-12-07": {
      name: "Lucky Draw Spin",
      image: "",
      category: "spin",
    },
    "2025-12-22": {
      name: "MLBB Anniversary",
      image: "",
      category: "anniversary",
    },
  };

  // Today
  const today = new Date();
  const todayDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(today.getDate()).padStart(2, "0")}`;

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [showOnlyEvents, setShowOnlyEvents] = useState(false);
  const [hideBanner, setHideBanner] = useState(false);

  // MODAL STATES
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  // modalRef for outside-click
  const modalRef = useRef<HTMLDivElement | null>(null);

  // close modal when clicking outside
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowModal(false);
      }
    }

    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showModal]);

  // -------- LIMIT RANGE --------
  const baseYear = today.getFullYear();
  const baseMonth = today.getMonth();

  const minAllowed = baseYear * 12 + (baseMonth - 1); // 1 month back
  const maxAllowed = baseYear * 12 + (baseMonth + 2); // 2 months next

  const currentValue = year * 12 + month;

  const canGoPrev = currentValue > minAllowed;
  const canGoNext = currentValue < maxAllowed;

  // -------- COUNTDOWN LOGIC --------
  const [nextEventCountdown, setNextEventCountdown] = useState("");

  const futureEvents = Object.entries(eventsData)
    .filter(([date]) => new Date(date) >= today)
    .sort(([a], [b]) => Number(new Date(a)) - Number(new Date(b)));

  const nextEvent = futureEvents.length
    ? { date: futureEvents[0][0], ...futureEvents[0][1] }
    : null;

  useEffect(() => {
    if (!nextEvent) return;

    const interval = setInterval(() => {
      const eventTime = new Date(nextEvent.date).getTime();
      const now = Date.now();
      const diff = eventTime - now;

      if (diff <= 0) {
        setNextEventCountdown("Event Starting Now!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      setNextEventCountdown(`${days}d ${hours}h ${minutes}m`);
    }, 1000);

    return () => clearInterval(interval);
  }, [nextEvent]);

  // -------- CALENDAR BUILD --------
  const monthStart = new Date(year, month, 1);
  const monthEnd = new Date(year, month + 1, 0);
  const daysInMonth = monthEnd.getDate();
  const startDay = monthStart.getDay();

  const calendarCells: any[] = [];

  for (let i = 0; i < startDay; i++) calendarCells.push(null);

  for (let day = 1; day <= daysInMonth; day++) {
    const fullDate = `${year}-${String(month + 1).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")}`;

    const event = eventsData[fullDate] || null;

    if (showOnlyEvents && !event) continue;

    calendarCells.push({
      day,
      fullDate,
      event,
    });
  }

  // EVENT LIST (only next 6 events)
  const eventList = Object.entries(eventsData)
    .map(([date, ev]) => ({ date, ...ev }))
    .filter((ev) => new Date(ev.date) >= today)
    .sort((a, b) => Number(new Date(a.date)) - Number(new Date(b.date)))
    .slice(0, 6);

  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] px-4 py-10 md:px-6">

      {/* ============= NEXT EVENT BANNER ============= */}
      {nextEvent && !hideBanner && (
        <div className="relative w-full max-w-4xl mx-auto bg-[var(--card)] border border-[var(--accent)] rounded-xl shadow-md mb-6 p-4 md:p-5 flex items-center justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-[var(--accent)]">
              ⏳ Next Event: {nextEvent.name}
            </h3>

            <p className="text-sm text-[var(--muted)] mt-1">
              Starts in <span className="font-semibold">{nextEventCountdown}</span>
            </p>

            <p className="text-xs md:text-sm text-[var(--muted)] mt-1">{nextEvent.date}</p>
          </div>

          {/* Close Banner */}
          <button
            onClick={() => setHideBanner(true)}
            className="absolute top-2 right-2 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white"
          >
            ✕
          </button>
        </div>
      )}

      {/* RANGE NOTE */}
      <p className="text-center text-[var(--muted)] text-sm mb-4">
        🔒 You can view only <b>1 previous month</b> and <b>2 next months</b> (4-month limit)
      </p>

      {/* FILTER BUTTON */}
      <div
        onClick={() => setShowOnlyEvents((prev) => !prev)}
        className="w-full max-w-5xl mx-auto flex justify-end mb-4 cursor-pointer"
      >
        <div className="px-4 py-2 flex items-center gap-2 rounded-full bg-[var(--card)] border border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition text-sm font-semibold shadow-sm">
          🎯 {showOnlyEvents ? "Show All Days" : "Only Event Days"}
        </div>
      </div>

      {/* ============= MAIN LAYOUT ============= */}
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8">

        {/* ================= CALENDAR ================= */}
        <div className="w-full md:w-2/3">

          {/* Header */}
          <div className="flex justify-between items-center mb-6">

            {/* PREV */}
            <button
              onClick={() => {
                if (canGoPrev) {
                  if (month === 0) {
                    setMonth(11);
                    setYear((y) => y - 1);
                  } else {
                    setMonth((m) => m - 1);
                  }
                }
              }}
              disabled={!canGoPrev}
              className={`p-3 rounded-lg border ${
                canGoPrev
                  ? "bg-[var(--card)] border-[var(--border)] hover:bg-[var(--accent)]/20"
                  : "bg-gray-700 text-gray-500 border-gray-600 cursor-not-allowed"
              }`}
            >
              ←
            </button>

            <h2 className="text-2xl font-bold">
              {new Date(year, month).toLocaleString("default", { month: "long" })} {year}
            </h2>

            {/* NEXT */}
            <button
              onClick={() => {
                if (canGoNext) {
                  if (month === 11) {
                    setMonth(0);
                    setYear((y) => y + 1);
                  } else {
                    setMonth((m) => m + 1);
                  }
                }
              }}
              disabled={!canGoNext}
              className={`p-3 rounded-lg border ${
                canGoNext
                  ? "bg-[var(--card)] border-[var(--border)] hover:bg-[var(--accent)]/20"
                  : "bg-gray-700 text-gray-500 border-gray-600 cursor-not-allowed"
              }`}
            >
              →
            </button>
          </div>

          {/* Weekdays */}
          <div className="grid grid-cols-7 text-center font-semibold mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="text-[var(--muted)] text-sm">
                {d}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {calendarCells.map((cell, i) =>
              cell ? (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedDate(cell.fullDate);
                    setSelectedEvent(cell.event);
                    setShowModal(true);
                  }}
                  className={`relative p-3 h-20 rounded-xl border shadow-sm transition-all cursor-pointer ${
                    cell.event
                      ? "bg-[var(--accent)]/20 border-[var(--accent)]"
                      : "bg-[var(--card)] border-[var(--border)]"
                  } ${cell.fullDate === todayDate ? "ring-2 ring-[var(--accent)]" : ""}`}
                  style={{
                    backgroundImage: cell.event?.image
                      ? `url(${cell.event.image})`
                      : "",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="font-bold">{cell.day}</span>

                  {cell.event && (
                    <>
                      <p className="text-[10px] mt-1 bg-black/50 text-white p-1 rounded">
                        {cell.event.name}
                      </p>

                      <span
                        className={`absolute bottom-1 right-1 px-2 py-0.5 rounded text-[9px] border ${
                          CATEGORY_COLORS[cell.event.category] || CATEGORY_COLORS.default
                        }`}
                      >
                        {cell.event.category}
                      </span>
                    </>
                  )}
                </div>
              ) : (
                <div key={i}></div>
              )
            )}
          </div>
        </div>

        {/* ================= UPCOMING EVENTS (6 only) ================= */}
        <div className="w-full md:w-1/3 bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 shadow">
          <h3 className="text-xl font-bold mb-4">📅 Upcoming Events</h3>

          <div className="flex flex-col gap-4">
            {eventList.map((ev, i) => (
              <div
                key={i}
                className="p-3 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition"
              >
                <p className="text-sm text-[var(--muted)]">{ev.date}</p>
                <p className="font-semibold">{ev.name}</p>

                <span
                  className={`text-xs px-2 py-0.5 mt-2 inline-block rounded border ${
                    CATEGORY_COLORS[ev.category] || CATEGORY_COLORS.default
                  }`}
                >
                  {ev.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= EVENT MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4 animate-fadeIn">
          <div
            ref={modalRef}
            className="bg-[var(--card)] border border-[var(--border)] rounded-xl w-full max-w-md p-6 relative shadow-lg animate-fadeIn"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-xl bg-black/30 hover:bg-black/50 text-white p-1 rounded-full"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-3 text-[var(--accent)]">
              {selectedEvent ? selectedEvent.name : "No Event Today"}
            </h3>

            {/* If Event Exists */}
            {selectedEvent ? (
              <>
                <p className="text-sm text-[var(--muted)] mb-2">📅 {selectedDate}</p>

                {selectedEvent.image && (
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.name}
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                )}

                <span
                  className={`px-3 py-1 rounded text-xs border ${
                    CATEGORY_COLORS[selectedEvent.category] ||
                    CATEGORY_COLORS.default
                  }`}
                >
                  {selectedEvent.category}
                </span>
              </>
            ) : (
              <>
                <p className="text-sm text-[var(--muted)] mb-3">
                  There is no event on <b>{selectedDate}</b>.
                </p>

                {/* Next available event */}
                {(() => {
                  const laterEvents = Object.entries(eventsData)
                    .filter(([date]) => new Date(date) > new Date(selectedDate!))
                    .sort(([a], [b]) => Number(new Date(a)) - Number(new Date(b)));

                  if (laterEvents.length === 0) {
                    return <p className="text-sm">No upcoming events.</p>;
                  }

                  const nextOne = {
                    date: laterEvents[0][0],
                    ...laterEvents[0][1],
                  };

                  return (
                    <div className="mt-2 p-3 rounded-lg border border-[var(--border)]">
                      <p className="text-sm text-[var(--muted)]">Next Event:</p>
                      <p className="font-semibold">{nextOne.name}</p>
                      <p className="text-xs mt-1">{nextOne.date}</p>
                    </div>
                  );
                })()}
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
