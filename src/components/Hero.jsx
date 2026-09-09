import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

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
            className="inline-block px-4 py-1.5 glass rounded-full text-xs font-semibold tracking-wider text-primary mb-6 border border-primary/30 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
          >
            AVAILABLE FOR SOFTWARE DEVELOPER / FRONTEND DEVELOPER ROLES
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            I'm <span className="glow-text uppercase">SVARA SHAH</span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-secondary mb-6 tracking-wide">
            Computer Science Engineering Student <span className="text-white/40">|</span> Software Developer
          </p>
          
          <p className="text-base md:text-lg text-white/80 font-normal mb-8 max-w-xl leading-relaxed">
            "Building practical web applications and solving real-world problems through software engineering, frontend development, and strong programming fundamentals."
          </p>

          <div className="flex flex-col gap-3 mb-10">
            <span className="font-semibold text-primary/90 uppercase tracking-wider text-xs">Core Competencies</span>
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium">
              <span className="px-3.5 py-1.5 rounded-full glass border border-white/10 text-white/90 bg-white/5">Frontend Development</span>
              <span className="px-3.5 py-1.5 rounded-full glass border border-white/10 text-white/90 bg-white/5">SAP MM &amp; Procure-to-Pay</span>
              <span className="px-3.5 py-1.5 rounded-full glass border border-white/10 text-white/90 bg-white/5">Data Structures &amp; Algorithms</span>
              <span className="px-3.5 py-1.5 rounded-full glass border border-white/10 text-white/90 bg-white/5">Java &amp; TypeScript</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
            >
              VIEW PROJECTS <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="https://drive.google.com/file/d/1gjqWPPAp_nj3GoIWa6Z7AfjtSI44aZjH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card font-bold flex items-center gap-2 text-white hover:border-primary/50 transition-colors"
            >
              VIEW RESUME <ExternalLink size={18} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
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
                alt="Svara Shah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

