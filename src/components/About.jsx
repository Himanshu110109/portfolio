import { motion } from "framer-motion";
import {
  FaBrain,
  FaRobot,
  FaCode,
  FaBolt,
} from "react-icons/fa6";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 sm:px-6 py-14 md:py-24"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-[180px] rounded-full" />

        <div className="absolute bottom-[-150px] right-[-100px] w-[450px] h-[450px] bg-cyan-500/10 blur-[140px] rounded-full" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[0.95fr_1fr] gap-12 lg:gap-8 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* TAG */}
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400/60 mb-3">
              ABOUT
            </p>

            {/* HEADING */}
            <h2 className="leading-[0.9] font-black">

              <span
                className="gradient-text block text-4xl sm:text-5xl md:text-7xl"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                BUILDING
              </span>

              <span
                className="text-white block text-4xl sm:text-5xl md:text-7xl"
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                }}
              >
                DIGITAL
              </span>

              <span
                className="text-gray-500 block text-4xl sm:text-5xl md:text-7xl"
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                }}
              >
                EXPERIENCES
              </span>
            </h2>

            {/* PARAGRAPHS */}
            <div className="mt-6 max-w-xl">

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                I build immersive digital products powered by
                modern web technologies, AI, and automation.
              </p>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4">
                My focus is creating experiences that feel fast,
                futuristic, interactive, and actually useful —
                not just visually impressive.
              </p>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-4">
                I enjoy combining engineering, creativity,
                motion design, and intelligent systems
                into products people genuinely enjoy using.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center h-[320px] sm:h-[420px] md:h-[520px]"
          >

            {/* CENTER CORE */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="relative w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[190px] md:h-[190px] rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 shadow-[0_0_120px_rgba(168,85,247,0.4)] flex items-center justify-center"
            >

              {/* INNER */}
              <div className="absolute inset-4 sm:inset-5 rounded-full bg-black/50 backdrop-blur-3xl border border-white/10" />

              {/* PULSE */}
              <motion.div
                className="absolute w-full h-full rounded-full border border-cyan-400/20"
                animate={{
                  scale: [1, 1.2],
                  opacity: [0.6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                }}
              />

              <div className="relative z-10">
                <FaBrain className="text-white text-3xl sm:text-4xl" />
              </div>
            </motion.div>

            {/* OUTER RINGS */}
            <motion.div
              className="absolute w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-purple-500/10"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] rounded-full border border-cyan-500/10 border-dashed"
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 22,
                ease: "linear",
              }}
            />

            {/* FLOATING ITEMS */}

            {/* AI */}
            <motion.div
              className="absolute top-[10%] left-[8%] sm:left-[12%]"
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
            >
              <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex flex-col items-center justify-center">
                <FaRobot className="text-lg sm:text-xl md:text-2xl text-purple-400" />
                <p className="text-[9px] sm:text-[10px] mt-1 sm:mt-2 text-gray-400">
                  AI
                </p>
              </div>
            </motion.div>

            {/* SPEED */}
            <motion.div
              className="absolute top-[15%] right-[8%] sm:right-[10%]"
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
            >
              <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex flex-col items-center justify-center">
                <FaBolt className="text-lg sm:text-xl md:text-2xl text-cyan-400" />
                <p className="text-[9px] sm:text-[10px] mt-1 sm:mt-2 text-gray-400">
                  SPEED
                </p>
              </div>
            </motion.div>

            {/* SYSTEMS */}
            <motion.div
              className="absolute bottom-[12%] left-[15%]"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
            >
              <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex flex-col items-center justify-center">
                <FaCode className="text-lg sm:text-xl md:text-2xl text-green-400" />
                <p className="text-[9px] sm:text-[10px] mt-1 sm:mt-2 text-gray-400">
                  SYSTEMS
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
