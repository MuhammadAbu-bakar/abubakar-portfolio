import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="fixed top-1/4 -left-40 w-96 h-96 bg-[#38bdf8]/20 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="fixed bottom-1/4 -right-40 w-96 h-96 bg-[#0ea5e9]/20 rounded-full blur-[120px] animate-float pointer-events-none" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}