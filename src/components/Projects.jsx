import { motion } from "framer-motion";

const projects = [
  {
    icon: "🤖",
    title: "AI Customer Support Agent",
    problem:
      "Businesses struggle with slow response times and repetitive customer queries.",
    solution:
      "Built an LLM + RAG based chatbot trained on business data to automate support.",
    tech: ["OpenAI", "LangChain", "Vector DB", "FastAPI"],
    result:
      "Reduced response time by ~70% and automated common queries.",
    github: "https://github.com/Himanshu110109/GYM-chatbot",
    demo: "#",
  },
  {
    icon: "✍️",
    title: "AI Content Repurposing Engine",
    problem:
      "Creating content for multiple platforms is time-consuming.",
    solution:
      "Converts long-form content into posts, captions, and summaries automatically.",
    tech: ["OpenAI API", "Prompt Engineering", "FastAPI"],
    result: "Increased content production speed by 5–10x.",
    github: "https://github.com/Himanshu110109/Ai-content-repurposing",
    demo: "#",
  },
  {
    icon: "🗄️",
    title: "Natural Language SQL Assistant",
    problem:
      "Non-technical users cannot query databases easily.",
    solution:
      "Built an AI assistant that converts natural language into SQL queries and returns results.",
    tech: ["LLM", "SQL", "FastAPI", "Prompt Engineering"],
    result:
      "Enabled non-technical users to access data without writing SQL.",
    github: "https://github.com/Himanshu110109/sql-query-tool",
    demo: "#",
  },
  {
    icon: "🧠",
    title: "Custom Fine-Tuned AI Model",
    problem:
      "Generic models lack accuracy for domain-specific tasks.",
    solution:
      "Fine-tuned an LLM on custom datasets to improve performance and relevance.",
    tech: ["HuggingFace", "OpenAI", "Python", "Unsloth"],
    result:
      "Improved response accuracy and domain relevance significantly.",
    github: "https://github.com/Himanshu110109/Fine-tuning",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-24 px-4 sm:px-6 relative"
    >
      <style>{`
        .flip-wrap {
          perspective: 1000px;
        }

        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .flip-wrap:hover .flip-inner {
          transform: rotateY(180deg);
        }

        .flip-front,
        .flip-back {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 20px;
        }

        .flip-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="text-center mb-12 md:mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-purple-400/50 mb-3">
          What I've built
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
          Products
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="flip-wrap min-h-[22rem] sm:min-h-[24rem]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <div className="flip-inner">

              {/* FRONT */}
              <div className="flip-front glass glow-card card overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-cyan-400/40" />

                <div className="relative z-10 p-6 sm:p-7 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{p.icon}</span>

                    <span className="text-[10px] font-mono text-white/20">
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold mb-3 leading-snug">
                    {p.title}
                  </h3>

                  <div className="h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0 mb-3" />

                  <p className="text-[9px] uppercase tracking-[0.2em] text-purple-400/50 mb-2">
                    The Problem
                  </p>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {p.problem}
                  </p>

                  <p className="mt-auto text-[10px] text-white/20 flex items-center gap-1.5 pt-4">
                    <span>⟳</span> Hover to see solution
                  </p>
                </div>
              </div>

              {/* BACK */}
              <div
                className="flip-back overflow-hidden"
                style={{
                  background: "rgba(139,92,246,0.12)",
                  border: "1px solid rgba(139,92,246,0.3)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/80 to-cyan-400/50" />

                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-cyan-500/10 pointer-events-none" />

                <div className="relative z-10 p-6 sm:p-7 h-full flex flex-col">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-purple-400/50 mb-2">
                    Solution
                  </p>

                  <p className="text-gray-300 text-xs leading-relaxed mb-4">
                    {p.solution}
                  </p>

                  <p className="text-[9px] uppercase tracking-[0.2em] text-purple-400/50 mb-2">
                    Tech
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t, j) => (
                      <span
                        key={j}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-purple-300/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-start gap-2 rounded-xl border border-green-500/20 bg-green-500/5 px-3 py-3 mb-4">
                    <span className="text-green-400 text-xs shrink-0 mt-0.5">
                      ↑
                    </span>

                    <p className="text-green-400 text-xs leading-relaxed">
                      {p.result}
                    </p>
                  </div>

                  <div className="flex gap-2 mt-auto pt-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center px-3 py-2.5 rounded-xl bg-white/10 border border-white/20 hover:bg-purple-500/30 hover:border-purple-500/50 transition-all duration-300 text-xs"
                    >
                      GitHub ↗
                    </a>

                    {p.demo !== "#" && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center px-3 py-2.5 rounded-xl bg-white/10 border border-white/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-xs"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
