import React from "react";
import { motion } from "framer-motion";

const ProcessStep = ({ number, icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative z-10 flex flex-1 flex-col items-center px-2 text-center"
    >
      {/* Icon circle */}
      <div className="mb-3 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#F7C567] bg-[#FEF3D6] shadow-[0_10px_25px_-12px_rgba(245,166,35,0.5)]">
        <Icon className="h-6 w-6 text-[#F5A623]" strokeWidth={1.75} />
      </div>

      {/* Number */}
      <span className="mb-1 text-xs font-bold tracking-wider text-[#F5A623]">
        {number}
      </span>

      {/* Title */}
      <h3 className="mb-1.5 text-base font-bold text-[#101B33]">{title}</h3>

      {/* Description */}
      <p className="max-w-45 text-xs leading-relaxed text-[#6B7280]">
        {description}
      </p>
    </motion.div>
  );
};

export default ProcessStep;