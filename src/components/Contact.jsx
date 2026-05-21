import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { toast } from "react-toastify";

export default function Contact() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await fetch(
        "https://formsubmit.co/ajax/himanshu110109@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      e.target.reset();

      toast.success("Message sent successfully 🚀");
    } catch (error) {
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-4 sm:px-6 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full" />

        <div className="absolute top-24 left-10 w-20 h-20 border border-purple-500/10 rotate-45" />

        <div className="absolute bottom-20 left-1/3 w-28 h-28 border border-cyan-400/10 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-purple-400/60 mb-4">
            CONTACT
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text leading-tight">
            Let’s create something
            <br />
            people actually remember
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base mt-6 leading-relaxed">
            AI products. Automation systems. Smart experiences.
            Or just a crazy idea that sounds impossible at 2AM.
            I’m interested.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-2xl">
                  ⚡
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-purple-400/60 mb-1">
                    AVAILABLE FOR WORK
                  </p>

                  <h3 className="text-xl font-semibold text-white">
                    Open to projects & collaborations
                  </h3>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-md">
                Whether you're building an AI startup, automating workflows,
                or crafting the next “why didn’t I think of that” product —
                let’s make it real.
              </p>
            </div>

            {/* SOCIALS */}
            <div className="space-y-5">

              <a
                href="https://github.com/Himanshu110109"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-white/10 pb-4 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-xl text-gray-300 group-hover:text-purple-400 transition">
                    <FaGithub />
                  </div>

                  <div>
                    <p className="text-white text-sm font-medium">
                      GitHub
                    </p>

                    <p className="text-gray-500 text-xs">
                      Projects & experiments
                    </p>
                  </div>
                </div>

                <FaArrowRight className="text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="https://www.linkedin.com/in/himanshu-chandani-9a91b13b7/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-white/10 pb-4 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-xl text-gray-300 group-hover:text-cyan-400 transition">
                    <FaLinkedin />
                  </div>

                  <div>
                    <p className="text-white text-sm font-medium">
                      LinkedIn
                    </p>

                    <p className="text-gray-500 text-xs">
                      Professional updates
                    </p>
                  </div>
                </div>

                <FaArrowRight className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="mailto:himanshu110109@gmail.com"
                className="group flex items-center justify-between border-b border-white/10 pb-4 hover:border-pink-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-xl text-gray-300 group-hover:text-pink-400 transition">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-white text-sm font-medium">
                      Email
                    </p>

                    <p className="text-gray-500 text-xs">
                      Direct communication
                    </p>
                  </div>
                </div>

                <FaArrowRight className="text-gray-500 group-hover:text-pink-400 group-hover:translate-x-1 transition-all" />
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-400/60 mb-3">
                START A CONVERSATION
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Tell me what you’re building
              </h3>
            </div>

            <div className="space-y-8">

              <div>
                <label className="text-sm text-gray-400 mb-3 block">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-purple-500/50 transition text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-3 block">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-cyan-500/50 transition text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-3 block">
                  Project Details
                </label>

                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your idea..."
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-pink-500/50 transition text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="group relative overflow-hidden mt-6 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm font-medium"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>

                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
              </button>

            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
