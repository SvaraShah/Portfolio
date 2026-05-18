import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "Inventory Management System",
    description: "A professional, production-ready MERN stack application with multi-role authentication, numeric stock management, and high-end glassmorphism UI.",
    image: "/inventory_project.png",
    liveLink: "https://inventory-management-system-rust-five.vercel.app/",
    githubLink: "https://github.com/SvaraShah",
    badge: "Featured Project",
    tags: ["MERN Stack", "NeDB", "Tailwind CSS"]
  },
  {
    title: "Student Dashboard System",
    description: "Designed and developed a responsive student dashboard using HTML and CSS with structured layout and user-friendly interface.",
    image: "/project1.png",
    liveLink: "https://student-dashboard-alpha-ochre.vercel.app/",
    githubLink: "https://github.com/SvaraShah",
    badge: "Interactive UI",
    tags: ["HTML", "CSS", "Responsive Design"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Hands-on Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-lg"
            >
              Hand-picked selection of my recent work.
            </motion.p>
          </div>
          <a href="https://github.com/SvaraShah" target="_blank" className="text-primary hover:underline flex items-center gap-2 font-medium">
            View all on GitHub <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative glass-card overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                {project.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full flex items-center gap-2 text-xs font-bold text-white">
                    <Star size={12} className="fill-primary text-primary" /> {project.badge}
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 flex-grow">
                <div className="flex gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-white/40 border border-white/10 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-white/60 mb-8 line-clamp-3">{project.description}</p>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-white text-black font-bold rounded-lg flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    View Live <ExternalLink size={18} />
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 glass-card hover:bg-white/10"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
