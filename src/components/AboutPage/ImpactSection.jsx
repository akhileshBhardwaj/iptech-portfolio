import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Target } from "lucide-react";
import impactimage1 from "../../assets/images/AboutImages/about-icon-1.png";
import impactimage2 from "../../assets/images/AboutImages/about-icon-2.png";
import impactimage3 from "../../assets/images/AboutImages/about-icon-3.png";

/**
 * "We Don't Just Create, We Create Impact" — BANNER version
 * A compact, full-width CTA banner (rounded card, single row) instead of a tall hero.
 * Replace the 3 image `src` values with your own images.
 *
 * Usage: <CreateImpactBanner />
 */
export default function CreateImpactBanner({
  image1 = "/impact-target.jpg", // bottom-left circular/target image
  image2 = "/impact-laptop.jpg", // top image
  image3 = "/impact-desk.jpg", // background image
}) {
  return (
    <section className="w-full bg-[#fdfaf4] px-6 py-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#fff8ec] px-6 py-10 shadow-sm sm:px-10">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-evenly md:gap-16">
          {/* left: compact image collage */}
          <div className="relative mx-auto h-47.5 w-full max-w-65 shrink-0 md:mx-0">
            {/* back image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              whileHover={{ rotate: 0, scale: 1.06, zIndex: 20 }}
              className="absolute right-0 top-2 h-28 w-36 overflow-hidden rounded-xl bg-slate-200 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
              <img
                src={impactimage2}
                alt="Workspace"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* front/top image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              whileHover={{ rotate: 0, scale: 1.06, zIndex: 20 }}
              className="absolute left-0 top-0 h-24 w-32 overflow-hidden rounded-xl bg-slate-200 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
            >
              <img
                src={impactimage1}
                alt="Laptop working"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* bottom-left circular target image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              whileHover={{ rotate: 0, scale: 1.06, zIndex: 20 }}
              className="absolute bottom-0 left-6 h-24 w-24 overflow-hidden rounded-xl bg-slate-200 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
            >
              <img
                src={impactimage3}
                alt="Target"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* floating badge card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
              className="absolute bottom-0 right-0 z-10 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="flex items-center gap-2"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-500">
                  <Target size={14} strokeWidth={2} />
                </div>
                <span className="text-[11px] font-semibold leading-tight text-slate-800">
                  Impact
                  <br />
                  That Speaks
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* right: content */}
          <div className="flex flex-col items-start gap-1 md:flex-row md:items-center md:justify-between md:gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="block font-serif text-4xl leading-none text-amber-400"
              >
                &ldquo;
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-1 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl"
              >
                We Don&apos;t Just Create
                <br />
                We <span className="text-amber-500">Create Impact</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-3 max-w-md text-sm leading-relaxed text-slate-500"
              >
                Our work helps brands grow, engage, and lead in their
                industries. Your success is the best measure of our performance.
              </motion.p>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover="hover"
              whileTap={{ scale: 0.96 }}
              className="group mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors duration-300 hover:bg-amber-500 md:mt-0"
            >
              Let&apos;s Create Impact
              <motion.span
                variants={{ hover: { x: 4 } }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex"
              >
                <ArrowRight size={16} strokeWidth={2.5} />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
