import React from "react";
import { motion } from "framer-motion";
import {
  FiTarget,
  FiBarChart2,
  FiEdit3,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";
import lastBg from "../../assets/images/hero/lastBg.png";

const features = [
  { icon: FiTarget, label: "Targeted Strategies" },
  { icon: FiBarChart2, label: "Data-Driven Results" },
  { icon: FiEdit3, label: "Engaging Content" },
  { icon: FiUsers, label: "Audience Engagement" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function HomeLastBg() {
  return (
    <section
      id="home-last-bg"
      aria-labelledby="home-last-bg-heading"
      className="relative mx-auto my-10 w-[80%] overflow-hidden rounded-4xl border border-[#F0DFAE] bg-[#FBF2DD] px-8 py-8 sm:px-10 lg:px-14 lg:py-10"
    >
      <div className="relative mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
        {/* ---------- Right: image ---------- */}
        {/* order-first so it stacks ABOVE the text on mobile/tablet;
            negative margins pull it flush to the section's edges —
            the section's own overflow-hidden + rounded-4xl clips it
            into the same rounded top corners automatically.
            At lg: order resets, margins reset, it sits beside the text. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-first -mx-8 -mt-8 sm:-mx-10 sm:-mt-8 lg:order-none lg:mx-0 lg:mt-0 lg:w-full"
        >
          <img
            src={lastBg}
            alt="Marketing performance dashboard on a clipboard, surrounded by coffee, glasses, and a notepad"
            className="h-64 w-full object-cover sm:h-72 lg:h-auto lg:max-h-80 lg:rounded-2xl lg:object-contain"
          />
        </motion.div>

        {/* ---------- Left: text content ---------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="relative order-last mt-6 lg:order-none lg:mt-0"
        >
          <motion.span
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F6C453] px-4 py-1.5 text-sm font-semibold text-[#12131A]"
          >
            Digital Marketing Portfolio
          </motion.span>

          <motion.h1
            id="home-last-bg-heading"
            variants={item}
            className="font-display text-[2.1rem] font-extrabold leading-[1.1] tracking-tight text-[#12131A] sm:text-[2.6rem]"
          >
            Smart Strategies.
            <br />
            <span className="relative inline-block text-[#F6A50C]">
              Real Results.
              <svg
                className="absolute -bottom-1.5 left-0 w-full"
                height="10"
                viewBox="0 0 260 10"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7C60 2 200 2 258 7"
                  stroke="#F6A50C"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-[#5B6472]"
          >
            Helping brands grow online with data-driven marketing, engaging
            content, and measurable results.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:flex sm:flex-wrap "
          >
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex border px-4 py-2 rounded-2xl items-center justify-between gap-3 ">
                <span className="flex h-9 w-9 shrink-0 items-center  justify-center rounded-full bg-[#F6C453]/40 text-[#12131A]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold leading-tight text-[#12131A]">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-6 flex items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl bg-[#F6A50C] px-6 py-3 text-sm font-bold text-[#12131A] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f0990a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6A50C]"
            >
              View My Work
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <svg
              className="hidden h-9 w-20 text-[#F6A50C] sm:block"
              viewBox="0 0 100 40"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 6C4 6 8 22 22 24C36 26 30 8 20 10C10 12 14 30 30 32"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeLinecap="round"
              />
              <path
                d="M78 8L94 24M94 24L82 25M94 24L93 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeLastBg;
