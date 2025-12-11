"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

export default function BlogsHome() {
  // -------------------- STATES --------------------
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<any[]>([]);
  const [topArticles, setTopArticles] = useState<any[]>([]);
  const [featured, setFeatured] = useState<any>(null);
  const [latestBlogs, setLatestBlogs] = useState<any[]>([]);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // -------------------- FETCH DATA --------------------
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/mlbb/blogs/home");
        const data = await res.json();

        setCategories(data.categories || []);
        setTopArticles(data.topArticles || []);
        setFeatured(data.featured || null);
        setLatestBlogs(data.latestBlogs || []);
      } catch (e) {
        console.error("Failed loading blogs API", e);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  // -------------------- CLOSE DROPDOWN --------------------
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !(wrapperRef.current as any).contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-bold">
        Loading blogs...
      </div>
    );
  }

  // -------------------- FILTER LOGIC --------------------
  const searchLower = search.toLowerCase();

  // TOP ARTICLES
  const filteredTop = topArticles.filter((a) => {
    const matchCategory = selectedCategory ? a.tag === selectedCategory : true;
    const matchSearch =
      a.title.toLowerCase().includes(searchLower) ||
      a.tag.toLowerCase().includes(searchLower);

    return matchCategory && matchSearch;
  });

  // FEATURED
  const filteredFeatured =
    selectedCategory && featured?.tag !== selectedCategory
      ? null
      : search
      ? featured?.title?.toLowerCase().includes(searchLower)
        ? featured
        : null
      : featured;

  // LATEST BLOGS
  const filteredLatest = latestBlogs.filter((a) => {
    const matchCategory = selectedCategory ? a.tag === selectedCategory : true;
    const matchSearch =
      a.title.toLowerCase().includes(searchLower) ||
      a.tag.toLowerCase().includes(searchLower);

    return matchCategory && matchSearch;
  });

  return (
    <main className="min-h-screen px-4 sm:px-6 pb-24 font-oxanium bg-[var(--background)] text-[var(--foreground)]">

      {/* -------------------- SEARCH + DROP -------------------- */}
      <section className="pt-10 max-w-6xl mx-auto lg:flex lg:items-center lg:justify-between gap-6">

        {/* Search */}
        <div className="w-full lg:w-1/2 relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search heroes, builds, guides..."
            className="
              w-full px-5 py-3 rounded-xl
              bg-white/5 border border-white/10 shadow 
              outline-none text-base 
              focus:border-[var(--accent)]
              transition
            "
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">🔍</span>
        </div>

        {/* Dropdown */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 relative" ref={wrapperRef}>
          <button
            onClick={() => setOpen(!open)}
            className="
              w-full px-5 py-3 rounded-xl 
              bg-white/5 border border-white/10 
              flex justify-between items-center 
              hover:border-[var(--accent)]/40 
              transition
            "
          >
            <span>{selectedCategory || "Select category"}</span>
            <span className={`transition transform ${open ? "rotate-180" : ""}`}>▼</span>
          </button>

          {/* CLEAR CATEGORY BUTTON */}
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-[var(--accent)]"
            >
              Clear
            </button>
          )}

          {open && (
            <div
              className="
                absolute w-full mt-2 rounded-xl z-20 shadow-xl overflow-hidden 
                bg-white/5 backdrop-blur-xl border border-white/10 animate-fadeIn
              "
            >
              {categories.map((c, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedCategory(c.name);
                    setOpen(false);
                  }}
                  className="
                    px-5 py-3 flex items-center gap-3 
                    cursor-pointer text-base 
                    hover:bg-[var(--accent)]/15 
                    transition
                  "
                >
                  <span className="text-lg">{c.icon}</span>
                  <span>{c.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

      </section>

      {/* -------------------- TOP ARTICLES -------------------- */}
      <SectionTitle title="🔥 Top Articles" />

      <section className="max-w-6xl mx-auto mt-6">
        <MobileCarousel>
          {filteredTop.length > 0 ? (
            filteredTop.map((t, i) => (
              <Link
                key={i}
                href={t.url}
                className="
                  block bg-white/5 p-4 rounded-xl min-w-[80%] md:min-w-0 snap-start
                  border border-white/10 
                  hover:border-[var(--accent)]/40 
                  hover:shadow-[0_0_25px_var(--accent)/30]
                  transition
                "
              >
                <Image
                  src={t.image || logo}
                  width={500}
                  height={300}
                  alt="article"
                  className="w-full h-40 object-cover rounded-xl"
                />

                <Tag>{t.tag}</Tag>

                <h4 className="mt-2 text-lg font-semibold">{t.title}</h4>
                <p className="text-[var(--muted)] text-sm">{t.date}</p>
              </Link>
            ))
          ) : (
            <p className="text-center text-[var(--muted)] w-full">No results found.</p>
          )}
        </MobileCarousel>
      </section>

      {/* -------------------- FEATURED GUIDE -------------------- */}
      <SectionTitle title="⭐ Featured Guide" />

      <section className="max-w-6xl mx-auto mt-6">
        {filteredFeatured ? (
          <Link
            href={filteredFeatured.url}
            className="
              flex flex-col sm:flex-row gap-6 
              p-5 sm:p-7 rounded-2xl bg-white/5 
              border border-white/10 shadow-xl 
              hover:border-[var(--accent)]/40 
              transition
            "
          >
            <Image
              src={filteredFeatured.image || logo}
              width={600}
              height={400}
              alt="featured"
              className="w-full sm:w-1/2 h-52 object-cover rounded-xl"
            />

            <div className="w-full sm:w-1/2 flex flex-col justify-center">
              <Tag>{filteredFeatured.tag}</Tag>

              <h4 className="text-xl sm:text-2xl font-bold mt-2">{filteredFeatured.title}</h4>
              <p className="text-[var(--muted)] text-sm mt-2">{filteredFeatured.desc}</p>

              <p className="text-[var(--muted)] text-xs mt-2">{filteredFeatured.date}</p>

              <button className="
                mt-4 px-5 py-2 bg-[var(--accent)] 
                hover:bg-[var(--accent-dark)] 
                text-white rounded-lg transition
              ">
                Read Guide →
              </button>
            </div>
          </Link>
        ) : (
          <p className="text-center text-[var(--muted)]">No featured guide found.</p>
        )}
      </section>

      {/* -------------------- LATEST BLOGS -------------------- */}
      <SectionTitle title="🆕 Latest Blogs" />

      <section className="max-w-6xl mx-auto mt-6">
        <MobileCarousel>
          {filteredLatest.length > 0 ? (
            filteredLatest.map((b, i) => (
              <Link
                key={i}
                href={b.url}
                className="
                  block rounded-2xl p-3 min-w-[80%] md:min-w-0 snap-start
                  bg-white/5 border border-white/10 
                  hover:border-[var(--accent)]/40 
                  hover:shadow-[0_0_25px_var(--accent)/30]
                  transition
                "
              >
                <Image
                  src={b.image || logo}
                  width={500}
                  height={300}
                  alt="blog"
                  className="w-full h-40 object-cover rounded-xl"
                />

                <Tag>{b.tag}</Tag>

                <h4 className="mt-2 text-lg font-semibold">{b.title}</h4>
                <p className="text-[var(--muted)] text-sm">{b.date}</p>
              </Link>
            ))
          ) : (
            <p className="text-center text-[var(--muted)] w-full">No blogs found.</p>
          )}
        </MobileCarousel>
      </section>

    </main>
  );
}

/* ---------------------------- SECTION TITLE ---------------------------- */
function SectionTitle({ title }: { title: string }) {
  return (
    <section className="max-w-6xl mx-auto mt-14 px-4">
      <h4 className="text-2xl font-bold text-[var(--accent)] flex items-center gap-3">
        {title}
        <span className="h-1 w-12 bg-[var(--accent)] rounded-full"></span>
      </h4>
    </section>
  );
}

/* ---------------------------- TAG COMPONENT ---------------------------- */
function Tag({ children }: any) {
  return (
    <span
      className="
        inline-block mt-3 px-3 py-1 text-xs 
        rounded-full border border-purple-600/40 
        bg-purple-600/20 text-purple-300
      "
    >
      {children}
    </span>
  );
}

/* ---------------------------- MOBILE CAROUSEL ---------------------------- */
function MobileCarousel({ children }: any) {
  return (
    <div
      className="
        flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 pb-4 
        md:grid md:grid-cols-3 md:gap-6 md:px-0 md:pb-0 md:overflow-visible
      "
    >
      {children}
    </div>
  );
}
