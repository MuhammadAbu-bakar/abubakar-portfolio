import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { personal } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#38bdf8] tracking-widest text-sm mb-2">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-black">
            Let's Build <span className="neon-text">Something Amazing</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              { icon: <FaEnvelope />, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
              { icon: <FaPhone />, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
              { icon: <FaMapMarkerAlt />, label: "Location", value: personal.location, href: null },
            ].map((c) => {
              const Inner = (
                <div className="flex items-center gap-4 p-4 rounded-xl neon-border bg-black/40 hover:bg-[#38bdf8]/5 transition-all">
                  <div className="text-2xl text-[#38bdf8]">{c.icon}</div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{c.label}</div>
                    <div className="text-white font-medium break-all">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.label} href={c.href}>{Inner}</a>
              ) : (
                <div key={c.label}>{Inner}</div>
              );
            })}
          </motion.div>

          {/* Right side: contact form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-4 p-6 rounded-xl neon-border bg-black/40"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-black/60 border border-[#38bdf8]/30 text-white placeholder-gray-600 focus:outline-none focus:border-[#38bdf8] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-black/60 border border-[#38bdf8]/30 text-white placeholder-gray-600 focus:outline-none focus:border-[#38bdf8] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-lg bg-black/60 border border-[#38bdf8]/30 text-white placeholder-gray-600 focus:outline-none focus:border-[#38bdf8] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-black bg-[#38bdf8] hover:bg-white transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}