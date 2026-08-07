import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import shootData from "./shootData";
import ShootCard from "./ShootCard";

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

function Shoot() {
  const [activeId, setActiveId] = useState(null);

  const handleActivate = useCallback((id) => {
    setActiveId(id);
  }, []);

  return (
    <section
      id="shoot-showcase"
      aria-labelledby="shoot-showcase-heading"
      className="relative overflow-hidden bg-transparent px-6 py-5 sm:pb-7 lg:px-10"
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
          id="shoot-showcase-heading"
          variants={headerItem}
          className="font-display text-xl font-semibold lg:font-bold leading-[1.1] tracking-tight text-[#12131A] sm:text-[2.25rem]"
        >
          Behind The <span className="text-[#FF7A45] underline">Shoot</span>
        </motion.h2>
      </motion.div>

      {/* ---------- Grid ---------- */}
      <motion.div
        variants={gridContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative mx-auto mt-10 grid max-w-350 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"
      >
        {shootData.map((video) => (
          <ShootCard
            key={video.id}
            video={video}
            isActive={activeId === video.id}
            onActivate={handleActivate}
          />
        ))}
      </motion.div>
      <div className="text-center mt-10">
        <a
          href="#"
          className="  border rounded text-md font-semibold border-orange-500 px-4 py-2  text-orange-400 hover:bg-orange-400 hover:text-white  hover:border-0"
        >
          View All
        </a>
      </div>
    </section>
  );
}

export default Shoot;
