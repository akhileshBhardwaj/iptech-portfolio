import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const FloatingBadge = () => {
  return (
    <>
      {/* ROI Card */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-10
          top-16
          z-20
          rounded-3xl
          bg-white
          p-5
          shadow-2xl
        "
      >
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-yellow-100 p-4">
            <TrendingUp className="text-yellow-500" size={28} />
          </div>

          <div>
            <p className="text-sm text-gray-500">ROI Growth</p>

            <h2 className="text-2xl font-bold text-gray-900">+320%</h2>
          </div>
        </div>
      </motion.div>

      {/* Success Badge */}

      <motion.div
        animate={{
          y: [0, 12, 0],
          rotate: [0, 4, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-6
          bottom-10
          z-20
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-yellow-400
          shadow-2xl
        "
      >
        <TrendingUp size={36} className="text-black" />
      </motion.div>
    </>
  );
};

export default FloatingBadge;
