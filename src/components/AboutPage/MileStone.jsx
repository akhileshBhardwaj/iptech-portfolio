import React from "react";
import {
  Rocket,
  Users,
  Compass,
  Telescope,
  ShieldCheck,
  Flag,
} from "lucide-react";

/**
 * "Milestones That Define Our Growth" timeline
 * Usage: <MilestonesTimeline />
 */

const milestones = [
  {
    year: "2014",
    title: "The Beginning",
    desc: "Started with a small team and a big dream.",
    icon: Rocket,
    pos: "top",
  },
  {
    year: "2016",
    title: "Taking Off",
    desc: "Expanded our team and started working with amazing clients.",
    icon: Users,
    pos: "bottom",
  },
  {
    year: "2018",
    title: "Building Momentum",
    desc: "Delivered 100+ projects and built a strong reputation.",
    icon: Compass,
    pos: "top",
  },
  {
    year: "2020",
    title: "New Possibilities",
    desc: "Explored new techniques and added more value to our services.",
    icon: Telescope,
    pos: "bottom",
  },
  {
    year: "2022",
    title: "Stronger Impact",
    desc: "Crossed 300+ projects and helped brands scale globally.",
    icon: ShieldCheck,
    pos: "top",
  },
  {
    year: "2024",
    title: "Future Ready",
    desc: "Continuing to innovate and create meaningful digital solutions.",
    icon: Flag,
    pos: "bottom",
  },
];

/**
 * Builds ONE continuous smooth wave path across all node centers.
 * Because it's generated with matching, symmetric control points at every
 * junction, there's no seam/kink where segments meet — unlike a hand-typed
 * multi-curve path, this never visually "breaks".
 */
function TimelineWave({ count }) {
  const width = 1200;
  const height = 70;
  const mid = 35;
  const amp = 24;
  const step = width / count;

  // node centers sit ON the baseline, evenly spaced
  const centers = Array.from({ length: count }, (_, i) => (i + 0.5) * step);

  let d = `M 0 ${mid} L ${centers[0] - step * 0.15} ${mid} `;

  for (let i = 0; i < centers.length - 1; i++) {
    const xA = centers[i];
    const xB = centers[i + 1];
    const dir = i % 2 === 0 ? -1 : 1; // alternate hump-up / dip-down
    const cy = mid + dir * amp;
    const cx = (xA + xB) / 2;
    d += `C ${cx} ${cy} ${cx} ${cy} ${xB} ${mid} `;
  }

  d += `L ${width} ${mid}`;

  return (
    <svg
      className="pointer-events-none absolute left-0 top-1/2 hidden w-full -translate-y-1/2 md:block"
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d={d}
        stroke="#fbbf24"
        strokeWidth="2"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />
      {/* arrow head at the very end */}
      <path
        d={`M ${width - 12} ${mid - 8} L ${width} ${mid} L ${width - 12} ${mid + 8}`}
        stroke="#fbbf24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function MilestonesTimeline() {
  return (
    <section className="w-full bg-[#fafaf8] px-6 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-xs font-bold tracking-[0.2em] text-amber-500">
          OUR JOURNEY SO FAR
        </span>
        <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
          Milestones That Define <span className="text-amber-500">Our Growth</span>
        </h2>
      </div>

      <div className="relative mx-auto mt-20 max-w-6xl">
        {/* connecting dashed line — built as one continuous smooth path so it never visibly "cuts" */}
        <TimelineWave count={milestones.length} />

        <div className="relative grid grid-cols-1 gap-16 md:grid-cols-6 md:gap-2">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            const isTop = m.pos === "top";
            return (
              <div
                key={m.year}
                className="relative flex flex-col items-center md:h-55 md:justify-center"
              >
                {/* text block: above node on desktop for "top", below for "bottom" */}
                <div
                  className={`order-1 flex flex-col items-center text-center md:absolute md:w-40 ${
                    isTop
                      ? "md:bottom-[calc(50%+2.75rem)]"
                      : "md:top-[calc(50%+2.75rem)]"
                  }`}
                >
                  <span className="text-xs font-bold text-amber-500">
                    {m.year}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900">
                    {m.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {m.desc}
                  </p>
                </div>

                {/* node */}
                <div className="order-2 z-10 mt-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-amber-300 bg-white text-amber-500 shadow-sm md:mt-0">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}