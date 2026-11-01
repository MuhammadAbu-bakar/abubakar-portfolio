import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload, FaEye, FaChevronDown } from "react-icons/fa";
import { personal } from "../data";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const cvRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close CV dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cvRef.current && !cvRef.current.contains(e.target)) {
        setCvOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const cvUrl = personal.cv || "/Abubakar-CV.pdf";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-[#38bdf8]/30 shadow-[0_0_20px_rgba(56,189,248,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-black tracking-tight">
          <span className="neon-text">Abubakar</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-7 text-sm font-medium items-center">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="relative text-gray-300 hover:text-[#38bdf8] transition-colors group"
              >
                {l.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#38bdf8] shadow-[0_0_8px_#38bdf8] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CV dropdown + mobile toggle */}
        <div className="flex items-center gap-4">
          {/* CV Dropdown */}
          <div className="relative" ref={cvRef}>
            <button
              onClick={() => setCvOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={cvOpen}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-black bg-[#38bdf8] hover:bg-white transition-colors"
            >
              CV
              <FaChevronDown
                className={`text-xs transition-transform duration-300 ${
                  cvOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {cvOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-44 rounded-xl overflow-hidden bg-black/90 backdrop-blur-xl border border-[#38bdf8]/40 shadow-[0_0_30px_rgba(56,189,248,0.25)] z-50"
                >
                  <a
                    href={cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setCvOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-200 hover:text-[#38bdf8] hover:bg-[#38bdf8]/10 transition-colors"
                  >
                    <FaEye className="text-[#38bdf8]" />
                    View CV
                  </a>
                  <a
                    href={cvUrl}
                    download
                    onClick={() => setCvOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-200 hover:text-[#38bdf8] hover:bg-[#38bdf8]/10 transition-colors border-t border-[#38bdf8]/20"
                  >
                    <FaDownload className="text-[#38bdf8]" />
                    Download CV
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-[#38bdf8] text-2xl"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden flex flex-col gap-4 px-6 pb-6 bg-black/90 backdrop-blur-xl overflow-hidden"
          >
            {links.map((l) => (
              <li key={l.name}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-[#38bdf8] transition-colors"
                >
                  {l.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}