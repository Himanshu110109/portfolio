import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  SiOpenai,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiVercel,
  SiGithub,
  SiRender,
  SiStreamlit
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";

const skillGroups = [
  {
    title: "AI Engineering",
    desc: "Building production-ready AI systems",
    skills: [
      { name: "OpenAI APIs", icon: <SiOpenai /> },
      { name: "LangChain", icon: <FaBrain /> },
      { name: "RAG Pipelines", icon: <FaBrain /> },
    ],
  },
  {
    title: "Backend Systems",
    desc: "Scalable APIs & AI pipelines",
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
    ],
  },
  {
    title: "Frontend",
    desc: "Modern UI with smooth UX",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Deployment",
    desc: "Ship fast and reliably",
    skills: [
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
      { name: "Streamlit", icon: <SiStreamlit /> },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden">

      <div className="blob w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-blue-600 top-20 left-5 md:left-10" />

      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-3 md:mb-4">
            Tech Stack & Skills
          </h2>

          <p className="text-gray-400 text-sm sm:text-base px-2 sm:px-0">
            I build complete AI systems from backend pipelines to polished UI.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">

          {skillGroups.map((group, i) => {
            const isOpen = active === i;

            return (
              <div
                key={i}
                className="glass rounded-xl sm:rounded-2xl overflow-hidden border border-white/10"
              >

                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left"
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">
                      {group.title}
                    </h3>

                    <p className="text-gray-400 text-xs sm:text-sm">
                      {group.desc}
                    </p>
                  </div>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-400 text-lg sm:text-xl"
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="px-4 sm:px-6 pb-4 sm:pb-6"
                    >
                      <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">

                        {group.skills.map((skill, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm hover:bg-purple-500/20 transition"
                          >
                            <span className="text-purple-400 text-sm">
                              {skill.icon}
                            </span>
                            {skill.name}
                          </motion.div>
                        ))}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}