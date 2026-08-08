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
      <div className="mb-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-amber-200 bg-amber-50">
        <Icon className="h-6 w-6 text-amber-500" strokeWidth={1.75} />
      </div>

      {/* Number */}
      <span className="mb-1 text-xs font-bold tracking-wider text-amber-400">
        {number}
      </span>

      {/* Title */}
      <h3 className="mb-1.5 text-base font-bold text-slate-900">{title}</h3>

      {/* Description */}
      <p className="max-w-[180px] text-xs leading-relaxed text-slate-500">
        {description}
      </p>
    </motion.div>
  );
};

export default ProcessStep;
