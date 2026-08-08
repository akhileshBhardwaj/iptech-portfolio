import React from "react";
import { motion } from "framer-motion";

const StatItem = ({ icon: Icon, value, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-1 flex-col items-center gap-2 px-4 py-7 text-center"
    >
      <Icon className="h-6 w-6 text-amber-400" strokeWidth={1.75} />
      <p className="text-2xl font-extrabold text-slate-900">{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </motion.div>
  );
};

export default StatItem;
