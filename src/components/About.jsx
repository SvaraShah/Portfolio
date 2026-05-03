import { motion } from "framer-motion";

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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-12 text-left"
        >
          <p className="text-xl text-white/80 leading-relaxed mb-6">
            Hi, I’m a Computer Science Engineering student passionate about creating meaningful digital experiences. 
            I love building projects that are not just functional, but also intuitive and visually appealing.
          </p>
          <p className="text-xl text-white/80 leading-relaxed mb-6">
            Currently, I’m focused on strengthening my skills in full-stack development and exploring new 
            technologies. I enjoy learning by doing—whether it’s developing applications, solving problems, 
            or experimenting with new ideas.
          </p>
          <p className="text-xl text-white/80 leading-relaxed">
            Beyond coding, I believe in growth, consistency, and building genuine connections. I aspire to 
            become a skilled engineer, work on impactful projects, and achieve my dream of working at a 
            leading tech company.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
