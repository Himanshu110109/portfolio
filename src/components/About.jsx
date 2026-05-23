import { motion } from "framer-motion";
import {
  FaBrain,
  FaRobot,
  FaCode,
  FaBolt,
  FaWandMagicSparkles,
} from "react-icons/fa6";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden px-4 sm:px-6 py-20 md:py-28"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-[180px] rounded-full" />

        <div className="absolute bottom-[-150px] right-[-100px] w-[450px] h-[450px] bg-cyan-500/10 blur-[140px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >

          <p className="text-xs uppercase tracking-[0.35em] text-purple-400/60 mb-4">
            ABOUT
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl leading-[0.95] font-black">
            <span
              className="gradient-text block"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.04em",
              }}
            >
              BUILDING
            </span>

            <span
              className="text-white block"
              style={{
                fontFamily: "'Clash Display', sans-serif",
              }}
            >
              DIGITAL
            </span>

            <span
              className="text-gray-500 block"
              style={{
                fontFamily: "'Clash Display', sans-serif",
              }}
            >
              EXPERIENCES
            </span>
          </h2>
        </motion.div>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="max-w-xl">

              <p className="text-gray-300 text-lg leading-relaxed">
                I build immersive digital products powered by
                modern web technologies, AI, and automation.
              </p>

              <p className="text-gray-500 text-base leading-relaxed mt-6">
                My focus is creating experiences that feel fast,
                futuristic, interactive, and actually useful —
                not just visually impressive.
              </p>

              <p className="text-gray-500 text-base leading-relaxed mt-6">
                I enjoy combining engineering, creativity,
                motion design, and intelligent systems
                into products people genuinely enjoy using.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative flex items-center justify-center min-h-[500px]"
          >

            {/* CENTER ENERGY CORE */}
            <motion.div
              animate={{
                scale: [1, 1.06, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="relative w-[190px] h-[190px] rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 shadow-[0_0_120px_rgba(168,85,247,0.45)] flex items-center justify-center"
            >

              {/* Inner Layer */}
              <div className="absolute inset-5 rounded-full bg-black/50 backdrop-blur-3xl border border-white/10" />

              {/* Pulse Ring */}
              <motion.div
                className="absolute w-full h-full rounded-full border border-cyan-400/30"
                animate={{
                  scale: [1, 1.25],
                  opacity: [0.6, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                }}
              />

              {/* Icon */}
              <div className="relative z-10 text-center">
                <FaBrain className="text-white text-4xl mx-auto" />
              </div>
            </motion.div>

            {/* OUTER RINGS */}
            <motion.div
              className="absolute w-[420px] h-[420px] rounded-full border border-purple-500/10"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute w-[320px] h-[320px] rounded-full border border-cyan-500/10 border-dashed"
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 22,
                ease: "linear",
              }}
            />

            {/* FLOATING ELEMENTS */}
            <motion.div
              className="absolute top-[10%] left-[12%]"
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
            >
              <div className="w-20 h-20 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex flex-col items-center justify-center">
                <FaRobot className="text-2xl text-purple-400" />
                <p className="text-[10px] mt-2 text-gray-400">
                  AI
                </p>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-[18%] right-[10%]"
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
            >
              <div className="w-20 h-20 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex flex-col items-center justify-center">
                <FaBolt className="text-2xl text-cyan-400" />
                <p className="text-[10px] mt-2 text-gray-400">
                  SPEED
                </p>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-[15%] left-[18%]"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
            >
              <div className="w-20 h-20 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex flex-col items-center justify-center">
                <FaCode className="text-2xl text-green-400" />
                <p className="text-[10px] mt-2 text-gray-400">
                  SYSTEMS
                </p>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-[10%] right-[14%]"
              animate={{ y: [0, 15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
              }}
            >
              <div className="w-20 h-20 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex flex-col items-center justify-center">
                <FaWandMagicSparkles className="text-2xl text-pink-400" />
                <p className="text-[10px] mt-2 text-gray-400">
                  CREATIVE
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
