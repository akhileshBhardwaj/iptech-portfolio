import React from "react";
import { motion } from "framer-motion";
import FastivelBannerCard from "./FastivelBannerCard";
import fastivelBannerData from "./fastivelBannerData";

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

const FastivelBanner = () => {
  return (
    <section
      id="fastivel-banner-showcase"
      aria-labelledby="fastivel-banner-showcase-heading"
      className="relative overflow-hidden bg-transparent px-6 pt-5 pb-4 sm:pb-5 lg:px-10"
    >
      {/* ---------- Decorative background ---------- */}
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
      <motion.div
        variants={headerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="relative mx-auto text-center  max-w-350 items-center justify-between"
      >
        <motion.h2
          id="fastivel-banner-showcase-heading"
          variants={headerItem}
          className="font-display text-2xl  lg:mb-15 font-bold lg:font-bold leading-[1.1] tracking-tight text-[#12131A] sm:text-[2.25rem]"
        >
          Festival <span className="text-[#FF7A45] underline">Banners</span>
        </motion.h2>
      </motion.div>

      {/* ---------- Grid ---------- */}
      <motion.div
        variants={gridContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className=" relative mx-auto mt-8 grid w-full max-w-255 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 md:gap-8 lg:grid-cols-4 lg:gap-10 xl:max-w-275 xl:gap-12 2xl:max-w-300 2xl:gap-14"
      >
        {fastivelBannerData.map((item) => (
          <FastivelBannerCard key={item.id} item={item} />
        ))}
      </motion.div>

      <div className="text-center mt-10">
        <a
          href="https://drive.google.com/drive/folders/1OmIjN1_d6K1yO5qSuhUIGB4_ydiRWdp5"
          className="border rounded text-md font-semibold border-orange-500 px-4 py-2 text-orange-400 hover:bg-orange-400 hover:text-white hover:border-0"
        >
          View All
        </a>
      </div>
    </section>
  );
};

export default FastivelBanner;
