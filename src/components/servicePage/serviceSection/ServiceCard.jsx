import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl border border-amber-100/70 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-amber-100/60"
    >
      {/* Icon */}
      <div className="relative mb-5 flex h-14 w-14 items-center justify-center">
        <span className="absolute inset-0 rounded-2xl bg-amber-50 transition-transform duration-300 group-hover:scale-110" />
        <Icon
          className="relative h-6 w-6 text-slate-900 transition-transform duration-300 group-hover:-rotate-6"
          strokeWidth={1.75}
        />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-base font-bold text-slate-900">{title}</h3>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      {/* Learn More */}
      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 transition-colors duration-300 hover:text-amber-500"
      >
        Learn More
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2}
        />
      </a>
    </motion.div>
  );
};

export default ServiceCard;
