import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden px-6 md:px-12 flex items-center">

      {/* Background Blobs */}
      <motion.div
        className="blob w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-600 top-10 left-0"
        animate={{ x: [0, 40, 0], y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <motion.div
        className="blob w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-blue-600 bottom-0 right-0"
        animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 14 }}
      />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Main Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">

          {/* Badge */}
          <motion.div
            className="inline-flex mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-4 py-1.5 text-xs rounded-full bg-white/10 border border-white/20 text-purple-300 tracking-wider">
              HIMANSHU {">"} AI ENGINEER
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight text-center md:text-left"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span
              className="gradient-text block"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.04em",
              }}
            >
              AI SYSTEMS
            </span>

            <span
              className="text-white block"
              style={{
                fontFamily: "'Clash Display', sans-serif",
              }}
            >
              BUILT FOR
            </span>

            <span
              className="text-gray-400 block"
              style={{
                fontFamily: "'Clash Display', sans-serif",
              }}
            >
              AUTOMATION
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-8 text-gray-400 text-lg max-w-xl leading-relaxed text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I build intelligent AI workflows, chatbots, agents,
            and LLM-powered systems that reduce manual work
            and scale businesses automatically.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 transition duration-300"
            >
              View Projects
            </button>

            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3 rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 transition"
            >
              Hire Me
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          className="relative hidden md:flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >

          {/* Futuristic Orb Container */}
          <div className="relative w-[520px] h-[520px] flex items-center justify-center">

            {/* Outer Glow */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-purple-500/20 blur-[120px]" />

            {/* Rotating Ring 1 */}
            <motion.div
              className="absolute w-[420px] h-[420px] rounded-full border border-purple-500/20"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            />

            {/* Rotating Ring 2 */}
            <motion.div
              className="absolute w-[320px] h-[320px] rounded-full border border-blue-400/20 border-dashed"
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 16,
                ease: "linear",
              }}
            />

            {/* Floating Orb */}
            <motion.div
              className="relative w-[180px] h-[180px] rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 shadow-[0_0_120px_rgba(168,85,247,0.6)]"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
            >

              {/* Inner Glow */}
              <div className="absolute inset-6 rounded-full bg-black/40 backdrop-blur-3xl border border-white/10" />

              {/* Center Dot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-white shadow-[0_0_30px_white]" />
              </div>
            </motion.div>

            {/* Floating Labels */}
            <motion.div
              className="absolute top-16 left-8 glass px-4 py-2 rounded-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <p className="text-xs text-gray-400">Neural AI</p>
              <h3 className="font-semibold">Connected</h3>
            </motion.div>

            <motion.div
              className="absolute bottom-20 right-6 glass px-4 py-2 rounded-2xl"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              <p className="text-xs text-gray-400">Automation</p>
              <h3 className="font-semibold">Running</h3>
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-0 glass px-4 py-2 rounded-2xl"
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <p className="text-xs text-gray-400">LLM Status</p>
              <h3 className="font-semibold text-green-400">Online</h3>
            </motion.div>

            {/* Tiny Floating Dots */}
            <motion.div
              className="absolute top-24 right-24 w-3 h-3 rounded-full bg-cyan-400"
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
            />

            <motion.div
              className="absolute bottom-28 left-20 w-2 h-2 rounded-full bg-purple-400"
              animate={{
                y: [0, 15, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
}
