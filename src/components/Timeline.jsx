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

        {/* DESKTOP TIMELINE (Horizontal Wavy, No Scroll) */}
        <div className="relative hidden md:block w-full h-[500px] max-w-6xl mx-auto mt-10">
          {/* Wavy Road SVG Background */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-32">
            <svg className="w-full h-full drop-shadow-xl" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path 
                d="M 0,50 Q 12.5,-50 25,50 T 50,50 T 75,50 T 100,50" 
                fill="none" 
                stroke="#374151" 
                strokeWidth="6" 
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Timeline Cards */}
          {timelineData.map((item, index) => {
            const leftPercent = 12.5 + index * 25;
            const isWaveTop = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: isWaveTop ? 20 : -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="absolute w-2 h-2"
                style={{
                  left: `${leftPercent}%`,
                  top: isWaveTop ? 'calc(50% - 64px)' : 'calc(50% + 64px)',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Dot */}
                <div className="absolute inset-0 rounded-full bg-white border-4 border-primary z-20 shadow-[0_0_10px_rgba(139,92,246,0.6)]" />
                
                {/* Card */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-[220px] lg:w-[260px] ${isWaveTop ? 'bottom-6' : 'top-6'}`}>
                  <div className="glass-card p-5 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-shadow duration-300 flex flex-col bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl relative group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 glass rounded-xl text-white">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-primary tracking-widest uppercase">{item.date}</span>
                        <h3 className="text-sm font-bold text-white leading-tight line-clamp-2">{item.title}</h3>
                      </div>
                    </div>
                    <h4 className="text-secondary text-[11px] font-medium mb-2">{item.subtitle}</h4>
                    <p className="text-white/60 text-[11px] leading-relaxed line-clamp-3">{item.description}</p>
                    
                    {/* Tooltip pointer */}
                    <div 
                      className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-transparent ${
                        isWaveTop 
                          ? "-bottom-[8px] border-t-[8px] border-t-white/10" 
                          : "-top-[8px] border-b-[8px] border-b-white/10"
                      }`} 
                    />
                    {/* Connector line */}
                    <div 
                      className={`absolute left-1/2 -translate-x-1/2 w-[1px] bg-white/20 h-6 ${
                        isWaveTop ? "-bottom-6" : "-top-6"
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE TIMELINE (Vertical Straight) */}
        <div className="relative mt-20 max-w-5xl mx-auto md:hidden">
          {/* Mobile Straight Line */}
          <div className="absolute top-0 bottom-0 left-8 w-1 bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 rounded-full" />
          
          <div className="flex flex-col gap-12 relative z-10 py-10">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center w-full"
              >
                {/* Central Dot */}
                <div className="absolute left-8 -translate-x-1/2 w-6 h-6 bg-background border-4 border-primary rounded-full z-20 shadow-[0_0_20px_rgba(139,92,246,0.6)] animate-pulse-glow" />

                {/* Content Card */}
                <div className="w-full pl-20 pr-4">
                  <div className="glass-card p-6 transition-shadow duration-300 relative group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 glass rounded-xl">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-primary tracking-widest uppercase">{item.date}</span>
                        <h3 className="text-lg font-bold text-white line-clamp-2">{item.title}</h3>
                      </div>
                    </div>
                    <h4 className="text-secondary font-medium mb-3 text-sm">{item.subtitle}</h4>
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
