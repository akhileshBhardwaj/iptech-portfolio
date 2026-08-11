import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

/**
 * TestimonialCard
 * Renders one testimonial. `isActive` drives the "raised white card in the
 * center" treatment; inactive cards sit smaller, dimmer, on the dark panel.
 *
 * Props:
 *  - testimonial: { quote, name, role, avatar, rating }
 *  - isActive: boolean
 */
export default function TestimonialCard({ testimonial, isActive }) {
  const { quote, name, role, avatar, rating } = testimonial;

  return (
    <motion.div
      animate={{
        scale: isActive ? 1 : 0.92,
        opacity: isActive ? 1 : 0.55,
        y: isActive ? 0 : 8,
      }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={[
        "flex h-full flex-col rounded-xl p-4 sm:rounded-2xl sm:p-6 md:p-7",
        isActive
          ? "bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)]"
          : "bg-[#1B2140] shadow-none",
      ].join(" ")}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Quote
          className={[
            "mb-2 h-6 w-6 sm:mb-3 sm:h-7 sm:w-7 md:h-8 md:w-8",
            "fill-amber-400 text-amber-400",
          ].join(" ")}
        />
      </motion.div>

      <p
        className={[
          "flex-1 leading-relaxed",
          isActive
            ? "text-sm font-medium text-[#141625] sm:text-base md:text-lg"
            : "text-xs text-slate-300 sm:text-sm",
        ].join(" ")}
      >
        {quote}
      </p>

      <div
        className={[
          "mt-3 mb-3 h-0.5 w-8 rounded-full sm:mt-5 sm:mb-4 sm:w-10",
          isActive ? "bg-amber-400" : "bg-amber-400/50",
        ].join(" ")}
      />

      <div className="flex items-center gap-2.5 sm:gap-3">
        <img
          src={avatar}
          alt={name}
          className="h-9 w-9 rounded-full object-cover ring-2 ring-amber-400/40 sm:h-11 sm:w-11"
        />
        <div>
          <p
            className={[
              "text-sm font-bold",
              isActive ? "text-[#141625]" : "text-white",
            ].join(" ")}
          >
            {name}
          </p>
          <p
            className={[
              "text-xs",
              isActive ? "text-slate-500" : "text-slate-400",
            ].join(" ")}
          >
            {role}
          </p>
          <div className="mt-1 flex gap-0.5">
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
