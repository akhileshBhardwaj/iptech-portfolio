import { motion } from "framer-motion";
import {
  Users,
  BriefcaseBusiness,
  TrendingUp,
  Star,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    title: "Happy Clients",
  },
  {
    icon: BriefcaseBusiness,
    value: "1200+",
    title: "Projects Delivered",
  },
  {
    icon: TrendingUp,
    value: "+320%",
    title: "ROI Growth",
  },
  {
    icon: Star,
    value: "98%",
    title: "Client Satisfaction",
  },
  {
    icon: Clock3,
    value: "24/7",
    title: "Support",
  },
];

const StatsStrip = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-yellow-200
        bg-linear-to-r
        from-[#111827]
        via-[#1F2937]
        to-[#111827]
        p-4
        shadow-[0_25px_80px_rgba(0,0,0,.18)]
      "
    >
      {/* Glow */}

      <div className="absolute -left-24 top-0 h-52 w-52 rounded-full bg-yellow-400/10 blur-[100px]" />

      <div className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-yellow-300/10 blur-[120px] " />

      <div className="relative grid grid-cols-1 gap-5 md:grid-cols-3 p-10 xl:grid-cols-5">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                group
                rounded-3xl
                border
                border-yellow-400
                bg-white/5
                p-5
                text-center
                backdrop-blur-md
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-yellow-400
                  transition
                  duration-300
                  group-hover:rotate-6
                  group-hover:scale-110
                "
              >
                <Icon size={30} className="text-black" />
              </div>

              <h2 className="mt-5 text-xl font-semibold md:text-2xl  lg:text-2xl lg:font-bold text-white">
                {item.value}
              </h2>

              <p className="mt-2 text-sm text-gray-300">{item.title}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default StatsStrip;
