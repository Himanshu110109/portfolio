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
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-purple-600/10 blur-[160px] rounded-full" />

        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full" />

        <div className="absolute top-32 left-12 w-24 h-24 border border-purple-500/10 rotate-45" />

        <div className="absolute bottom-24 left-1/3 w-32 h-32 border border-cyan-400/10 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* TOP HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-purple-400/60 mb-4">
            CONTACT
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] gradient-text">
            Let’s build
            <br />
            something impactful
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base mt-6 leading-relaxed">
            AI products. Automation systems. Creative tools.
            Or just an idea too interesting to ignore.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* STATUS */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
                </div>

                <p className="text-sm text-green-400">
                  Available for projects & collaborations
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-md">
                If you're building something ambitious with AI,
                automation, or modern web tech —
                I’d love to hear about it.
              </p>
            </div>

            {/* SOCIAL STACK */}
            <div className="space-y-5">

              <a
                href="https://github.com/Himanshu110109"
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-6 py-5 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center text-lg text-purple-300">
                      <FaGithub />
                    </div>

                    <div>
                      <p className="text-white font-medium">
                        GitHub
                      </p>

                      <p className="text-gray-500 text-xs">
                        Projects & experiments
                      </p>
                    </div>
                  </div>

                  <FaArrowRight className="text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/himanshu-chandani-9a91b13b7/"
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-6 py-5 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center text-lg text-cyan-300">
                      <FaLinkedin />
                    </div>

                    <div>
                      <p className="text-white font-medium">
                        LinkedIn
                      </p>

                      <p className="text-gray-500 text-xs">
                        Professional updates
                      </p>
                    </div>
                  </div>

                  <FaArrowRight className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
              </a>

              <a
                href="mailto:himanshu110109@gmail.com"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-6 py-5 hover:border-pink-500/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center text-lg text-pink-300">
                      <FaEnvelope />
                    </div>

                    <div>
                      <p className="text-white font-medium">
                        Email
                      </p>

                      <p className="text-gray-500 text-xs">
                        Direct communication
                      </p>
                    </div>
                  </div>

                  <FaArrowRight className="text-gray-500 group-hover:text-pink-400 group-hover:translate-x-1 transition-all" />
                </div>
              </a>

            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 sm:p-10 overflow-hidden"
          >
            {/* GLOW */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

            <div className="absolute -top-20 right-[-50px] w-[220px] h-[220px] bg-purple-500/10 blur-[100px] rounded-full" />

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            <div className="mb-10 relative z-10">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/60 mb-3">
                START A CONVERSATION
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Tell me about
                <br />
                your project
              </h3>
            </div>

            <div className="space-y-7 relative z-10">

              <div>
                <label className="text-sm text-gray-400 mb-3 block">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none focus:border-purple-500/50 transition text-sm"
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
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none focus:border-cyan-500/50 transition text-sm"
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
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 outline-none focus:border-pink-500/50 transition text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="group relative overflow-hidden w-full rounded-2xl py-4 font-medium bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
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
