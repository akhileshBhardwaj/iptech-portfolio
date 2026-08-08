import React from "react";
import { motion } from "framer-motion";
import { statsData } from "./statsData";
import StatItem from "./StatItem";

const StatsBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
    >
      {statsData.map((stat, index) => (
        <StatItem key={stat.label} {...stat} index={index} />
      ))}
    </motion.div>
  );
};

export default StatsBar;