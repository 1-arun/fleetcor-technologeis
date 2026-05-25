import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA({ onStart }) {
  return (
    <section className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative glass rounded-3xl p-10 md:p-16 text-center overflow-hidden"
        style={{ boxShadow: "0 0 60px rgba(0,194,255,0.25)" }}
      >
        <div
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-50 animate-blob"
          style={{ background: "radial-gradient(circle,#00C2FF,transparent 60%)" }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-40 animate-blob"
          style={{ background: "radial-gradient(circle,#2563EB,transparent 60%)" }}
        />
        <h2 className="relative font-display text-3xl md:text-5xl font-bold">
          Ready To Build Your Next <span className="grad-text">Digital Product?</span>
        </h2>
        <p className="relative text-textsec mt-4 max-w-xl mx-auto">
          Let’s transform your ideas into scalable software solutions.
        </p>
        <div className="relative mt-8 flex justify-center">
          <button onClick={onStart} className="btn-primary">
            Get Started <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
