import { motion } from "framer-motion";
import {
  FaBrain,
  FaBolt,
  FaCode,
  FaArrowRight,
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

        {/* TOP */}
        <div className="grid lg:grid-cols-[0.9fr_1fr] gap-12 lg:gap-20 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* TAG */}
            <p className="text-xs uppercase tracking-[0.3em] text-purple-400/60 mb-3">
              ABOUT
            </p>

            {/* TITLE */}
            <h2 className="leading-[0.95] font-black">

              <span
                className="gradient-text block text-3xl sm:text-4xl md:text-5xl"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.04em",
                }}
              >
                DIGITAL
              </span>

              <span
                className="text-white block text-3xl sm:text-4xl md:text-5xl"
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                }}
              >
                EXPERIENCES
              </span>

              <span
                className="text-gray-500 block text-3xl sm:text-4xl md:text-5xl"
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                }}
              >
                WITH AI
              </span>
            </h2>

            {/* DESCRIPTION */}
            <div className="mt-5 max-w-xl">

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

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* TIMELINE */}
            <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8">

              {/* ITEM */}
              <motion.div
                whileHover={{ x: 6 }}
                className="relative"
              >

                {/* DOT */}
                <div className="absolute -left-[34px] sm:-left-[42px] top-1 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.7)]" />

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FaBrain className="text-purple-400 text-lg" />

                    <p className="text-white font-medium">
                      AI Engineering
                    </p>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    Building intelligent AI workflows,
                    LLM-powered products, and automation systems.
                  </p>
                </div>
              </motion.div>

              {/* ITEM */}
              <motion.div
                whileHover={{ x: 6 }}
                className="relative"
              >

                <div className="absolute -left-[34px] sm:-left-[42px] top-1 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]" />

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FaCode className="text-cyan-400 text-lg" />

                    <p className="text-white font-medium">
                      Full Stack Development
                    </p>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    Creating scalable frontend and backend systems
                    with modern architecture and clean UI.
                  </p>
                </div>
              </motion.div>

              {/* ITEM */}
              <motion.div
                whileHover={{ x: 6 }}
                className="relative"
              >

                <div className="absolute -left-[34px] sm:-left-[42px] top-1 w-4 h-4 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.7)]" />

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FaBolt className="text-green-400 text-lg" />

                    <p className="text-white font-medium">
                      Creative Problem Solving
                    </p>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    Combining logic, creativity, and interaction
                    to craft memorable user experiences.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* BOTTOM CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10"
            >

              <button className="group flex items-center gap-3 text-sm text-white hover:text-purple-300 transition">

                <span>
                  Explore my work
                </span>

                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
