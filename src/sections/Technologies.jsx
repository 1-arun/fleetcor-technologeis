import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { techs } from "../data/content";

export default function Technologies() {
  return (
    <section id="tech" className="section">
      <SectionHeading
        eyebrow="Tech Stack"
        title={<>Technologies <span className="grad-text">We Use</span></>}
        subtitle="A curated stack of proven and emerging technologies that power our products."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {techs.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -6, scale: 1.04 }}
            className="card-glow text-center"
          >
            <div
              className="mx-auto mb-3 w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold"
              style={{
                background: "linear-gradient(135deg,#0EA5E9,#2563EB)",
                boxShadow: "0 0 16px rgba(0,194,255,0.4)",
              }}
            >
              {t.charAt(0)}
            </div>
            <div className="text-sm font-medium">{t}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
