// Static data for every social platform card.
// Icons are kept here as inline SVG (JSX) so the data + visual stay together.

const PlatformsData = [
  {
    name: "Instagram",
    label: "Total Engagements",
    value: "28.6K",
    growth: "32.4%",
    chartType: "line",
    lineColor: "#F43F5E",
    iconBg: "linear-gradient(135deg,#F58529 0%,#DD2A7B 50%,#8134AF 100%)",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="white"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    label: "Page Likes",
    value: "18.9K",
    growth: "25.7%",
    chartType: "line",
    lineColor: "#3B82F6",
    iconBg: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
        <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.25-1.5 1.6-1.5h1.7V3.3C15.9 3.2 15 3.1 13.9 3.1c-2.7 0-4.5 1.6-4.5 4.6v2.1H6.7v3.2h2.7v8h4.1z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    label: "Post Impressions",
    value: "98.4K",
    growth: "45.8%",
    chartType: "bar",
    barColor: "#3B82F6",
    iconBg: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
        <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3.5a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM20.44 20h-3.37v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.68V8.5h3.24v1.57h.05c.45-.85 1.55-1.76 3.2-1.76 3.42 0 4.05 2.25 4.05 5.18V20z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    label: "Views",
    value: "112K",
    growth: "40.3%",
    chartType: "line",
    lineColor: "#EF4444",
    iconBg: "#FF0000",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
        <path d="M21.6 7.2s-.2-1.5-.85-2.15c-.8-.85-1.7-.85-2.1-.9C15.9 4 12 4 12 4h0s-3.9 0-6.65.15c-.4.05-1.3.05-2.1.9C2.6 5.7 2.4 7.2 2.4 7.2S2.2 9 2.2 10.7v1.6c0 1.75.2 3.5.2 3.5s.2 1.5.85 2.15c.8.85 1.85.8 2.3.9C7.1 19 12 19 12 19s3.9 0 6.65-.15c.4-.05 1.3-.05 2.1-.9.65-.65.85-2.15.85-2.15s.2-1.75.2-3.5v-1.6c0-1.75-.2-3.5-.2-3.5zM9.9 14.1V8.9l5.4 2.6-5.4 2.6z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    label: "Profile Visits",
    value: "24.7K",
    growth: "31.6%",
    chartType: "line",
    lineColor: "#111827",
    iconBg: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
        <path d="M13.9 10.4 20.6 3h-2l-5.8 6.4L8.1 3H3l7 9.9L3 21h2l6.1-6.8L16.1 21h5.1l-7.3-10.6zM11.7 13.1l-.7-1L5.4 4.4h2.2l4.5 6.3.7 1 5.9 8.2h-2.2l-4.8-6.8z" />
      </svg>
    ),
  },
  {
    name: "Pinterest",
    label: "Outbound Clicks",
    value: "15.3K",
    growth: "28.9%",
    chartType: "bar",
    barColor: "#EF4444",
    iconBg: "#E60023",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
        <path d="M12 3C7 3 4.5 6.4 4.5 9.2c0 1.7.65 3.2 2.05 3.75.23.09.44 0 .5-.25l.2-.8c.07-.25.04-.34-.14-.56-.4-.47-.65-1.08-.65-1.94 0-2.5 1.9-4.75 4.94-4.75 2.7 0 4.18 1.65 4.18 3.85 0 2.9-1.28 5.35-3.19 5.35-1.05 0-1.84-.87-1.58-1.93.3-1.27.89-2.64.89-3.56 0-.82-.44-1.5-1.35-1.5-1.07 0-1.93 1.1-1.93 2.58 0 .94.32 1.57.32 1.57s-1.08 4.57-1.27 5.37c-.38 1.6-.06 3.56-.03 3.76.02.12.16.15.23.06.1-.13 1.32-1.63 1.74-3.14.12-.42.68-2.65.68-2.65.34.64 1.32 1.2 2.36 1.2 3.11 0 5.36-2.86 5.36-6.4C19.6 5.6 17 3 12 3z" />
      </svg>
    ),
  },
  {
    name: "Google Business",
    label: "Direction Requests",
    value: "6.8K",
    growth: "37.2%",
    chartType: "line",
    lineColor: "#22C55E",
    iconBg: "#4285F4",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          fill="#EA4335"
          d="M12 10.9v2.9h4.1c-.17 1.06-1.26 3.1-4.1 3.1-2.47 0-4.48-2.04-4.48-4.55S9.53 7.8 12 7.8c1.4 0 2.34.6 2.88 1.11l1.96-1.9C15.6 5.85 14 5.05 12 5.05c-4.02 0-7.28 3.28-7.28 7.35s3.26 7.35 7.28 7.35c4.2 0 6.99-2.95 6.99-7.1 0-.48-.05-.85-.11-1.2H12z"
        />
      </svg>  
    ),
  },
];

export default PlatformsData;
