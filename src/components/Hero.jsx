import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-4">

      <motion.div
        className="blob w-[220px] h-[220px] md:w-[350px] md:h-[350px] bg-purple-600 top-10 left-5 md:left-10"
        animate={{ x: [0, 30, 0], y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <motion.div
        className="blob w-[220px] h-[220px] md:w-[350px] md:h-[350px] bg-blue-600 bottom-10 right-5 md:right-10"
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 14 }}
      />

      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-500/10 blur-[100px] md:blur-[120px] rounded-full z-0" />

      <div className="hidden md:block">
        <motion.div
          className="absolute top-[20%] left-[10%] text-sm glass px-4 py-2 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          Automations
        </motion.div>

        <motion.div
          className="absolute bottom-[25%] right-[12%] text-sm glass px-4 py-2 rounded-full"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          Agents
        </motion.div>

        <motion.div
          className="absolute top-[35%] right-[20%] text-sm glass px-4 py-2 rounded-full"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          RAG Systems
        </motion.div>
      </div>

        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-4 py-1.5 text-xs rounded-full bg-white/10 border border-white/20 text-purple-300 tracking-wide">
            HIMANSHU {">"} AI ENGINEER
          </div>
        </motion.div>

      <div className="relative z-10 max-w-3xl">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold gradient-text leading-tight"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
        >
          I build AI systems <br className="hidden sm:block" />
          that automate workflows
        </motion.h1>

        <motion.p
          className="mt-4 md:mt-6 text-gray-400 text-sm sm:text-base md:text-lg px-2 sm:px-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Gen AI Developer specializing in LLM apps, chatbots, and automation
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-10 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition"
          >
            View Projects
          </button>

          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 transition"
          >
            Hire Me
          </button>
        </motion.div>

      </div>

      <motion.div
        className="absolute bottom-4 md:bottom-6 flex flex-col items-center text-gray-400 text-xs md:text-sm"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        ↓ Scroll
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]" />

    </section>
  );
}