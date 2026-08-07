import { Play, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const VideoCard = ({ title, category, video }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="
        group
        overflow-hidden
        rounded-[28px]
        border
        border-yellow-200
        bg-white
        shadow-lg
        transition-all
        duration-500
        hover:border-yellow-400
        hover:shadow-2xl
      "
    >
      {/* Video */}

      <div className="relative overflow-hidden">
        <video
          src={video}
          muted
          autoPlay
          loop
          playsInline
          className="
            h-72
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        {/* Category */}

        <span className="absolute left-5 top-5 rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-lg">
          {category}
        </span>

        {/* Duration */}

        <span className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur">
          02:45
        </span>

        {/* Play Button */}

        <motion.div
          whileHover={{ scale: 1.15 }}
          className="
            absolute
            left-1/2
            top-1/2
            flex
            h-20
            w-20
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white/90
            backdrop-blur-md
            shadow-2xl
            transition
            duration-300
          "
        >
          <Play size={34} className="ml-1 fill-yellow-500 text-yellow-500" />
        </motion.div>

        {/* Bottom Info */}

        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h3 className="text-2xl font-bold">{title}</h3>

          <p className="mt-2 text-sm text-gray-200">
            Watch our latest creative work and marketing campaign.
          </p>
        </div>
      </div>

      {/* Footer */}

      <div className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm text-gray-500">Creative Portfolio</p>

          <h4 className="font-semibold text-gray-900">View Case Study</h4>
        </div>

        <button
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-yellow-400
            text-black
            transition
            duration-300
            hover:rotate-45
            hover:scale-110
          "
        >
          <ArrowUpRight size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default VideoCard;
