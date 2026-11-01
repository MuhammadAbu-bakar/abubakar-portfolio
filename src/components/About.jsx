import { motion } from "framer-motion";
import { personal, stats } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative"
        >
          <div className="w-full aspect-square max-w-sm mx-auto rounded-3xl neon-border bg-gradient-to-br from-[#0a0a0a] to-[#001a2a] flex items-center justify-center pulse-glow">
            <span className="text-8xl">👨‍💻</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <p className="text-[#38bdf8] tracking-widest text-sm mb-2">ABOUT ME</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Crafting <span className="neon-text">Digital Magic</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            I'm <span className="text-white font-semibold">{personal.name}</span>, a{" "}
            <span className="text-[#38bdf8] font-semibold">{personal.role}</span> based in {personal.location}.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">{personal.summary}</p>

          <div className="grid grid-cols-3 gap-4 mt-8">
            {stats.map((s) => (
              <div key={s.l} className="neon-border rounded-xl p-4 text-center bg-black/40">
                <div className="text-2xl font-black neon-text">{s.n}</div>
                <div className="text-xs text-gray-400 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}