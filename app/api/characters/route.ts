import { NextResponse } from "next/server";

import { tankHeroes } from "./data/naruto";
import { mageHeroes } from "./data/one-piece";
import { marksmanHeroes } from "./data/aot";
import { fighterHeroes } from "./data/bleach";
import { assassinHeroes } from "./data/demonslayer";
import { supportHeroes } from "./data/jjk";



// 🧩 Combine all anime characters
// const characters = {
//   "naruto": narutoCharacters,
//   "one-piece": onePieceCharacters,
//   "bleach": bleachCharacters,
//   "attack-on-titan": attackOnTitanCharacters,
//   "demon-slayer": demonSlayerCharacters,
//   "jujutsu-kaisen": jujutsuKaisenCharacters,

 
// };
const characters = {
  "tank": tankHeroes,
  "mage": mageHeroes,
  "fighter": fighterHeroes,
  "marksman": marksmanHeroes,
  "assassin": assassinHeroes,
  "support": supportHeroes,
};


export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const animeSlug = searchParams.get("animeSlug");
    const pageParam = searchParams.get("page");
    const limitParam = searchParams.get("limit");
    const searchQuery = searchParams.get("search")?.toLowerCase() || "";

    // 🧠 GLOBAL SEARCH (no animeSlug provided)
    if (!animeSlug) {
      // Combine all characters from all anime
      const allCharacters = Object.entries(characters).flatMap(([slug, list]) =>
        list.map((char) => ({ ...char, animeSlug: slug }))
      );

      // 🔍 Filter by search term
      const filtered = searchQuery
        ? allCharacters.filter(
            (char) =>
              char.name.toLowerCase().includes(searchQuery) ||
              (char.description &&
                char.description.toLowerCase().includes(searchQuery))
          )
        : allCharacters;

      // ⚙️ Pagination (still supported globally)
      const page = parseInt(pageParam || "1", 10);
      const limit = parseInt(limitParam || "10", 10);
      const start = (page - 1) * limit;
      const end = start + limit;
      const paginated = filtered.slice(start, end);
      const hasMore = end < filtered.length;

      return NextResponse.json({
        success: true,
        global: true,
        total: filtered.length,
        page,
        limit,
        hasMore,
        data: paginated,
      });
    }

    // 🎯 PER-ANIME SEARCH (existing logic)
    const result = characters[animeSlug as keyof typeof characters];

    if (!result) {
      return NextResponse.json(
        { success: false, message: "No characters found for this anime." },
        { status: 404 }
      );
    }

    // 🔍 Apply search filter (optional)
    const filteredResults = searchQuery
      ? result.filter(
          (char) =>
            char.name.toLowerCase().includes(searchQuery) ||
            (char.description &&
              char.description.toLowerCase().includes(searchQuery))
        )
      : result;

    // ⚙️ If no pagination, return full filtered list
    if (!pageParam && !limitParam) {
      return NextResponse.json({
        success: true,
        anime: animeSlug,
        total: filteredResults.length,
        data: filteredResults,
      });
    }

    // ⚙️ Paginate results
    const page = parseInt(pageParam || "1", 10);
    const limit = parseInt(limitParam || "10", 10);
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated = filteredResults.slice(start, end);
    const hasMore = end < filteredResults.length;

    return NextResponse.json({
      success: true,
      anime: animeSlug,
      total: filteredResults.length,
      page,
      limit,
      hasMore,
      data: paginated,
    });
  } catch (error) {
    console.error("Error in /api/characters:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
