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
    <section id="journey" className="py-20 pb-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
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

        <div className="relative mt-20">
          {/* Central Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-full -translate-y-1/2 md:block hidden" />
          
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 relative z-10 overflow-x-auto py-20 no-scrollbar scroll-smooth snap-x min-h-[650px]">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="min-w-full md:min-w-[500px] snap-center flex flex-col px-8 relative"
              >
                {/* Central Dot - Always centered vertically */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-background border-4 border-primary rounded-full z-20 shadow-[0_0_20px_rgba(139,92,246,0.6)] md:block hidden animate-pulse-glow" />

                {/* Vertical Connector Line from Dot to Card */}
                {index % 2 === 0 ? (
                  <div className="absolute bottom-[calc(50%+12px)] left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gradient-to-t from-primary/40 to-transparent md:block hidden" />
                ) : (
                  <div className="absolute top-[calc(50%+12px)] left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-primary/40 to-transparent md:block hidden" />
                )}

                <div className={`h-full flex flex-col ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className="glass-card p-6 md:p-8 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] relative group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 glass rounded-xl group-hover:bg-primary/20 transition-all">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-primary tracking-widest uppercase">{item.date}</span>
                        <h3 className="text-xl font-bold text-white line-clamp-1">{item.title}</h3>
                      </div>
                    </div>
                    <h4 className="text-secondary font-medium mb-3">{item.subtitle}</h4>
                    <p className="text-white/60 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
