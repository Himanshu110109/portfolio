import { motion } from "framer-motion";
import { FaRobot, FaBrain, FaBolt, FaDatabase, FaPlug } from "react-icons/fa";

const services = [
  {
    title: "AI Chatbot Development",
    desc: "Reduce customer support workload with intelligent AI chatbots trained on your data.",
    icon: <FaRobot />,
  },
  {
    title: "Custom GPT / LLM Apps",
    desc: "Build tailored AI tools that automate tasks, generate content, and enhance workflows.",
    icon: <FaBrain />,
  },
  {
    title: "Workflow Automation",
    desc: "Eliminate repetitive tasks and save hours using AI-powered automation pipelines.",
    icon: <FaBolt />,
  },
  {
    title: "RAG Systems",
    desc: "Turn your documents into intelligent search systems with accurate AI responses.",
    icon: <FaDatabase />,
  },
  {
    title: "API Integration",
    desc: "Seamlessly connect AI systems with your existing apps and services.",
    icon: <FaPlug />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden">

      <div className="blob w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-purple-600 bottom-10 left-5 md:left-20" />

      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl gradient-text font-bold mb-3 md:mb-4">
            What I Can Do For You
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2 sm:px-0">
            I build AI systems that don’t just look impressive they deliver real business results.
          </p>
        </div>

        <div className="relative">

          <div className="absolute left-5 sm:left-6 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500/40 to-transparent" />

          <div className="space-y-10 sm:space-y-12 md:space-y-16">

            {services.map((service, i) => (
              <motion.div
                key={i}
                className="flex gap-4 sm:gap-6 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >

                <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-white text-base sm:text-xl shadow-lg shrink-0">
                  {service.icon}
                </div>

                <div className="flex-1">

                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="mt-3 sm:mt-4 h-[1px] bg-white/10 w-full" />

                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
