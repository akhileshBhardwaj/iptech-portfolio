import React from "react";
import { motion } from "framer-motion";
import { Rocket, TrendingUp, Heart } from "lucide-react";

// Apni image ka path yahan daalo (public folder ya import kar ke)
import heroImage from "../../../assets/images/services/serviceHeroBanner.png";

const features = [
  {
    icon: Rocket,
    title: "Innovative",
    subtitle: "Solutions",
  },
  {
    icon: TrendingUp,
    title: "Result",
    subtitle: "Driven",
  },
  {
    icon: Heart,
    title: "Client",
    subtitle: "Focused",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden  px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* ---------- LEFT CONTENT ---------- */}
        <div className="order-2 lg:order-1">
          {/* Badge */}
          <motion.span
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold tracking-wide text-amber-500"
          >
            OUR SERVICES
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="mt-6 text-xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-[3.2rem]"
          >
            Digital Solutions That
            <br />
            Drive <span className="text-amber-400">Real Results</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-md text-base leading-relaxed text-slate-500"
          >
            We help businesses grow with creative strategies, innovative
            technologies, and measurable results.
          </motion.p>

          {/* Features */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-6 sm:gap-8"
          >
            {features.map((feature, index) => (
              <React.Fragment key={feature.title}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-200">
                    <feature.icon
                      className="h-5 w-5 text-yellow-800"
                      strokeWidth={2}
                    />
                  </div>
                  <p className="text-sm font-medium leading-snug text-slate-800">
                    {feature.title}
                    <br />
                    {feature.subtitle}
                  </p>
                </div>
                {index < features.length - 1 && (
                  <div className="hidden h-8 w-px bg-slate-200 sm:block" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* ---------- RIGHT IMAGE ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="order-1 relative flex justify-center lg:order-2 lg:justify-end"
        >
          {/* Background yellow circle accent */}
          <div className="absolute -right-10 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-amber-400/90 sm:h-80 sm:w-80" />

          {/* Dotted pattern accents */}
          <div className="absolute -left-4 top-8 grid grid-cols-4 gap-2 opacity-60">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            ))}
          </div>
          <div className="absolute -right-4 bottom-10 grid grid-cols-4 gap-2 opacity-60">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            ))}
          </div>

          {/* Main image */}
          <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={heroImage}
              alt="IP Tech - Build Your Brand, Grow Your Business"
              className="h-full w-full object-cover"
            />

            {/* Years of Excellence badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bottom-4 right-4 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl"
            >
              <span className="text-3xl font-extrabold text-amber-400">
                10+
              </span>
              <span className="text-sm font-semibold leading-snug text-slate-900">
                Years of
                <br />
                Excellence
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
