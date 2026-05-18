import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Send, Phone, Download } from "lucide-react";

const socialLinks = [
  { icon: <Github size={24} />, href: "https://github.com/SvaraShah", name: "GitHub" },
  { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/svara-shah-40b39831b/", name: "LinkedIn" },
  { icon: <Instagram size={24} />, href: "https://www.instagram.com/svarashah?igsh=cWZ0dXJpdmlpajc=", name: "Instagram" },
  { icon: <Mail size={24} />, href: "mailto:svarashah215@gmail.com", name: "Email" },
  { icon: <Phone size={24} />, href: "tel:+919820028430", name: "Phone" },
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass-card p-8 md:p-16 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Get In Touch</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just a quick hello!
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-8">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="p-4 glass-card group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                    {link.icon}
                  </div>
                  <span className="text-sm font-bold text-white/60 group-hover:text-primary transition-colors tracking-widest uppercase">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-16 flex justify-center"
            >
              <a
                href="https://drive.google.com/file/d/1gjqWPPAp_nj3GoIWa6Z7AfjtSI44aZjH/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                Download Resume <Download size={20} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
