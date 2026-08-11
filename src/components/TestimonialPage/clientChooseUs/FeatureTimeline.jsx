import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, ShieldCheck, HeartHandshake } from "lucide-react";
import featuresData from "./featuresData";

const iconMap = {
  target: Target,
  trending: TrendingUp,
  shield: ShieldCheck,
  heart: HeartHandshake,
};

const easeOut = [0.16, 1, 0.3, 1];

/**
 * FeatureTimeline
 * Vertical list of 4 differentiators, connected by a dashed line that
 * "draws" itself in as the section scrolls into view.
 */
export default function FeatureTimeline() {
  return (
    <div className="relative">
      {/* dashed connector line behind the icon column */}
      <motion.div
        className="absolute left-6 top-6 w-px origin-top border-l-2 border-dashed border-[#141625]/25"
        style={{ height: "calc(100% - 3rem)" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
      />

      <ul className="space-y-8">
        {featuresData.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.li
              key={item.id}
              className="relative flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: 0.15 + i * 0.15,
                ease: easeOut,
              }}
            >
              <motion.div
                className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#141625]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.4,
                  delay: 0.25 + i * 0.15,
                  ease: easeOut,
                }}
              >
                <Icon className="h-5 w-5 text-amber-400" strokeWidth={2} />
              </motion.div>

              <div className="pt-1.5">
                <h3 className="text-base font-bold text-[#141625] sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
