import { motion } from "framer-motion";
import { Code2, Monitor, Database, Cpu, Layout, Boxes, FileCode2, Palette, FileJson, Atom, Coffee, Terminal, Binary, DatabaseZap, Github, AppWindow, Network, Workflow, Settings, Activity } from "lucide-react";

const skillCategories = [
  {
    title: "FRONTEND DEVELOPMENT",
    icon: <Layout className="text-primary" />,
    skills: [
      { name: "HTML5", icon: <FileCode2 size={16} className="text-primary" /> },
      { name: "CSS3", icon: <Palette size={16} className="text-primary" /> },
      { name: "JavaScript", icon: <FileJson size={16} className="text-primary" /> },
      { name: "React", icon: <Atom size={16} className="text-primary" /> }
    ]
  },
  {
    title: "BACKEND / PROGRAMMING",
    icon: <Code2 className="text-secondary" />,
    skills: [
      { name: "Java", icon: <Coffee size={16} className="text-secondary" /> },
      { name: "Python", icon: <Terminal size={16} className="text-secondary" /> },
      { name: "C", icon: <Binary size={16} className="text-secondary" /> },
      { name: "C++", icon: <Code2 size={16} className="text-secondary" /> }
    ]
  },
  {
    title: "CORE ENGINEERING",
    icon: <Cpu className="text-primary" />,
    skills: [
      { name: "Data Structures", icon: <Network size={16} className="text-primary" /> },
      { name: "OOP", icon: <Workflow size={16} className="text-primary" /> },
      { name: "DBMS", icon: <DatabaseZap size={16} className="text-primary" /> },
      { name: "OS", icon: <Settings size={16} className="text-primary" /> }
    ]
  },
  {
    title: "DATABASE & TOOLS",
    icon: <Database className="text-secondary" />,
    skills: [
      { name: "SQL", icon: <Database size={16} className="text-secondary" /> },
      { name: "SQLite", icon: <Database size={16} className="text-secondary" /> },
      { name: "GitHub", icon: <Github size={16} className="text-secondary" /> },
      { name: "VS Code", icon: <AppWindow size={16} className="text-secondary" /> }
    ]
  },
  {
    title: "SAP / ERP",
    icon: <Boxes className="text-primary" />,
    skills: [
      { name: "SAP HANA (Basics)", icon: <Activity size={16} className="text-primary" /> },
      { name: "ABAP (Fundamentals)", icon: <Terminal size={16} className="text-primary" /> }
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.2em] text-xs uppercase"
          >
            SKILLS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mt-4 max-w-2xl leading-tight"
          >
            Tech stack across product and enterprise workflows.
          </motion.h2>
        </div>

        <div className="glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 glass rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-sm font-bold tracking-widest text-white/50">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-3 px-4 py-3 glass rounded-xl border border-white/5 hover:bg-white/10 transition-all cursor-default"
                    >
                      {skill.icon}
                      <span className="text-sm font-medium text-white/80">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
