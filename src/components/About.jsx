import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaRobot,
  FaBrain,
  FaCode,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";

const skills = [
  {
    icon: <FaReact />,
    name: "React",
    color: "text-cyan-400",
    x: "-32%",
    y: "-30%",
  },
  {
    icon: <FaNodeJs />,
    name: "Node",
    color: "text-green-400",
    x: "35%",
    y: "-25%",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
    color: "text-green-500",
    x: "-40%",
    y: "25%",
  },
  {
    icon: <SiExpress />,
    name: "Express",
    color: "text-gray-300",
    x: "38%",
    y: "28%",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
    color: "text-cyan-300",
    x: "0%",
    y: "-48%",
  },
  {
    icon: <SiOpenai />,
    name: "OpenAI",
    color: "text-purple-300",
    x: "0%",
    y: "48%",
  },
];

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
              AI EXPERIENCES
            </span>

            <span
              className="text-gray-500 block"
              style={{
                fontFamily: "'Clash Display', sans-serif",
              }}
            >
              THAT FEEL ALIVE
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

            {/* Main Description */}
            <div className="max-w-xl">

              <p className="text-gray-300 text-lg leading-relaxed">
                I’m a developer focused on creating intelligent digital
                systems using modern web technologies and AI.
              </p>

              <p className="text-gray-500 text-base leading-relaxed mt-6">
                From LLM-powered applications to automation workflows
                and immersive frontend experiences, I enjoy building
                products that combine engineering with creativity.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400">
                    <FaBrain />
                  </div>

                  <div>
                    <p className="text-white text-sm font-medium">
                      AI Systems
                    </p>

                    <p className="text-gray-500 text-xs">
                      LLM Apps & Agents
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-purple-400">
                    <FaRobot />
                  </div>

                  <div>
                    <p className="text-white text-sm font-medium">
                      Automation
                    </p>

                    <p className="text-gray-500 text-xs">
                      Smart Workflows
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative flex items-center justify-center min-h-[500px]"
          >

            {/* CENTER CORE */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="relative w-[180px] h-[180px] rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 shadow-[0_0_120px_rgba(168,85,247,0.5)] flex items-center justify-center"
            >

              {/* Inner Core */}
              <div className="absolute inset-5 rounded-full bg-black/40 backdrop-blur-3xl border border-white/10" />

              <div className="relative z-10 text-center">
                <FaCode className="text-white text-3xl mx-auto mb-3" />

                <p className="text-sm text-gray-300 tracking-[0.2em]">
                  TECH STACK
                </p>
              </div>
            </motion.div>

            {/* Orbit Rings */}
            <motion.div
              className="absolute w-[380px] h-[380px] rounded-full border border-purple-500/10"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute w-[280px] h-[280px] rounded-full border border-cyan-500/10 border-dashed"
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 18,
                ease: "linear",
              }}
            />

            {/* FLOATING SKILLS */}
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  left: `calc(50% + ${skill.x})`,
                  top: `calc(50% + ${skill.y})`,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4 + index,
                }}
              >

                <div className="group relative">

                  {/* Glow */}
                  <div className="absolute inset-0 blur-2xl opacity-30 bg-white rounded-full" />

                  {/* Orb */}
                  <div className="relative w-20 h-20 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex flex-col items-center justify-center">

                    <div className={`text-2xl ${skill.color}`}>
                      {skill.icon}
                    </div>

                    <p className="text-[10px] mt-2 text-gray-400">
                      {skill.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
