import { motion } from "framer-motion";
import { ExternalLink, Github, Star, LayoutDashboard, Check } from "lucide-react";

const featuredProject = {
  title: "MatchMaker",
  subtitle: "Matrimonial Matchmaking Dashboard",
  category: "FEATURED • FRONTEND PROJECT",
  description: "A modern, responsive matchmaking dashboard designed for professional matchmakers to manage client profiles, explore potential matches, track follow-ups, and visualize matchmaking activity through an intuitive administrative interface.",
  image: "/inventory_project.png", // Will render with custom dashboard visual frame or image
  liveLink: "https://match-maker-six.vercel.app/admin",
  githubLink: "https://github.com/SvaraShah/MatchMaker",
  tags: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  highlights: [
    "Professional admin dashboard development",
    "Responsive web design & UI architecture",
    "Client / profile management interfaces",
    "Match discovery and comparison UI",
    "Compatibility visualization & filtering",
    "Follow-up & task management interfaces",
    "Analytics & dashboard visualization",
    "Reusable component-based UI design"
  ]
};

const existingProjects = [
  {
    title: "Inventory Management System",
    subtitle: "Enterprise Stock Management UI",
    description: "A professional web application with multi-role authentication, numeric stock management, and high-end glassmorphism UI.",
    image: "/inventory_project.png",
    liveLink: "https://inventory-management-system-rust-five.vercel.app/",
    githubLink: "https://github.com/SvaraShah",
    badge: "Web Application",
    tags: ["React", "Tailwind CSS", "JavaScript"]
  },
  {
    title: "Student Dashboard System",
    subtitle: "Academic Management Interface",
    description: "Designed and developed a responsive student dashboard using HTML and CSS with structured layout and user-friendly interface.",
    image: "/project1.png",
    liveLink: "https://student-dashboard-alpha-ochre.vercel.app/",
    githubLink: "https://github.com/SvaraShah",
    badge: "Responsive UI",
    tags: ["HTML5", "CSS3", "Responsive Design"]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.2em] text-xs uppercase"
            >
              PRACTICAL SOFTWARE PROJECTS
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mt-2"
            >
              Featured Engineering Projects
            </motion.h2>
          </div>
          <a
            href="https://github.com/SvaraShah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline flex items-center gap-2 font-semibold text-sm"
          >
            View All Repositories on GitHub <ExternalLink size={16} />
          </a>
        </div>

        {/* MatchMaker Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 md:p-10 border-2 border-primary/40 shadow-[0_0_40px_rgba(139,92,246,0.15)] relative overflow-hidden mb-12"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="px-4 py-1.5 glass rounded-full text-xs font-extrabold tracking-widest text-primary border border-primary/40 bg-primary/10 flex items-center gap-2">
              <Star size={14} className="fill-primary" /> {featuredProject.category}
            </span>
            <div className="flex items-center gap-2">
              <LayoutDashboard size={18} className="text-secondary" />
              <span className="text-xs font-medium text-white/60">Complex Admin Interface</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{featuredProject.title}</h3>
                <h4 className="text-secondary font-semibold text-base mb-4">{featuredProject.subtitle}</h4>
                <p className="text-white/80 text-base leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                {/* Highlights Grid */}
                <div className="mb-6">
                  <h5 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">Key Highlights</h5>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {featuredProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white/90">
                        <Check size={14} className="text-primary shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.tags.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-md glass border border-white/10 text-xs font-semibold text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={featuredProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white font-bold rounded-xl flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                >
                  LIVE DEMO <ExternalLink size={18} />
                </a>
                <a
                  href={featuredProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 glass-card font-bold text-white rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all"
                >
                  GITHUB <Github size={18} />
                </a>
              </div>
            </div>

            {/* Visual Preview Container */}
            <div className="lg:col-span-5 relative">
              <div className="glass p-2 rounded-2xl border border-white/10 overflow-hidden shadow-2xl group">
                <div className="relative aspect-video sm:aspect-square lg:aspect-video rounded-xl overflow-hidden bg-black/40">
                  <img
                    src="/inventory_project.png"
                    alt="MatchMaker Matrimonial Matchmaking Dashboard"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-semibold text-white/90 glass px-3 py-1 rounded-full border border-white/20">
                      Matchmaker Admin Demo Live
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Existing Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {existingProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden flex flex-col justify-between border border-white/10 group hover:border-white/20"
            >
              <div>
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
                  
                  {project.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 glass rounded-full flex items-center gap-1.5 text-xs font-bold text-white border border-white/10">
                      {project.badge}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-white/50 border border-white/10 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <h4 className="text-xs font-medium text-secondary mb-3">{project.subtitle}</h4>
                  <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-6">{project.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center gap-3">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white text-black text-xs font-bold rounded-lg flex items-center gap-1.5 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  LIVE DEMO <ExternalLink size={14} />
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 glass-card text-white hover:bg-white/10"
                >
                  <Github size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

