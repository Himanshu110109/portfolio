import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    {
      title: "AI Interview System",
      icon: "🤖",
      problem:
        "Traditional interview platforms feel outdated and lack intelligent interaction.",

      solution:
        "Built an AI-powered interview platform with voice interaction, evaluation logic, and real-time feedback generation.",

      tech: ["React", "FastAPI", "OpenAI", "MongoDB"],

      github: "#",
    },

    {
      title: "RAG Knowledge Assistant",
      icon: "🧠",
      problem:
        "Finding answers inside large document datasets is slow and inefficient.",

      solution:
        "Created a RAG-based AI assistant capable of semantic retrieval and contextual response generation.",

      tech: ["LangChain", "FAISS", "Python", "OpenAI"],

      github: "#",
    },

    {
      title: "AI Automation Workflows",
      icon: "⚡",
      problem:
        "Manual repetitive tasks waste time and reduce productivity.",

      solution:
        "Designed automation systems integrating APIs, AI agents, and workflow orchestration.",

      tech: ["n8n", "Node.js", "APIs", "Automation"],

      github: "#",
    },

    {
      title: "Modern AI Dashboard",
      icon: "🚀",
      problem:
        "Most AI dashboards feel cluttered and difficult to use.",

      solution:
        "Built a futuristic dashboard with clean UX, real-time analytics, and interactive visual systems.",

      tech: ["React", "Tailwind", "Charts", "Framer Motion"],

      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-[180px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >

          <p className="text-xs uppercase tracking-[0.3em] text-purple-400/60 mb-3">
            PROJECTS
          </p>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl leading-[0.9] font-black"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            <span className="gradient-text">
              FEATURED
            </span>

            <span className="text-white">
              {" "}WORK
            </span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base mt-5 max-w-2xl leading-relaxed">
            A collection of AI systems, automation workflows,
            and futuristic digital experiences.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-8 max-w-6xl mx-auto">

          {projects.map((p, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
              }}
            >

              {/* ================= DESKTOP FLIP CARD ================= */}
              <div className="hidden md:block flip-wrap min-h-[24rem]">

                <div className="flip-inner">

                  {/* FRONT */}
                  <div className="flip-front glass glow-card card overflow-hidden">

                    <div className="relative z-10 p-7 h-full flex flex-col">

                      <div className="flex items-center justify-between mb-4">

                        <span className="text-2xl">
                          {p.icon}
                        </span>

                        <span className="text-[10px] font-mono text-white/20">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold mb-4">
                        {p.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {p.problem}
                      </p>

                      <p className="mt-auto text-[10px] text-white/20 pt-4">
                        Hover to explore →
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

                    <div className="relative z-10 p-7 h-full flex flex-col">

                      <p className="text-gray-300 text-sm leading-relaxed mb-5">
                        {p.solution}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {p.tech.map((t, j) => (
                          <span
                            key={j}
                            className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-purple-300/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2 mt-auto">

                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 text-center px-3 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs hover:bg-white/20 transition"
                        >
                          GitHub ↗
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* ================= MOBILE COMPACT CARD ================= */}
              <div className="md:hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5">

                {/* TOP */}
                <div className="flex items-start gap-4">

                  <div className="text-2xl shrink-0">
                    {p.icon}
                  </div>

                  <div className="min-w-0">

                    <h3 className="text-base font-semibold leading-snug">
                      {p.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mt-2">
                      {p.solution}
                    </p>
                  </div>
                </div>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mt-4">

                  {p.tech.slice(0, 3).map((t, j) => (
                    <span
                      key={j}
                      className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-purple-300/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-purple-300 mt-5 hover:text-white transition"
                >
                  View Project ↗
                </a>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
