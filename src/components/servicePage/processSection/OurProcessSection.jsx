import React from "react";
import { motion } from "framer-motion";
import ProcessSteps from "./ProcessSteps";
import StatsBar from "./StatsBar";

const OurProcessSection = () => {
  return (
    <section className="w-full  px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* ---------- HEADER ---------- */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-[#F6E3B4] px-3.5 py-1.5 text-xs font-bold tracking-wide text-[#A9800F]"
          >
            OUR PROCESS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl font-extrabold leading-tight text-[#101B33] sm:text-4xl"
          >
            Our Simple <span className="text-[#F5A623]">Process</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm leading-relaxed text-[#6B7280] sm:text-base"
          >
            A transparent and efficient process that ensures the best results.
          </motion.p>
        </div>

        {/* ---------- PROCESS STEPS ---------- */}
        <div className="mb-16">
          <ProcessSteps />
        </div>

        {/* ---------- STATS BAR ---------- */}
        <StatsBar />
      </div>
    </section>
  );
};

export default OurProcessSection;
