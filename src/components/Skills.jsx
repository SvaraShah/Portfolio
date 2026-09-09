import { motion } from "framer-motion";
import { Code2, Monitor, Database, Cpu, Layout, Boxes, FileCode2, Palette, FileJson, Atom, Coffee, Terminal, Binary, DatabaseZap, Github, AppWindow, Network, Workflow, Settings, Sparkles, Server, GitBranch, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "PROGRAMMING",
    icon: <Code2 className="text-primary" size={20} />,
    skills: [
      { name: "Java", icon: <Coffee size={16} className="text-primary" /> },
      { name: "JavaScript", icon: <FileJson size={16} className="text-primary" /> },
      { name: "TypeScript", icon: <Code2 size={16} className="text-primary" /> },
      { name: "HTML", icon: <FileCode2 size={16} className="text-primary" /> },
      { name: "CSS", icon: <Palette size={16} className="text-primary" /> }
    ]
  },
  {
    title: "CORE COMPUTER SCIENCE",
    icon: <Cpu className="text-secondary" size={20} />,
    skills: [
      { name: "Data Structures & Algorithms", icon: <Network size={16} className="text-secondary" /> },
      { name: "Object-Oriented Programming", icon: <Workflow size={16} className="text-secondary" /> },
      { name: "Problem Solving", icon: <Binary size={16} className="text-secondary" /> },
      { name: "DBMS", icon: <DatabaseZap size={16} className="text-secondary" /> },
      { name: "SQL", icon: <Database size={16} className="text-secondary" /> },
      { name: "Operating Systems", icon: <Settings size={16} className="text-secondary" /> },
      { name: "Computer Networks", icon: <Server size={16} className="text-secondary" /> }
    ]
  },
  {
    title: "WEB DEVELOPMENT",
    icon: <Layout className="text-primary" size={20} />,
    skills: [
      { name: "React", icon: <Atom size={16} className="text-primary" /> },
      { name: "Next.js", icon: <Monitor size={16} className="text-primary" /> },
      { name: "Tailwind CSS", icon: <Palette size={16} className="text-primary" /> },
      { name: "Responsive Web Development", icon: <Layout size={16} className="text-primary" /> },
      { name: "REST APIs", icon: <Server size={16} className="text-primary" /> }
    ]
  },
  {
    title: "TOOLS",
    icon: <GitBranch className="text-secondary" size={20} />,
    skills: [
      { name: "Git", icon: <GitBranch size={16} className="text-secondary" /> },
      { name: "GitHub", icon: <Github size={16} className="text-secondary" /> },
      { name: "Vercel", icon: <AppWindow size={16} className="text-secondary" /> }
    ]
  },
  {
    title: "DATABASES",
    icon: <Database className="text-primary" size={20} />,
    skills: [
      { name: "SQL", icon: <Database size={16} className="text-primary" /> },
      { name: "SQLite", icon: <DatabaseZap size={16} className="text-primary" /> }
    ]
  },
  {
    title: "ENTERPRISE TECHNOLOGY",
    icon: <Boxes className="text-secondary" size={20} />,
    skills: [
      { name: "SAP MM", icon: <Boxes size={16} className="text-secondary" /> },
      { name: "Procure-to-Pay (P2P)", icon: <Layers size={16} className="text-secondary" /> }
    ]
  },
  {
    title: "CURRENTLY LEARNING",
    badge: "ACTIVE LEARNING",
    icon: <Sparkles className="text-primary animate-pulse" size={20} />,
    skills: [
      { name: "Machine Learning", icon: <Sparkles size={16} className="text-primary" /> },
      { name: "Python for Machine Learning", icon: <Terminal size={16} className="text-primary" /> },
      { name: "AI/ML Fundamentals", icon: <Cpu size={16} className="text-primary" /> }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.2em] text-xs uppercase"
          >
            TECHNICAL CAPABILITIES
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mt-2"
          >
            Skills &amp; Technical Matrix
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-base md:text-lg mt-2 max-w-2xl"
          >
            Core software engineering competencies, enterprise workflow experience, and active learning areas.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`glass-card p-6 border ${
                category.badge 
                  ? "border-primary/50 shadow-[0_0_25px_rgba(139,92,246,0.15)] bg-gradient-to-b from-primary/10 to-transparent" 
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 glass rounded-xl bg-white/5">
                    {category.icon}
                  </div>
                  <h3 className="text-xs font-bold tracking-widest text-white/80 uppercase">
                    {category.title}
                  </h3>
                </div>
                {category.badge && (
                  <span className="px-2.5 py-0.5 glass rounded-full text-[10px] font-extrabold text-primary border border-primary/40">
                    {category.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2.5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 px-3.5 py-2.5 glass rounded-xl border border-white/5 hover:bg-white/10 transition-all cursor-default"
                  >
                    {skill.icon}
                    <span className="text-xs md:text-sm font-medium text-white/90">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

