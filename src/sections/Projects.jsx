import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Showcase"
        title={<>Featured <span className="grad-text">Projects</span></>}
        subtitle="A glimpse into the products and platforms we’ve engineered for our clients."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-glow group overflow-hidden p-0"
          >
            <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
              <div className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(56,189,248,.25) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.25) 1px,transparent 1px)",
                  backgroundSize: "24px 24px",
                }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-bold text-2xl grad-text">{p.title.split(" ")[0]}</span>
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "radial-gradient(circle at 30% 30%,rgba(0,194,255,.35),transparent 60%)" }}
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-blue-500/30 text-textsec">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-display font-semibold text-lg">{p.title}</h3>
              <p className="text-textsec text-sm mt-2">{p.desc}</p>
              <div className="flex gap-3 mt-5">
                <a className="btn-primary !py-2 !px-4 text-xs" href="#" onClick={(e) => e.preventDefault()}>
                  <ExternalLink size={14} /> Demo
                </a>
                <a className="btn-ghost !py-2 !px-4 text-xs" href="#" onClick={(e) => e.preventDefault()}>
                  <Github size={14} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
