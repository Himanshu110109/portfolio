import { motion } from "framer-motion";
import { useState } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiFastapi,
  SiVercel,
  SiGithub,
  SiRender,
  SiStreamlit,
  SiDocker,
  SiKubernetes,
  SiGrafana,
  SiPython,
  SiFlask,
  SiLangchain,
} from "react-icons/si";

import { FaBrain, FaRobot, FaAws } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";

const skillGroups = [
  {
    title: "AI Engineering",
    desc: "Designing intelligent autonomous systems",
    skills: [
      { name: "Agentic Systems", icon: <FaRobot /> },
      { name: "LangChain", icon: <SiLangchain /> },
      { name: "n8n", icon: <FaProjectDiagram /> },
      { name: "RAG Pipelines", icon: <FaBrain /> },
    ],
  },

  {
    title: "Backend Systems",
    desc: "Scalable APIs & AI pipelines",
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Flask", icon: <SiFlask /> },
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
      { name: "AWS", icon: <FaAws /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Grafana", icon: <SiGrafana /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Render", icon: <SiRender /> },
      { name: "Streamlit", icon: <SiStreamlit /> },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden">

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
            STACK
          </p>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl leading-[0.9] font-black"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            <span className="gradient-text">
              TECH STACK
            </span>

            <span className="text-white">
              {" "}& SKILLS
            </span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base mt-5 max-w-2xl leading-relaxed">
            Building complete AI systems from backend pipelines
            to polished interactive experiences.
          </p>
        </motion.div>

        {/* MODERN TABS LAYOUT */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-5 md:gap-8">

          {/* LEFT SIDEBAR */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">

            {skillGroups.map((group, index) => {
              const isActive = active === index;

              return (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`group relative min-w-[220px] lg:min-w-0 text-left rounded-2xl border transition-all duration-300 px-5 py-4 backdrop-blur-xl ${
                    isActive
                      ? "border-purple-500/40 bg-white/[0.05]"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
                  }`}
                >

                  {/* ACTIVE GLOW */}
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillGlow"
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10"
                    />
                  )}

                  <div className="relative z-10">

                    <h3 className="text-white font-semibold text-sm sm:text-base">
                      {group.title}
                    </h3>

                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                      {group.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-7 overflow-hidden"
          >

            {/* TOP LINE */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />

            {/* TITLE */}
            <div className="mb-7">

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {skillGroups[active].title}
              </h3>

              <p className="text-gray-500 text-sm sm:text-base mt-2">
                {skillGroups[active].desc}
              </p>
            </div>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-3">

              {skillGroups[active].skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: idx * 0.05,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="group relative overflow-hidden flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 hover:border-purple-500/30 transition-all duration-300"
                >

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition duration-500" />

                  <span className="relative z-10 text-lg text-purple-400">
                    {skill.icon}
                  </span>

                  <span className="relative z-10 text-sm sm:text-base text-gray-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
