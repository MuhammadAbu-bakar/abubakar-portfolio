import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/MuhammadAbu-bakar" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-abubakar-ab2b67301/" },
 
];

function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#38bdf8]/30 py-8 px-6 mt-12 bg-gradient-to-b from-transparent to-[#38bdf8]/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm flex items-center gap-1 flex-wrap justify-center md:justify-start">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#38bdf8] font-semibold">Abubakar.dev</span> — Built with{" "}
          <FaHeart className="text-[#39ff14]" aria-hidden="true" /> &{" "}
          <span className="text-[#38bdf8]">React</span>
        </p>

        <div className="flex gap-5 text-lg text-gray-400">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              title={s.label}
              className="inline-block hover:text-[#38bdf8] hover:scale-125 transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer; // 👈 THIS line is critical