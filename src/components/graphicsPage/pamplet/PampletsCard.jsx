import React, { memo } from "react";
import { motion } from "framer-motion";

const CATEGORY_ACCENT = {
  Business: { hex: "#FF7A45" },
  Restaurant: { hex: "#7B5CFF" },
  RealEstate: { hex: "#2BC48A" },
  Event: { hex: "#2E8BFF" },
};
const DEFAULT_ACCENT = { hex: "#2E8BFF" };

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

function PampletsCard({ item }) {
  const accent = CATEGORY_ACCENT[item.category] || DEFAULT_ACCENT;

  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex h-full"
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {/* Animated gradient border shell */}
      <div
        className="relative flex w-full flex-col rounded-[1.75rem] p-[1.5px] [animation-play-state:paused] group-hover:[animation-play-state:running] group-focus-within:[animation-play-state:running]"
        style={{
          background: `conic-gradient(from var(--border-angle, 0deg), ${accent.hex}, transparent 30%, transparent 70%, ${accent.hex})`,
          animation: "ugc-border-spin 3.5s linear infinite",
        }}
      >
        <div
          className="relative aspect-4/5 w-full overflow-hidden rounded-[1.7rem] bg-[#EEF0F5] shadow-[0_1px_2px_rgba(18,19,26,0.04)] transition-shadow duration-500 group-hover:shadow-[0_24px_48px_-16px_rgba(18,19,26,0.18)]"
          tabIndex={0}
          role="group"
          aria-label={`${item.title} — ${item.brand}`}
        >
          {/* ---------- Full-bleed image ---------- */}
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Category badge — top left, always visible */}

          {/* Base scrim — strengthens on hover so text stays readable */}
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

          {/* ---------- Hover-reveal text overlay ---------- */}
          <div className="absolute inset-x-0 bottom-0 flex translate-y-6 flex-col px-5 pb-5 pt-10 opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            <span
              className="mb-2 h-0.75 w-8 rounded-full"
              style={{ backgroundColor: accent.hex }}
            />
            <h3 className="line-clamp-2 font-display text-[1.05rem] font-semibold leading-snug text-white">
              {item.title}
            </h3>
            <p className="mt-0.5 text-[0.8rem] font-medium text-white/70">
              {item.brand}
            </p>
            <p className="mt-2 line-clamp-2 text-[0.85rem] leading-relaxed text-white/80">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default memo(PampletsCard);