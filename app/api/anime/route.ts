import { NextResponse } from "next/server";

export async function GET(req: Request) {
const animeList = [
  {
    id: 1,
    name: "Tank",
    slug: "tank",
    description:
      "Durable frontliners that absorb damage and initiate team fights for their squad.",
    cover:
      "",
  },
  {
    id: 2,
    name: "Mage",
    slug: "mage",
    description:
      "High burst magic damage dealers that excel in poking, zoning, and area-control abilities.",
    cover:
      "",
  },
  {
    id: 3,
    name: "Fighter",
    slug: "fighter",
    description:
      "Balanced melee heroes with damage and durability, ideal for sustained fights.",
    cover:
      "",
  },
  {
    id: 4,
    name: "Marksman",
    slug: "marksman",
    description:
      "Long-range physical damage dealers who shine in late-game team fights.",
    cover:
      "",
  },
  {
    id: 5,
    name: "Assassin",
    slug: "assassin",
    description:
      "Fast burst-damage heroes specializing in eliminating enemy carries quickly.",
    cover:
      "",
  },
  {
    id: 6,
    name: "Support",
    slug: "support",
    description:
      "Heroes that provide healing, shields, and utility to protect and empower their team.",
    cover:
      "",
  },
];


  // ✅ Extract query parameters
  const { searchParams } = new URL(req.url);
  const pageParam = searchParams.get("page");
  const limitParam = searchParams.get("limit");
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // ✅ Filter by search if provided
  const filteredList = searchQuery
    ? animeList.filter(
        (anime) =>
          anime.name.toLowerCase().includes(searchQuery) ||
          anime.description.toLowerCase().includes(searchQuery)
      )
    : animeList;

  // ✅ If no pagination, return all filtered
  if (!pageParam && !limitParam) {
    return NextResponse.json({
      success: true,
      data: filteredList,
      total: filteredList.length,
    });
  }

  // ✅ Parse pagination safely
  const page = parseInt(pageParam || "1", 10);
  const limit = parseInt(limitParam || "6", 10);

  // ✅ Slice data for pagination
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginated = filteredList.slice(start, end);
  const hasMore = end < filteredList.length;

  // ✅ Return paginated + filtered result
  return NextResponse.json({
    success: true,
    data: paginated,
    page,
    limit,
    hasMore,
    total: filteredList.length,
  });
}
