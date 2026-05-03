import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

const certifications = [
  {
    name: "AWS Cloud Club – DevOps meets AI",
    issuer: "Parul University",
    link: "https://drive.google.com/file/d/1-XbxcNenQQz4FWmoRHvJoneWr2yehZKt/view?usp=sharing",
    date: "2026",
    icon: <Award className="text-primary" />
  },
  {
    name: "Cisco - Introduction to Data Science",
    issuer: "Cisco",
    link: "https://drive.google.com/file/d/1wNXqMTI0_D6SEyoVNQuHg-TvKmibuZzh/view?usp=sharing",
    date: "2025",
    icon: <ShieldCheck className="text-secondary" />
  },
  {
    name: "DEVTrails University Hackathon",
    issuer: "DEVTrails",
    link: "https://drive.google.com/file/d/1K1NeglJBJrWO-LITXubyDwoENhQ6Mjm-/view?usp=sharing",
    date: "2026",
    icon: <Award className="text-primary" />
  },
  {
    name: "Software Engineering Intern",
    issuer: "Hacker Rank",
    link: "https://drive.google.com/file/d/1NAzSoS31gqBb3znWL7qrlUME3zfxFD0T/view?usp=sharing",
    date: "2025",
    icon: <ShieldCheck className="text-secondary" />
  },
  {
    name: "AI Impact Summit 2026",
    issuer: "HCL Guvi",
    link: "https://drive.google.com/file/d/1Rcl7J_NM-KnxgvsuSnpe2esWlLlIh5Xe/view?usp=sharing",
    date: "2026",
    icon: <Award className="text-primary" />
  },
  {
    name: "Python Certificate",
    issuer: "IBM",
    link: "https://drive.google.com/file/d/119WCk2r8sMeA9IP-lkpFJ9qqskiNw5Os/view?usp=sharing",
    date: "2025",
    icon: <ShieldCheck className="text-secondary" />
  },
  {
    name: "Statistics 101",
    issuer: "IBM",
    link: "https://drive.google.com/file/d/1NfKElDoQCF_wCkUXKYKJjV5-OqTnS4Pk/view?usp=sharing",
    date: "2024",
    icon: <Award className="text-primary" />
  },
  {
    name: "Techfest CoP",
    issuer: "IIT Bombay",
    link: "https://drive.google.com/file/d/1WUuBdIZrXdy2lLkqlc9U8zWG2FTqb-CP/view?usp=sharing",
    date: "2024",
    icon: <ShieldCheck className="text-secondary" />
  },
  {
    name: "Data Science Hackathon - CoP",
    issuer: "IIT Kharagpur",
    link: "https://drive.google.com/file/d/1WXRo3dhBWPqFrvmqMTuCFc79xfm9aArz/view?usp=sharing",
    date: "2025",
    icon: <Award className="text-primary" />
  },
  {
    name: "MS SQL - Certificate",
    issuer: "Intellipaat",
    link: "https://drive.google.com/file/d/1EEdWHzXRfxlyxTflXPEIKmVp1MKUv-RH/view?usp=sharing",
    date: "2025",
    icon: <ShieldCheck className="text-secondary" />
  },
  {
    name: "Python Certificate",
    issuer: "Intellipaat",
    link: "https://drive.google.com/file/d/1jQ0Zptzqyn90WZXDL5goPna_fQapYtJo/view?usp=sharing",
    date: "2025",
    icon: <Award className="text-primary" />
  },
  {
    name: "SQL Certificate",
    issuer: "Intellipaat",
    link: "https://drive.google.com/file/d/1TdvUq7lWpGpd54YeJr_215ad_6Ow3nAe/view?usp=sharing",
    date: "2025",
    icon: <ShieldCheck className="text-secondary" />
  },
  {
    name: "Lakshagriha 4.0 Certificate",
    issuer: "Parul University",
    link: "https://drive.google.com/file/d/1vHf-Qc_ylICJ5huzDut9op4kqVb0xlaQ/view?usp=sharing",
    date: "2024",
    icon: <Award className="text-primary" />
  },
  {
    name: "HTML CSS Certificate",
    issuer: "Pearsons",
    link: "https://drive.google.com/file/d/1jtmgvowuQkSs7vgyeawOlVm_UWG4KmFL/view?usp=sharing",
    date: "2023",
    icon: <ShieldCheck className="text-secondary" />
  },
  {
    name: "Javascript Certificate",
    issuer: "Pearsons",
    link: "https://drive.google.com/file/d/1_GIlinZh3T2Odj5KREhMcR7I8Mn3Am4p/view?usp=sharing",
    date: "2024",
    icon: <Award className="text-primary" />
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications & Achievements</h2>
          <p className="text-white/60 text-lg">Recognition of my skills and dedication to continuous learning.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 glass w-fit rounded-xl mb-6">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-secondary font-medium text-sm mb-4">{cert.issuer} • {cert.date}</p>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 py-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors font-medium group"
              >
                View Certificate <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
