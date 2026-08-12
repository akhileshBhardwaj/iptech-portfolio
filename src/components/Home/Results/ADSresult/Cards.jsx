import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const listStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export const ServiceCard = ({ title, logo, description, items, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    whileHover={{ y: -4 }}
    className="bg-white/70 border border-black/5 rounded-2xl p-6 flex-1"
  >
    <div className="flex items-center gap-3 mb-4">
      {logo}
      <h3 className="text-xl font-bold text-[#1C1C1C]">{title}</h3>
    </div>
    <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>

    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={listStagger}
      className="border-t border-dashed border-black/10 pt-4 space-y-3 mb-5"
    >
      {items.map((item) => (
        <motion.li
          key={item}
          variants={listItem}
          className="flex items-center gap-2 text-[15px] text-[#2A2A2A]"
        >
          <CheckCircle2
            className="w-4.5 h-4.5 text-[#C1440E] fill-[#FBE3D3]"
            strokeWidth={2}
          />
          {item}
        </motion.li>
      ))}
    </motion.ul>

    <a
      href="#"
      className="inline-flex items-center gap-1 text-[#C1440E] font-semibold text-sm hover:gap-2 transition-all"
    >
      Learn more <ArrowRight className="w-4 h-4" />
    </a>
  </motion.div>
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const StatCard = ({ icon, bg, value, label }) => (
  <motion.div variants={fadeUp} className="flex items-center gap-3">
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
      style={{ background: bg }}
    >
      {icon}
    </div>
    <div>
      <p className="text-2xl font-serif font-bold text-[#1C1C1C] leading-none">
        {value}
      </p>
      <p className="text-slate-500 text-sm mt-1">{label}</p>
    </div>
  </motion.div>
);

const Cards = { ServiceCard, StatCard };

export default Cards;
