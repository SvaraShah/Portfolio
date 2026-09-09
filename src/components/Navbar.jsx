import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../utils/cn";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 py-4",
        scrolled ? "bg-background/90 backdrop-blur-lg border-b border-white/10 py-3 shadow-2xl" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl md:text-2xl font-bold tracking-tighter glow-text"
        >
          Svara Shah
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="https://github.com/SvaraShah"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-2 glass-card hover:border-primary/50 text-white"
          >
            <Github size={16} />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white glass rounded-xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-4 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/90 backdrop-blur-2xl"
          >
            <div className="flex flex-col p-5 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-primary transition-colors py-1.5 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-4 pt-3 border-t border-white/10">
                <a href="https://github.com/SvaraShah" target="_blank" rel="noopener noreferrer" className="p-2.5 glass-card text-white"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/svara-shah-40b39831b/" target="_blank" rel="noopener noreferrer" className="p-2.5 glass-card text-white"><Linkedin size={18} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

