import React, { Fragment } from "react";
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
      className="flex flex-col overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm sm:flex-row sm:items-stretch"
    >
      {statsData.map((stat, index) => (
        <Fragment key={stat.label}>
          <StatItem {...stat} index={index} />
          {index < statsData.length - 1 && (
            <div className="h-px w-full bg-amber-100 sm:h-auto sm:w-px" />
          )}
        </Fragment>
      ))}
    </motion.div>
  );
};

export default StatsBar;
