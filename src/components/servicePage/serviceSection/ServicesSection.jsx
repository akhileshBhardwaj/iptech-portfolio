import React from "react";
import { motion } from "framer-motion";
import { servicesData } from "./servicesData";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <div className="w-full bg-transparent px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* ---------- HEADER ---------- */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-semibold tracking-wide bg-amber-100 px-4 py-2 rounded-full text-amber-400"
          >
            WHAT WE OFFER
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl"
          >
            Our <span className="text-amber-400">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base"
          >
            From strategy to execution, we provide end-to-end digital solutions
            tailored to your business goals.
          </motion.p>
        </div>

        {/* ---------- CARDS GRID ---------- */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
