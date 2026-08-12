import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, ThumbsUp, Heart } from "lucide-react";
import phoneImg from '../../../../assets/images/home/socialmediaResult-phoneIconMain-Photoroom.png'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left column - heading & copy */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 bg-[#FCE7C8] text-[#F5A623] font-semibold text-sm px-4 py-2 rounded-full mb-6"
        >
          <TrendingUp className="w-4 h-4" />
          SOCIAL MEDIA RESULTS
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#12203A]"
        >
          Social Strategies.
          <br />
          <span className="text-[#F5A623]">Real Results.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-slate-500 text-lg max-w-md leading-relaxed"
        >
          We create engaging content and data-driven social media strategies
          that build brand awareness, boost engagement, and drive real business
          growth.
        </motion.p>
      </motion.div>

      {/* Right column - phone mockup */}
      <div className="relative flex justify-center lg:justify-end items-center min-h-105">
        {/* dashed orbit */}
        <motion.div
          className="absolute w-95 h-95 rounded-full border border-dashed border-[#F5A623]/40"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        />

        {/* stat card - total engagement */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute -top-2 left-0 sm:left-6 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3 z-20"
        >
          <div className="w-10 h-10 rounded-full bg-[#FCE7C8] flex items-center justify-center text-[#F5A623]">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <p className="text-lg font-bold text-[#12203A] leading-none">
              10K+
            </p>
            <p className="text-xs text-slate-400 mt-1">Total Engagement</p>
          </div>
        </motion.div>

        {/* stat card - engagement growth */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-32 left-0 sm:-left-4 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3 z-20"
        >
          <svg viewBox="0 0 36 36" className="w-10 h-10">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#F5E3D3"
              strokeWidth="4"
            />
            <motion.circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#F5A623"
              strokeWidth="4"
              strokeDasharray="100.5"
              strokeDashoffset="100.5"
              strokeLinecap="round"
              transform="rotate(-90 18 18)"
              whileInView={{ strokeDashoffset: 25 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            />
          </svg>
          <div>
            <p className="text-lg font-bold text-[#12203A] leading-none">75%</p>
            <p className="text-xs text-slate-400 mt-1">Engagement Growth</p>
          </div>
        </motion.div>

        {/* phone mockup - replace src with your own image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <img
            src={phoneImg}
            alt="Social media post preview on phone"
            className="w-60 sm:w-67.5 drop-shadow-2xl select-none"
            draggable="false"
          />
        </motion.div>

        {/* floating icon - trending up */}
        <motion.div
          className="absolute top-6 right-0 sm:right-4 w-11 h-11 rounded-full bg-[#F5A623] flex items-center justify-center shadow-lg z-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <TrendingUp className="w-5 h-5 text-white" />
        </motion.div>

        {/* floating icon - heart */}
        <motion.div
          className="absolute top-40 -left-2 sm:left-2 w-10 h-10 rounded-full bg-[#F43F5E] flex items-center justify-center shadow-lg z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2.6,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          <Heart className="w-4 h-4 text-white" fill="white" />
        </motion.div>

        {/* floating icon - thumbs up */}
        <motion.div
          className="absolute bottom-10 right-0 sm:right-6 w-11 h-11 rounded-full bg-[#3B82F6] flex items-center justify-center shadow-lg z-20"
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3.2,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          <ThumbsUp className="w-5 h-5 text-white" fill="white" />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
