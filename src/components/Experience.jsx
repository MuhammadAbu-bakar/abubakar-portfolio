import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#38bdf8] tracking-widest text-sm mb-2">CAREER</p>
          <h2 className="text-4xl md:text-5xl font-black">
            Work <span className="neon-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#38bdf8] via-[#0ea5e9]/50 to-transparent" />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative mb-12 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              } pl-14 md:pl-0`}
            >
              {/* dot */}
              <span
                className={`absolute top-3 w-4 h-4 rounded-full bg-[#38bdf8] pulse-glow ${
                  i % 2 === 0
                    ? "left-2 md:left-auto md:right-[-10px]"
                    : "left-2 md:left-[-10px]"
                }`}
              />

              <div className="neon-border rounded-2xl p-6 bg-black/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] transition-all duration-300">
                <div className="flex items-center gap-2 text-[#38bdf8] text-sm mb-1">
                  <FaBriefcase />
                  <span>{job.period}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{job.role}</h3>
                <p className="text-[#38bdf8] font-semibold mb-1">{job.company}</p>
                <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
                  <FaMapMarkerAlt /> {job.location}
                </p>
                <ul className="space-y-2 text-sm text-gray-400 leading-relaxed">
                  {job.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-[#38bdf8] mt-1">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}