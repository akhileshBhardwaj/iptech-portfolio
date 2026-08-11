import React from "react";
import { motion } from "framer-motion";
import { Quote, ArrowRight, Users, Sparkles } from "lucide-react";

const easeOut = [0.16, 1, 0.3, 1];

const photos = [
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
    alt: "Colleagues celebrating a win with a high-five",
    radius: "56px 16px 16px 16px",
  },
  {
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80",
    alt: "Team member smiling while working on a laptop",
    radius: "16px 16px 16px 56px",
  },
  {
    src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=700&q=80",
    alt: "Team member giving a thumbs up at his desk",
    radius: "16px 56px 16px 16px",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80",
    alt: "Team collaborating around a laptop",
    radius: "16px 16px 56px 16px",
  },
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=80",
    alt: "Client handshake after a successful meeting",
    radius: "56px 16px 16px 16px",
  },
];

/**
 * PhotoCollage
 * Photo grid (~58% width) with a right-side card stack (~44% width, pulled
 * left with a negative margin so it slightly overlaps the grid's edge) —
 * matching the reference layout. On mobile the stack drops below the grid
 * as normal flow (no overlap, no absolute positioning) so nothing clips.
 */
export default function PhotoCollage() {
  return (
    <div className="relative">
      {/* dot grid, top-right */}
      <div
        className="pointer-events-none absolute -right-1 top-0 hidden h-20 w-20 opacity-50 lg:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, #94a3b8 1.4px, transparent 1.4px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* handwritten doodle text + squiggle pointing at the dot grid */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOut }}
        className="relative mb-3 hidden text-right leading-[0.95] lg:block"
      >
        <p
          className="text-3xl font-semibold text-amber-500"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Real People.
        </p>
        <p
          className="text-3xl font-semibold text-amber-500"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Real Stories.
        </p>
        <svg
          className="absolute -bottom-5 right-8 h-8 w-14 text-amber-400"
          viewBox="0 0 70 40"
          fill="none"
        >
          <motion.path
            d="M4 4C10 20 30 30 50 26"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
          />
          <motion.path
            d="M40 18L51 26L44 34"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 1.1 }}
          />
        </svg>
      </motion.div>

      {/* main layout: photo grid + overlapping card stack */}
      <div className="flex flex-col lg:flex-row lg:items-start">
        {/* photo grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:w-[58%] lg:shrink-0">
          <motion.div
            className="col-span-2 h-44 overflow-hidden shadow-lg sm:h-56"
            style={{ borderRadius: photos[0].radius }}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05, ease: easeOut }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={photos[0].src}
              alt={photos[0].alt}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {[photos[1], photos[2]].map((p, i) => (
            <motion.div
              key={p.alt}
              className="h-32 overflow-hidden shadow-lg sm:h-44"
              style={{ borderRadius: p.radius }}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.1,
                ease: easeOut,
              }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}

          {[photos[3], photos[4]].map((p, i) => (
            <motion.div
              key={p.alt}
              className="h-32 overflow-hidden shadow-lg sm:h-44"
              style={{ borderRadius: p.radius }}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.35 + i * 0.1,
                ease: easeOut,
              }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* card stack — pulled left on desktop for a slight overlap onto the grid */}
        <div className="mt-6 flex flex-col lg:mt-16 lg:w-[46%] lg:-ml-8 lg:pl-2">
          <motion.div
            className="rounded-3xl bg-[#0E1330] p-6 shadow-2xl sm:p-7"
            initial={{ opacity: 0, x: 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
          >
            <Quote className="mb-3 h-8 w-8 fill-amber-400 text-amber-400" />
            <h3 className="text-xl font-extrabold leading-tight text-white sm:text-2xl">
              Great service.
              <br />
              <span
                className="text-amber-400"
                style={{ fontFamily: "'Caveat', cursive", fontWeight: 700 }}
              >
                Stronger together.
              </span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              We value the trust our clients place in us and take pride in being
              part of their success journey.
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 flex items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-[#141625]"
            >
              Read More Stories
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </motion.div>

          {/* stats badge */}
          <motion.div
            className="relative mt-4 flex w-fit items-center gap-3 self-end rounded-2xl bg-white p-4 shadow-xl lg:mr-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.55, ease: easeOut }}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100">
              <Users className="h-5 w-5 text-[#141625]" />
            </span>
            <div>
              <p className="text-lg font-extrabold text-[#141625]">250+</p>
              <p className="text-xs leading-tight text-slate-500">
                Happy Clients
                <br />
                Worldwide
              </p>
              <svg
                className="mt-0.5 h-2 w-14 text-amber-400"
                viewBox="0 0 60 8"
                fill="none"
              >
                <path
                  d="M2 5C12 1 22 8 32 4C42 1 50 6 58 3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <motion.span
              className="absolute -right-1.5 -top-1.5 text-amber-400"
              animate={{ rotate: [0, 15, 0], scale: [1, 1.15, 1] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="h-4 w-4" />
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
