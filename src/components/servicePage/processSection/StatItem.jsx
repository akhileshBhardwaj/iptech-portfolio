import React from "react";
import { motion } from "framer-motion";

const StatItem = ({ icon: Icon, value, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center gap-2 rounded-2xl bg-white px-4 py-7 text-center shadow-[0_10px_30px_-15px_rgba(16,27,51,0.15)] ring-1 ring-[#F3EADB]"
    >
      <div className="mb-1 flex h-11 w-11 items-center justify-center rounded-full bg-[#FEF3D6]">
        <Icon className="h-5 w-5 text-[#F5A623]" strokeWidth={1.75} />
      </div>
      <p className="text-2xl font-extrabold text-[#101B33]">{value}</p>
      <p className="text-xs text-[#6B7280]">{label}</p>
      <span className="mt-1 h-0.75 w-5 rounded-full bg-[#F5A623]" />
    </motion.div>
  );
};

export default StatItem;
