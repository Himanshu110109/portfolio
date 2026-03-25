import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";

export default function Marquee() {
  const text = "Creative Minds";

  return (
    <div className="relative overflow-hidden py-2 md:py-3 border-y border-white/10">

      <div className="absolute left-0 top-0 h-full w-10 md:w-20 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-10 md:w-20 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap text-sm sm:text-base md:text-lg font-medium text-gray-300"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
      >
        <div className="flex gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="flex items-center gap-1 sm:gap-2">
              <FaBolt className="text-purple-400 text-xs sm:text-sm md:text-base" />
              {text}
            </span>
          ))}
        </div>

        <div className="flex gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="flex items-center gap-1 sm:gap-2">
              <FaBolt className="text-purple-400 text-xs sm:text-sm md:text-base" />
              {text}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}