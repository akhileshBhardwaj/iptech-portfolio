import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import FeatureTimeline from "./FeatureTimeline";
import PhotoCollage from "./PhotoCollage";

const easeOut = [0.16, 1, 0.3, 1];

/**
 * ClientChooseUs
 * Standalone "why clients choose us" section (bottom trusted-brands bar
 * intentionally excluded — see prior conversation).
 *
 * Requires: `npm install framer-motion lucide-react`
 * No required props — safe default export.
 */
export default function ClientChooseUs() {
  return (
    <section className="w-full bg-[#FBF3E7] px-6 py-16 sm:px-10 md:py-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Caveat:wght@600;700&display=swap');
      `}</style>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 lg:grid-cols-[0.85fr_1fr] lg:gap-10">
        {/* ---------------- LEFT COLUMN ---------------- */}
        <div>
          <motion.div
            className="mb-5 flex items-center gap-3"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-amber-500">
              Why Clients Choose IP Tech
            </span>
          </motion.div>
          <motion.span
            className="mb-6 block h-0.75 w-14 origin-left rounded-full bg-amber-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: easeOut }}
          />

          <div className="relative">
            <h2 className="font-[Inter,sans-serif] text-[2.25rem] font-extrabold leading-[1.1] tracking-tight text-[#141625] sm:text-5xl">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
              >
                It&apos;s not just feedback.
              </motion.span>
              <motion.span
                className="block text-amber-500"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
              >
                It&apos;s our fuel to grow.
              </motion.span>
            </h2>

            {/* doodle paper-plane arrow */}
            <motion.div
              className="pointer-events-none absolute -right-2 top-2 hidden text-slate-400 sm:block"
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: easeOut }}
            >
              <Send className="h-6 w-6" strokeWidth={1.5} />
              <svg
                className="absolute left-1 top-6 h-8 w-10"
                viewBox="0 0 60 40"
                fill="none"
              >
                <motion.path
                  d="M2 4C10 20 26 32 46 30"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7, ease: easeOut }}
                />
              </svg>
            </motion.div>
          </div>

          <motion.p
            className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-slate-500"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
          >
            We go beyond expectations to deliver experiences that create real
            impact and long-term partnerships.
          </motion.p>

          <div className="mt-10">
            <FeatureTimeline />
          </div>
        </div>

        {/* ---------------- RIGHT COLUMN ---------------- */}
        <div className="lg:pb-16 lg:pt-4">
          <PhotoCollage />
        </div>
      </div>
    </section>
  );
}
