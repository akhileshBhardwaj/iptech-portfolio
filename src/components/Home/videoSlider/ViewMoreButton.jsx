// ViewMoreButton.jsx
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ViewMoreButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate("/video")}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        group
        relative
        flex
        items-center
        gap-3
        overflow-hidden
        rounded-full
        border
        border-yellow-400
        bg-yellow-400
        px-10
        py-4
        text-lg
        font-bold
        text-black
        shadow-xl
        transition-all
        duration-500
        hover:text-white
      "
    >
      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-black
          transition-transform
          duration-500
          group-hover:translate-x-0
        "
      />

      <span className="relative flex items-center gap-3">
        View More Videos
        <ArrowRight
          size={22}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-2
          "
        />
      </span>
    </motion.button>
  );
};

export default ViewMoreButton;
