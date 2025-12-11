export async function GET() {
  const data = {
    categories: [
      { name: "Hero Guides", icon: "📘" },
      { name: "Builds", icon: "⚔️" },
      { name: "Esports", icon: "🔥" },
      { name: "MLBB Tips", icon: "🎯" },
      { name: "Tier Lists", icon: "🏆" },
      { name: "Updates", icon: "📝" },
    ],

    topArticles: [
      {
        title: "Strongest Early Game Heroes Ranked",
        image: "",
        url: "/blogs/strongest-early-game-heroes",
        tag: "Hero Guides",
        date: "5 Jan 2025",
      },
      {
        title: "Meta Tanks You Must Master",
        image: "",
        url: "/blogs/meta-tanks-guide",
        tag: "Builds",
        date: "3 Jan 2025",
      },
      {
        title: "Best 2025 Emblem Setups",
        image: "",
        url: "/blogs/best-emblem-2025",
        tag: "MLBB Tips",
        date: "1 Jan 2025",
      },
    ],

    featured: {
      title: "Top 10 Assassin Heroes to Rank Up Fast",
      desc: "A complete breakdown of the strongest assassins in the current meta.",
      image: "",
      url: "/blogs/top-10-assassins",
      tag: "Hero Guides",
      date: "8 Jan 2025",
    },

    latestBlogs: [
      {
        title: "Best Mage Builds for 2025 Season",
        date: "12 Jan 2025",
        image: "",
        url: "/blogs/best-mage-builds-2025",
        tag: "Builds",
      },
      {
        title: "How to Counter OP Marksmen in Late Game",
        date: "10 Jan 2025",
        image: "",
        url: "/blogs/counter-marksmen",
        tag: "MLBB Tips",
      },
      {
        title: "MLBB Esports 2025 Roadmap Breakdown",
        date: "9 Jan 2025",
        image: "",
        url: "/blogs/esports-roadmap-2025",
        tag: "Esports",
      },
    ],
  };

  return Response.json(data);
}
