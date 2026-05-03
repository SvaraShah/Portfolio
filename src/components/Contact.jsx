import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Send, Phone } from "lucide-react";

const socialLinks = [
  { icon: <Github size={24} />, href: "https://github.com/SvaraShah", name: "GitHub" },
  { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/svara-shah-40b39831b/", name: "LinkedIn" },
  { icon: <Instagram size={24} />, href: "https://www.instagram.com/svarashah?igsh=cWZ0dXJpdmlpajc=", name: "Instagram" },
  { icon: <Mail size={24} />, href: "mailto:svarashah@example.com", name: "Email" },
  { icon: <Phone size={24} />, href: "tel:+919820028430", name: "Phone" },
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 md:p-20 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Let's Get In Touch</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just a quick hello!
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-4 glass-card hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <motion.a
              href="mailto:svarashah@example.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary rounded-2xl font-bold text-lg shadow-lg shadow-primary/30"
            >
              Send a Message <Send size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
