import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="section">
      <SectionHeading
        eyebrow="Our Services"
        title={<>Solutions <span className="grad-text">We Deliver</span></>}
        subtitle="From concept to deployment, we provide end-to-end digital solutions for modern businesses."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-glow group relative overflow-hidden"
          >
            <div
              className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity"
              style={{ background: "radial-gradient(circle,#00C2FF,transparent 70%)" }}
            />
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{
                background: "linear-gradient(135deg,#0EA5E9,#2563EB)",
                boxShadow: "0 0 18px rgba(0,194,255,0.45)",
              }}
            >
              <s.icon size={22} className="text-white" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-textsec text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
