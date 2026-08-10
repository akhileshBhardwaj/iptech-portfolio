import React from "react";
import { motion, useInView, animate } from "framer-motion";
import { Users, Briefcase, Smile, Star, Trophy } from "lucide-react";

const stats = [
  { icon: Users, value: "10+", label: "Years of Experience" },
  { icon: Briefcase, value: "500+", label: "Projects Completed" },
  { icon: Smile, value: "200+", label: "Happy Clients" },
  { icon: Star, value: "50+", label: "Team Members" },
  { icon: Trophy, value: "99%", label: "Client Satisfaction" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

// Animates "10+" / "99%" etc. by counting up the numeric part
// and re-appending whatever prefix/suffix (%, +) was around it.
function AnimatedValue({ value, className }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const match = value.match(/(\d+)/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = value.replace(/\d+/, "");

  React.useEffect(() => {
    if (!isInView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate(v) {
        node.textContent = Math.round(v) + suffix;
      },
    });
    return () => controls.stop();
  }, [isInView, target, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[#fdfaf5] px-5 sm:px-8 md:px-12 lg:px-[8vw] pb-10 sm:pb-14">
      <div className="max-w-6xl mx-auto bg-[#fdf1de] rounded-3xl px-6 sm:px-10 md:px-12 py-8 sm:py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 gap-x-4 text-center">
        {stats.map((stat, i) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex flex-col items-center gap-2 cursor-default"
            >
              {/* Lucide Icon */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-[0_8px_18px_rgba(245,166,35,0.35)]"
              >
                <Icon size={24} strokeWidth={1.8} className="text-[#f5a623]" />
              </motion.div>

              {/* Value */}
              <AnimatedValue
                value={stat.value}
                className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#f5a623]"
              />

              {/* Label */}
              <span className="text-xs sm:text-sm text-[#6b6b6b] font-medium">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
