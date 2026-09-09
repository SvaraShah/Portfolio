import { motion } from "framer-motion";
import { GraduationCap, Cpu, Database, BookOpen } from "lucide-react";

const educationItems = [
  {
    title: "B.Tech Computer Science Engineering",
    institution: "Parul Institute of Engineering and Technology",
    period: "2024 – Present",
    description: "Focusing on core software engineering principles, algorithms, data structures, and computing technologies.",
    icon: <Cpu className="text-primary" size={24} />
  },
  {
    title: "AI & Data Science Certification",
    institution: "IIT Roorkee & Intellipaat",
    period: "2025 – Present",
    description: "Advanced learning in Machine Learning, Python programming, and data analytics fundamentals.",
    icon: <Database className="text-secondary" size={24} />
  },
  {
    title: "Class 12 (HSC)",
    institution: "Sardar Vallabhbhai Patel College, Dahisar",
    period: "2024",
    description: "Completed Higher Secondary Certificate (HSC) examination with 67.83%.",
    icon: <BookOpen className="text-primary" size={24} />
  },
  {
    title: "Class 10 (ICSE)",
    institution: "RBK School",
    period: "2022",
    description: "Completed ICSE examination with 88.2%.",
    icon: <GraduationCap className="text-secondary" size={24} />
  }
];

export const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.2em] text-xs uppercase"
          >
            ACADEMIC BACKGROUND
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mt-3"
          >
            Education &amp; Qualifications
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 flex flex-col justify-between border border-white/10 hover:border-primary/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="p-3 glass rounded-xl bg-white/5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 glass rounded-full text-xs font-bold text-primary tracking-wider uppercase border border-primary/20">
                    {item.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <h4 className="text-sm font-medium text-secondary mb-4">
                  {item.institution}
                </h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
