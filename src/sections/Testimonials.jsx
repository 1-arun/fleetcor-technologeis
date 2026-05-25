import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { testimonials } from "../data/content";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section">
      <SectionHeading
        eyebrow="Voices"
        title={<>What <span className="grad-text">Clients Say</span></>}
      />
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`card-glow ${i === idx ? "ring-1 ring-cyanp/50" : ""}`}
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, k) => (
                <Star key={k} size={14} className="fill-cyanp text-cyanp" />
              ))}
            </div>
            <p className="text-sm text-textsec leading-relaxed">“{t.review}”</p>
            <div className="mt-5 flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-bold"
                style={{
                  background: "linear-gradient(135deg,#00C2FF,#2563EB)",
                  boxShadow: "0 0 18px rgba(0,194,255,0.45)",
                }}
              >
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-textsec">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-8 bg-cyanp" : "w-3 bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
