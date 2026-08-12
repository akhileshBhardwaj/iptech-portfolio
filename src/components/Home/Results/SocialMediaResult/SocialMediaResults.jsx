import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import PlatformCard from "./PlatformCard";
import PlatformsData from "./PlatformsData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const SocialMediaResults = () => {
  return (
    <div className="w-full  px-6 py-16 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <HeroSection />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14"
        >
          {PlatformsData.map((platform) => (
            <PlatformCard key={platform.name} platform={platform} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SocialMediaResults;
