import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Contact() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      await fetch("https://formsubmit.co/ajax/himanshu110109@gmail.com", {
        method: "POST",
        body: formData,
      });

      e.target.reset();

      toast.success("Message sent successfully 🚀");
    } catch (error) {
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden">

      <div className="blob w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-purple-600 bottom-10 right-5 md:right-20" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-4 md:mb-6">
            Let’s build something impactful
          </h2>

          <p className="text-gray-300 text-sm sm:text-base mb-4 md:mb-6 leading-relaxed">
            If you're looking to integrate AI into your product, automate workflows,
            or build something meaningful let's talk.
          </p>

          <p className="text-gray-400 text-sm sm:text-base mb-6 md:mb-8">
            I usually respond within 24 hours.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4">

            <a
              href="https://github.com/Himanshu110109"
              target="_blank"
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition text-sm sm:text-base"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/himanshu-chandani-9a91b13b7/"
              target="_blank"
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition text-sm sm:text-base"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="mailto:himanshu110109@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition text-sm sm:text-base"
            >
              <FaEnvelope /> Email
            </a>

          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 sm:gap-8 mt-8 md:mt-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" style={{ display: "none" }} />

          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="bg-transparent border-b border-gray-600 focus:border-purple-400 outline-none py-2 text-sm sm:text-base transition"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="bg-transparent border-b border-gray-600 focus:border-purple-400 outline-none py-2 text-sm sm:text-base transition"
              placeholder="you@email.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              className="bg-transparent border-b border-gray-600 focus:border-purple-400 outline-none py-2 text-sm sm:text-base transition resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="mt-2 sm:mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg hover:opacity-90 transition text-sm sm:text-base"
          >
            Send Message →
          </button>

        </motion.form>

      </div>
    </section>
  );
}