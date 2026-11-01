export const personal = {
  name: "Abubakar",
  role: "Full Stack AI & React Native Developer",
  email: "abubakarnaveed8545@gmail.com",
  phone: "03216889422",
  location: "Lahore, Pakistan",
  tagline: "Software Engineer • Web & Mobile Dev • AI Agents",
  summary:
    "Full Stack AI & React Native Developer with hands-on experience building production web apps, mobile apps, and AI agents at Zong. I specialize in React, Supabase, Python, and FastAPI — turning complex problems into elegant, fast, and scalable products.",
    cv:"/Muhammad Abubakar.pdf"
};

export const experience = [
  {
    company: "Zong",
    role: "Full Stack AI & React Native Developer",
    period: "Jul 2025 – Present",
    location: "Lahore, Punjab",
    bullets: [
      "Compliance Orchestration Platform: Built a React + Supabase web app featuring a dashboard, compliance calendar, evidence records, and multi-step approval workflows, deployed on an Ubuntu Linux VM hosted on Zong's infrastructure.",
      "Smart Fueling Portal: Built a React + Supabase web app that forecasts adverse weather by area to schedule DG generator refueling in advance, sends automated WhatsApp alerts with site-wise fuel levels, and highlights affected sites on an interactive map.",
      "Built an NL-to-SQL AI agent using Python and FastAPI that accepts natural language prompts, translates them into SQL queries, retrieves data from a database, and returns results with an average response time of 3 seconds.",
      "Zong Fueling Mobile App: Designed and developed the Zong Fueling App with Supabase backend integration and a real-time dashboard for tracking fuel transactions and operational transparency.",
      "Site Load Web App: Built a React + Supabase web app that flags whether a tower is overloaded upon adding equipment, using complex backend calculations to validate site load capacity in real time.",
      "Expense Tracker Mobile App: Built the Expense Tracker mobile app featuring real-time data sync via Supabase and an interactive dashboard for personal expense reporting and budget tracking.",
      "Site Finder Mobile App: Created the Site Finder app with a scalable, performance-optimized frontend and a Supabase-powered real-time dashboard to display and report on nearby site locations.",
    ],
  },
  {
    company: "Webring Ltd",
    role: "MERN Full Stack Developer",
    period: "Feb 2025 – April 2025",
    location: "Lahore, Punjab",
    bullets: [
      "Led the end-to-end development of a scalable company website using the MERN stack (React, Node.js, Express, MongoDB).",
      "Implemented a fully responsive UI with React and Chakra UI, guaranteeing an optimal user experience on all screen sizes.",
      "Produced dynamic, responsive websites leveraging the MERN stack within a professional work environment, meeting client and business requirements.",
    ],
  },
  {
    company: "CSG Pakistan",
    role: "Web Developer Intern",
    period: "Feb 2025 – April 2025",
    location: "Lahore, Punjab",
    bullets: [
      "Developed a client landing page using HTML, CSS, and JavaScript, featuring a responsive layout and dynamic form validation.",
      "Optimized page assets which reduced load time by 25% and ensured cross-browser compatibility.",
    ],
  },
];

export const projects = [
  {
    title: "Compliance Orchestration Platform",
    desc: "React + Supabase compliance dashboard with calendar, evidence records & multi-step approval workflows — deployed on Ubuntu Linux.",
    tags: ["React", "Supabase", "Ubuntu"],
    emoji: "🛡️",
    live: "https://compliance-orchestration-platform.vercel.app/",
    github: "",
    image: "/images/compliance.png",
  },
  {
    title: "Smart Fueling Portal",
    desc: "Weather-forecast driven DG refueling scheduler with automated WhatsApp alerts and interactive site map.",
    tags: ["React", "Supabase", "Maps", "WhatsApp API"],
    emoji: "⛽",
    live: "https://smart-fueling-portal.vercel.app/",
    github: "",
    image: "/images/smart-fueling.png",
  },
  {
    title: "NL-to-SQL AI Agent",
    desc: "Python + FastAPI agent that converts natural language to SQL and returns results in ~3 seconds.",
    tags: ["Python", "FastAPI", "LLM", "PostgreSQL"],
    emoji: "🤖",
    live: "",
    github: "",
    image: "/images/nl-to-sql.png",
  },
  {
    title: "Zong Fueling App",
    desc: "React Native mobile app with Supabase backend and real-time fuel transaction dashboard.",
    tags: ["React Native", "Supabase", "Realtime"],
    emoji: "📱",
    live: "",
    github: "",
    image: "/images/zong-fueling.png",
  },
  {
    title: "Site Load Web App",
    desc: "Real-time tower overload detection with complex backend capacity calculations.",
    tags: ["React", "Supabase", "Backend"],
    emoji: "📡",
    live: "https://site-load-pi.vercel.app/",
    github: "",
    image: "/images/site-load.png",
  },
  {
    title: "Expense Tracker App",
    desc: "Mobile expense reporting app with real-time Supabase sync and interactive budget dashboard.",
    tags: ["React Native", "Supabase"],
    emoji: "💰",
    live: "",
    github: "",
    image: "/images/expense-tracker.png",
  },
  {
    title: "Site Finder App",
    desc: "Performance-optimized mobile app to discover nearby sites with real-time dashboard reporting.",
    tags: ["React Native", "Supabase"],
    emoji: "📍",
    live: "",
    github: "",
    image: "/images/site-finder.png",
  },
  {
    title: "The Ethos High School",
    desc: "Responsive Next.js school website deployed with a purchased custom domain.",
    tags: ["Next.js", "Vercel"],
    emoji: "🏫",
    live: "https://ethos-high-school.vercel.app/",
    github: "",
    image: "/images/ethos-school.png",
  },
  {
    title: "Snack Studio",
    desc: "Next.js + Supabase inventory app with auth & real-time stock tracking.",
    tags: ["Next.js", "Supabase", "Auth"],
    emoji: "📦",
    live: "https://snack-studio.vercel.app/",
    github: "",
    image: "/images/stock-management.png",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["C/C++", "HTML5", "CSS3", "JavaScript", "Python", "SQL / PostgreSQL"],
  },
  {
    title: "Frontend",
    items: ["React JS", "Next JS", "React Native", "Chakra UI", "Tailwind CSS"],
  },
  {
    title: "Backend & Cloud",
    items: ["Node JS", "Express", "FastAPI", "Supabase", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["VS Code", "Git", "GitHub", "Ubuntu Linux", "MS Excel", "PowerPoint"],
  },
];

export const services = [
  {
    icon: "web",
    title: "Web Development",
    desc: "Production-grade React, Next.js & Supabase web apps — fast, secure, deployed on real infra.",
  },
  {
    icon: "mobile",
    title: "Mobile Apps",
    desc: "Cross-platform iOS & Android apps with React Native and real-time Supabase backends.",
  },
  {
    icon: "ai",
    title: "AI Agents",
    desc: "NL-to-SQL, LLM-powered automations & FastAPI microservices that deliver results in seconds.",
  },
  {
    icon: "backend",
    title: "Backend & APIs",
    desc: "Scalable Python/FastAPI and Node.js backends with complex business logic and realtime sync.",
  },
];

export const stats = [
  { n: "1+", l: "Years Exp" },
  { n: "10+", l: "Projects Shipped" },
  { n: "3s", l: "AI Response" },
];