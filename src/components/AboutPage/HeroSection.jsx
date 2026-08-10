import React from "react";
import { motion } from "framer-motion";
import herosectionImg from '../../assets/images/AboutImages/About-herosection.png'

// simple reusable variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  return (
    <section className="bg-[#fdfaf5] px-5 sm:px-8 md:px-12 lg:px-[8vw] py-10 sm:py-14 md:py-16 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left column */}
        <div className="text-center md:text-left">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-[#f5a623] font-semibold text-xs sm:text-[13px] tracking-[1.5px] mb-3"
          >
            ABOUT US
          </motion.p>

          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeUp}
            className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] font-bold leading-tight text-[#1a1a1a] mb-5"
          >
            Turning Vision
            {" "}Into <span className="text-[#f5a623]">Digital</span>
            {" "}<span className="text-[#f5a623]">Impact</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            variants={fadeUp}
            className="text-[#6b6b6b] text-sm sm:text-base leading-[1.7] max-w-105 mx-auto md:mx-0 mb-7 sm:mb-8"
          >
            We believe in the power of creativity, data, and technology to
            build meaningful connections between brands and their audience.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.3}
            variants={fadeUp}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <motion.button
              aria-label="Watch our story"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f5a623] text-white text-base sm:text-lg flex items-center justify-center shadow-[0_8px_20px_rgba(245,166,35,0.35)] focus:outline-none focus:ring-2 focus:ring-[#f5a623] focus:ring-offset-2"
            >
              ▶
            </motion.button>
            <div>
              <span className="block font-semibold text-[#1a1a1a] text-sm sm:text-[15px]">
                Watch Our Story
              </span>
              <span className="block text-xs sm:text-[13px] text-[#9a9a9a]">
                See how we transform ideas into results
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right column */}
        <div className="relative flex justify-center items-center min-h-95 sm:min-h-115 md:min-h-125 mt-10 md:mt-0">
          {/* background blob */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            animate={{ scale: [1, 1.06, 1] }}
            className="absolute top-[4%] right-[6%] sm:top-[2%] sm:right-[2%] md:top-0 md:right-[4%] w-27.5 h-27.5 sm:w-37.5 sm:h-37.5 md:w-45 md:h-45 bg-[#f5a623] rounded-full z-0"
            style={{ animationTimingFunction: "ease-in-out" }}
            transition={{
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          {/* main image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
            className="relative w-60 h-75 sm:w-[320px] sm:h-95 md:w-95 md:h-110 rounded-[28px] overflow-hidden z-10 shadow-[0_20px_40px_rgba(0,0,0,0.15)] cursor-pointer transition-shadow duration-300 hover:shadow-[0_28px_55px_rgba(0,0,0,0.22)]"
          >
            <img
              src={herosectionImg}
              alt="Team workspace with laptop"
              className="w-full h-full object-top block"
            />
          </motion.div>

          {/* dotted flow path - svg overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-20 hidden sm:block"
            viewBox="0 0 400 460"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 40 60 C 10 90, 5 130, 45 150 C 90 172, 30 190, 55 215"
              stroke="#f5a623"
              strokeWidth="2"
              strokeDasharray="5 6"
              strokeLinecap="round"
            />
          </svg>

          {/* floating tag: Creative Ideas */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.4}
            variants={tagVariants}
            animate={{ y: [0, -6, 0] }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
            }}
            whileHover={{ scale: 1.06, y: -4 }}
            className="absolute top-0 left-0 sm:-left-2 md:-left-4 bg-white rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-[0_10px_24px_rgba(0,0,0,0.08)] flex items-center gap-2 z-30 w-37.5 sm:w-42.5 cursor-default transition-shadow duration-300 hover:shadow-[0_14px_30px_rgba(0,0,0,0.14)]"
          >
            <div className="bg-[#fdf1de] rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">
              💡
            </div>
            <p className="text-[11px] sm:text-xs font-semibold text-[#1a1a1a] m-0">
              Creative Ideas
            </p>
          </motion.div>

          {/* floating tag: Smart Strategy */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.55}
            variants={tagVariants}
            animate={{ y: [0, -6, 0] }}
            transition={{
              y: { duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
            }}
            whileHover={{ scale: 1.06, y: -4 }}
            className="absolute top-[42%] left-0 sm:-left-6 md:-left-10 bg-white rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-[0_10px_24px_rgba(0,0,0,0.08)] flex items-center gap-2 z-30 w-37.5 sm:w-42.5 cursor-default transition-shadow duration-300 hover:shadow-[0_14px_30px_rgba(0,0,0,0.14)]"
          >
            <div className="bg-[#fdf1de] rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">
              📊
            </div>
            <p className="text-[11px] sm:text-xs font-semibold text-[#1a1a1a] m-0">
              Smart Strategy
            </p>
          </motion.div>

          {/* floating tag: Real Results */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.7}
            variants={tagVariants}
            animate={{ y: [0, -6, 0] }}
            transition={{
              y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
            }}
            whileHover={{ scale: 1.06, y: -4 }}
            className="absolute bottom-2 right-0 sm:-right-2 md:-right-4 bg-white rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-[0_10px_24px_rgba(0,0,0,0.08)] flex items-center gap-2 z-30 w-35 sm:w-40 cursor-default transition-shadow duration-300 hover:shadow-[0_14px_30px_rgba(0,0,0,0.14)]"
          >
            <div className="bg-[#fdf1de] rounded-full w-8 h-8 flex items-center justify-center shrink-0 text-sm">
              📈
            </div>
            <p className="text-[11px] sm:text-xs font-semibold text-[#1a1a1a] m-0">
              Real Results
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}