import React, { useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { milestones, bottomStats, caseStudies } from "./data/Data";

const icons = {
  trend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <path d="M3 17l6-6 4 4 8-8" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  dollar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
    </svg>
  ),
  bars: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  ),
};

// Parses "67.3K" -> {prefix:"", value:67.3, suffix:"K"}, "512" -> {value:512, suffix:""},
// "98%" -> {value:98, suffix:"%"}. Animates the numeric part from 0, keeps suffix static.
function parseStatValue(str) {
  const match = str.match(/^([\d.]+)(.*)$/);
  if (!match) return { value: 0, suffix: str, decimals: 0 };
  const numStr = match[1];
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { value: parseFloat(numStr), suffix: match[2], decimals };
}

function CountUpStat({ text, startAnim, delay = 0, duration = 1.4 }) {
  const { value, suffix, decimals } = parseStatValue(text);
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState(decimals ? `0.${"0".repeat(decimals)}` : "0");

  React.useEffect(() => {
    if (!startAnim) return;
    const controls = animate(motionVal, value, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        setDisplay(decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString());
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startAnim]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

function CountUpRing({ startAnim, delay = 0, duration = 1.4 }) {
  // 98% target — circumference for r=32 is ~201
  const circumference = 201;
  const targetOffset = circumference * (1 - 0.98) + 4; // matches original strokeDashoffset="4" at 98%
  const dashOffset = useMotionValue(circumference);
  const [displayPct, setDisplayPct] = useState(0);
  const [offset, setOffset] = useState(circumference);

  React.useEffect(() => {
    if (!startAnim) return;
    const controls = animate(dashOffset, targetOffset, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (v) => {
        setOffset(v);
        const pct = Math.round(((circumference - v) / (circumference * 0.98)) * 98);
        setDisplayPct(Math.max(0, Math.min(98, pct)));
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startAnim]);

  return (
    <div className="relative w-16 h-16 sm:w-19 sm:h-19 shrink-0">
      <svg width="100%" height="100%" viewBox="0 0 76 76" className="-rotate-90">
        <circle cx="38" cy="38" r="32" fill="none" stroke="#f6ecdd" strokeWidth="7" />
        <circle
          cx="38"
          cy="38"
          r="32"
          fill="none"
          stroke="#f5941f"
          strokeWidth="7"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-extrabold text-sm sm:text-base text-[#14213d]">
        {displayPct}%
      </div>
    </div>
  );
}

export default function SEOResultsSection() {
  const [index, setIndex] = useState(0);
  const total = caseStudies.length;
  const active = caseStudies[index];
  const nextPreview = caseStudies[(index + 1) % total];

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  // journey path draws once, when it scrolls into view
  const journeyRef = React.useRef(null);
  const journeyInView = useInView(journeyRef, { once: true, amount: 0.4 });

  // bottom stats bar: numbers count up from 0 once it scrolls into view
  const statsRef = React.useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.4 });

  return (
    <section className="bg-[#fdf6ec] w-full overflow-x-hidden">
      <div className="max-w-384 mx-auto px-4 sm:px-8 lg:px-14 py-8 sm:py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 text-[#f5941f] font-bold text-[12px] sm:text-[13px] tracking-wider mb-4 sm:mb-5">
              <span className="w-5 h-0.5 bg-[#f5941f] inline-block shrink-0" />
              SEO RESULTS THAT DRIVE GROWTH
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-[#14213d] tracking-tight">
              From Search to
              <br />
              Success Stories
              <br />
              <span className="text-[#f5941f]">Real Results. Real Impact.</span>
            </h1>

            <p className="text-[#7a7a85] text-sm sm:text-[15.5px] leading-relaxed max-w-sm mt-4 sm:mt-5 mb-7 sm:mb-9">
              We help brands rank higher, grow organic traffic, and achieve
              measurable business growth through result-driven SEO strategies.
            </p>

            <div className="relative flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f5941f] flex items-center justify-center shrink-0 shadow-[0_10px_24px_rgba(245,148,31,0.35)]">
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 sm:w-4.5 sm:h-4.5 ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div>
                <b className="block text-sm sm:text-[15px] font-bold text-[#14213d]">
                  See Our SEO in Action
                </b>
                <span className="text-xs sm:text-[13px] text-[#7a7a85]">
                  Explore live case studies
                </span>
              </div>

              <svg
                className="hidden sm:block absolute left-2 top-16 w-48 h-16"
                viewBox="0 0 190 60"
                fill="none"
              >
                <path
                  d="M10 5 C 10 45, 90 55, 175 40"
                  stroke="#f5941f"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  fill="none"
                />
                <path
                  d="M162 32 L177 40 L167 52"
                  stroke="#f5941f"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* CENTER: SEARCH JOURNEY (3D disc + path + milestone cards) */}
          <div className="lg:col-span-2 order-3 lg:order-2 mt-10 lg:mt-0">
            {/* ===== MOBILE: vertical timeline (< sm) ===== */}
            <div className="sm:hidden">
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-9 h-9 rounded-full bg-[#f5941f] flex items-center justify-center shadow-[0_8px_18px_rgba(245,148,31,0.4)]">
                  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                    <path d="M2 19h20l-2-9-5 4-3-8-3 8-5-4z" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold tracking-wider text-[#14213d]/70">
                  THE SEARCH JOURNEY
                </span>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-2.75 top-2 bottom-2 w-0.5 bg-linear-to-b from-[#f5941f] via-[#f5941f]/60 to-[#f5941f]/20 rounded-full" />

                <div className="flex flex-col gap-4">
                  {milestones.map((m, i) => (
                    <div key={m.rank} className="relative">
                      <span className="absolute -left-8 top-4 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#f5941f]" />
                      <div className="bg-white rounded-xl px-4 py-3 shadow-[0_10px_24px_rgba(20,33,61,0.07)] flex items-center justify-between gap-3">
                        <div>
                          <div className="text-[11px] text-[#7a7a85] mb-0.5">
                            {m.date}
                          </div>
                          <div className="text-xl font-extrabold text-[#14213d] leading-tight">
                            {m.rank}
                          </div>
                        </div>
                        <span className="shrink-0 inline-block bg-[#fdeed2] text-[#e08313] text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                          {m.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== TABLET / DESKTOP: original 3D disc layout (>= sm) ===== */}
            <div
              ref={journeyRef}
              className="hidden sm:block relative w-full aspect-761/677 max-w-2xl mx-auto"
            >
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="discWall" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#eee0c6" />
                    <stop offset="100%" stopColor="#e2d0ac" />
                  </linearGradient>
                  <radialGradient id="discTop" cx="42%" cy="30%" r="80%">
                    <stop offset="0%" stopColor="#fffdf9" />
                    <stop offset="100%" stopColor="#f1e5cd" />
                  </radialGradient>
                </defs>

                <path
                  d="M6,62 L6,84 A46,15.5 0 0 0 96,84 L96,62 Z"
                  fill="url(#discWall)"
                />
                <ellipse cx="51" cy="62" rx="46" ry="15.5" fill="url(#discTop)" />
                <ellipse cx="51" cy="62" rx="35" ry="11.8" fill="none" stroke="#e9dbbd" strokeWidth="0.3" />
                <ellipse cx="51" cy="62" rx="24" ry="8.1" fill="none" stroke="#e9dbbd" strokeWidth="0.3" />
                <ellipse cx="51" cy="62" rx="13" ry="4.4" fill="none" stroke="#e9dbbd" strokeWidth="0.3" />
                <path
                  d="M20,58 C 30,46 55,42 72,50 C 84,56 80,70 62,72 C 48,73.5 38,66 44,58 C 48,53 58,53 62,57"
                  fill="none"
                  stroke="#ecdfc2"
                  strokeWidth="0.35"
                />

                <path id="discLabelPath" d="M14,86 A38,13 0 0 1 88,86" fill="none" />
                <text fontSize="2.6" letterSpacing="0.3" fontWeight="700" fill="#14213d" opacity="0.6">
                  <textPath href="#discLabelPath" startOffset="50%" textAnchor="middle">
                    THE SEARCH JOURNEY
                  </textPath>
                </text>

                <motion.path
                  d="M13,79
                     C 15,74 16.5,70.5 18,67
                     C 20,63.5 22,61.5 25.5,60
                     C 30,58.5 33,58 35.5,55.5
                     C 38,52 39,47.5 41.5,44.5
                     C 45,41 50,40 54,38.5
                     C 58,37 61,35 63,31.5
                     C 66,27 67.5,21 70,17
                     C 72.5,13 75,10.5 78,8"
                  fill="none"
                  stroke="#f5941f"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={journeyInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
                <motion.path
                  d="M74.5,10 L79.3,7.3 L76.5,12.8"
                  fill="none"
                  stroke="#f5941f"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ opacity: 0 }}
                  animate={journeyInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 1.5 }}
                />

                {[
                  [25.5, 60],
                  [41.5, 44.5],
                  [63, 31.5],
                  [78, 8],
                ].map(([cx, cy], i) => (
                  <motion.circle
                    key={`${cx}-${cy}`}
                    cx={cx}
                    cy={cy}
                    r="1.1"
                    fill="#f5941f"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={journeyInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.25, delay: 0.4 * (i + 1) }}
                    style={{ transformOrigin: `${cx}px ${cy}px` }}
                  />
                ))}
              </svg>

              <motion.div
                className="absolute w-8 h-8 sm:w-9 sm:h-9 -translate-x-1/2 rounded-full bg-[#f5941f] flex items-center justify-center shadow-[0_8px_18px_rgba(245,148,31,0.4)] z-20"
                style={{ left: "78%", top: "calc(8% - 40px)" }}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={journeyInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.35, delay: 1.9, ease: "easeOut" }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                  <path d="M2 19h20l-2-9-5 4-3-8-3 8-5-4z" />
                </svg>
              </motion.div>

              {milestones.map((m, i) => (
                <motion.div
                  key={m.rank}
                  className="absolute bg-white rounded-xl sm:rounded-2xl px-2.5 py-2 sm:px-4 sm:py-3 shadow-[0_12px_30px_rgba(20,33,61,0.08)] w-24 sm:w-32 z-10"
                  style={{ left: `${m.left}%`, top: `${m.top}%` }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={journeyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.4, delay: 0.4 * (i + 1) + 0.1, ease: "easeOut" }}
                >
                  <div className="text-[8.5px] sm:text-[11px] text-[#7a7a85] mb-0.5 whitespace-nowrap">
                    {m.date}
                  </div>
                  <div className="text-base sm:text-2xl font-extrabold text-[#14213d] leading-tight">
                    {m.rank}
                  </div>
                  <span className="inline-block mt-1 sm:mt-1.5 bg-[#fdeed2] text-[#e08313] text-[8.5px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 rounded-full whitespace-nowrap">
                    {m.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: CASE STUDY CAROUSEL */}
          <div className="lg:col-span-1 relative order-2 lg:order-3 max-w-md mx-auto lg:mx-0 w-full">
            <div className="inline-flex lg:absolute lg:-top-12 lg:right-0 items-center gap-2 bg-white rounded-full px-4 py-2 sm:px-4.5 sm:py-2.5 text-xs sm:text-[12.5px] font-semibold shadow-[0_6px_16px_rgba(20,33,61,0.06)] mb-4 sm:mb-5 lg:mb-0">
              <span className="w-2 h-2 rounded-full bg-[#f5941f] shrink-0" />
              Live SEO Performance
            </div>

            <div
              aria-hidden="true"
              className="hidden md:block absolute top-6 -right-7 w-14 h-105 rounded-r-[22px] overflow-hidden opacity-70 pointer-events-none"
              style={{ zIndex: 0 }}
            >
              <img
                src={nextPreview.heroImage}
                alt=""
                className="w-full h-40 object-cover"
              />
              <div className="bg-[#14213d]/80 w-full h-full" />
            </div>

            <div className="relative bg-white rounded-2xl sm:rounded-[22px] px-4 sm:px-6 pt-5 sm:pt-6 pb-4 sm:pb-5 shadow-[0_20px_50px_rgba(20,33,61,0.08)] z-10">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous case study"
                className="hidden md:flex absolute top-52 -left-4 w-8.5 h-8.5 rounded-full bg-[#f5941f] items-center justify-center shadow-[0_8px_18px_rgba(245,148,31,0.35)] hover:bg-[#e08313] transition-colors z-20"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next case study"
                className="hidden md:flex absolute top-52 -right-4 w-8.5 h-8.5 rounded-full bg-[#f5941f] items-center justify-center shadow-[0_8px_18px_rgba(245,148,31,0.35)] hover:bg-[#e08313] transition-colors z-20"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              <div className="flex md:hidden items-center justify-between mb-3">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Previous case study"
                  className="w-8 h-8 rounded-full bg-[#f5941f] flex items-center justify-center active:scale-95 transition-transform"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <div className="flex gap-1.5">
                  {caseStudies.map((cs, i) => (
                    <button
                      key={cs.name}
                      type="button"
                      aria-label={`Go to ${cs.name}`}
                      onClick={() => setIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === index ? "w-5 bg-[#f5941f]" : "w-1.5 bg-[#e5e0d5]"
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Next case study"
                  className="w-8 h-8 rounded-full bg-[#f5941f] flex items-center justify-center active:scale-95 transition-transform"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              <div className="text-[#f5941f] text-[10px] sm:text-[11px] font-bold tracking-wider mb-1.5">
                FEATURED CASE STUDY
              </div>
              <h3 className="text-lg sm:text-[22px] font-extrabold mb-2.5">{active.name}</h3>
              <span className="inline-block border border-[#e5e0d5] rounded-full px-3 sm:px-3.5 py-1 text-[11px] sm:text-xs text-[#14213d] mb-4">
                Niche: {active.niche}
              </span>

              <div className="bg-[#faf6ee] rounded-2xl overflow-hidden border border-[#f0e9d8]">
                <div className="flex items-center justify-between px-3 sm:px-3.5 py-2 sm:py-2.5 text-[10px] sm:text-[11px] tracking-widest font-bold text-[#14213d]">
                  <span>{active.brand}</span>
                  <span className="opacity-50">●&nbsp;●&nbsp;●</span>
                </div>
                <div className="flex min-h-32 sm:min-h-37.5">
                  <img
                    src={active.heroImage}
                    alt={active.name}
                    className="w-1/2 object-cover"
                  />
                  <div className="flex-1 p-3 sm:p-4 flex flex-col justify-center gap-2 sm:gap-2.5">
                    <h4 className="text-base sm:text-xl font-extrabold leading-tight m-0">
                      {active.heroTitle[0]}
                      <br />
                      {active.heroTitle[1]}
                    </h4>
                    <span className="bg-[#14213d] text-white text-[9px] sm:text-[10px] font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md w-fit">
                      Shop Now
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5 bg-white">
                  {active.avatars.map((id, i) => (
                    <img
                      key={id + i}
                      src={`https://images.unsplash.com/${id}?w=60&h=60&fit=crop`}
                      alt=""
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border-2 border-white ring-1 ring-[#eee] ${
                        i !== 0 ? "-ml-2" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="font-bold text-sm mt-4 sm:mt-4.5 mb-2.5 sm:mb-3">The Impact</div>

              <div>
                {active.impact.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between py-2 sm:py-2.5 text-[12.5px] sm:text-[13.5px] ${
                      i !== 0 ? "border-t border-[#f1ece0]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-2.5 text-[#14213d] font-medium">
                      <span className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full border border-[#e5e0d5] flex items-center justify-center text-[#f5941f] shrink-0">
                        {icons[item.icon]}
                      </span>
                      {item.label}
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 font-bold text-[#14213d]">
                      {item.value}
                      <svg width="34" height="14" viewBox="0 0 40 16" className="sm:w-10 sm:h-4">
                        <polyline
                          points={item.points}
                          fill="none"
                          stroke="#f5941f"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden md:flex justify-center gap-1.5 mt-4">
                {caseStudies.map((cs, i) => (
                  <button
                    key={cs.name}
                    type="button"
                    aria-label={`Go to ${cs.name}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-5 bg-[#f5941f]" : "w-1.5 bg-[#e5e0d5]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STATS BAR — numbers count up from 0 when scrolled into view */}
        <div
          ref={statsRef}
          className="mt-8 sm:mt-10 lg:mt-14 bg-white rounded-2xl sm:rounded-[22px] px-5 sm:px-10 py-6 sm:py-7 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 shadow-[0_16px_40px_rgba(20,33,61,0.05)]"
        >
          {bottomStats.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center gap-3 sm:gap-4 ${
                i !== bottomStats.length - 1 ? "lg:border-r lg:border-[#f0ece0]" : ""
              }`}
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#fdeed2] flex items-center justify-center text-[#f5941f] shrink-0">
                {icons[s.icon]}
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-extrabold text-[#14213d] leading-tight">
                  <CountUpStat text={s.value} startAnim={statsInView} delay={0.1 * i} />
                </div>
                <div className="text-[11px] sm:text-[13px] text-[#7a7a85] my-0.5">{s.label}</div>
                <div className="text-[11px] sm:text-xs text-[#1a9c5a] font-semibold">{s.delta}</div>
              </div>
            </div>
          ))}

          <div className="flex items-center gap-3 sm:gap-4">
            <CountUpRing startAnim={statsInView} delay={0.1 * bottomStats.length} />
            <div className="text-xs sm:text-[13.5px] text-[#14213d] font-medium leading-relaxed">
              Client Retention
              <br />
              Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}