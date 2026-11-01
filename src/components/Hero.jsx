import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { personal } from "../data";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-5xl w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-[#38bdf8] tracking-[0.3em] text-sm uppercase mb-4"
        >
          Welcome to my universe
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}
          className="text-5xl md:text-7xl font-black leading-tight"
        >
          Hi, I'm <span className="neon-text">{personal.name}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="mt-6 text-lg md:text-2xl text-gray-300"
        >
          {personal.tagline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="mt-6 max-w-2xl mx-auto text-gray-400"
        >
          {personal.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#projects" className="neon-btn px-8 py-3 rounded-full font-semibold">View My Work</a>
          <a href="#contact" className="px-8 py-3 rounded-full font-semibold border border-gray-700 hover:border-[#38bdf8] text-gray-300 hover:text-[#38bdf8] transition-all">
            Hire Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="mt-10 flex gap-6 justify-center text-xl text-gray-400"
        >
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#38bdf8] hover:scale-125 transition-all"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#38bdf8] hover:scale-125 transition-all"><FaLinkedin /></a>
          <a href={`mailto:${personal.email}`} className="hover:text-[#38bdf8] hover:scale-125 transition-all"><FaEnvelope /></a>
        </motion.div>

        <motion.a
          href="#about" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block mt-16 text-[#38bdf8] text-2xl"
        >
          <FaArrowDown />
        </motion.a>
      </div>
    </section>
  );
}