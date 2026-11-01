import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#38bdf8] tracking-widest text-sm mb-2">PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-black">
            Featured <span className="neon-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#001a2a] border border-gray-800 hover:border-[#38bdf8] transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)]"
            >
              {/* Project image (falls back to emoji if no image / load fails) */}
              <div className="h-44 overflow-hidden bg-black/50 flex items-center justify-center">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                ) : null}
                <div
                  className={`text-6xl ${p.image ? "hidden" : "flex"} items-center justify-center`}
                  aria-hidden="true"
                >
                  {p.emoji}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#38bdf8] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-gray-400">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} source code on GitHub`}
                      className="hover:text-[#38bdf8] transition-colors"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} live demo`}
                      className="hover:text-[#38bdf8] transition-colors"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {!p.github && !p.live && (
                    <span className="text-xs text-gray-600 italic">
                      Internal / not publicly hosted
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}