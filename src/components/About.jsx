import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 inline-block">
            BACKGROUND &amp; FOCUS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 text-left relative overflow-hidden border border-white/10 shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-8 text-primary/10 pointer-events-none">
            <UserCheck size={120} />
          </div>

          <div className="space-y-6 text-base md:text-lg text-white/90 leading-relaxed relative z-10">
            <p className="border-l-4 border-primary pl-4 py-1">
              I'm a Computer Science Engineering student focused on software development and problem solving. I enjoy building practical web applications that combine thoughtful engineering with clean, user-focused interfaces.
            </p>
            <p className="border-l-4 border-secondary pl-4 py-1">
              Alongside software development, I am gaining hands-on industry experience at <strong className="text-white">Suzlon Energy Limited</strong>, where I have worked with the <strong className="text-primary">SAP Materials Management (MM)</strong> module and the <strong className="text-secondary">Procure-to-Pay (P2P) cycle</strong>, gaining practical exposure to enterprise procurement and material management processes.
            </p>
            <p className="border-l-4 border-primary/60 pl-4 py-1">
              I'm also strengthening my foundations in Data Structures and Algorithms, software engineering and Machine Learning while continuing to build practical projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

