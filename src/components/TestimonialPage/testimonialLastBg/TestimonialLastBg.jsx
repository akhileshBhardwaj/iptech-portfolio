import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Data — apna real client data yahan se replace kar dena             */
/* ------------------------------------------------------------------ */
const TESTIMONIALS = [
  {
    id: 1,
    name: "Ananya Sharma",
    role: "Founder, Studio Weave",
    avatar: "AS",
    rating: 5,
    text: "Google Ads ka CPC 40% neeche laye aur organic traffic 3 mahine mein double kar diya. SEO se leke paid campaigns tak, sab kuch data-backed tha.",
  },
  {
    id: 2,
    name: "Rohit Verma",
    role: "Growth Lead, Nexlify",
    avatar: "RV",
    rating: 5,
    text: "Social media campaigns ne conversion rate 2.1% se 5.8% tak pahuncha diya. Pehli baar kisi agency ne actual ROI dikhaya, sirf vanity metrics nahi.",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Co-founder, Ferra Living",
    avatar: "PN",
    rating: 4,
    text: "Content strategy aur influencer marketing ke combo se brand ki reach 5x badh gayi. Ab har mahine measurable leads milte hain.",
  },
];

const AUTOPLAY_MS = 5000;

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */
function StarRow({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-3.5 w-3.5 ${i < count ? "fill-[#FDB022]" : "fill-[#E7DCC6]"}`}
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.15 + i * 0.05, type: "spring", stiffness: 300 }}
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85L10 1.5z" />
        </motion.svg>
      ))}
    </div>
  );
}

function QuoteMark() {
  return (
    <svg viewBox="0 0 32 24" className="h-5 w-5 shrink-0 fill-[#FF7A45]" aria-hidden="true">
      <path d="M4 24V14.6C4 6.6 8.9 1.4 16.6 0l1.2 3.6c-4.8 1.6-7 4.6-7.4 8.4H16v12H4zm16 0V14.6c0-8 4.9-13.2 12.6-14.6L34 3.6c-4.8 1.6-7 4.6-7.4 8.4H32v12H20z" />
    </svg>
  );
}

/* Fully custom illustration — layered cards + animated stat ring.
   Built from scratch (shapes/paths), not traced from any reference. */
function ImpactCollage() {
  const RING_R = 26;
  const CIRC = 2 * Math.PI * RING_R;
  const PROGRESS = 0.92; // 92%

  return (
    <div className="relative hidden h-full w-47.5 shrink-0 sm:block md:w-52.5">
      {/* back panel — soft sky card */}
      <motion.div
        className="absolute left-0 top-2 h-28 w-36 rounded-2xl bg-[#E7EEF7]"
        initial={{ opacity: 0, y: 10, rotate: -8 }}
        animate={{ opacity: 1, y: [0, -5, 0], rotate: -8 }}
        transition={{
          opacity: { duration: 0.5 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg viewBox="0 0 100 70" className="h-full w-full p-3">
          {/* mini growth arrow motif */}
          <path
            d="M8 55 L30 35 L45 45 L75 15"
            fill="none"
            stroke="#FF7A45"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M60 15 H75 V30" fill="none" stroke="#FF7A45" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="8" cy="55" r="4" fill="#14213D" />
          <circle cx="45" cy="45" r="4" fill="#14213D" />
          <circle cx="75" cy="15" r="4" fill="#FF7A45" />
        </svg>
      </motion.div>

      {/* front panel — mini bar chart dashboard card */}
      <motion.div
        className="absolute left-14 top-14 h-24 w-32 rounded-2xl border border-[#F0E3CC] bg-white shadow-lg"
        initial={{ opacity: 0, y: 10, rotate: 6 }}
        animate={{ opacity: 1, y: [0, 6, 0], rotate: 6 }}
        transition={{
          opacity: { duration: 0.5, delay: 0.1 },
          y: { duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
        }}
      >
        <div className="flex h-full items-end gap-1.5 p-3">
          {[40, 65, 50, 85].map((h, i) => (
            <motion.span
              key={i}
              className="w-2 rounded-full bg-linear-to-t from-[#FF7A45] to-[#FFC48C]"
              style={{ height: `${h}%` }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: "easeOut" }}
            />
          ))}
        </div>
      </motion.div>

      {/* floating animated stat ring */}
      <motion.div
        className="absolute -right-2 -top-3 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
        transition={{
          opacity: { duration: 0.4, delay: 0.5 },
          scale: { duration: 0.4, delay: 0.5 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
        }}
      >
        <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90">
          <circle cx="32" cy="32" r={RING_R} fill="none" stroke="#F3E7D2" strokeWidth="6" />
          <motion.circle
            cx="32"
            cy="32"
            r={RING_R}
            fill="none"
            stroke="#FF7A45"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            initial={{ strokeDashoffset: CIRC }}
            animate={{ strokeDashoffset: CIRC * (1 - PROGRESS) }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          />
        </svg>
        <span className="absolute text-[11px] font-bold text-[#14213D]">92%</span>
      </motion.div>

      {/* small verified chip */}
      <motion.div
        className="absolute bottom-0 left-1 flex items-center gap-1.5 rounded-full border border-[#F0E3CC] bg-white px-2.5 py-1.5 shadow-md"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: [0, -4, 0] }}
        transition={{
          opacity: { duration: 0.4, delay: 0.7 },
          y: { duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
        }}
      >
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2E8B6F]">
          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-white">
            <path d="M4.6 8.6 1.9 5.9l1-1 1.7 1.7 3.9-3.9 1 1z" />
          </svg>
        </span>
        <span className="text-[10px] font-semibold text-[#14213D]">Campaign Verified</span>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main section — sits right after the Reviews section on the page   */
/* ------------------------------------------------------------------ */
export default function TestimonialLastBg({ testimonials = TESTIMONIALS, autoplay = true }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const goTo = useCallback((next) => setIndex(((next % total) + total) % total), [total]);

  useEffect(() => {
    if (!autoplay || paused || total <= 1) return;
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [autoplay, paused, total]);

  const current = testimonials[index];

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="mx-auto w-[80%] max-w-4xl py-10 sm:py-14"
    >
      <div className="relative overflow-hidden rounded-[26px] border border-[#F1E3CC] bg-[#FBF0DE] px-5 py-5 shadow-[0_18px_45px_-15px_rgba(20,20,30,0.25)] sm:px-7 sm:py-6">
        {/* faint decorative circle in the corner, part of the warm-bg identity */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FFE3C2] opacity-60 blur-2xl" />

        <div className="relative flex flex-col items-center gap-5 sm:flex-row sm:gap-6">
          <ImpactCollage />

          {/* quote content */}
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <QuoteMark />
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mt-1.5"
              >
                <p className="text-[15px] font-medium leading-relaxed text-[#2B2A25] sm:text-base">
                  {current.text}
                </p>

                <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leniar-to-br from-[#FF7A45] to-[#E85D2C] text-[11px] font-bold text-white">
                      {current.avatar}
                    </div>
                    <div className="text-left leading-tight">
                      <p className="text-[13px] font-semibold text-[#14213D]">{current.name}</p>
                      <p className="text-[11px] text-[#8A7F68]">{current.role}</p>
                    </div>
                  </div>
                  <StarRow count={current.rating} />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* dots */}
            <div className="mt-3 flex items-center justify-center gap-1.5 sm:justify-start">
              {testimonials.map((t, i) => (
                <button key={t.id} onClick={() => goTo(i)} aria-label={`Testimonial ${i + 1}`} className="py-1">
                  <span className="relative block h-1.5 w-5 overflow-hidden rounded-full bg-[#EEE0C6]">
                    {i === index && (
                      <motion.span
                        layoutId="active-dot"
                        className="absolute inset-0 rounded-full bg-[#FF7A45]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.a
            href="#success-stories"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex shrink-0 items-center gap-2 rounded-full bg-[#FDB022] px-5 py-3 text-sm font-semibold text-[#14213D] shadow-[0_10px_25px_-8px_rgba(253,176,34,0.7)]"
          >
            Success Stories
            <motion.svg
              viewBox="0 0 20 20"
              className="h-4 w-4 fill-none stroke-[#14213D]"
              strokeWidth="2"
              initial={false}
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}