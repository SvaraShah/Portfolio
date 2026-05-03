import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Cpu, Database } from "lucide-react";

const timelineData = [
  {
    title: "AI & Data Science Certification",
    subtitle: "IIT Roorkee & Intellipaat",
    date: "2025 – Present",
    description: "Advanced certification focusing on machine learning, data analysis, and AI implementation.",
    icon: <Database className="text-primary" />,
  },
  {
    title: "B.Tech Computer Science Engineering",
    subtitle: "Parul Institute of Engineering and Technology",
    date: "2024 – Present",
    description: "IEP - SAP program, focusing on core engineering principles and advanced computing.",
    icon: <Cpu className="text-secondary" />,
  },
  {
    title: "Class 12 (HSC)",
    subtitle: "Sardar Vallabhbhai Patel College, Dahisar",
    date: "2024",
    description: "Completed Higher Secondary Certificate with a score of 67.83%.",
    icon: <BookOpen className="text-primary" />,
  },
  {
    title: "Class 10 (ICSE)",
    subtitle: "RBK School",
    date: "2022",
    description: "Completed ICSE with a score of 88.2%.",
    icon: <GraduationCap className="text-secondary" />,
  },
];

export const Timeline = () => {
  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            My Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg"
          >
            A glimpse into my academic and learning journey so far.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 rounded-full md:block hidden" />
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-center justify-center md:justify-between group">
                {/* Center Glow Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)] md:block hidden group-hover:scale-125 transition-transform" />

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`w-full md:w-[45%] glass-card p-6 md:p-8 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] relative ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left md:ml-auto"
                  }`}
                >
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="p-3 glass rounded-xl">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-primary tracking-widest uppercase">{item.date}</span>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                  <h4 className="text-secondary font-medium mb-3">{item.subtitle}</h4>
                  <p className="text-white/60 leading-relaxed">{item.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
