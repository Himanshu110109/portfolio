import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaArrowRight,
  FaBrain,
  FaCode,
  FaWandMagicSparkles,
} from "react-icons/fa6";

export default function About() {

  const { scrollYProgress } = useScroll();

  // smoother + smaller movement
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.4],
    ["0%", "-12%"]
  );

  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 sm:px-6 py-16 md:py-24"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-[180px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400/60">
            ABOUT
          </p>
        </motion.div>

        {/* SCROLL TITLE */}
        <div className="relative overflow-hidden pb-2">

          <motion.h2
            style={{ x }}
            className="leading-none font-black whitespace-nowrap will-change-transform"
          >
            <span
              className="gradient-text text-[18vw] sm:text-[11vw] md:text-[8vw]"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.04em",
              }}
            >
              CREATIVE
            </span>

            <span
              className="text-white/90 text-[18vw] sm:text-[11vw] md:text-[8vw]"
              style={{
                fontFamily: "'Clash Display', sans-serif",
              }}
            >
              {" "}DEVELOPER
            </span>
          </motion.h2>
        </div>

        {/* CONTENT */}
        <div className="mt-8 md:mt-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
              I create immersive digital experiences that blend
              modern web technologies, AI systems, motion,
              and interactive design into products that feel alive.
            </p>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-6 max-w-xl">
              My work focuses on crafting fast, futuristic,
              and visually memorable interfaces while keeping
              performance and usability at the center.
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-4 mt-8">

              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-4 py-3"
              >
                <FaCode className="text-cyan-400" />

                <p className="text-sm text-gray-300">
                  Modern Interfaces
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-4 py-3"
              >
                <FaBrain className="text-purple-400" />

                <p className="text-sm text-gray-300">
                  AI Experiences
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-4 py-3"
              >
                <FaWandMagicSparkles className="text-pink-400" />

                <p className="text-sm text-gray-300">
                  Creative Systems
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* QUOTE */}
            <div className="relative">

              {/* GIANT QUOTE */}
              <div
                className="absolute -top-8 left-0 text-[100px] sm:text-[140px] text-white/[0.03] leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                ”
              </div>

              <div className="relative z-10 border-l border-purple-500/20 pl-5 sm:pl-7">

                <p className="text-2xl sm:text-3xl md:text-4xl leading-[1.2] font-medium text-white max-w-lg">
                  Building interfaces that feel
                  cinematic, intelligent,
                  and deeply interactive.
                </p>

                <div className="mt-8 flex items-center gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center font-bold">
                    H
                  </div>

                  <div>
                    <p className="text-white text-sm font-medium">
                      Himanshu
                    </p>

                    <p className="text-gray-500 text-xs">
                      AI Engineer & Developer
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <button className="group flex items-center gap-3 mt-8 text-sm text-purple-300 hover:text-white transition">

                  <span>
                    Explore Projects
                  </span>

                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
