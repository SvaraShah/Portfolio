import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

const certifications = [
  {
    name: "Software Engineering Intern",
    issuer: "HackerRank",
    link: "https://drive.google.com/file/d/1NAzSoS31gqBb3znWL7qrlUME3zfxFD0T/view?usp=sharing",
    date: "2025",
    icon: <ShieldCheck className="text-secondary" size={24} />
  },
  {
    name: "Python Certificate",
    issuer: "IBM",
    link: "https://drive.google.com/file/d/119WCk2r8sMeA9IP-lkpFJ9qqskiNw5Os/view?usp=sharing",
    date: "2025",
    icon: <ShieldCheck className="text-secondary" size={24} />
  },
  {
    name: "Techfest CoP",
    issuer: "IIT Bombay",
    link: "https://drive.google.com/file/d/1WUuBdIZrXdy2lLkqlc9U8zWG2FTqb-CP/view?usp=sharing",
    date: "2024",
    icon: <ShieldCheck className="text-secondary" size={24} />
  },
  {
    name: "SQL Certificate",
    issuer: "Intellipaat",
    link: "https://drive.google.com/file/d/1TdvUq7lWpGpd54YeJr_215ad_6Ow3nAe/view?usp=sharing",
    date: "2025",
    icon: <ShieldCheck className="text-secondary" size={24} />
  },
  {
    name: "HTML & CSS Certificate",
    issuer: "Pearson",
    link: "https://drive.google.com/file/d/1jtmgvowuQkSs7vgyeawOlVm_UWG4KmFL/view?usp=sharing",
    date: "2023",
    icon: <ShieldCheck className="text-secondary" size={24} />
  },
  {
    name: "JavaScript Certificate",
    issuer: "Pearson",
    link: "https://drive.google.com/file/d/1_GIlinZh3T2Odj5KREhMcR7I8Mn3Am4p/view?usp=sharing",
    date: "2024",
    icon: <Award className="text-primary" size={24} />
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-2 inline-block">
            VERIFIED CREDENTIALS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">Certifications &amp; Achievements</h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto">
            Formal recognition of technical proficiency and continuous engineering development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 flex flex-col justify-between border border-white/10 hover:border-primary/40 transition-all group"
            >
              <div>
                <div className="p-3 glass w-fit rounded-xl mb-6 bg-white/5 group-hover:bg-primary/10 transition-colors">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{cert.name}</h3>
                <p className="text-secondary font-semibold text-xs mb-4">{cert.issuer} • {cert.date}</p>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 py-3 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-xs font-bold text-white group-hover:border-primary/40"
              >
                VIEW CERTIFICATE <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

