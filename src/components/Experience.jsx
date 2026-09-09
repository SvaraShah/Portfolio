import { motion } from "framer-motion";
import { Briefcase, Building2, CheckCircle2, ArrowRight, Layers, Workflow } from "lucide-react";

const suzlonBullets = [
  "Gained hands-on industry experience working with SAP Materials Management (MM).",
  "Worked across the Procure-to-Pay (P2P) cycle to understand and execute procurement-related business processes.",
  "Developed practical understanding of procurement and material management workflows within an enterprise SAP environment.",
  "Worked with business processes connecting procurement activities, purchasing operations and material management.",
  "Gained exposure to how enterprise procurement processes are represented and executed through SAP.",
  "Developed an understanding of end-to-end P2P process flow and the relationship between different procurement activities.",
  "Gained practical experience in an enterprise environment, connecting business requirements with SAP-based processes."
];

const p2pSteps = [
  { id: 1, title: "Requirement", subtitle: "Need Identification" },
  { id: 2, title: "Purchase Requisition", subtitle: "PR Creation & Review" },
  { id: 3, title: "Vendor Selection", subtitle: "Sourcing & Evaluation" },
  { id: 4, title: "Purchase Order", subtitle: "PO Issuance" },
  { id: 5, title: "Goods Receipt", subtitle: "GR Inspection & Entry" },
  { id: 6, title: "Invoice Verification", subtitle: "3-Way Matching" },
  { id: 7, title: "Payment", subtitle: "Financial Settlement" }
];

const highlightTags = [
  "SAP MM",
  "Procure-to-Pay",
  "Enterprise Procurement",
  "Material Management",
  "Business Process Understanding"
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.2em] text-xs uppercase"
          >
            REAL INDUSTRY EXPERIENCE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mt-3"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-base md:text-lg mt-2 max-w-2xl"
          >
            Practical enterprise process exposure and hands-on operational experience.
          </motion.p>
        </div>

        {/* Suzlon Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden mb-12"
        >
          {/* Background Decorative Icon */}
          <div className="absolute top-4 right-4 text-white/5 pointer-events-none">
            <Building2 size={200} />
          </div>

          <div className="relative z-10">
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-3.5 glass rounded-2xl bg-primary/10 border border-primary/30 text-primary">
                  <Briefcase size={28} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">SAP MM Intern</h3>
                  <div className="flex items-center gap-2 text-secondary font-medium mt-1 text-base md:text-lg">
                    <Building2 size={18} />
                    <span>Suzlon Energy Limited</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <span className="px-4 py-1.5 glass rounded-full text-xs font-bold tracking-wider text-primary border border-primary/30">
                  2026 – PRESENT
                </span>
                <span className="px-4 py-1.5 glass rounded-full text-xs font-bold tracking-wider text-white/80 border border-white/10">
                  ENTERPRISE OPERATIONS
                </span>
              </div>
            </div>

            {/* Framing quote */}
            <div className="glass p-5 rounded-xl border-l-4 border-primary mb-8 bg-white/[0.02]">
              <p className="text-white/90 text-sm md:text-base leading-relaxed italic">
                "Hands-on industry experience working with the SAP Materials Management (MM) module and the Procure-to-Pay (P2P) cycle, gaining practical understanding of enterprise procurement, purchasing, material management and business process workflows."
              </p>
            </div>

            {/* Bullets grid */}
            <div className="mb-10">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4 flex items-center gap-2">
                <Layers size={16} className="text-primary" /> Key Responsibilities &amp; Exposure
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {suzlonBullets.map((bullet, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 glass p-3.5 rounded-xl border border-white/5 bg-black/30"
                  >
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-white/80 leading-relaxed">{bullet}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Highlights tags */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest block mb-3">
                INDUSTRY EXPERIENCE HIGHLIGHTS
              </span>
              <div className="flex flex-wrap gap-2.5">
                {highlightTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 glass rounded-lg text-xs font-semibold text-white/90 border border-primary/30 bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* P2P Process Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-6 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="px-3 py-1 glass rounded-full text-[10px] font-extrabold tracking-widest text-secondary uppercase border border-secondary/30">
                INDUSTRY PROCESS EXPOSURE
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mt-2 flex items-center gap-2">
                <Workflow className="text-secondary" size={24} /> Procure-to-Pay (P2P) Cycle Architecture
              </h3>
            </div>
            <p className="text-xs text-white/60 max-w-md">
              End-to-end practical understanding of enterprise material management and purchasing workflows.
            </p>
          </div>

          {/* Stepper Flow Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {p2pSteps.map((step, idx) => (
              <div key={step.id} className="relative flex flex-col h-full">
                <div className="glass p-4 rounded-xl border border-white/10 flex flex-col justify-between h-full bg-white/[0.03] hover:border-secondary/50 hover:bg-white/[0.08] transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-6 h-6 rounded-full bg-secondary/20 border border-secondary/50 text-secondary text-xs font-bold flex items-center justify-center">
                      0{step.id}
                    </span>
                    {idx < p2pSteps.length - 1 && (
                      <ArrowRight size={14} className="text-white/30 hidden lg:block group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-bold text-white leading-tight mb-1 group-hover:text-secondary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-[10px] text-white/50">{step.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
