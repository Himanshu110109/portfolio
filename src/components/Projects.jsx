import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Customer Support Agent",
    problem: "Businesses struggle with slow response times and repetitive customer queries.",
    solution: "Built an LLM + RAG based chatbot trained on business data to automate support.",
    tech: "OpenAI, LangChain, Vector DB, FastAPI",
    result: "Reduced response time by ~70% and automated common queries.",
    github: "https://github.com/Himanshu110109/GYM-chatbot",
    demo: "#",
  },
  {
    title: "AI Content Repurposing Engine",
    problem: "Creating content for multiple platforms is time-consuming.",
    solution: "Developed a system that converts long-form content into posts, captions, and summaries.",
    tech: "OpenAI API, Prompt Engineering, Fastapi",
    result: "Increased content production speed by 5–10x.",
    github: "https://github.com/Himanshu110109/Ai-content-repurposing",
    demo: "#",
  },
  {
    title: "Natural Language SQL Assistant",
    problem: "Non-technical users cannot query databases easily.",
    solution: "Built an AI assistant that converts natural language into SQL queries and returns results.",
    tech: "LLM, SQL, FastAPI, Prompt Engineering",
    result: "Enabled non-technical users to access data without writing SQL.",
    github: "https://github.com/Himanshu110109/sql-query-tool",
    demo: "#",
  },
  {
    title: "Custom Fine-Tuned AI Model",
    problem: "Generic models lack accuracy for domain-specific tasks.",
    solution: "Fine-tuned an LLM on custom datasets to improve performance and relevance.",
    tech: "HuggingFace / OpenAI, Python, Unsloth",
    result: "Improved response accuracy and domain relevance significantly.",
    github: "https://github.com/Himanshu110109/Fine-tuning",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 px-4 sm:px-6 relative">

      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold gradient-text mb-12 md:mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-6xl mx-auto">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="glass glow-card card p-4 sm:p-5 md:p-6 rounded-2xl md:rounded-3xl relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, y: -6 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10" />

            <div className="relative z-10">

              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {p.title}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                <span className="text-white">Problem:</span> {p.problem}
              </p>

              <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                <span className="text-white">Solution:</span> {p.solution}
              </p>

              <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                <span className="text-white">Tech:</span> {p.tech}
              </p>

              <p className="text-green-400 text-xs sm:text-sm mt-3">
                {p.result}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-5 sm:mt-6">

                <a
                  href={p.github}
                  target="_blank"
                  className="w-full sm:w-auto text-center px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-purple-500/20 transition text-sm"
                >
                  GitHub
                </a>

                {p.demo !== "#" && (
                  <a
                    href={p.demo}
                    target="_blank"
                    className="w-full sm:w-auto text-center px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-purple-500/20 transition text-sm"
                  >
                    Watch Demo
                  </a>
                )}

              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}