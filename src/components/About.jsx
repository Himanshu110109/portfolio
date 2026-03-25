import { motion } from "framer-motion";

const stats = [
  { title: "20+", desc: "AI Projects Built" },
  { title: "LLM", desc: "Apps & Chatbots" },
  { title: "RAG", desc: "Systems Expertise" },
  { title: "Full Stack", desc: "AI + Web Integration" },
];

export default function About() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">

      <div className="blob w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-cyan-600 top-10 right-5 md:right-20" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4 md:mb-6 leading-tight">
            Building AI that actually solves problems
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
            Most AI projects look cool in demos but fail in real-world use.
            I focus on building AI systems that are actually useful
            chatbots that reduce support load, automation tools that save hours,
            and RAG systems that make data usable.
          </p>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            With a strong foundation in machine learning and modern web stacks,
            I build end-to-end AI products from backend pipelines to polished UI.
          </p>

          <div className="mt-5 md:mt-6 text-purple-400 text-sm sm:text-base font-medium">
            Focused on real impact, not just experiments.
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 md:mt-0">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              className="glass glow-card card p-4 sm:p-5 md:p-6 rounded-2xl md:rounded-3xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 12,
                delay: i * 0.1,
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10" />

              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2 leading-snug">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}