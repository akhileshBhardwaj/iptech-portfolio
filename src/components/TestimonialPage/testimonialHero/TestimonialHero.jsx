import React from "react";
import { motion } from "framer-motion";
import { Star, Sparkles, TrendingUp, Quote } from "lucide-react";

/**
 * TestimonialHero
 * Standalone hero section (navbar + bottom stats bar intentionally excluded).
 * Tailwind CSS utility classes + Framer Motion for entrance/ambient animation.
 * No required props — safe default export.
 */
export default function TestimonialHero() {
  const avatarSeeds = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/65.jpg",
    "https://randomuser.me/api/portraits/men/12.jpg",
    "https://randomuser.me/api/portraits/men/78.jpg",
  ];

  const easeOut = [0.16, 1, 0.3, 1];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.12, ease: easeOut },
    }),
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FBF3E7] font-[Inter,sans-serif]">
      {/* Google Fonts: Inter for body/display, Caveat for the script accent */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Caveat:wght@600;700&display=swap');
        .font-script { font-family: 'Caveat', cursive; }
        .font-display { font-family: 'Inter', sans-serif; }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      {/* faint dot grid, top-right */}
      <motion.div
        className="pointer-events-none absolute right-10 top-10 hidden h-40 w-40 opacity-40 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, #cbb98f 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 md:px-10 lg:grid-cols-2 lg:gap-10 lg:py-28">
        {/* ---------------- LEFT COLUMN ---------------- */}
        <div className="relative z-10">
          <motion.div
            className="mb-5 flex items-center gap-3"
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
          >
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-amber-500">
              Testimonials
            </span>
            <motion.span
              className="h-0.5 w-10 origin-left bg-amber-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
            />
          </motion.div>

          <h1 className="font-display text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-[#141625] sm:text-6xl">
            <motion.span
              className="block"
              initial="hidden"
              animate="show"
              custom={1}
              variants={fadeUp}
            >
              Real feedback.
            </motion.span>
            <motion.span
              className="block"
              initial="hidden"
              animate="show"
              custom={2}
              variants={fadeUp}
            >
              Real people.
            </motion.span>
            <motion.span
              className="font-script block text-[4rem] font-bold leading-none text-amber-500 sm:text-7xl"
              initial={{ opacity: 0, y: 28, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
            >
              Real impact.
            </motion.span>
          </h1>

          <motion.div
            className="mt-2 h-0.75 w-56 origin-left rounded-full bg-amber-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: easeOut }}
          />

          <motion.p
            className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-slate-500"
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
          >
            We believe the best proof of our work comes from the people we work
            with.
          </motion.p>

          <motion.div
            className="relative mt-8 flex items-center gap-4"
            initial="hidden"
            animate="show"
            custom={5}
            variants={fadeUp}
          >
            <div className="flex items-center -space-x-3">
              {avatarSeeds.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt=""
                  className="h-11 w-11 rounded-full border-2 border-[#FBF3E7] object-cover shadow-sm"
                  initial={{ opacity: 0, scale: 0.5, x: -12 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + i * 0.08,
                    ease: easeOut,
                  }}
                  whileHover={{ y: -4, scale: 1.08, zIndex: 20 }}
                  style={{ position: "relative" }}
                />
              ))}
            </div>

            <motion.div
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#141625] text-[11px] font-bold text-white"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.1, ease: easeOut }}
            >
              250+
            </motion.div>

            <p className="text-sm font-semibold leading-tight text-[#141625]">
              Happy Clients
              <br />
              <span className="font-normal text-slate-400">Worldwide</span>
            </p>

            {/* dashed curved arrow decoration — draws itself in */}
            <svg
              className="pointer-events-none absolute -right-10 top-8 hidden h-16 w-16 text-amber-400 sm:block"
              viewBox="0 0 80 70"
              fill="none"
            >
              <motion.path
                d="M4 60C20 66 46 60 58 30C64 15 62 4 62 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeDasharray="5 5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2, ease: easeOut }}
              />
              <motion.path
                d="M50 8L62 3L65 16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.1 }}
              />
            </svg>
          </motion.div>
        </div>

        {/* ---------------- RIGHT COLUMN ---------------- */}
        <div className="relative mx-auto h-105 w-full max-w-140 sm:h-125 lg:h-140">
          {/* decorative swirl ring — slow ambient rotation */}
          <motion.svg
            className="pointer-events-none absolute -right-6 -top-2 h-full w-full text-amber-400"
            viewBox="0 0 100 100"
            fill="none"
            style={{ transformOrigin: "50% 50%" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <motion.path
              d="M18 55C10 35 25 12 50 10C78 8 92 30 88 55C84 80 60 92 40 88"
              stroke="currentColor"
              strokeWidth="0.6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.3, ease: easeOut }}
            />
          </motion.svg>

          {/* sparkle — gentle float + twinkle */}
          <motion.div
            className="absolute left-10 top-2"
            animate={{ y: [0, -6, 0], rotate: [0, 12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-7 w-7 text-[#141625]" strokeWidth={1.5} />
          </motion.div>

          {/* blob image */}
          <motion.div
            className="absolute inset-0 m-auto h-[88%] w-[92%] overflow-hidden shadow-xl"
            style={{ borderRadius: "42% 58% 64% 36% / 46% 40% 60% 54%" }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easeOut }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Team reviewing work together on a laptop"
              className="h-full w-full object-cover"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, delay: 0.15, ease: easeOut }}
            />
          </motion.div>

          {/* floating quote card */}
          <motion.div
            className="absolute -bottom-6 left-0 w-[78%] max-w-[320px] rounded-2xl bg-white p-6 shadow-xl sm:-bottom-8 sm:left-2"
            initial={{ opacity: 0, x: -40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: easeOut }}
            whileHover={{
              y: -6,
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
            }}
          >
            <Quote className="mb-2 h-6 w-6 fill-[#141625] text-[#141625]" />
            <p className="text-[0.95rem] leading-snug text-slate-600">
              IP Tech has been a true partner in our digital growth journey.
              Their strategy, execution, and support are exceptional.
            </p>
            <div className="my-3 h-px w-full bg-slate-100" />
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Anita Sharma"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold text-[#141625]">Anita Sharma</p>
                <p className="text-xs text-slate-400">
                  Marketing Director, FinEdge
                </p>
              </div>
            </div>
            <div className="mt-2 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.5 + i * 0.08 }}
                >
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* big quote-mark badge — pulsing */}
          <motion.div
            className="absolute bottom-16 right-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#141625] text-2xl font-serif font-bold text-white shadow-lg sm:bottom-20 sm:right-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1, ease: easeOut }}
            whileHover={{ scale: 1.12, rotate: -6 }}
          >
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.6,
              }}
            >
              &rdquo;
            </motion.span>
          </motion.div>

          {/* trusted-by pill */}
          <motion.div
            className="absolute -bottom-4 right-0 flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2.5 shadow-lg sm:right-2"
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05, ease: easeOut }}
            whileHover={{ y: -4 }}
          >
            <motion.span
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141625]"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.8,
              }}
            >
              <TrendingUp className="h-4 w-4 text-amber-400" />
            </motion.span>
            <p className="text-xs font-bold leading-tight text-[#141625]">
              Trusted by Brands
              <br />
              Across Industries
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
