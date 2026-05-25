import { motion } from "framer-motion";
import { Search, ClipboardList, Palette, Code2, Rocket } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const steps = [
  { icon: Search, title: "Discovery", desc: "Understand goals & users." },
  { icon: ClipboardList, title: "Planning", desc: "Architecture & roadmap." },
  { icon: Palette, title: "Design", desc: "UX, UI & prototypes." },
  { icon: Code2, title: "Development", desc: "Agile sprints & QA." },
  { icon: Rocket, title: "Deployment", desc: "Launch, monitor, scale." },
];

export default function Process() {
  return (
    <section className="section">
      <SectionHeading
        eyebrow="Workflow"
        title={<>Our <span className="grad-text">Development Process</span></>}
        subtitle="A proven, transparent process that turns ideas into production-grade software."
      />
      <div className="relative">
        <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px]"
          style={{ background: "linear-gradient(90deg,transparent,#38BDF8,#2563EB,transparent)" }} />
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center"
            >
              <div
                className="relative w-20 h-20 mx-auto rounded-2xl glass flex items-center justify-center mb-4"
                style={{ boxShadow: "0 0 25px rgba(0,194,255,0.25)" }}
              >
                <s.icon size={26} className="text-cyanp" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-bg border border-cyanp text-[10px] font-bold flex items-center justify-center grad-text">
                  0{i + 1}
                </span>
              </div>
              <h4 className="font-display font-semibold">{s.title}</h4>
              <p className="text-textsec text-xs mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
