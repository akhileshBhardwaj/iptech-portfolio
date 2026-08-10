import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  BarChart3,
  MessagesSquare,
  Target,
  SlidersHorizontal,
  Heart,
} from "lucide-react";
import instructionImage from "../../assets/images/AboutImages/instructionimage.png";


/**
 * "What Makes Us Different" section
 * - Center circle: drop your own image via the `centerImage` prop (falls back to instructionImage)
 * - 3 items on the left, 3 items on the right, connected to the center with dotted lines
 *
 * Usage:
 *   <WhatMakesUsDifferent centerImage="/your-image.png" />
 */

const leftItems = [
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    desc: "We bring fresh ideas and innovative solutions to every challenge.",
  },
  {
    icon: BarChart3,
    title: "Data Driven",
    desc: "Every decision we make is backed by research and real data.",
  },
  {
    icon: MessagesSquare,
    title: "Transparent Process",
    desc: "Clear communication and transparency at every step.",
  },
];

const rightItems = [
  {
    icon: Target,
    title: "Result Focused",
    desc: "We are dedicated to delivering measurable results that matter.",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom Solutions",
    desc: "We create strategies tailored to your unique goals and needs.",
  },
  {
    icon: Heart,
    title: "Long Term Partner",
    desc: "We grow with our clients and celebrate their success.",
  },
];

const itemVariants = {
  hidden: (custom) => ({ opacity: 0, x: custom.align === "right" ? 30 : -30 }),
  show: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: custom.i * 0.15, ease: "easeOut" },
  }),
};

function Item({ icon: Icon, title, desc, align = "left", index }) {
  return (
    <motion.div
      custom={{ i: index, align }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={itemVariants}
      className={`group flex items-start gap-4 ${
        align === "right" ? "flex-row-reverse text-right" : "text-left"
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-amber-500 transition-colors duration-300 group-hover:bg-amber-500 group-hover:text-white"
      >
        <Icon size={20} strokeWidth={1.75} />
      </motion.div>
      <div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 max-w-47.5 text-xs leading-relaxed text-slate-500">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

// draw-in dashed connector: strokeDasharray keeps the dashed look while
// pathLength animates 0 -> 1 so the line looks like it's being traced
function Connector({ d, delay = 0 }) {
  return (
    <motion.path
      d={d}
      stroke="#fbbf24"
      strokeWidth="2"
      strokeDasharray="4 6"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, delay, ease: "easeInOut" }}
    />
  );
}

export default function WhatMakesUsDifferent({ centerImage }) {
  const imgSrc = centerImage || instructionImage;

  return (
    <section className="w-full bg-[#fafaf8] px-6 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold tracking-[0.2em] text-amber-500 block"
        >
          WHAT MAKES US DIFFERENT
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl"
        >
          More Than Just Another{" "}
          <span className="text-amber-500">Agency</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-sm text-slate-500"
        >
          We don't just deliver services, we build partnerships.
          <br />
          Here's what sets us apart.
        </motion.p>
      </div>

      <div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-[1fr_auto_1fr] md:gap-4">
        {/* connecting lines (desktop only) */}
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          viewBox="0 0 1000 520"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* left connectors */}
          <Connector d="M245 90 Q 350 90 430 190" delay={0.1} />
          <Connector d="M245 260 H 400" delay={0.25} />
          <Connector d="M245 430 Q 350 430 430 330" delay={0.4} />
          {/* right connectors */}
          <Connector d="M755 90 Q 650 90 570 190" delay={0.1} />
          <Connector d="M755 260 H 600" delay={0.25} />
          <Connector d="M755 430 Q 650 430 570 330" delay={0.4} />

          {/* dots at the item end */}
          <circle cx="245" cy="90" r="4" fill="#f59e0b" />
          <circle cx="245" cy="260" r="4" fill="#f59e0b" />
          <circle cx="245" cy="430" r="4" fill="#f59e0b" />
          <circle cx="755" cy="90" r="4" fill="#f59e0b" />
          <circle cx="755" cy="260" r="4" fill="#f59e0b" />
          <circle cx="755" cy="430" r="4" fill="#f59e0b" />
        </svg>

        {/* left column */}
        <div className="relative z-10 flex flex-col justify-between gap-14 md:h-110">
          {leftItems.map((item, i) => (
            <Item key={item.title} {...item} index={i} />
          ))}
        </div>

        {/* center circle */}
        <div className="relative z-10 mx-auto flex items-center justify-center">
          {/* dashed guide circle, slowly rotating */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="h-56 w-56 rounded-full border border-dashed border-amber-300"
          />

          {/* image floats on top and is allowed to overflow the dashed circle a little,
              exactly like the reference (piece top/base poke past the ring) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute flex h-72 w-72 items-center justify-center cursor-default"
          >
            <img
              src={imgSrc}
              alt="Center"
              className="h-full w-full select-none"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </motion.div>
        </div>

        {/* right column */}
        <div className="relative z-10 flex flex-col justify-between gap-14 md:h-110">
          {rightItems.map((item, i) => (
            <Item key={item.title} {...item} align="right" index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}