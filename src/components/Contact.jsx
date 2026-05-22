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
      className="relative py-14 md:py-24 px-4 sm:px-6 overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[850px] h-[850px] bg-purple-600/10 blur-[180px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-100px] w-[420px] h-[420px] bg-cyan-500/10 blur-[140px] rounded-full" />

        {/* Removed decorative shapes on mobile */}
        <div className="hidden md:block absolute top-36 left-10 w-24 h-24 border border-purple-500/10 rotate-45" />

        <div className="hidden md:block absolute bottom-20 left-1/3 w-32 h-32 border border-cyan-400/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >

          <p className="text-xs uppercase tracking-[0.3em] text-purple-400/60 mb-3 text-left">
            CONTACT
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.05] gradient-text text-left">
            Let’s build
            <br />
            something impactful
          </h2>

          <p className="max-w-xl text-gray-400 text-sm sm:text-base mt-5 leading-relaxed text-left">
            AI products. Automation systems. Creative tools.
            Or just an idea too interesting to ignore.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-12 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full"
          >

            {/* STATUS */}
            <div className="mb-8">

              <div className="flex items-center gap-3 mb-4">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
                </div>

                <p className="text-sm text-green-400">
                  Available for projects & collaborations
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-md text-left">
                If you're building something ambitious with AI,
                automation, or modern web tech,
                I’d love to hear about it.
              </p>
            </div>

            {/* SOCIALS DESKTOP */}
            <div className="hidden sm:flex flex-col space-y-4 w-full">

              {/* GITHUB */}
              <a
                href="https://github.com/Himanshu110109"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-5 py-4 hover:border-purple-500/40 transition-all duration-300"
              >

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center text-lg text-purple-300 shrink-0">
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

                <FaArrowRight className="text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all shrink-0" />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/himanshu-chandani-9a91b13b7/"
                target="_blank"
                rel="noreferrer"
                className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-5 py-4 hover:border-cyan-500/40 transition-all duration-300"
              >

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center text-lg text-cyan-300 shrink-0">
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

                <FaArrowRight className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0" />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:himanshu110109@gmail.com"
                className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-5 py-4 hover:border-pink-500/40 transition-all duration-300"
              >

                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-center text-lg text-pink-300 shrink-0">
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

                <FaArrowRight className="text-gray-500 group-hover:text-pink-400 group-hover:translate-x-1 transition-all shrink-0" />
              </a>
            </div>

            {/* SOCIALS MOBILE */}
            <div className="flex sm:hidden items-center gap-4 mt-8">

              <a
                href="https://github.com/Himanshu110109"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center justify-center text-purple-300 text-lg"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/himanshu-chandani-9a91b13b7/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center justify-center text-cyan-300 text-lg"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:himanshu110109@gmail.com"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center justify-center text-pink-300 text-lg"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-8 overflow-hidden w-full"
          >

            {/* TOP GLOW */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            {/* FORM HEADER */}
            <div className="mb-6 relative z-10">

              <p className="text-xs uppercase tracking-[0.25em] text-cyan-400/60 mb-3 text-left">
                START A CONVERSATION
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight text-left">
                Tell me about
                <br />
                your project
              </h3>
            </div>

            {/* INPUTS */}
            <div className="space-y-4 relative z-10">

              <div>
                <label className="text-sm text-gray-400 mb-2 block text-left">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-purple-500/50 transition text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block text-left">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none focus:border-cyan-500/50 transition text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block text-left">
                  Project Details
                </label>

                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me about your idea..."
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-4 outline-none focus:border-pink-500/50 transition text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="group relative overflow-hidden w-full rounded-2xl py-3 font-medium bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
