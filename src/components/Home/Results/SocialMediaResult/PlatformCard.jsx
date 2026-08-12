import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const lineSpark =
  "M2 34 C10 30, 16 26, 24 24 C32 22, 38 26, 46 20 C54 14, 60 6, 70 3";
const barHeights = [6, 10, 15, 20, 26, 32];

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const PlatformCard = ({ platform }) => {
  const {
    name,
    label,
    value,
    growth,
    chartType,
    lineColor,
    barColor,
    iconBg,
    icon,
  } = platform;

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -6, boxShadow: "0 20px 30px -10px rgba(18,32,58,0.15)" }}
      className="bg-gray-200 rounded-2xl p-5 shadow-sm transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: iconBg }}
          >
            {icon}
          </div>
          <p className="font-semibold text-[#12203A] text-[15px]">{name}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#FDECEC] flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-[#F43F5E]" />
        </div>
      </div>

      <p className="text-slate-400 text-sm mb-1">{label}</p>
      <p className="text-3xl font-extrabold text-[#12203A] mb-3">{value}</p>

      <div className="flex items-end justify-between">
        <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-xs font-semibold px-2 py-1 rounded-md">
          &uarr; {growth}
          <span className="text-emerald-500 font-normal">vs last 3 months</span>
        </span>

        {chartType === "line" ? (
          <svg width="72" height="36" viewBox="0 0 72 36" fill="none">
            <motion.path
              d={lineSpark}
              stroke={lineColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            />
          </svg>
        ) : (
          <div className="flex items-end gap-1 h-9">
            {barHeights.map((h, i) => (
              <motion.div
                key={i}
                className="w-2 rounded-sm"
                style={{ background: barColor }}
                initial={{ height: 0 }}
                whileInView={{ height: h }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PlatformCard;
