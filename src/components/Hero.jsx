import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 glass rounded-full text-xs font-semibold tracking-wider text-primary mb-6"
          >
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight whitespace-nowrap">
            I'm <span className="glow-text uppercase">SVARA SHAH</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 font-medium mb-4 leading-relaxed">
            Crafting elegant, user-focused web experiences with a blend of creativity, precision, and real-world impact.
          </p>
          
          <p className="text-lg text-white/60 mb-10 max-w-xl">
            Computer Science Engineering student passionate about building intuitive, scalable, and visually engaging web applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
            >
              View My Work <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1NnjlPNIQgt-8z3YzFpFPStxR5I2-cBId/view?usp=sharing"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card font-bold flex items-center gap-2"
            >
              Resume <Download size={20} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated Rings */}
            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <img
                src="/profile_new.jpg"
                alt="Svara Pankilkumar Shah"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 p-4 glass-card rounded-2xl"
            >
              <div className="text-2xl">💻</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 p-4 glass-card rounded-2xl"
            >
              <div className="text-2xl">🚀</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
