import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaRobot, FaServer } from "react-icons/fa";
import { services } from "../data";

const iconMap = {
  web: <FaCode />,
  mobile: <FaMobileAlt />,
  ai: <FaRobot />,
  backend: <FaServer />,
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#38bdf8] tracking-widest text-sm mb-2">WHAT I DO</p>
          <h2 className="text-4xl md:text-5xl font-black">
            Services I <span className="neon-text">Offer</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative p-6 rounded-2xl bg-black/40 border border-gray-800 hover:border-[#38bdf8] transition-all duration-300 group hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]"
            >
              <div className="text-4xl text-[#38bdf8] mb-4 group-hover:scale-125 transition-transform duration-300">
                {iconMap[s.icon]}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#38bdf8] transition-colors">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}