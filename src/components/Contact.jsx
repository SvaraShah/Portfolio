import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink, Phone } from "lucide-react";

const socialLinks = [
  { icon: <Mail size={22} />, href: "mailto:svarashah215@gmail.com", name: "Email", detail: "svarashah215@gmail.com" },
  { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/svara-shah-40b39831b/", name: "LinkedIn", detail: "in/svara-shah" },
  { icon: <Github size={22} />, href: "https://github.com/SvaraShah", name: "GitHub", detail: "github.com/SvaraShah" },
  { icon: <Phone size={22} />, href: "tel:+919820028430", name: "Phone", detail: "+91 98200 28430" },
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-16 relative overflow-hidden border border-white/10 shadow-2xl"
        >
          <div className="relative z-10">
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 inline-block">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 text-white">
              Let's Build Something Meaningful.
            </h2>
            <p className="text-base md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              "I'm currently open to software development opportunities, internships, and projects where I can contribute, learn and build impactful solutions."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 max-w-4xl mx-auto">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass p-6 rounded-2xl flex flex-col items-center gap-3 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all group"
                >
                  <div className="p-3.5 glass rounded-xl text-primary group-hover:scale-110 transition-transform bg-primary/10">
                    {link.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white tracking-wider block uppercase mb-1">
                      {link.name}
                    </span>
                    <span className="text-[11px] text-white/60 group-hover:text-primary transition-colors block truncate max-w-[180px]">
                      {link.detail}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-14 flex justify-center"
            >
              <a
                href="https://drive.google.com/file/d/1gjqWPPAp_nj3GoIWa6Z7AfjtSI44aZjH/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 text-sm tracking-wider"
              >
                VIEW RESUME <ExternalLink size={18} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

