import { motion } from "framer-motion";
import { Code2, Monitor, Database, Cpu, Layout, Boxes } from "lucide-react";

const skillCategories = [
  {
    title: "FRONTEND DEVELOPMENT",
    icon: <Layout className="text-primary" />,
    skills: ["HTML5", "CSS3", "JavaScript", "React"]
  },
  {
    title: "BACKEND / PROGRAMMING",
    icon: <Code2 className="text-secondary" />,
    skills: ["Java", "Python", "C", "C++"]
  },
  {
    title: "CORE ENGINEERING",
    icon: <Cpu className="text-primary" />,
    skills: ["Data Structures", "OOP", "DBMS", "OS"]
  },
  {
    title: "DATABASE & TOOLS",
    icon: <Database className="text-secondary" />,
    skills: ["SQL", "SQLite", "GitHub", "VS Code"]
  },
  {
    title: "SAP / ERP",
    icon: <Boxes className="text-primary" />,
    skills: ["SAP HANA (Basics)", "ABAP (Fundamentals)"]
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
                      key={skill}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center gap-3 px-4 py-3 glass rounded-xl border border-white/5 hover:bg-white/10 transition-all cursor-default"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm font-medium text-white/80">{skill}</span>
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
