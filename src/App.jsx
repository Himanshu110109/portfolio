import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee"
import {ToastContainer} from "react-toastify"

export default function App() {
  return (
    <>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
      <Marquee />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}