import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import MemesCard from "./MemesCard";
import memesData from "./memesData";

const headerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

function Memes() {
  const [activeId, setActiveId] = useState(null);

  const handleActivate = useCallback((id) => {
    setActiveId(id);
  }, []);

  return (
    <section
      id="memes-showcase"
      aria-labelledby="memes-showcase-heading"
      className="relative overflow-hidden bg-transparent px-6 py-24 sm:py-28 lg:px-10"
    >
      {/* ---------- Decorative background: soft blurred gradient blobs ---------- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-105 w-105 rounded-full" />
        <div className="absolute -right-24 top-40 h-95 w-95 rounded-full " />
        <div className="absolute bottom-40 left-1/3 h-90 w-90 rounded-full " />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #12131A 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* ---------- Header ---------- */}
      {/* Left-aligned title + right-aligned prev/next arrows, matching
          the reference layout. Everything else below is untouched. */}
      <motion.div
        variants={headerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="relative mx-auto flex max-w-350 items-center justify-between"
      >
        <motion.h2
          id="memes-showcase-heading"
          variants={headerItem}
          className="font-display text-[1.9rem] font-bold leading-[1.1] tracking-tight text-[#12131A] sm:text-[2.25rem]"
        >
          Trending <span className="text-[#FF7A45]">Memes</span>
        </motion.h2>

        <motion.div variants={headerItem} className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#12131A]/5 text-[#12131A] transition-colors duration-200 hover:bg-[#12131A]/10 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#FF7A45]"
          >
            <FiChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#12131A]/5 text-[#12131A] transition-colors duration-200 hover:bg-[#12131A]/10 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-[#FF7A45]"
          >
            <FiChevronRight className="h-4 w-4" />
          </button>
        </motion.div>
      </motion.div>

      {/* ---------- Grid ---------- */}
      <motion.div
        variants={gridContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative mx-auto mt-10 grid max-w-350 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"
      >
        {memesData.map((video) => (
          <MemesCard
            key={video.id}
            video={video}
            isActive={activeId === video.id}
            onActivate={handleActivate}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Memes;
