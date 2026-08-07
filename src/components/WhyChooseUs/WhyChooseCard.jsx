import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const WhyChooseCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -10,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.45,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-[30px]
      border
      border-yellow-100
      bg-white/80
      p-8
      backdrop-blur-xl
      shadow-lg
      transition-all
      duration-500
      hover:border-yellow-300
      hover:shadow-[0_25px_60px_rgba(251,191,36,.18)]
      "
    >
      {/* Shine */}

      <div
        className="
        absolute
        -left-40
        top-0
        h-full
        w-28
        rotate-12
        bg-linear-to-r
        from-transparent
        via-white/60
        to-transparent
        transition-all
        duration-1000
        group-hover:left-[130%]
      "
      />

      {/* Glow */}

      <div
        className="
        absolute
        -right-20
        -top-20
        h-44
        w-44
        rounded-full
        bg-yellow-300/20
        blur-[100px]
        opacity-0
        transition
        duration-500
        group-hover:opacity-100
      "
      />

      {/* Number */}

      <span
        className="
        absolute
        right-7
        top-5
        text-6xl
        font-black
        text-yellow-100
      "
      >
        01
      </span>

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.08,
        }}
        className="
        flex
        h-20
        w-20
        items-center
        justify-center
        rounded-3xl
        bg-linear-to-br
        from-yellow-100
        to-yellow-200
        shadow-md
      "
      >
        <Icon size={38} className="text-yellow-600" />
      </motion.div>

      {/* Title */}

      <h3 className="mt-8 text-lg font-semibold md:text-xl md:font-bold leading-tight text-gray-900">
        {title}
      </h3>

      {/* Line */}

      <div className="mt-5 h-1 w-16 rounded-full bg-yellow-400 transition-all duration-500 group-hover:w-28" />

      {/* Description */}

      <p className="mt-6 leading-8 text-gray-500">{description}</p>

      {/* Footer */}

      <div className="mt-10 flex items-center justify-between">
        <span className="text-sm font-bold uppercase tracking-wider text-yellow-500">
          Learn More
        </span>

        <motion.div
          whileHover={{
            rotate: 45,
          }}
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-yellow-100
          transition
          duration-300
          group-hover:bg-yellow-400
        "
        >
          <ArrowUpRight
            className="text-yellow-600 group-hover:text-black"
            size={20}
          />
        </motion.div>
      </div>

      {/* Bottom Border */}

      <div
        className="
        absolute
        bottom-0
        left-0
        h-1
        w-0
        bg-linear-to-r
        from-yellow-300
        via-yellow-500
        to-yellow-300
        transition-all
        duration-500
        group-hover:w-full
      "
      />
    </motion.div>
  );
};

export default WhyChooseCard;
