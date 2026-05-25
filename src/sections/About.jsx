import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { stats } from "../data/content";

const points = [
  "Agile development methodology",
  "Scalable enterprise architecture",
  "Cloud-native solutions",
  "Dedicated support & maintenance",
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] grad-text font-semibold">About Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mt-3">
            Driving <span className="grad-text">Innovation</span> Through Technology
          </h2>
          <p className="text-textsec mt-5 leading-relaxed">
            FLEETCOR TECHNOLOGIES PRIVATE LIMITED is a forward-thinking software company established in 2021, focused on delivering scalable digital solutions for startups, enterprises, and growing businesses.
          </p>
          <p className="text-textsec mt-4 leading-relaxed">
            Our team specializes in modern web technologies, AI-driven applications, cloud infrastructure, and enterprise software systems designed for performance, scalability, and long-term growth.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="text-cyanp shrink-0 mt-0.5" size={18} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="relative">
          <div
            className="absolute -inset-10 blur-3xl opacity-40 -z-10"
            style={{ background: "radial-gradient(circle,#2563EB,transparent 70%)" }}
          />
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-glow text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold grad-text">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-textsec mt-2">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
