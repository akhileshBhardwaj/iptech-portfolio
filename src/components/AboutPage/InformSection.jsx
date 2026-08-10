import React from "react";
import {
  Lightbulb,
  BarChart3,
  MessagesSquare,
  Target,
  SlidersHorizontal,
  Heart,
} from "lucide-react";
import instructionImage from '../../assets/images/AboutImages/instructionimage.png'

/**
 * "What Makes Us Different" section
 * - Center circle: drop your own image via the `centerImage` prop (or replace the placeholder div)
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

function Item({ icon: Icon, title, desc, align = "left" }) {
  return (
    <div
      className={`flex items-start gap-4 ${
        align === "right" ? "flex-row-reverse text-right" : "text-left"
      }`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-amber-500">
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 max-w-47.5 text-xs leading-relaxed text-slate-500">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function WhatMakesUsDifferent({ centerImage }) {
  return (
    <section className="w-full bg-[#fafaf8] px-6 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-amber-500">
          WHAT MAKES US DIFFERENT
        </span>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          More Than Just Another{" "}
          <span className="text-amber-500">Agency</span>
        </h2>
        <p className="mt-3 text-sm text-slate-500">
          We don't just deliver services, we build partnerships.
          <br />
          Here's what sets us apart.
        </p>
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
          <path d="M245 90 Q 350 90 430 190" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
          <path d="M245 260 H 400" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
          <path d="M245 430 Q 350 430 430 330" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
          {/* right connectors */}
          <path d="M755 90 Q 650 90 570 190" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
          <path d="M755 260 H 600" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
          <path d="M755 430 Q 650 430 570 330" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />

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
          {leftItems.map((item) => (
            <Item key={item.title} {...item} />
          ))}
        </div>

        {/* center circle */}
        <div className="relative z-10 mx-auto flex items-center justify-center">
          {/* dashed guide circle sitting behind the image */}
          <div className="h-56 w-56 rounded-full border border-dashed border-amber-300" />

          {/* image floats on top and is allowed to overflow the dashed circle a little,
              exactly like the reference (piece top/base poke past the ring) */}
          <div className="absolute flex h-72 w-72 items-center justify-center">
            {centerImage ? (
              <img
                src={instructionImage}
                alt="Center"
                className="h-full w-full select-none"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            ) : (
              <div className="flex h-56 w-56 items-center justify-center rounded-full bg-linear-to-b from-amber-300 to-amber-500 shadow-inner">
                <span className="px-4 text-center text-xs font-medium text-amber-900/70">
                  <img src="/instructionimage.png" alt="" />
                </span>
              </div>
            )}
          </div>
        </div>

        {/* right column */}
        <div className="relative z-10 flex flex-col justify-between gap-14 md:h-110">
          {rightItems.map((item) => (
            <Item key={item.title} {...item} align="right" />
          ))}
        </div>
      </div>
    </section>
  );
}