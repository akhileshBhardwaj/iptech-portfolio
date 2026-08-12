// Data.js — plain data only, no JSX here.
// Icon fields use string keys; the actual <svg> markup lives in
// SEOResultsSection.jsx inside the `icons` map.

// left/top are the card's top-left corner as a % of the journey container
// (measured directly off the reference design so the cards sit exactly
// where the connecting dots/path expect them — no overlap, no drift).
export const milestones = [
  { date: "JAN 2026", rank: "#52", tag: "Starting Point", left: 19, top: 63 },
  { date: "MAR 2026", rank: "#17", tag: "Great Progress", left: 33, top: 42 },
  { date: "MAY 2026", rank: "#05", tag: "Top 5 Achieved", left: 55, top: 20 },
  { date: "JUN 2026", rank: "#01", tag: "Market Leader", left: 73, top: 7 },
];

export const bottomStats = [
  {
    value: "67.3K",
    label: "Organic Traffic",
    delta: "↑ 245% vs Last 6 Months",
    icon: "users",
  },
  {
    value: "512",
    label: "Keywords on Top 3",
    delta: "↑ 220% vs Last 6 Months",
    icon: "star",
  },
  {
    value: "1.2K",
    label: "Qualified Leads",
    delta: "↑ 180% vs Last 6 Months",
    icon: "bars",
  },
];

// Carousel data for the "Featured Case Study" card.
// Add / remove objects here to change how many slides the arrows cycle through.
export const caseStudies = [
  {
    name: "E-Commerce Store",
    niche: "Fashion",
    brand: "LUXORA",
    heroTitle: ["Summer", "Collection"],
    heroImage:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=300&fit=crop",
    avatars: [
      "photo-1494790108377-be9c29b29330",
      "photo-1500648767791-00dcc994a43e",
      "photo-1438761681033-6461ffad8d80",
      "photo-1544005313-94ddf0286df2",
    ],
    impact: [
      { label: "Organic Traffic", value: "+215%", icon: "trend", points: "0,12 8,8 16,10 24,4 32,6 40,2" },
      { label: "Keywords Ranked", value: "+180%", icon: "target", points: "0,10 8,12 16,6 24,8 32,3 40,5" },
      { label: "Revenue from Organic", value: "+160%", icon: "dollar", points: "0,12 8,10 16,11 24,5 32,7 40,3" },
    ],
  },
  {
    name: "SaaS Platform",
    niche: "B2B Software",
    brand: "NEXLYTICS",
    heroTitle: ["Product", "Analytics"],
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    avatars: [
      "photo-1472099645785-5658abf4ff4e",
      "photo-1519085360753-af0119f7cbe7",
      "photo-1508214751196-bcfd4ca60f91",
      "photo-1544005313-94ddf0286df2",
    ],
    impact: [
      { label: "Organic Traffic", value: "+188%", icon: "trend", points: "0,13 8,9 16,11 24,6 32,7 40,3" },
      { label: "Keywords Ranked", value: "+142%", icon: "target", points: "0,11 8,10 16,7 24,9 32,4 40,6" },
      { label: "Revenue from Organic", value: "+120%", icon: "dollar", points: "0,12 8,9 16,10 24,6 32,8 40,4" },
    ],
  },
  {
    name: "Restaurant Chain",
    niche: "Food & Dining",
    brand: "BELLA VISTA",
    heroTitle: ["Weekend", "Specials"],
    heroImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    avatars: [
      "photo-1517841905240-472988babdf9",
      "photo-1524504388940-b1c1722653e1",
      "photo-1490645935967-10de6ba17061",
      "photo-1512485694743-9c9538b4e6e0",
    ],
    impact: [
      { label: "Organic Traffic", value: "+164%", icon: "trend", points: "0,12 8,10 16,9 24,5 32,7 40,3" },
      { label: "Keywords Ranked", value: "+130%", icon: "target", points: "0,10 8,11 16,7 24,8 32,4 40,5" },
      { label: "Revenue from Organic", value: "+98%", icon: "dollar", points: "0,13 8,10 16,11 24,6 32,7 40,4" },
    ],
  },
];