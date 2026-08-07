import { motion } from "framer-motion";

const DashboardStats = ({ icon: Icon, value, title }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-yellow-100
        bg-linear-to-br
        from-white
        to-yellow-50
        p-6
        shadow-md
        transition-all
        duration-500
        hover:border-yellow-300
        hover:shadow-[0_20px_50px_rgba(251,191,36,.18)]
      "
    >
      {/* Glow */}

      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-yellow-300/20 blur-[80px] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 transition duration-300 group-hover:bg-yellow-400">
          <Icon size={28} className="text-yellow-600 group-hover:text-black" />
        </div>

        <div>
          <h3 className="text-xl font-bold lg:text-3xl text-gray-900">{value}</h3>

          <p className="mt-1 font-md lg:font-xl text-gray-500">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardStats;
